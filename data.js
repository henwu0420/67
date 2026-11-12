/**
 * 智光商工 資料處理科 一年仁班 26號 高于翔 專屬提分題庫與考點資料庫
 * 科目：數位科技概論（上） 第 3 回：系統平台的組成架構－硬體
 */

// 1. 本次隨堂測驗卷 25 題完整資料
const originalExamQuestions = [
  {
    id: 1,
    question: "隨機存取記憶體（RAM）區分為動態隨機存取記憶體（DRAM）及靜態隨機存取記憶體（SRAM）兩種，請問下列哪一項是SRAM優於DRAM的特點？",
    options: [
      { key: "A", text: "單位資料的存取速度較快" },
      { key: "B", text: "單位面積所能儲存資料量較小" },
      { key: "C", text: "需要持續充電更新（refresh），才能確保資料完整" },
      { key: "D", text: "每單位資料的儲存成本較低。" }
    ],
    correctAnswer: "A",
    studentAnswer: "A",
    isCorrect: true,
    category: "記憶體",
    explanation: "SRAM（靜態隨機存取記憶體）使用正反器（Flip-Flop）架構，不需要充電更新（refresh），存取速度比 DRAM 快上數倍，常用作 CPU 的快取記憶體（Cache）。(B)儲存密度較小與(D)成本較高是 SRAM 的缺點；(C)需要充電更新的是 DRAM 的特性。"
  },
  {
    id: 2,
    question: "傑克將iPhone手機拍攝的照片轉存到電腦中，並列印出來與朋友分享。請問列印設備在電腦的五大單元中，是歸屬為下列哪一種單元？",
    options: [
      { key: "A", text: "控制單元" },
      { key: "B", text: "輸入單元" },
      { key: "C", text: "輸出單元" },
      { key: "D", text: "記憶單元。" }
    ],
    correctAnswer: "C",
    studentAnswer: "C",
    isCorrect: true,
    category: "五大單元",
    explanation: "列印設備（印表機）是將電腦處理後的數位資料轉化為紙本視覺影像輸出給使用者，屬於「輸出單元（Output Unit, OU）」。"
  },
  {
    id: 3,
    question: "下列對於電腦硬體五大單元的敘述何者有誤？",
    options: [
      { key: "A", text: "輸入單元：待處理的資料須經由此單元進入電腦" },
      { key: "B", text: "輸出單元：處理完成之資料由此單元送出" },
      { key: "C", text: "算術邏輯單元：所有的算術運算均在此單元完成" },
      { key: "D", text: "記憶單元：僅儲存輸入待處理之資料。" }
    ],
    correctAnswer: "D",
    studentAnswer: "D",
    isCorrect: true,
    category: "五大單元",
    explanation: "記憶單元（MU）除了存放「待處理的輸入資料」外，更存放「程式指令（如運算程序）」以及「處理後的運算結果（輸出資料）」，並非『僅』儲存輸入待處理之資料。"
  },
  {
    id: 4,
    question: "電腦基本架構中有數個主要的組成單元（或部門），其中負責存放電腦程式與資料的單元是：",
    options: [
      { key: "A", text: "算術與邏輯單元" },
      { key: "B", text: "輸入單元" },
      { key: "C", text: "記憶單元" },
      { key: "D", text: "控制單元。" }
    ],
    correctAnswer: "C",
    studentAnswer: "C",
    isCorrect: true,
    category: "五大單元",
    explanation: "記憶單元（Memory Unit, MU）主要負責存放程式指令與各類資料。"
  },
  {
    id: 5,
    question: "在電腦的組成單元中，下列哪兩個單元合稱為中央處理單元？",
    options: [
      { key: "A", text: "輸入單元及控制單元" },
      { key: "B", text: "控制單元及算術／邏輯單元" },
      { key: "C", text: "輸入單元及輸出單元" },
      { key: "D", text: "算術／邏輯單元及記憶單元。" }
    ],
    correctAnswer: "B",
    studentAnswer: "B",
    isCorrect: true,
    category: "CPU架構",
    explanation: "中央處理單元（CPU）是由「控制單元（Control Unit, CU）」與「算術邏輯單元（Arithmetic Logic Unit, ALU）」兩大單元組成（內部亦包含暫存器 Register）。"
  },
  {
    id: 6,
    question: "請問所謂的I/O指的是",
    options: [
      { key: "A", text: "1跟0" },
      { key: "B", text: "物聯網（IoT）" },
      { key: "C", text: "輸入與輸出" },
      { key: "D", text: "整合式辦公室系統（integrated office system）。" }
    ],
    correctAnswer: "C",
    studentAnswer: "C",
    isCorrect: true,
    category: "基本概念",
    explanation: "I/O 即 Input/Output（輸入/輸出）的縮寫。"
  },
  {
    id: 7,
    question: "關於\"熱插拔\"的敘述，何者為真？",
    options: [
      { key: "A", text: "只能在開機的情況下插拔" },
      { key: "B", text: "只能在關機的情況下插拔" },
      { key: "C", text: "在關機及開機的情況下皆可插拔" },
      { key: "D", text: "只有當主機溫度高於一定溫度時才可插拔。" }
    ],
    correctAnswer: "C",
    studentAnswer: "C",
    isCorrect: true,
    category: "匯流排與介面",
    explanation: "熱插拔（Hot Swapping / Hot Plugging）是指周邊裝置「在電腦開機狀態下即可直接插拔」，而在關機狀態下當然本來就可以插拔，故在開機與關機狀態皆可自由插拔（如 USB、HDMI）。"
  },
  {
    id: 8,
    question: "阿布想要為自己的筆記型電腦擴充2G的RAM，請問他應該將RAM安插在下列哪一種插槽？",
    options: [
      { key: "A", text: "記憶體插槽" },
      { key: "B", text: "PCI-E插槽" },
      { key: "C", text: "CPU插槽" },
      { key: "D", text: "M.2插槽。" }
    ],
    correctAnswer: "A",
    studentAnswer: "A",
    isCorrect: true,
    category: "硬體介面",
    explanation: "RAM（主記憶體）需安插在主機板上的記憶體插槽（DIMM / SO-DIMM）。PCI-E多用於顯卡擴充，CPU插槽用於安裝處理器，M.2多用於安裝固態硬碟(SSD)或Wi-Fi卡。"
  },
  {
    id: 9,
    question: "微軟公司在台灣成立了亞洲第一座「雲端運算」中心，以整合電腦的運算資源，來提供給國內各項創新研究計畫使用。一般而言，研究計畫都需要大量的運算，包括計算、比對、配對等不同的處理，請問電腦中負責這些運算工作的是下列哪一個單元？",
    options: [
      { key: "A", text: "CU" },
      { key: "B", text: "MU" },
      { key: "C", text: "ALU" },
      { key: "D", text: "OU。" }
    ],
    correctAnswer: "C",
    studentAnswer: "C",
    isCorrect: true,
    category: "CPU架構",
    explanation: "ALU（Arithmetic Logic Unit，算術邏輯單元）專職負責算術運算（加減乘除）與邏輯判斷（比對、大於小於等於、AND、OR）。CU為控制單元，MU為記憶單元，OU為輸出單元。"
  },
  {
    id: 10,
    question: "MIPS為一種衡量電腦CPU之測量指標，其中I代表：",
    options: [
      { key: "A", text: "資訊（Information）" },
      { key: "B", text: "指令（Instruction）" },
      { key: "C", text: "輸入（Input）" },
      { key: "D", text: "內部（Internal）。" }
    ],
    correctAnswer: "B",
    studentAnswer: "B",
    isCorrect: true,
    category: "效能指標",
    explanation: "MIPS 的全稱是 Million Instructions Per Second（每秒百萬條指令數），I 代表 Instruction（指令）。"
  },
  {
    id: 11,
    question: "在「星際迷航記」影集中，船長寇克領導眾船員一同探索宇宙，當遇上危機時，船長便會指派船員完成各自的工作，並引導船員們脫離險境。請問若以船長扮演的角色來看，可比喻成電腦的哪一個單元最恰當？",
    options: [
      { key: "A", text: "輸入單元" },
      { key: "B", text: "記憶單元" },
      { key: "C", text: "輸出單元" },
      { key: "D", text: "控制單元。" }
    ],
    correctAnswer: "D",
    studentAnswer: "D",
    isCorrect: true,
    category: "五大單元",
    explanation: "控制單元（Control Unit, CU）如同電腦的神經中樞或大腦總指揮官，負責解碼指令、控制協調各單元依序運作，與船長發號施令、指派工作的角色最為吻合。"
  },
  {
    id: 12,
    question: "志華購買了一台安插8GB記憶體的64位元電腦，下列有關該台電腦的敘述何者正確？",
    options: [
      { key: "A", text: "8GB指的是快取記憶體的容量" },
      { key: "B", text: "一般用途暫存器的位元數為8GB" },
      { key: "C", text: "CPU時脈頻率為64位元" },
      { key: "D", text: "64位元指的是一般用途暫存器的位元數。" }
    ],
    correctAnswer: "D",
    studentAnswer: "D",
    isCorrect: true,
    category: "CPU架構",
    explanation: "所謂「64位元電腦（CPU）」，代表其 CPU 內部的「一般用途暫存器（General Purpose Register）」位元長度為 64 位元，內部資料匯流排一次可處理 64 位元資料。(A)8GB指的是主記憶體(RAM)容量；(C)時脈頻率的單位是 Hz (赫茲)，不是位元。"
  },
  {
    id: 13,
    question: "高雄六龜區為了成立社區數位機會中心（digital opportunity center），打算將原社區教室的電腦全數移轉至該中心。如果你是數位機會中心的電腦管理員，為了要提升這些電腦的執行效能，下列何者最不可能是你優先考慮要更換的設備或元件？",
    options: [
      { key: "A", text: "CPU" },
      { key: "B", text: "主記憶體" },
      { key: "C", text: "顯示卡" },
      { key: "D", text: "鍵盤。" }
    ],
    correctAnswer: "D",
    studentAnswer: "D",
    isCorrect: true,
    category: "硬體配置",
    explanation: "鍵盤只是輸入文字訊號的輸入周邊設備，更換新鍵盤並不會影響電腦內部的運算效能與執行速度。若要提升電腦執行效能，應優先升級 CPU、主記憶體(RAM)、SSD 或顯示卡。"
  },
  {
    id: 14,
    question: "電腦的基本架構可分為五大單元，其中輸出單元（output unit）的功用為？",
    options: [
      { key: "A", text: "接收使用者所輸入的資料" },
      { key: "B", text: "執行程式和處理資料" },
      { key: "C", text: "進行算術運算與邏輯運算" },
      { key: "D", text: "將資料輸出到顯示器或儲存媒體。" }
    ],
    correctAnswer: "D",
    studentAnswer: "D",
    isCorrect: true,
    category: "五大單元",
    explanation: "輸出單元的作用是將電腦內部運算處理完的資料呈現出來，例如輸出至螢幕顯示、印表機列印或傳輸至儲存設備備份。"
  },
  {
    id: 15,
    question: "聯想推出搭載Intel Core i7-1165G7 2.80GHz CPU的「變形筆電」，這種筆電的螢幕可以360度翻轉，變身為平板電腦。請根據以上敘述判斷下列何者正確？",
    options: [
      { key: "A", text: "Intel為CPU的產品型號" },
      { key: "B", text: "Core i7-1165G7為CPU的製造廠商" },
      { key: "C", text: "CPU的時脈頻率為2.80GHz" },
      { key: "D", text: "石英振盪器每秒振盪2.80億次。" }
    ],
    correctAnswer: "C",
    studentAnswer: "D",
    isCorrect: false,
    category: "CPU規格與單位換算",
    explanation: "【錯題訂正】\n1. Intel 是「CPU 製造廠商」（品牌），Core i7-1165G7 才是「產品型號」，故 (A)(B) 顛倒錯誤。\n2. 規格明確寫出 2.80GHz，這就是 CPU 的主頻（時脈頻率），故 (C) 完全正確！\n3. ⚠️【陷阱注意】：1 GHz = 10^9 Hz = 10 億次/秒！因此 2.80 GHz = 28 億次/秒（28億赫茲）。選項 (D) 寫「2.80 億次」少了一個 0（2.80億次只有 280 MHz），老師紅筆批註：「是28億赫茲」！"
  },
  {
    id: 16,
    question: "有關固態硬碟（solid state disk, SSD）與傳統機械硬碟（hard disk, HDD）的敘述，下列何者正確？",
    options: [
      { key: "A", text: "HDD中的儲存元件是採用快閃記憶體" },
      { key: "B", text: "SSD採用低噪音馬達驅動讀寫頭並具抗震特點" },
      { key: "C", text: "HDD沒有旋轉及搜尋資料時間，僅須考量資料傳輸時間" },
      { key: "D", text: "SSD在經過長時間及多次使用致使內部儲存資料零散，仍可不須進行磁碟重組。" }
    ],
    correctAnswer: "D",
    studentAnswer: "B",
    isCorrect: false,
    category: "輔助記憶體(SSD/HDD)",
    explanation: "【錯題訂正】\n1. (A) 錯誤：採用快閃記憶體（Flash Memory）的是 SSD；HDD 是磁性塗層金屬碟片。\n2. (B) 錯誤：SSD 內部由積體電路晶片組成，『完全沒有任何馬達或讀寫頭』！因為沒有任何可動機械零件，所以才天生具有抗震耐摔的優點；有馬達和讀寫頭的是 HDD！\n3. (C) 錯誤：HDD 需要旋轉碟片（旋轉延遲）與移動磁臂（尋道時間），SSD 才沒有機械尋道延遲。\n4. (D) 正確：SSD 採用電子定址隨機讀取，碎裂區塊完全不影響讀取效能；而且『磁碟重組』會產生大量無謂的寫入與抹除，會急遽耗損 SSD 快閃記憶體的 P/E 寫入壽命，因此 SSD 絕對不需要也不應該重組！"
  },
  {
    id: 17,
    question: "為了減少對主記憶體的存取次數，以提昇電腦整體執行速度，個人電腦的快取記憶體（cache memory）通常以下列何者為材質？",
    options: [
      { key: "A", text: "DRAM" },
      { key: "B", text: "EPROM" },
      { key: "C", text: "ROM" },
      { key: "D", text: "SRAM。" }
    ],
    correctAnswer: "D",
    studentAnswer: "B",
    isCorrect: false,
    category: "記憶體材質與用途",
    explanation: "【錯題訂正】\n快取記憶體（Cache Memory）為了配合 CPU 的極致超高速運算，材質必須採用速度最快的「SRAM（靜態隨機存取記憶體）」！\n老師紅筆特別提醒：「不是快取 是唯讀記憶體」—— EPROM 是唯讀記憶體（ROM），抹除需照紫外線，存取速度極慢，是用來燒錄韌體的，絕不可能拿來當高速快取！\n● SRAM：速度最快、免充電、做快取（Cache）。\n● DRAM：需充電更新、容量大、做主記憶體（RAM）。"
  },
  {
    id: 18,
    question: "加、減、乘、除是程式中常需進行的算術運算，請問在電腦中負責這些運算處理的是哪一個單元？",
    options: [
      { key: "A", text: "算術邏輯單元" },
      { key: "B", text: "控制單元" },
      { key: "C", text: "輸出單元" },
      { key: "D", text: "輸入單元。" }
    ],
    correctAnswer: "A",
    studentAnswer: "A",
    isCorrect: true,
    category: "CPU架構",
    explanation: "四則運算（加減乘除）屬於算術運算，全由 CPU 內的「算術邏輯單元（ALU）」負責處理。"
  },
  {
    id: 19,
    question: "民眾只要持悠遊卡在台鐵剪票口刷卡，就可以進入月台搭車，且可隨時在全家超商等處利用儲值設備進行悠遊卡的加值。請問悠遊卡最可能是利用下列哪一種元件來儲存資料？",
    options: [
      { key: "A", text: "DRAM" },
      { key: "B", text: "EEPROM" },
      { key: "C", text: "PROM" },
      { key: "D", text: "HDD。" }
    ],
    correctAnswer: "B",
    studentAnswer: "D",
    isCorrect: false,
    category: "ROM分類與實際應用",
    explanation: "【錯題訂正】\n悠遊卡是一張薄薄的感應晶片卡：\n1. (D) 絕對不可能！HDD 是傳統機械硬碟，有馬達跟厚重的磁盤，老師紅筆批註：「是傳統機械硬碟」，點出選 HDD 太不合常理了！\n2. (A) DRAM 只要斷電資料立刻消失，悠遊卡平常根本沒接電池，斷電金額會歸零，不可用！\n3. (C) PROM（可程式唯讀記憶體）只能燒錄寫入一次，燒錄後終生不能修改，無法進行後續的『加值』或『扣款』！\n4. (B) 正確：EEPROM（電子抹除式可程式唯讀記憶體）可用電氣訊號重複抹除寫入，且斷電後資料依然完整保留，最適合悠遊卡、健保卡與晶片金融卡！"
  },
  {
    id: 20,
    question: "高雄在光華數位新天地買了一部桌上型電腦，此機配備了如選項中的四種記憶或儲存裝置，請問它們何者之存取速度最快？",
    options: [
      { key: "A", text: "快取記憶體（cache）" },
      { key: "B", text: "輔助記憶體－固態硬碟（SSD）" },
      { key: "C", text: "主記憶體（DRAM）" },
      { key: "D", text: "輔助記憶體－硬碟（HDD）。" }
    ],
    correctAnswer: "A",
    studentAnswer: "A",
    isCorrect: true,
    category: "記憶體階層速度",
    explanation: "存取速度排行：暫存器（Register） > 快取記憶體（Cache, SRAM） > 主記憶體（DRAM） > 固態硬碟（SSD） > 機械硬碟（HDD）。四個選項中以快取記憶體最快！"
  },
  {
    id: 21,
    question: "MacBook Air採用固態硬碟大幅降低機身的厚度，機身最薄處僅0.3公分，請問該筆電採用的固態硬碟與傳統硬碟，差異為何？",
    options: [
      { key: "A", text: "固態硬碟的體積較大" },
      { key: "B", text: "傳統硬碟的耐震度較佳" },
      { key: "C", text: "固態硬碟是使用快閃記憶體來作為儲存元件" },
      { key: "D", text: "傳統硬碟的儲存容量通常較小。" }
    ],
    correctAnswer: "C",
    studentAnswer: "C",
    isCorrect: true,
    category: "輔助記憶體(SSD/HDD)",
    explanation: "固態硬碟（SSD）捨棄了傳統機械硬碟的馬達與碟片，改用「快閃記憶體（Flash Memory）」積體電路晶片儲存資料，因此體積小、重量輕、超薄、耐震且速度飛快。"
  },
  {
    id: 22,
    question: "三星公司推出的某款Android智慧型手機，宣稱採用AMOLED技術，可使螢幕色彩更加鮮豔，請問此款手機的螢幕最可能是採用下列哪一種材質所製成的？",
    options: [
      { key: "A", text: "陰極射線管" },
      { key: "B", text: "液晶" },
      { key: "C", text: "有機發光二極體" },
      { key: "D", text: "電漿。" }
    ],
    correctAnswer: "C",
    studentAnswer: "B",
    isCorrect: false,
    category: "顯示器技術",
    explanation: "【錯題訂正】\nAMOLED 的英文完整全名是：\nActive-Matrix Organic Light-Emitting Diode\n中文即為：「主動矩陣【有機發光二極體】」！\n● (B) 液晶對應的是 LCD（Liquid Crystal Display），需要背光模組。\n● (C) 有機發光二極體（OLED/AMOLED）具備像素自發光特性，不需背光板，厚度更薄、對比度極高、色彩鮮豔純黑不漏光！"
  },
  {
    id: 23,
    question: "攻芳想要自己挑選一台印表機，如果她對列印品質的要求特別高，請問當她在購買時，應特別考量下列哪一項印表機的規格？",
    options: [
      { key: "A", text: "解析度" },
      { key: "B", text: "外殼顏色" },
      { key: "C", text: "尺寸大小" },
      { key: "D", text: "重量。" }
    ],
    correctAnswer: "A",
    studentAnswer: "A",
    isCorrect: true,
    category: "輸出設備",
    explanation: "印表機的列印品質決定於「解析度」，通常以 DPI（Dots Per Inch，每英吋點數）為計量單位，數值越高代表列印出來的點越細密，成品越清晰精緻。"
  },
  {
    id: 24,
    question: "裕書的筆記型電腦內建有Type C、HDMI、line out等連接埠，下列為他使用這些連接埠的操作，請問何者不正確？",
    options: [
      { key: "A", text: "利用line out連接埠來上網" },
      { key: "B", text: "利用Type C連接埠來為手機充電" },
      { key: "C", text: "利用Type C連接埠將手機中的資料傳送至電腦" },
      { key: "D", text: "利用HDMI連接埠將手機畫面傳送至電視播放。" }
    ],
    correctAnswer: "A",
    studentAnswer: "B",
    isCorrect: false,
    category: "連接埠與傳輸介面",
    explanation: "【錯題訂正】\n題目問的是何者『不正確』！\n1. (A) 【不正確（應選此項）】：line out 是 3.5mm「音訊類比輸出孔」（用來插耳機、喇叭輸出聲音），絕對無法拿來接網路上網！有線網路孔是 RJ-45！\n2. (B) 正確：Type-C 支援 USB-PD 雙向大功率供電協定，用來給手機充電完全是標準功能！老師批註：「可用TYPE-C充電」，因此 (B) 的操作是正確的，不能選為錯誤操作。\n3. (C) 正確：Type-C 是高速資料傳輸匯流排，手機傳輸檔案給電腦非常普及。\n4. (D) 正確：HDMI 專司高解析度數位影音訊號輸出到大螢幕電視。"
  },
  {
    id: 25,
    question: "史記：「秦始皇三十四年，丞相李斯上言儒生是古非今，反對批評朝政、法令，因此建議除了秦記、醫藥、卜筮、種樹等書外，一律燒毀」。請問，如果在秦朝即擁有現代的資訊科技，則可利用下列哪一種設備，將書籍內容數位化，以便備份起來？",
    options: [
      { key: "A", text: "印表機" },
      { key: "B", text: "QLED液晶螢幕" },
      { key: "C", text: "滑鼠" },
      { key: "D", text: "掃描器。" }
    ],
    correctAnswer: "D",
    studentAnswer: "D",
    isCorrect: true,
    category: "輸入設備",
    explanation: "將實體紙張、古籍字畫光學轉換為電腦影像資料（數位化）的設備是「掃描器（Scanner）」，屬於光學輸入裝置。"
  }
];

