/**
 * 智光商工 資處一仁 26號 高于翔 - 數位科技概論提分戰情室 App 控制核心
 */

// --- 音效引擎 (Web Audio API - 免外部資源，隨點隨響) ---
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // 雙音悅耳和弦 (C6 + G6)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1046.5, now); // C6
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1567.98, now + 0.08); // G6

    gainNode.gain.setValueAtTime(0.2, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.08);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.25);

    gainNode.gain.setValueAtTime(0.25, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);
      gainNode.gain.setValueAtTime(0.2, now + i * 0.12);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.3);
      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.35);
    });
  }
}

const sounds = new SoundEffects();

// --- 輕量無依賴彩花五彩紙屑特效 ---
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = [];
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#38bdf8', '#fbbf24'];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.3 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vr: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // 重力
      p.vx *= 0.98;
      p.rotation += p.vr;
      p.opacity -= 0.008;

      if (p.opacity > 0 && p.y < canvas.height) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.style.display = 'none';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  cancelAnimationFrame(animationFrame);
  update();
}

// --- 狀態管理 ---
const State = {
  activeTab: 'dashboard',
  userExamAnswers: {},      // { qId: 'A' }
  examSubmitted: false,
  examMode: 'all',          // 'all', 'wrong-only', 'random-10'
  activeExamList: [...originalExamQuestions],
  tuceAnswers: {},          // { qId: 'B' }
  twinAnswers: {},          // { mistakeId: 'C' }
  historyBestScore: 76,
  examSeconds: 0,
  timerInterval: null
};

// 本地紀錄儲存
function loadProgress() {
  const saved = localStorage.getItem('gao_study_progress');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.historyBestScore) State.historyBestScore = data.historyBestScore;
      if (data.twinAnswers) State.twinAnswers = data.twinAnswers;
    } catch (e) {
      console.error(e);
    }
  }
}

function saveProgress() {
  const data = {
    historyBestScore: State.historyBestScore,
    twinAnswers: State.twinAnswers,
    lastUpdate: new Date().toISOString()
  };
  localStorage.setItem('gao_study_progress', JSON.stringify(data));
}

// 切換頁籤
function switchTab(tabId) {
  State.activeTab = tabId;
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.add('hidden');
  });

  const target = document.getElementById(`tab-${tabId}`);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (tabId === 'exam') {
    renderExam();
  } else if (tabId === 'mistakes') {
    renderMistakes();
  } else if (tabId === 'tuce') {
    renderTuce();
  } else if (tabId === 'knowledge') {
    renderKnowledge();
  } else if (tabId === 'dashboard') {
    renderDashboard();
  }
}

// --- 儀表板渲染 ---
function renderDashboard() {
  document.getElementById('bestScoreDisplay').innerText = State.historyBestScore;
  const gap = 100 - State.historyBestScore;
  document.getElementById('scoreGapDisplay').innerText = gap > 0 ? `距離滿分還差 ${gap} 分` : "🏆 恭喜達到滿分目標！";
  
  // 答題完成度
  const twinSolvedCount = Object.keys(State.twinAnswers).length;
  document.getElementById('twinProgress').innerText = `${twinSolvedCount} / 6 題完成`;
}