// 2. 本次考試 6 題錯題的「靶向深度診斷」與「雙胞胎變形考題」
const mistakeDeepDives = [
  {
    id: 15,
    originalQ: "第 15 題：Intel Core i7-1165G7 2.80GHz 筆電規格判斷",
    studentChoice: "D（石英振盪器每秒振盪2.80億次）",
    teacherNote: "是 28 億赫茲！",
    realAnswer: "C（CPU的時脈頻率為2.80GHz）",
    coreConcept: "時脈頻率單位換算（Hz、MHz、GHz）與型號辨識",
    mindTrap: "于翔以為 2.80 GHz 換算成次數就是 2.80 億次，被文字遊戲騙了！1 G = 10 億（10^9），不是 1 億（10^8）！",
    goldenFormula: "1 KHz = 10^3 Hz（千次）\n1 MHz = 10^6 Hz（百萬次）\n1 GHz = 10^9 Hz（十億次）\n因此 2.80 GHz = 2.80 × 10 億 = 28 億次/秒！",
    twinQuestion: {
      question: "【變形挑戰題】某台電競電腦搭載 AMD Ryzen 7 5800X 3.8GHz 的八核心 CPU，若其內部石英振盪器每秒產生固定脈衝，請問此 CPU 的石英振盪器每秒振盪多少次？",
      options: [
        { key: "A", text: "3.8 萬次" },
        { key: "B", text: "3.8 億次" },
        { key: "C", text: "38 億次" },
        { key: "D", text: "380 億次" }
      ],
      correctAnswer: "C",
      explanation: "3.8 GHz = 3.8 × 10^9 Hz = 3,800,000,000 Hz = 38 億次/秒！千萬不要再少看一個零囉！"
    }
  },
  {
    id: 16,
    originalQ: "第 16 題：固態硬碟（SSD）與機械硬碟（HDD）的比較",
    studentChoice: "B（SSD採用低噪音馬達驅動讀寫頭並具抗震特點）",
    teacherNote: "SSD 沒有馬達與讀寫頭，完全是晶片！",
    realAnswer: "D（SSD即使資料零散，仍不須進行磁碟重組）",
    coreConcept: "SSD vs HDD 內部構造與維護原理",
    mindTrap: "誤以為 SSD 也是靠更小更安靜的馬達在轉。記住：SSD 是純電子晶片，根本沒有任何機械馬達！",
    goldenFormula: "● SSD：快閃記憶體晶片、無機械零件、抗震、省電、無尋道延遲、【嚴禁磁碟重組】（重組會白白消耗快閃記憶體寫入壽命！）。\n● HDD：金屬磁盤＋馬達旋轉＋讀寫頭臂、怕碰撞、有尋道時間延遲、可定期磁碟重組提升讀取效率。",
    twinQuestion: {
      question: "【變形挑戰題】小智發現自己的新筆電使用一段時間後，想進行維護以維持最佳狀態。若該筆電內部配備的是 NVMe M.2 SSD 固態硬碟，請問下列哪一項操作對此硬碟『有害無益』且完全不需要執行？",
      options: [
        { key: "A", text: "磁碟清理（清理暫存快取垃圾檔）" },
        { key: "B", text: "磁碟重組（Defragmentation）" },
        { key: "C", text: "更新作業系統安全性修補檔" },
        { key: "D", text: "執行防毒軟體全盤掃毒" }
      ],
      correctAnswer: "B",
      explanation: "SSD 是透過電子定址讀取，資料零散對讀取速度影響微乎其微。磁碟重組會頻繁移動檔案區塊，造成大量額外的寫入與抹除（P/E 次數），直接縮短 SSD 壽命！"
    }
  },
  {
    id: 17,
    originalQ: "第 17 題：快取記憶體（Cache Memory）的硬體材質",
    studentChoice: "B（EPROM）",
    teacherNote: "不是快取 是唯讀記憶體！快取是用 SRAM！",
    realAnswer: "D（SRAM 靜態隨機存取記憶體）",
    coreConcept: "SRAM vs DRAM 與 ROM 的分工定位",
    mindTrap: "將 ROM 家族的 EPROM 與高階記憶體搞混了。快取是暫存超高速資料的地方，ROM 是拿來存開機程式的慢速唯讀記憶體！",
    goldenFormula: "● 速度之王：SRAM（靜態RAM）➜ 免充電更新、速度極快、成本高、做【快取記憶體 Cache】。\n● 容量之王：DRAM（動態RAM）➜ 需充電更新、容量大、成本適中、做【主記憶體 RAM】。\n● 韌體之王：ROM / EEPROM ➜ 斷電不消失、做【BIOS/UEFI 晶片】。",
    twinQuestion: {
      question: "【變形挑戰題】現代 CPU 內部常內建 L1、L2、L3 快取記憶體以克服 CPU 與主記憶體之間的速度落差。請問製造這些快取記憶體最主要的電子元件材質為何？",
      options: [
        { key: "A", text: "DRAM（動態隨機存取記憶體）" },
        { key: "B", text: "SRAM（靜態隨機存取記憶體）" },
        { key: "C", text: "Flash Memory（快閃記憶體）" },
        { key: "D", text: "EEPROM（電子抹除式可程式唯讀記憶體）" }
      ],
      correctAnswer: "B",
      explanation: "L1/L2/L3 快取全都是由極高速的 SRAM 所製造，利用正反器電路保存資料，免更新循環，能在奈秒（ns）級別響應 CPU 運算需求。"
    }
  },
  {
    id: 19,
    originalQ: "第 19 題：悠遊卡儲存晶片所使用的元件材質",
    studentChoice: "D（HDD 機械硬碟）",
    teacherNote: "悠遊卡怎麼可能塞得下傳統機械硬碟！是 EEPROM！",
    realAnswer: "B（EEPROM 電子抹除式可程式唯讀記憶體）",
    coreConcept: "非揮發性記憶體應用（EEPROM vs ROM vs RAM）",
    mindTrap: "隨手選了熟悉的 HDD，但 HDD 是有巨大金屬盤與馬達的傳統硬碟！悠遊卡只有一張塑膠卡厚度，裡面只有微型晶片與天線！",
    goldenFormula: "悠遊卡三大條件：\n1. 沒電池供電時金額不能消失 ➜ 必須是【非揮發性（ROM家族）】。\n2. 要能刷卡扣款加值 ➜ 必須能【重複電氣寫入與修改】。\n3. 薄薄一張卡 ➜ 只能是【微型 EEPROM 或快閃晶片】！",
    twinQuestion: {
      question: "【變形挑戰題】全民健保卡、各大銀行發行的晶片金融卡，在拔離讀卡機沒有通電的情況下，依然能長久保存卡內的身分或帳戶資訊，且能在每次看診或交易時更新就醫紀錄。請問此類智慧 IC 卡內部最常使用的記憶體元件為何？",
      options: [
        { key: "A", text: "SRAM" },
        { key: "B", text: "DRAM" },
        { key: "C", text: "EEPROM" },
        { key: "D", text: "MROM" }
      ],
      correctAnswer: "C",
      explanation: "IC 智慧卡（健保卡、金融卡、悠遊卡）內部皆採用 EEPROM，斷電資料不遺失，且可透過讀卡機提供的微小電壓進行多次抹寫更新。"
    }
  },
  {
    id: 22,
    originalQ: "第 22 題：三星手機宣稱的 AMOLED 螢幕材質",
    studentChoice: "B（液晶）",
    teacherNote: "AMOLED 含有 LED！是有機發光二極體，液晶是 LCD！",
    realAnswer: "C（有機發光二極體）",
    coreConcept: "螢幕顯示器技術名詞對應（OLED vs LCD）",
    mindTrap: "只想到平常手機螢幕常叫液晶螢幕，忘記了題目特別強調的「AMOLED」縮寫本意！",
    goldenFormula: "● LCD = Liquid Crystal Display ➜ 【液晶顯示器】（需要背光燈源發光）。\n● OLED = Organic Light-Emitting Diode ➜ 【有機發光二極體】（自發光、色彩超鮮豔、純黑省電）。\n● AMOLED = Active-Matrix OLED ➜ 主動式有機發光二極體！",
    twinQuestion: {
      question: "【變形挑戰題】近年來旗艦手機紛紛採用 OLED 螢幕面板取代傳統的 LCD 液晶螢幕。下列有關 OLED 面板的特性敘述，何者正確？",
      options: [
        { key: "A", text: "需要額外的大型冷陰極背光燈管才能發光" },
        { key: "B", text: "採用有機發光二極體材料，具備自發光特性" },
        { key: "C", text: "在顯示純黑色畫面時仍然必須讓背光源全開，耗電量極高" },
        { key: "D", text: "厚度通常比傳統液晶螢幕厚上許多" },
      ],
      correctAnswer: "B",
      explanation: "OLED 的每個畫素像素皆由有機發光二極體自發光組成，不需要背光源，黑色時像素直接關閉不發光（真正純黑且極為省電），厚度也大幅縮薄！"
    }
  },
  {
    id: 24,
    originalQ: "第 24 題：筆電連接埠 Type-C、HDMI、Line Out 的用途與不正確操作判斷",
    studentChoice: "B（利用 Type C 連接埠來為手機充電）",
    teacherNote: "Type-C 充電完全正確！題目問『何者不正確』！Line out 不能上網！",
    realAnswer: "A（利用 line out 連接埠來上網）",
    coreConcept: "常見電腦 I/O 連接埠功能識別（Line out, Type-C, HDMI, RJ-45）",
    mindTrap: "1. 沒看清題目是在問『不正確』的敘述。\n2. 誤以為筆電的 Type-C 孔只能傳檔案不能替手機充電。其實 Type-C 支援 USB-PD 供電！\n3. 忽略了 Line out 的意思是『聲音輸出孔』！",
    goldenFormula: "● Line Out（綠色圓孔）：音訊輸出（接喇叭/耳機），不能上網！\n● RJ-45：乙太網路接孔（拿來上網用）！\n● Type-C：萬用接頭，支援【正反盲插】、【雙向大功率充電】、【超高頻寬傳輸】與【影音輸出】。\n● HDMI：高解析度多媒體影音傳輸孔。",
    twinQuestion: {
      question: "【變形挑戰題】小美買了一台輕薄型筆記型電腦，機身側面配有『USB Type-C』、『HDMI』與『3.5mm Audio / Line Out』等連接孔。下列有關這些連接埠的使用方式，何者『最不合理』？",
      options: [
        { key: "A", text: "使用 Type-C 連接線替支援快充的平板電腦進行雙向電力傳輸" },
        { key: "B", text: "使用 HDMI 連接線將筆電簡報畫面投影至會議室投影機" },
        { key: "C", text: "將家中光纖寬頻網路的 RJ-45 實體網路線直接插入 Line Out 孔上網" },
        { key: "D", text: "使用 Type-C 外接式高速 SSD 隨身硬碟進行大型檔案備份" }
      ],
      correctAnswer: "C",
      explanation: "Line Out 是 3.5mm 音源類比輸出插孔，RJ-45 網路線根本插不進去，也不具備網路訊號傳輸功能！RJ-45 網路線必須插在 LAN 網路孔或透過 Type-C 網路轉接頭。"
    }
  }
];

// 3. 統測歷屆四技二專（商管群/資電群）數位科技概論精選 20 題
const tuceExamQuestions = [
  {
    id: 101,
    year: "統測經典",
    question: "下列關於馮紐曼（Von Neumann）電腦架構的敘述，何者正確？",
    options: [
      { key: "A", text: "將程式與資料分開存放於不同硬體裝置" },
      { key: "B", text: "採用「內儲程式（Stored Program）」概念，將程式與資料均存於記憶體中" },
      { key: "C", text: "CPU 內部只包含算術邏輯單元，不包含控制單元" },
      { key: "D", text: "輸入與輸出單元可以直接繞過記憶體直接交由暫存器處理" }
    ],
    correctAnswer: "B",
    explanation: "馮紐曼架構最核心的特徵就是「內儲程式（Stored-program concept）」，指令和資料一併存放於主記憶體中，由 CPU 依序提取、解碼並執行。"
  },
  {
    id: 102,
    year: "統測高頻",
    question: "微處理機在執行指令的「指令週期（Instruction Cycle）」中，第一個步驟為何？",
    options: [
      { key: "A", text: "解碼（Decode）" },
      { key: "B", text: "擷取（Fetch）" },
      { key: "C", text: "執行（Execute）" },
      { key: "D", text: "寫回（Store/Write Back）" }
    ],
    correctAnswer: "B",
    explanation: "機器週期（Machine Cycle）四步驟順序為：擷取（Fetch）➜ 解碼（Decode）➜ 執行（Execute）➜ 寫回（Store）。第一個動作必定是從記憶體中擷取指令。"
  },
  {
    id: 103,
    year: "統測高頻",
    question: "下列哪一種暫存器專門用來存放「下一筆準備被擷取並執行之指令的記憶體位址」？",
    options: [
      { key: "A", text: "累加器（Accumulator, AC）" },
      { key: "B", text: "指令暫存器（Instruction Register, IR）" },
      { key: "C", text: "程式計數器（Program Counter, PC）" },
      { key: "D", text: "旗標暫存器（Flag Register）" }
    ],
    correctAnswer: "C",
    explanation: "程式計數器（Program Counter, PC）存放下一條即將執行的指令位址；指令暫存器（IR）存放目前正在執行的指令；累加器（AC）存放 ALU 運算的中間結果。"
  },
  {
    id: 104,
    year: "統測常考",
    question: "若某 CPU 的位址匯流排（Address Bus）有 32 條線（32-bit），請問該 CPU 最多能直接定址的主記憶體空間為何？",
    options: [
      { key: "A", text: "64 KB" },
      { key: "B", text: "4 MB" },
      { key: "C", text: "4 GB" },
      { key: "D", text: "64 GB" }
    ],
    correctAnswer: "C",
    explanation: "定址能力 = 2^32 Bytes = 2^2 × 2^30 Bytes = 4 × 1 GB = 4 GB！這就是為何傳統 32 位元作業系統最大只能支援約 4GB 記憶體的原因。"
  },
  {
    id: 105,
    year: "統測經典",
    question: "下列有關電腦各種匯流排（Bus）傳輸方向之敘述，何者正確？",
    options: [
      { key: "A", text: "資料匯流排（Data Bus）為單向傳輸" },
      { key: "B", text: "位址匯流排（Address Bus）由 CPU 向外單向送出" },
      { key: "C", text: "控制匯流排（Control Bus）皆為純單向由記憶體送入 CPU" },
      { key: "D", text: "所有匯流排皆為雙向傳輸" }
    ],
    correctAnswer: "B",
    explanation: "● 位址匯流排（Address Bus）：單向（由 CPU 指定記憶體或周邊位址）。\n● 資料匯流排（Data Bus）：雙向（資料可讀取亦可寫入）。\n● 控制匯流排（Control Bus）：雙向（傳遞控制信號與狀態反饋）。"
  },
  {
    id: 106,
    year: "統測常考",
    question: "下列哪一種快閃記憶體架構具有讀取速度快、支援位元組級別隨機存取，常用於儲存手機與電腦開機韌體（BIOS）？",
    options: [
      { key: "A", text: "NOR Flash" },
      { key: "B", text: "NAND Flash" },
      { key: "C", text: "DRAM" },
      { key: "D", text: "HDD" }
    ],
    correctAnswer: "A",
    explanation: "快閃記憶體分為兩大類：\n● NOR Flash：讀取速度快、可隨機定址、晶片成本高，適合存程式碼（如 BIOS / 韌體）。\n● NAND Flash：寫入速度快、容量大、成本低，適合大容量儲存（如 SSD、隨身碟、SD卡）。"
  },
  {
    id: 107,
    year: "統測高頻",
    question: "電腦在進行多工作業時，若實體主記憶體（RAM）容量不足，作業系統會借用部分輔助記憶體（硬碟）空間充當記憶體使用，此技術稱為：",
    options: [
      { key: "A", text: "快取記憶體（Cache Memory）" },
      { key: "B", text: "虛擬記憶體（Virtual Memory）" },
      { key: "C", text: "唯讀記憶體（Read Only Memory）" },
      { key: "D", text: "緩衝記憶體（Buffer Memory）" }
    ],
    correctAnswer: "B",
    explanation: "利用硬碟空間模擬成主記憶體的技術稱為「虛擬記憶體（Virtual Memory）」，以解決實體記憶體不足導致程式無法執行的問題。"
  },
  {
    id: 108,
    year: "統測高頻",
    question: "某規格標示之螢幕更新率為 144Hz，請問這代表該螢幕：",
    options: [
      { key: "A", text: "每秒振盪 144 萬次" },
      { key: "B", text: "每秒鐘能夠刷新 144 張畫面（影格）" },
      { key: "C", text: "水平解析度為 144 個像素" },
      { key: "D", text: "色彩飽和度為一般螢幕的 1.44 倍" }
    ],
    correctAnswer: "B",
    explanation: "螢幕更新率（Refresh Rate）單位為 Hz，代表螢幕面板每秒鐘重繪畫面的次數（144Hz = 每秒刷新 144 次），更新率越高畫面越流暢滑順。"
  },
  {
    id: 109,
    year: "統測重點",
    question: "下列哪一種電腦連接埠具有最高傳輸頻率，且支援 Daisy Chain（菊鏈式串接）功能，由 Intel 與 Apple 共同制定？",
    options: [
      { key: "A", text: "VGA" },
      { key: "B", text: "Thunderbolt（雷電）" },
      { key: "C", text: "PS/2" },
      { key: "D", text: "DVI" }
    ],
    correctAnswer: "B",
    explanation: "Thunderbolt（如 Thunderbolt 4/5）具備高達 40Gbps~80Gbps 極致傳輸速度，採用 Type-C 物理接口，支援影音、資料、高瓦數供電並支援菊鏈式串接多個外接設備。"
  },
  {
    id: 110,
    year: "統測重點",
    question: "在選購電競滑鼠時，常看到標示『16000 DPI』，請問 DPI 指標代表何種含義？",
    options: [
      { key: "A", text: "滑鼠滾輪每秒滾動圈數" },
      { key: "B", text: "滑鼠按鍵點擊壽命" },
      { key: "C", text: "滑鼠每移動一英吋，游標在螢幕上所移動的像素點數（靈敏度）" },
      { key: "D", text: "滑鼠的無線傳輸功率" }
    ],
    correctAnswer: "C",
    explanation: "DPI（Dots Per Inch）在滑鼠規格中代表游標靈敏度/解析度，即實體滑鼠每在桌面上滑移 1 英吋，螢幕游標相應移動的像素點數。"
  },
  {
    id: 111,
    year: "統測精選",
    question: "下列哪一種 RAID（磁碟陣列）模式只做資料交錯分割儲存（Striping）而不提供任何容錯備份，只要其中一顆硬碟損壞全部資料即遺失？",
    options: [
      { key: "A", text: "RAID 0" },
      { key: "B", text: "RAID 1" },
      { key: "C", text: "RAID 5" },
      { key: "D", text: "RAID 6" }
    ],
    correctAnswer: "A",
    explanation: "RAID 0（等量分割）將資料分散寫入多顆硬碟以追求極致速度，但完全無容錯能力；RAID 1 為鏡像備份（Mirroring），容錯佳但容量減半；RAID 5 兼顧速度、容量與同位元檢查容錯。"
  },
  {
    id: 112,
    year: "統測精選",
    question: "下列哪一種記憶體具有「電容器需要週期性充電更新（Refresh）」之物理特性？",
    options: [
      { key: "A", text: "SRAM" },
      { key: "B", text: "DRAM" },
      { key: "C", text: "ROM" },
      { key: "D", text: "EEPROM" }
    ],
    correctAnswer: "B",
    explanation: "DRAM（動態隨機存取記憶體）利用微小電容器儲存電荷來代表 0 與 1，由於電容會自然漏電，因此必須每隔數微秒定期進行充電更新（Refresh）！"
  },
  {
    id: 113,
    year: "統測精選",
    question: "下列關於 USB 3.2 與 USB4 連接介面的敘述，何者正確？",
    options: [
      { key: "A", text: "USB 介面不支援熱插拔，插拔前必須先關閉電腦主機電源" },
      { key: "B", text: "USB Type-C 連接頭具備對稱設計，支援正反雙面任意插入" },
      { key: "C", text: "USB 傳輸線僅能傳輸資料，無法提供任何電力供電" },
      { key: "D", text: "USB 屬於並列（Parallel）傳輸介面" }
    ],
    correctAnswer: "B",
    explanation: "USB（Universal Serial Bus，通用序列匯流排）支援熱插拔、支援供電；Type-C 具備正反皆可插的對稱外型。"
  },
  {
    id: 114,
    year: "統測高頻",
    question: "電腦開機啟動時，主機板會先執行一段檢測 CPU、記憶體、鍵盤等硬體設備是否正常的自我測試程序，該程序稱為：",
    options: [
      { key: "A", text: "CMOS" },
      { key: "B", text: "POST（Power-On Self Test）" },
      { key: "C", text: "GUI" },
      { key: "D", text: "DMA" }
    ],
    correctAnswer: "B",
    explanation: "POST（開機自我檢測，Power-On Self Test）是電腦通電後由 BIOS/UEFI 首先執行的硬體自我診斷程式。"
  },
  {
    id: 115,
    year: "統測高頻",
    question: "下列何者屬於電腦的「雙向／兼具輸入與輸出功能」的周邊設備？",
    options: [
      { key: "A", text: "觸控螢幕（Touch Screen）" },
      { key: "B", text: "傳統彩色印表機" },
      { key: "C", text: "條碼掃描器" },
      { key: "D", text: "主動式抗噪耳機" }
    ],
    correctAnswer: "A",
    explanation: "觸控螢幕能顯示視覺畫面（輸出），同時感應使用者的手指觸摸點擊指令（輸入），屬於標準的 I/O 複合雙向裝置。"
  },
  {
    id: 116,
    year: "統測常考",
    question: "下列有關電腦記憶體存取時間（Access Time）單位由小到大（速度由快到慢）之排列順序，何者正確？",
    options: [
      { key: "A", text: "ms（毫秒） < μs（微秒） < ns（奈秒） < ps（皮秒）" },
      { key: "B", text: "ps（皮秒） < ns（奈秒） < μs（微秒） < ms（毫秒）" },
      { key: "C", text: "ns（奈秒） < ps（皮秒） < ms（毫秒） < μs（微秒）" },
      { key: "D", text: "ms（毫秒） < ns（奈秒） < μs（微秒） < ps（皮秒）" }
    ],
    correctAnswer: "B",
    explanation: "存取時間越短代表速度越快！1 秒 = 10^3 ms（毫秒） = 10^6 μs（微秒） = 10^9 ns（奈秒） = 10^12 ps（皮秒）。因此時間由小到大為 ps < ns < μs < ms。"
  },
  {
    id: 117,
    year: "統測重點",
    question: "下列哪一種顯示連接埠採用類比（Analog）訊號傳輸，外觀通常為藍色 D 型 15 針插座？",
    options: [
      { key: "A", text: "VGA（D-Sub）" },
      { key: "B", text: "HDMI" },
      { key: "C", text: "DisplayPort（DP）" },
      { key: "D", text: "DVI-D" }
    ],
    correctAnswer: "A",
    explanation: "VGA（D-Sub 15 pin）為早期的類比視訊介面；HDMI、DP、DVI-D 皆為全數位影音傳輸介面。"
  },
  {
    id: 118,
    year: "統測精選",
    question: "下列有關「中斷（Interrupt）」之敘述，何者正確？",
    options: [
      { key: "A", text: "中斷發生時電腦必須立刻強迫關機" },
      { key: "B", text: "印表機缺紙、使用者敲擊鍵盤等事件會引發中斷通知 CPU 處理" },
      { key: "C", text: "CPU 處理中斷時不會保存目前程式的執行狀態" },
      { key: "D", text: "軟體錯誤不能引發任何中斷請求" }
    ],
    correctAnswer: "B",
    explanation: "中斷是周邊或程式通知 CPU 暫停當前工作、轉去執行中斷服務常式（ISR）的機制，例如鍵盤輸入、印表機缺紙或除以零錯誤。"
  },
  {
    id: 119,
    year: "統測高頻",
    question: "下列有關常見印表機種類之比較，何者敘述正確？",
    options: [
      { key: "A", text: "點陣式印表機列印時噪音極小，適合列印高品質相片" },
      { key: "B", text: "雷射印表機利用碳粉匣（Toner）與感光鼓轉印加熱技術，列印速度最快" },
      { key: "C", text: "噴墨印表機無法列印彩色文件" },
      { key: "D", text: "開立多聯式統一發票通常使用熱昇華印表機" }
    ],
    correctAnswer: "B",
    explanation: "● 雷射印表機：用碳粉、速度快、文字清晰銳利。\n● 點陣式印表機：撞擊式列印、噪音大，但可用複寫紙列印多聯式收據與發票。\n● 噴墨印表機：用墨水匣，色彩飽和適合列印照片。"
  },
  {
    id: 120,
    year: "統測經典",
    question: "阿翔在組裝電腦時發現硬碟有 M.2 NVMe 與 SATA 兩種規格，請問 NVMe 協定是透過哪一種高速匯流排介面直接與 CPU 通訊？",
    options: [
      { key: "A", text: "PCIe（PCI Express）" },
      { key: "B", text: "SATA 3.0" },
      { key: "C", text: "USB 2.0" },
      { key: "D", text: "IDE" }
    ],
    correctAnswer: "A",
    explanation: "NVMe（Non-Volatile Memory Express）固態硬碟專門走 PCIe 高速通道直接與處理器通信，傳輸速度可達 3500MB/s ~ 7000MB/s 以上，遠快於 SATA 3 的 600MB/s 上限。"
  }
];