// --- 錯題死磕精攻頁面渲染 ---
function renderMistakes() {
  const container = document.getElementById('mistakesListContainer');
  if (!container) return;

  container.innerHTML = mistakeDeepDives.map(m => {
    const userTwinChoice = State.twinAnswers[m.id];
    const isTwinAnswered = userTwinChoice !== undefined;
    const isTwinCorrect = userTwinChoice === m.twinQuestion.correctAnswer;

    return `
      <div class="glass-panel p-6 border-l-4 border-red-500 relative transition-all duration-300 hover:border-blue-400">
        <!-- 頂部標題與標籤 -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30">
              🚨 考卷實戰錯題
            </span>
            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">
              考點：${m.coreConcept}
            </span>
          </div>
          <div class="text-xs text-slate-400">
            原題號：第 ${m.id} 題（4分）
          </div>
        </div>

        <!-- 考卷情境還原對比 -->
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700/60 mb-4">
          <h4 class="font-bold text-slate-200 text-base mb-2">${m.originalQ}</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-red-950/40 border border-red-800/40 rounded-lg p-3">
              <span class="text-red-400 font-bold block mb-1">❌ 于翔當時的作答：</span>
              <span class="text-slate-300">${m.studentChoice}</span>
            </div>
            <div class="bg-emerald-950/40 border border-emerald-800/40 rounded-lg p-3">
              <span class="text-emerald-400 font-bold block mb-1">✅ 試卷標準答案：</span>
              <span class="text-slate-200 font-semibold">${m.realAnswer}</span>
            </div>
          </div>
          
          <!-- 老師紅筆備註還原 -->
          <div class="mt-3 bg-red-500/10 border-l-4 border-red-500 p-3 rounded-r-lg flex items-start gap-2">
            <span class="text-lg">✍️</span>
            <div>
              <span class="text-red-400 font-bold text-sm">考卷上老師的紅筆批註：</span>
              <span class="text-red-200 font-bold text-sm ml-1 tracking-wide">「${m.teacherNote}」</span>
            </div>
          </div>
        </div>

        <!-- 盲點剖析與秒殺解題公式 -->
        <div class="space-y-3 mb-5">
          <div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <div class="text-amber-400 font-bold text-sm flex items-center gap-1.5 mb-1.5">
              <span>⚡</span> 為什麼當時會選錯？（思維盲點診斷）
            </div>
            <p class="text-slate-300 text-sm leading-relaxed">${m.mindTrap}</p>
          </div>

          <div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div class="text-blue-400 font-bold text-sm flex items-center gap-1.5 mb-1.5">
              <span>🎯</span> 考前必殺記憶公式（以後看到立刻選對）
            </div>
            <pre class="text-slate-200 text-sm whitespace-pre-wrap font-sans leading-relaxed">${m.goldenFormula}</pre>
          </div>
        </div>

        <!-- 雙胞胎變形考題（現場即測即評） -->
        <div class="bg-gradient-to-br from-indigo-950/50 to-slate-900/90 rounded-xl p-5 border border-indigo-500/30 shadow-inner">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded border border-indigo-500/40">
              🔥 觀念延伸・雙胞胎變形題
            </span>
            ${isTwinAnswered ? `
              <span class="text-xs font-bold ${isTwinCorrect ? 'text-emerald-400' : 'text-red-400'}">
                ${isTwinCorrect ? '🎉 恭喜攻克此弱點！' : '⚠️ 還需再加把勁！'}
              </span>
            ` : `
              <span class="text-xs text-slate-400 animate-pulse">
                👉 點選下方選項立即檢驗理解度
              </span>
            `}
          </div>

          <p class="text-sm font-semibold text-slate-100 mb-4">${m.twinQuestion.question}</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
            ${m.twinQuestion.options.map(opt => {
              let optClass = "quiz-option rounded-lg p-3 text-sm flex items-center gap-2.5";
              if (isTwinAnswered) {
                if (opt.key === m.twinQuestion.correctAnswer) {
                  optClass += " is-correct";
                } else if (opt.key === userTwinChoice) {
                  optClass += " is-wrong";
                } else {
                  optClass += " opacity-50";
                }
              }

              return `
                <div class="${optClass}" onclick="handleTwinAnswer(${m.id}, '${opt.key}')">
                  <span class="w-6 h-6 rounded-full bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center border border-slate-700">
                    ${opt.key}
                  </span>
                  <span class="flex-1">${opt.text}</span>
                </div>
              `;
            }).join('')}
          </div>

          ${isTwinAnswered ? `
            <div class="p-3 bg-slate-900/90 rounded-lg border border-slate-700 text-xs text-slate-300 animate-fadeIn">
              <span class="font-bold text-indigo-400">變形題詳解：</span> ${m.twinQuestion.explanation}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function handleTwinAnswer(mistakeId, chosenKey) {
  const m = mistakeDeepDives.find(item => item.id === mistakeId);
  if (!m) return;
  State.twinAnswers[mistakeId] = chosenKey;
  saveProgress();

  if (chosenKey === m.twinQuestion.correctAnswer) {
    sounds.playCorrect();
    // 檢查是否 6 題變形題全對
    const solvedCount = Object.keys(State.twinAnswers).filter(id => {
      const target = mistakeDeepDives.find(x => x.id === parseInt(id));
      return target && State.twinAnswers[id] === target.twinQuestion.correctAnswer;
    }).length;

    if (solvedCount === 6) {
      triggerConfetti();
      sounds.playFanfare();
    }
  } else {
    sounds.playWrong();
  }

  renderMistakes();
  renderDashboard();
}

// --- 實戰全真模擬測驗 (25題) ---
function setExamFilter(mode) {
  State.examMode = mode;
  State.examSubmitted = false;
  State.userExamAnswers = {};

  if (mode === 'all') {
    State.activeExamList = [...originalExamQuestions];
  } else if (mode === 'wrong-only') {
    State.activeExamList = originalExamQuestions.filter(q => !q.isCorrect);
  } else if (mode === 'random-10') {
    const shuffled = [...originalExamQuestions].sort(() => 0.5 - Math.random());
    State.activeExamList = shuffled.slice(0, 10);
  }

  document.querySelectorAll('.exam-filter-btn').forEach(btn => {
    btn.classList.toggle('bg-blue-600', btn.dataset.mode === mode);
    btn.classList.toggle('bg-slate-800', btn.dataset.mode !== mode);
  });

  renderExam();
}

function renderExam() {
  const container = document.getElementById('examQuestionsContainer');
  if (!container) return;

  const totalQuestions = State.activeExamList.length;
  const answeredCount = Object.keys(State.userExamAnswers).length;

  document.getElementById('examProgressBadge').innerText = `已作答：${answeredCount} / ${totalQuestions} 題`;

  container.innerHTML = State.activeExamList.map((q, idx) => {
    const userChoice = State.userExamAnswers[q.id];
    const isAnswered = userChoice !== undefined;
    const isSubmitted = State.examSubmitted;
    const isCorrect = isAnswered && userChoice === q.correctAnswer;

    return `
      <div id="q-card-${q.id}" class="glass-panel p-5 md:p-6 transition-all duration-200 border ${
        isSubmitted 
          ? (isCorrect ? 'border-emerald-500/60 bg-emerald-950/20' : 'border-red-500/60 bg-red-950/20')
          : 'border-slate-800'
      }">
        <!-- 題目標頭資訊 -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 font-bold text-sm flex items-center justify-center border border-blue-500/30">
              ${idx + 1}
            </span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              ${q.category}
            </span>
            ${!q.isCorrect ? `
              <span class="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-500/30">
                原卷曾錯
              </span>
            ` : ''}
          </div>
          <span class="text-xs text-slate-400">4 分</span>
        </div>

        <!-- 題目內文 -->
        <p class="text-base text-slate-100 font-medium mb-4 leading-relaxed">${q.question}</p>

        <!-- 選項列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          ${q.options.map(opt => {
            let optClass = "quiz-option rounded-xl p-3.5 text-sm flex items-center gap-3";
            if (userChoice === opt.key) {
              optClass += " selected";
            }
            if (isSubmitted) {
              if (opt.key === q.correctAnswer) {
                optClass += " is-correct font-semibold";
              } else if (opt.key === userChoice) {
                optClass += " is-wrong";
              }
            }

            return `
              <div class="${optClass}" onclick="handleExamSelect(${q.id}, '${opt.key}')">
                <span class="w-7 h-7 rounded-lg bg-slate-800/90 text-slate-300 font-bold text-xs flex items-center justify-center border border-slate-700">
                  ${opt.key}
                </span>
                <span class="flex-1">${opt.text}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- 批改後詳解區塊 -->
        ${isSubmitted ? `
          <div class="mt-4 pt-4 border-t border-slate-700/80 text-sm">
            <div class="flex items-center gap-2 font-bold mb-1.5 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}">
              <span>${isCorrect ? '✅ 答對了！' : '❌ 答錯了！'}</span>
              <span class="text-slate-300 font-normal">正解：<b class="text-emerald-400">(${q.correctAnswer})</b></span>
            </div>
            <div class="text-slate-300 text-xs sm:text-sm bg-slate-900/80 p-3.5 rounded-xl border border-slate-700 leading-relaxed whitespace-pre-line">
              ${q.explanation}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  renderExamQuickJump();
}

function handleExamSelect(qId, key) {
  if (State.examSubmitted) return; // 已交卷不給改
  State.userExamAnswers[qId] = key;
  renderExam();
}

function renderExamQuickJump() {
  const jumpBar = document.getElementById('examQuickJumpBar');
  if (!jumpBar) return;

  jumpBar.innerHTML = State.activeExamList.map((q, idx) => {
    const isAnswered = State.userExamAnswers[q.id] !== undefined;
    let bg = isAnswered ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700';

    if (State.examSubmitted) {
      const isCorrect = State.userExamAnswers[q.id] === q.correctAnswer;
      bg = isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white';
    }

    return `
      <button onclick="scrollToQuestion(${q.id})" class="w-8 h-8 rounded-lg text-xs font-bold transition-all ${bg} flex items-center justify-center">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function scrollToQuestion(qId) {
  const el = document.getElementById(`q-card-${qId}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('ring-2', 'ring-blue-400');
    setTimeout(() => el.classList.remove('ring-2', 'ring-blue-400'), 1500);
  }
}

// 交卷計算分數
function submitExam() {
  if (State.examSubmitted) return;

  const total = State.activeExamList.length;
  const answered = Object.keys(State.userExamAnswers).length;

  if (answered < total) {
    if (!confirm(`還有 ${total - answered} 題尚未作答，確定要現在交卷結算嗎？`)) {
      return;
    }
  }

  State.examSubmitted = true;
  let correctCount = 0;

  State.activeExamList.forEach(q => {
    if (State.userExamAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const score = Math.round((correctCount / total) * 100);

  // 更新最高分紀錄
  if (score > State.historyBestScore) {
    State.historyBestScore = score;
    saveProgress();
  }

  renderExam();
  renderDashboard();

  // 彈出成績結算視窗
  showExamResultModal(score, correctCount, total);

  if (score === 100) {
    triggerConfetti();
    sounds.playFanfare();
  } else if (score >= 80) {
    sounds.playCorrect();
  } else {
    sounds.playWrong();
  }
}

function showExamResultModal(score, correct, total) {
  const modal = document.getElementById('examResultModal');
  if (!modal) return;

  document.getElementById('modalScoreNumber').innerText = score;
  document.getElementById('modalCorrectSummary').innerText = `答對 ${correct} / ${total} 題（每題 ${Math.round(100/total)} 分）`;
  
  const title = document.getElementById('modalTitle');
  const cheer = document.getElementById('modalCheerText');

  if (score === 100) {
    title.innerText = "🎉 太狂了！100 分滿分通關！";
    cheer.innerText = "于翔！所有的盲點你已經徹底掃蕩！這次段考拿高分十拿九穩了！";
  } else if (score >= 88) {
    title.innerText = "🌟 超級大幅進步！高分達成！";
    cheer.innerText = `從原先的 76 分一路飆升到 ${score} 分！再把剩下的錯題瞄一眼就滿分了！`;
  } else if (score >= 76) {
    title.innerText = "💪 穩健扎實！已追平原卷水準！";
    cheer.innerText = "建議點選「錯題死磕模式」，針對曾錯的 6 題重複刷兩次，保證突破 90 分！";
  } else {
    title.innerText = "🚀 繼續加油！沉著應戰！";
    cheer.innerText = "先回到「錯題死磕精攻」查看解題口訣，再回來重刷一次試卷！";
  }

  modal.classList.remove('hidden');
}

function closeResultModal() {
  const modal = document.getElementById('examResultModal');
  if (modal) modal.classList.add('hidden');
}

// --- 統測歷屆衝刺題庫 (20題) ---
function renderTuce() {
  const container = document.getElementById('tuceListContainer');
  if (!container) return;

  container.innerHTML = tuceExamQuestions.map((q, idx) => {
    const userChoice = State.tuceAnswers[q.id];
    const isAnswered = userChoice !== undefined;
    const isCorrect = isAnswered && userChoice === q.correctAnswer;

    return `
      <div class="glass-panel p-5 md:p-6 border ${
        isAnswered 
          ? (isCorrect ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-red-500/50 bg-red-950/20')
          : 'border-slate-800'
      }">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs border border-purple-500/30">
              第 ${idx + 1} 題
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">
              ${q.year}
            </span>
          </div>
          ${isAnswered ? `
            <span class="text-xs font-bold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}">
              ${isCorrect ? '✅ 答對' : '❌ 答錯'}
            </span>
          ` : `
            <span class="text-xs text-slate-400">點擊選項即時判定</span>
          `}
        </div>

        <p class="text-base text-slate-100 font-medium mb-4 leading-relaxed">${q.question}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3">
          ${q.options.map(opt => {
            let optClass = "quiz-option rounded-xl p-3 text-sm flex items-center gap-3";
            if (isAnswered) {
              if (opt.key === q.correctAnswer) {
                optClass += " is-correct font-semibold";
              } else if (opt.key === userChoice) {
                optClass += " is-wrong";
              } else {
                optClass += " opacity-60";
              }
            }

            return `
              <div class="${optClass}" onclick="handleTuceAnswer(${q.id}, '${opt.key}')">
                <span class="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center border border-slate-700">
                  ${opt.key}
                </span>
                <span class="flex-1">${opt.text}</span>
              </div>
            `;
          }).join('')}
        </div>

        ${isAnswered ? `
          <div class="mt-3 p-3.5 bg-slate-900/90 rounded-xl border border-slate-700/80 text-xs sm:text-sm text-slate-300 whitespace-pre-line leading-relaxed">
            <span class="font-bold text-purple-400">💡 統測名師詳解：</span>\n${q.explanation}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function handleTuceAnswer(qId, key) {
  const q = tuceExamQuestions.find(item => item.id === qId);
  if (!q) return;

  State.tuceAnswers[qId] = key;
  if (key === q.correctAnswer) {
    sounds.playCorrect();
  } else {
    sounds.playWrong();
  }
  renderTuce();
}

// --- 考點速記庫 ---
function renderKnowledge() {
  const container = document.getElementById('knowledgeContainer');
  if (!container) return;

  container.innerHTML = knowledgeSummary.map(cat => {
    return `
      <div class="glass-panel p-6 border border-slate-800">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>📌</span> ${cat.category}
          </h3>
          <span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
            ${cat.badge}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${cat.items.map(item => `
            <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div class="text-sm font-bold text-blue-400 mb-1.5">${item.title}</div>
              <div class="text-xs sm:text-sm text-slate-300 leading-relaxed">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// --- 列印紙本試卷 ---
function preparePrintExam(withAnswers = false) {
  const printArea = document.getElementById('printableArea');
  if (!printArea) return;

  printArea.innerHTML = `
    <div style="font-family: 'Microsoft JhengHei', sans-serif; padding: 20px;">
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 15px;">
        <h2 style="margin: 0; font-size: 20pt;">智光高級商工職業學校 隨堂測驗複習卷</h2>
        <h3 style="margin: 5px 0 0; font-size: 14pt;">科目：數位科技概論（上） 第3回：系統平台的組成架構－硬體</h3>
        <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 12pt;">
          <span>班級：資處一仁</span>
          <span>座號：26</span>
          <span>姓名：高于翔</span>
          <span>得分：__________</span>
        </div>
      </div>

      <div style="margin-bottom: 15px; font-size: 11pt; font-weight: bold;">
        ■ 選擇題（共 25 題，每題 4 分，滿分 100 分）
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
        ${originalExamQuestions.map((q, i) => `
          <div style="page-break-inside: avoid; margin-bottom: 10px; border-bottom: 1px dashed #bbb; padding-bottom: 8px;">
            <div style="font-size: 11pt; line-height: 1.5;">
              <b>${i + 1}.</b> ${q.question}
              ${withAnswers ? `<b style="color: #c00; margin-left: 8px;">【答案：(${q.correctAnswer})】</b>` : ''}
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-top: 5px; font-size: 10.5pt; color: #222;">
              ${q.options.map(opt => `
                <div>(${opt.key}) ${opt.text}</div>
              `).join('')}
            </div>
            ${withAnswers ? `
              <div style="margin-top: 6px; font-size: 9.5pt; color: #444; background: #f4f4f4; padding: 6px; border-radius: 4px;">
                <b>解析：</b>${q.explanation}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>

      ${withAnswers ? `
        <div style="margin-top: 25px; page-break-before: always;">
          <h3 style="border-bottom: 2px solid #000; padding-bottom: 6px;">【全卷 25 題標準答案速查表】</h3>
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 15px; font-size: 11pt;">
            ${originalExamQuestions.map(q => `
              <div style="border: 1px solid #999; padding: 8px; text-align: center; border-radius: 4px;">
                <b>第 ${q.id} 題</b>：<span style="color: #c00; font-weight: bold; font-size: 13pt;">${q.correctAnswer}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  window.print();
}

// --- 初始化啟動 ---
window.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderDashboard();
  renderMistakes();
  renderExam();
  renderTuce();
  renderKnowledge();

  // 快捷綁定音效切換
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      sounds.enabled = !sounds.enabled;
      soundToggleBtn.innerText = sounds.enabled ? "🔊 音效已開" : "🔇 音效已靜音";
      soundToggleBtn.classList.toggle('bg-blue-600/30', sounds.enabled);
      soundToggleBtn.classList.toggle('bg-slate-800', !sounds.enabled);
    });
  }
});