// 4. 必背核心知識庫（速記表與口訣）
const knowledgeSummary = [
  {
    category: "核心必背 1：電腦五大單元神口訣",
    badge: "基礎架構",
    items: [
      { title: "輸入單元（IU）", desc: "把外部資料與命令送進電腦（鍵盤、滑鼠、掃描器、麥克風、視訊鏡頭）。" },
      { title: "算術邏輯單元（ALU）", desc: "負責四則運算（＋－×÷）與邏輯比較判斷（AND、OR、NOT、比大小）。" },
      { title: "控制單元（CU）", desc: "大腦神經指揮官！負責擷取指令、解碼指令、指揮協調各單元同步運作（如船長、指揮家）。" },
      { title: "記憶單元（MU）", desc: "存放資料、指令與運算結果（包含暫存器、快取、主記憶體、硬碟）。" },
      { title: "輸出單元（OU）", desc: "將電腦運算結果呈現給人類看或儲存（螢幕、印表機、喇叭、投影機）。" },
      { title: "⭐ 必殺考點", desc: "中央處理單元（CPU） = 控制單元（CU） ＋ 算術邏輯單元（ALU） ＋ 暫存器（Register）。" }
    ]
  },
  {
    category: "核心必背 2：記憶體速度金字塔（由快到慢）",
    badge: "速度層級",
    items: [
      { title: "1. 暫存器（Register）", desc: "位於 CPU 內部，速度最快、容量最小（以 Bit 或 Byte 計算）、單位造價最昂貴。" },
      { title: "2. 快取記憶體（Cache）", desc: "位於 CPU 內或旁，材質為【SRAM】，免充電更新，用於平衡 CPU 與 RAM 速度差。" },
      { title: "3. 主記憶體（RAM）", desc: "插在主機板 DIMM 槽，材質為【DRAM】，需週期性充電更新，斷電資料即消失。" },
      { title: "4. 固態硬碟（SSD）", desc: "輔助記憶體，採用【快閃記憶體 NAND Flash】，純晶片無機械零件，耐震抗摔，【不需磁碟重組】。" },
      { title: "5. 機械硬碟（HDD）", desc: "輔助記憶體，由馬達、旋轉磁盤與讀寫頭組成，有機械尋道時間，怕撞擊，需定期重組。" },
      { title: "6. 外接設備與光碟", desc: "隨身碟、藍光/DVD 光碟、備份磁帶，存取速度最慢。" }
    ]
  },
  {
    category: "核心必背 3：SRAM vs DRAM 決勝對比表",
    badge: "大考必出",
    items: [
      { title: "SRAM（靜態隨機存取記憶體）", desc: "正反器電路製成｜速度極快｜免充電更新｜密度低、價格貴｜專做快取（Cache Memory）。" },
      { title: "DRAM（動態隨機存取記憶體）", desc: "微型電容與電晶體製成｜速度中等｜【必須定期充電更新(Refresh)】｜密度高、容量大、成本平價｜專做主記憶體（RAM）。" },
      { title: "共通特性", desc: "兩者皆屬於「揮發性記憶體（Volatile Memory）」，電腦一旦切斷電源關機，內部存放資料全數化為烏有！" }
    ]
  },
  {
    category: "核心必背 4：ROM 家族演進史與應用",
    badge: "非揮發性",
    items: [
      { title: "ROM（唯讀記憶體）", desc: "非揮發性，斷電資料不會消失！主要存放開機基本測試程式（BIOS/UEFI）。" },
      { title: "MROM（遮罩式ROM）", desc: "晶片出廠製造時就寫死，使用者終身無法修改。" },
      { title: "PROM（可程式ROM）", desc: "出廠時空白，使用者可用專用燒錄器寫入【僅此一次】，之後不可再改。" },
      { title: "EPROM（紫外線抹除式）", desc: "晶片上方有石英透明小窗，需照強烈紫外線照射 15~20 分鐘抹除全部資料才能重新燒錄。" },
      { title: "EEPROM（電子抹除式）", desc: "利用電氣電壓信號即可局部抹除並重新寫入！廣泛應用於【悠遊卡、健保卡、信用卡、主機板 BIOS】。" }
    ]
  },
  {
    category: "核心必背 5：時脈頻率與度量單位陷阱大破解",
    badge: "于翔錯題精修",
    items: [
      { title: "Hz（赫茲）", desc: "每秒振盪或執行循環的次數（1 Hz = 1 次/秒）。" },
      { title: "1 KHz（千赫）", desc: "1,000 Hz = 10^3 次/秒。" },
      { title: "1 MHz（百萬赫）", desc: "1,000,000 Hz = 10^6 次/秒（百萬次）。" },
      { title: "1 GHz（吉赫 / 十億赫）", desc: "1,000,000,000 Hz = 10^9 次/秒（【十億次】！）。" },
      { title: "⚠️ 必記算式", desc: "2.80 GHz = 2.80 × 10 億 = 28 億次/秒！絕對不是 2.8 億次！" },
      { title: "MIPS 測量指標", desc: "Million Instructions Per Second，每秒執行百萬條指令數。I 代表 Instruction（指令）。" },
      { title: "64 位元電腦", desc: "代表 CPU 內部的一般用途暫存器（GPR）與資料匯流排長度為 64 bits，一次可平行搬移運算 64 位元資料。" }
    ]
  },
  {
    category: "核心必背 6：常用傳輸連接埠一覽",
    badge: "實務介面",
    items: [
      { title: "Type-C", desc: "全功能通用介面！無正反面盲插、支援雙向大功率充電（USB-PD）、傳輸速度高達 40Gbps、可輸出影音。" },
      { title: "HDMI", desc: "高畫質多媒體介面，同步傳輸未壓縮數位視訊與多聲道音訊到螢幕或電視。" },
      { title: "Line Out", desc: "3.5mm 類比音源輸出孔（綠色孔），專接耳機或喇叭！【絕不可拿來插網路線上網】！" },
      { title: "RJ-45", desc: "8 芯乙太網路實體接孔，專門用來插實體網路線上網。" },
      { title: "熱插拔（Hot Swap）", desc: "電腦開機或關機狀態下皆可隨時安全插拔周邊裝置（如 USB、HDMI、外接硬碟）。" }
    ]
  }
];

