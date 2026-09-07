// ============================================================
// content.js — 全站內容的唯一來源
//
// 設計原則：一個實體 = 一個物件。語言無關的欄位（id、年份、DOI、
// 顏色、座標）只寫一次；只有字串分 zh / en。
// 新增專案或論文 = 新增一個物件，不需要動任何元件程式碼。
// ============================================================

// ─────────────────────────────────────────────
// 研究軸線
// ─────────────────────────────────────────────

export const tracks = [
  {
    id: '01',
    key: 'dementia',
    color: 'var(--clay)',
    colorHex: '#C27B56',
    keywords: ['Participatory Design', 'Dementia Care', 'Relational Technology', 'Person-Centered Care'],
    zh: {
      title: '失智照護的參與式設計',
      titleAlt: 'Participatory Design for Dementia Care',
      short: '失智照護',
      excluded: '失去表達能力的長輩，與很少被聽見的照護者',
      tagline: '為很少人替他們發聲的照護者，做被看見的設計。',
      desc: '我自 2018 年起先在板橋榮家展開田野，2019 年擴展到台北榮家。透過參與式設計方法，與失智長輩、照護者共同開發多組關係性科技—夢想存錢筒、拾億手環、健康水管家。我的研究關心的不只是「科技能做什麼」，更想凸顯一件事：照護者的工作與價值長期被低估，卻很少人幫他們發聲。近年成果發表於 Dementia (SSCI)。',
    },
    en: {
      title: 'Participatory Design for Dementia Care',
      titleAlt: '失智照護的參與式設計',
      short: 'Dementia Care',
      excluded: 'Elders who have lost the ability to express what they need, and caregivers who are rarely heard',
      tagline: 'Designing to make visible the caregivers whose voices too few have carried.',
      desc: 'I began fieldwork at Banqiao Veterans Home in 2018 and extended to Taipei Veterans Home in 2019. Through participatory design with residents living with dementia and their caregivers, we have co-developed a series of relational technologies — Dream Coin Bank, Memory Bracelet, and Health Water Butler. My research is not only about what technology can do. I want to foreground something else: the work and value of caregivers have long been undervalued, and too few are speaking up on their behalf. Recent outcomes are published in Dementia (SSCI).',
    },
  },
  {
    id: '02',
    key: 'citizen',
    color: 'var(--moss)',
    colorHex: '#556B48',
    keywords: ['Citizen Science', 'More-than-Human Design', 'Environmental Education', 'HCI'],
    zh: {
      title: '公民科學與 More-than-Human Design',
      titleAlt: 'Citizen Science & More-than-Human Design',
      short: '公民科學',
      excluded: '沒有話語權的物種，與被當成資料來源的市民',
      tagline: '讓每個人，都能為自己所處的生活環境盡一份力量。',
      desc: '公民科學的核心，是培養公民對自己所處生活環境的敏銳度。我的研究關心設計如何作為中介—讓一般民眾、社區、學生都能為生活的環境盡一份自己的力量。代表專案「蛙抵家 Identifrog」整合 AI 聲音辨識與行動學習，邀請民眾參與蛙類觀察；另有以生態議題為主題的一系列桌遊，讓環境知識透過遊戲被理解、被傳遞。這條軸線也延伸到「更多於人類設計（More-than-Human Design）」—重新思考設計與其他物種、與環境的關係。',
    },
    en: {
      title: 'Citizen Science & More-than-Human Design',
      titleAlt: '公民科學與 More-than-Human Design',
      short: 'Citizen Science',
      excluded: 'Species with no voice, and citizens treated as data sources rather than participants',
      tagline: 'So that everyone can contribute their part to the environment they live in.',
      desc: "At the heart of citizen science is cultivating citizens' sensitivity to the environments they inhabit. My research examines design as a mediator—enabling citizens, communities, and students to contribute their own part to the environments they live in. The Identifrog project integrates AI sound recognition with mobile learning to invite citizens into frog observation; a series of board games on ecological themes lets environmental knowledge be understood and transmitted through play. This track also extends into More-than-Human Design—rethinking the relationships between design, other species, and the environment.",
    },
  },
  {
    id: '03',
    key: 'education',
    color: 'var(--indigo)',
    colorHex: '#3B4E6B',
    keywords: ['Design Thinking', 'Systems Thinking', 'PBL', 'Teacher Empowerment'],
    zh: {
      title: '設計思考教育的方法論創新',
      titleAlt: 'Design Thinking Education Methodology',
      short: '設計思考教育',
      excluded: '被當成受訓對象、而不是設計者的師生',
      tagline: '把設計思考帶進不是設計系的地方。',
      desc: '設計教育不只是培養設計師，而是培養能在複雜情境中行動的人。自 2016 年起，我探索設計思考如何與系統思考、問題導向學習（PBL）、生成式 AI 等方法整合。我是教育部苗圃計畫的核心教練，從 2017 年參與至今，持續將設計思考工作坊擴散到全台 30 餘所大學與中小學—苗圃計畫目前已納入教育部新工程教育計畫（NEEMEC）的體系中。此外，透過與林堉璘宏泰教育基金會合作的 Changemaker 高中計畫，我也將設計思考帶入高中現場，培力高中師生以設計思考回應真實的社會議題。',
    },
    en: {
      title: 'Design Thinking Education Methodology',
      titleAlt: '設計思考教育的方法論創新',
      short: 'Design Thinking Edu.',
      excluded: 'Teachers and students treated as trainees rather than designers',
      tagline: 'Bringing design thinking to places that are not design schools.',
      desc: 'Design education is not only about training designers, but cultivating people who can act in complex situations. Since 2016, I have explored how design thinking integrates with systems thinking, PBL, and generative AI. I have been a core coach of the Miaopu Project for Design Thinking since 2017, diffusing workshops to 30+ universities and schools across Taiwan. The Miaopu Project has since been incorporated into the MOE NEEMEC program. In addition, through the Yu-Lin Changemaker Program with the Lin Yu-Lin Hongtai Education Foundation, I have brought design thinking into high schools—empowering teachers and students to respond to real social issues.',
    },
  },
  {
    id: '04',
    key: 'humanai',
    color: 'var(--plum)',
    colorHex: '#6B4A7A',
    keywords: ['Human-Centered AI', 'Task-System Fit', 'Critical Thinking', 'Interface Design'],
    zh: {
      title: '人本 AI 設計',
      titleAlt: 'Human-Centered AI Design',
      short: '人本 AI',
      excluded: '判斷力正在被 AI 取代的專業者',
      tagline: '讓 AI 看得見人，讓人看得見 AI 在做什麼。',
      desc: 'AI 進入設計與生活的速度太快，我們必須重新思考「人」在系統中的位置。這條軸線目前由 Talaria（KKCompany 合作，音樂策展 AI 系統）開展，探討當 AI 成為共同創作者時，人類的判斷、品味、價值如何被保留。未來蛙抵家的 AI 聲音辨識介面設計，也將延伸這條軸線—如何讓民眾與 AI 一起工作，而不是被 AI 代替。',
    },
    en: {
      title: 'Human-Centered AI Design',
      titleAlt: '人本 AI 設計',
      short: 'Human-Centered AI',
      excluded: 'Professionals whose judgment is being replaced by AI',
      tagline: 'Letting AI see humans; letting humans see what AI is doing.',
      desc: 'AI is entering design and everyday life too fast. We have to rethink the place of "the human" in these systems. This track currently unfolds through Talaria (a music curation AI system developed with KKCompany), which examines how human judgment, taste, and values can be preserved when AI becomes a co-creator. Identifrog\'s future direction—designing human-AI interaction in the sound recognition interface—will extend this track: letting citizens work with AI, rather than be replaced by it.',
    },
  },
];

// 跨軸連結：研究實際上如何從一條軸線延伸到另一條
export const trackLinks = [
  { from: '01', to: '03', zh: '大專生研究計畫', en: 'Student Research' },
  { from: '03', to: '02', zh: '遊戲設計', en: 'Game Design' },
  { from: '02', to: '04', zh: '蛙抵家未來', en: 'Identifrog →' },
];

// ─────────────────────────────────────────────
// 研究定位
//
// 放在 Hero 之後、研究地圖之前：先說主張，再讓地圖當證據。
//
// ── Claude 的三個修改建議（要用就直接替換對應欄位）──
//
// 1. question 目前是沒有主句的殘句（以「如何」開頭、句號結尾）。
//    建議把它接到 thesis 後面，用冒號串起來：
//      thesis: '我的研究不是在設計產品，而是在設計「參與」本身：'
//      question: '如何讓原本沒有聲音、沒有參與機會的人（或甚至非人），透過設計重新成為參與者。'
//    或維持獨立但改成問號結尾。
//
// 2. 「不是在設計產品」與七個專案裡大量的裝置、遊戲、App 有張力。
//    保留物件、把論點架在物件之上的說法：
//      thesis: '我做出來的是裝置與遊戲，但真正在設計的是「參與」本身。'
//
// 3. 「重新成為參與者」的「重新」對失智長輩精準，對青蛙與高中生較鬆。
//    拿掉「重新」可以讓四條軸線一致。
// ─────────────────────────────────────────────

export const positioning = {
  zh: {
    label: '研究定位',
    // 完整的自我介紹與研究歷程放在 yfchen.info，這裡只留論點，
    // 避免兩個站放幾乎相同的內容而互相壓過對方的搜尋排名。
    thesis: '我的研究不是在設計產品，而是在設計「參與」本身。',
    question:
      '如何讓原本沒有聲音、沒有參與機會的人（或甚至非人），透過設計重新成為參與者。',
    bridge: '以下四條軸線，是這個問題在四個場域裡的展開。',
  },
  en: {
    label: 'Research Position',
    thesis: 'My research is not about designing products. It is about designing participation itself.',
    question:
      'How can those who have had no voice and no opportunity to take part — people, or even non-people — become participants again, through design.',
    bridge: 'The four tracks below are how that question unfolds across four sites.',
  },
};

// ─────────────────────────────────────────────
// 專案
//
// nature: 'research' 研究 | 'industry' 產學 | 'practice' 實踐
// image:  放在 /public/img/ 之下的路徑，沒有圖就設 null
// ─────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    track: '01',
    nature: 'research',
    years: '2021–2025',
    image: null,
    zh: {
      title: '認知悠能',
      short: '認知悠能',
      subtitle: 'Cognitive Vitality: Co-Designing Culturally Situated Technologies for Dementia Care',
      duration: '3 年期國科會計畫（I）（II）（III）+ 2024–2025 多重感官體驗互動玩具套件組（I）',
      site: '板橋榮民之家 / 台北榮民之家',
      collaboration: '板橋榮家、台北榮家',
      grant: '國科會',
      outcome: '「從錢幣到水杯」等兩篇論文發表於 Dementia (SSCI) 期刊',
      narrative:
        '有位長輩第一次看到夢想存錢筒時，指著上面的飛機圖案說他想去巴西看家人。旁邊的護理師沒有糾正他，只說：「北北，那我們要認真存錢，才能買機票。」這一幕讓我看見，照護不是把長輩拉回我們的現實，而是走進他們的現實裡、陪他們繼續活著。這個裝置後來被照護者重新使用—當長輩情緒失調時，它成了轉移注意力的媒介。這是設計最動人的部分：它在現場被重新定義（design-in-use）。\n\n另一位長輩失智前是太極拳好手，失智後幾乎不動。我們為他部署了拾億手環—一個會連動周邊螢幕、播放太極拳影片的裝置。八週之後，他從不動，到跟著動，到最後，教照服員打太極拳。那不是科技讓他動起來，是科技打開了一扇門，讓他想起自己是誰。\n\n這個研究讓我明白：最好的照護科技，不是幫長輩「做」什麼，而是讓他們繼續做自己。',
      methods: [
        '參與式設計 (Participatory Design)',
        '民族誌研究 (Ethnography)',
        '關係性科技 (Relational Technology)',
        'design-in-use 觀點',
        'Research through Design',
      ],
      reflection: '最好的照護科技，是能讓長輩繼續做自己的那一種。',
    },
    en: {
      title: 'Cognitive Vitality',
      short: 'Cognitive Vitality',
      subtitle: 'Co-Designing Culturally Situated Technologies for Dementia Care',
      duration: '3-year NSTC project (I)(II)(III) + 2024–2025 multi-sensory interactive toy kit (I)',
      site: 'Banqiao & Taipei Veterans Homes',
      collaboration: 'Banqiao Veterans Home, Taipei Veterans Home',
      grant: 'NSTC',
      outcome: '"From Coins to Cups" and a second paper published in Dementia (SSCI)',
      narrative:
        'The first time an elder saw the Dream Coin Bank, he pointed at the airplane on it and said he wanted to go to Brazil to visit his family. The nurse beside him did not correct him. She simply said: "Bei-bei, then we will have to save up for the ticket." That moment showed me something: care is not about pulling elders back into our reality — it is about entering theirs, and continuing to live alongside them. The device was later repurposed by caregivers: when an elder experienced distress, it became a way to redirect attention. This is the most moving part of design — it gets redefined on-site (design-in-use).\n\nAnother elder had been a Tai Chi practitioner before dementia; afterwards, he barely moved. We deployed the Memory Bracelet for him — a device that connects to nearby screens and plays Tai Chi videos. Over eight weeks, he went from not moving, to moving along, and finally, to teaching the care aides how to do Tai Chi. It was not technology that made him move. Technology opened a door, and he remembered who he was.\n\nThis research taught me: the best care technology is not about doing things for elders. It is about letting them go on being themselves.',
      methods: [
        'Participatory Design',
        'Ethnography',
        'Relational Technology',
        'Design-in-use Perspective',
        'Research through Design',
      ],
      reflection: 'The best care technology is the kind that lets elders go on being themselves.',
    },
  },
  {
    id: 2,
    track: '02',
    nature: 'industry',
    years: '2022–',
    image: null,
    zh: {
      title: '蛙抵家 Identifrog',
      short: '蛙抵家',
      subtitle: 'AI-powered Citizen Science for Frog Observation',
      duration: '進行中',
      site: '全台蛙類棲地（以濕地為主）',
      collaboration: '大浪據文化（生態內容）、景澤創意（公民科學社群經營）、元智大學蘇泰元（AI 聲音辨識）',
      grant: '國科會、大浪據文化、景澤創意',
      outcome: '發表於 CoDesign 期刊、上架 App、IRB 通過、AI 蛙類聲音辨識模型、GitHub 開源',
      narrative:
        '為什麼是蛙類？不是貓狗、不是鳥類，也不是蝴蝶。\n\n青蛙特別的地方，在於我們很少為牠們「停下來聽」。牠們的存在不像鳥鳴那樣清亮，也不像昆蟲那樣隨處可見—蛙鳴往往藏在春夏的雨夜裡，只有當一個人願意停下腳步、打開耳朵，才會被聽見。做一個讓公民聽青蛙的 App，本質上是在邀請大家重新感知那些平常不會被注意到的生活環境。這是 More-than-Human Design 的起點：我們不是為人類的方便設計，而是為人與蛙共同存在的那個環境設計。\n\n蛙抵家是一個跨單位的協作成果。大同大學負責設計與使用者經驗、大浪據文化負責生態內容、景澤創意負責公民科學社群經營、元智大學（蘇泰元老師）負責 AI 聲音辨識。把生態學家、社群經營者、AI 工程師、設計師的語言整合進同一個介面，是這個研究最困難的部分—每一方對「怎樣才叫一次有意義的觀察」都有自己的堅持。我們花了很多時間把這些堅持對齊，才做出一個讓一般人真的打得開、用得下去的 App。\n\n公民科學的意義，不是讓民眾變成科學家，而是讓科學變成生活的一部分。',
      methods: [
        '公民科學 (Citizen Science)',
        '參與式設計 (Participatory Design)',
        '更多於人類的設計 (More-than-Human Design)',
        'Research through Design',
      ],
      reflection: '公民科學的意義，不是讓民眾變成科學家，而是讓科學變成生活的一部分。',
    },
    en: {
      title: 'Identifrog',
      short: 'Identifrog',
      subtitle: 'AI-powered Citizen Science for Frog Observation',
      duration: 'Ongoing',
      site: 'Frog habitats across Taiwan (wetlands)',
      collaboration:
        'DaLangJu Culture (ecological content), ECoDreaming (citizen science community), Yuan Ze University — Prof. Su Tai-Yuan (AI sound recognition)',
      grant: 'NSTC, DaLangJu Culture, ECoDreaming',
      outcome: 'Published in CoDesign; published app, IRB approval, AI frog sound recognition model, GitHub repository',
      narrative:
        'Why frogs? Not cats or dogs, not birds, not butterflies.\n\nWhat is special about frogs is that we rarely "stop to listen" for them. Their presence is not as clear as birdsong, nor as ubiquitous as insects — frog calls are hidden in the rainy nights of spring and summer, heard only when a person is willing to stop, and open their ears. To build an app that invites citizens to listen to frogs is, fundamentally, to invite people to re-perceive the living environments that usually go unnoticed. This is the starting point of More-than-Human Design: we design not for human convenience, but for the environment in which humans and frogs co-exist.\n\nIdentifrog is a cross-institutional collaboration. Tatung University leads design and user experience; DaLangJu Culture handles ecological content; ECoDreaming manages the citizen science community; Yuan Ze University develops the AI sound recognition. Integrating the languages of ecologists, community organizers, AI engineers, and designers into one interface is the hardest part of this research — each party has its own insistence on what counts as "a meaningful observation." We spent a long time aligning these insistences, so we could build an app that ordinary people could actually open and keep using.\n\nThe meaning of citizen science is not to turn citizens into scientists, but to make science part of everyday life.',
      methods: [
        'Citizen Science',
        'Participatory Design',
        'More-than-Human Design',
        'Research through Design',
      ],
      reflection:
        'The meaning of citizen science is not to turn citizens into scientists, but to make science part of everyday life.',
    },
  },
  {
    id: 3,
    track: '03',
    nature: 'practice',
    years: '2017–',
    image: null,
    zh: {
      title: '苗圃計畫',
      short: '苗圃計畫',
      subtitle: 'Miaopu Project: Interdisciplinary Faculty Development and Talent Cultivation',
      duration: '9 年',
      site: '全台 30+ 所大學、多所中小學',
      collaboration: '全台合作學校；參與 NEEMEC 新工程教育計畫',
      grant: '教育部',
      outcome: 'IASDR 2025 Best Paper (Design Education Track)、多場跨校工作坊、授證教練社群',
      narrative:
        '苗圃計畫從 2017 年開始，我以核心教練的身份參與至今，九年下來已經陪伴超過 200 位跨校教師發展設計思考教學，合作學校遍及全台 30 所以上的大學與中小學。\n\n這個計畫的推進有一條清晰的內在軌跡：最初是專業教師的培訓—把設計思考的方法論帶到各校工作坊；接著形成授證教練的社群—一群跨校的教師開始彼此交流、共同開發教材、互相支援；近年則進一步與教育部 NEEMEC（新工程教育）接軌，把設計思考整合進更大的跨領域師資發展計畫。從個別培訓到社群、再到體制接軌，這不只是一個計畫的擴張，而是一個方法論在不同尺度上被重新檢驗的過程。\n\n十年下來，我最深的一個觀察是：願意接受並真正執行設計思考的老師與學生，都對跨領域的對話和合作保持著開放的態度。設計思考不是一個可以被教會的「方法」—它是一種態度的延伸。工作坊真正做到的事，其實是辨認出那些本來就願意打開邊界的人，然後陪他們把這個態度在自己的學科裡具體展開。\n\n在不是設計系的地方教設計思考，是把設計還給它本來應該屬於的生活所有地方。',
      methods: [
        '設計思考 (Design Thinking)',
        '問題導向學習 (PBL)',
        '教師培力 (Teacher Training)',
        '跨領域協作 (Interdisciplinary Collaboration)',
      ],
      reflection: '在不是設計系的地方教設計思考，是把設計還給它本來應該屬於的生活所有地方。',
    },
    en: {
      title: 'Miaopu Project',
      short: 'Miaopu Project',
      subtitle: 'The Project for Interdisciplinary Faculty Development and Talent Cultivation',
      duration: '9 years',
      site: '30+ universities and K-12 schools across Taiwan',
      collaboration: 'Partner schools; participating in NEEMEC (New Engineering Education)',
      grant: 'Ministry of Education',
      outcome: 'IASDR 2025 Best Paper (Design Education), cross-university workshops, certified coach community',
      narrative:
        'The Miaopu Project began in 2017, and I have participated as a core coach ever since. Over these nine years, I have accompanied more than 200 cross-university educators in developing their design thinking pedagogy, working with 30+ universities and K-12 schools across Taiwan.\n\nThe project has followed a clear inner trajectory: it began with professional teacher training — bringing design thinking methodology into workshops at various schools; it then grew into a certified coach community — a cross-university network of educators who exchange ideas, co-develop teaching materials, and support one another; and in recent years it has been integrated into the MOE NEEMEC program, embedding design thinking within a larger interdisciplinary faculty development initiative. From individual training to community, and from community to institutional integration, this is not merely the expansion of a project — it is a methodology being re-examined at different scales.\n\nMy deepest observation over these ten years is this: the teachers and students who actually take up and practice design thinking are the ones who hold an openness toward interdisciplinary dialogue and collaboration. Design thinking is not a "method" that can be taught — it is the extension of an attitude. What our workshops really do is recognize those who are already willing to open their boundaries, and then walk alongside them as they unfold that attitude within their own disciplines.\n\nTeaching design thinking in places that are not design schools is returning design to all the places in life where it has always belonged.',
      methods: [
        'Design Thinking',
        'Problem-Based Learning (PBL)',
        'Teacher Training',
        'Interdisciplinary Collaboration',
      ],
      reflection:
        'Teaching design thinking in places that are not design schools is returning design to all the places in life where it has always belonged.',
    },
  },
  {
    id: 4,
    track: '04',
    nature: 'industry',
    years: '2024–',
    image: null, // 介面持續更新中，暫不放截圖；日後要放就填 '/img/檔名.jpg'
    zh: {
      title: 'Talaria',
      short: 'Talaria',
      subtitle: 'Human-Centered AI for Music Curation',
      duration: '進行中',
      site: 'KKBox / KKCompany 音樂平台',
      collaboration: 'KKCompany',
      grant: 'KKCompany',
      outcome: 'IASDR 2025 Best Paper (Human-Centered AI Track)、期刊論文準備中 (IJHCI)',
      narrative:
        'Talaria 是我與 KKCompany 合作的人本 AI 研究，探討 AI 如何成為專業音樂策展人的協作者，而不是取代者。\n\n當前大部分的 AI 產品把「自動化」當成目的—讓 AI 替人做決定、省去人的判斷。但音樂策展是一份高度依賴專業直覺的工作：好的策展人知道在什麼時刻、為什麼樣的聽眾、播哪一段音樂。這種判斷力無法被取代，也不應該被取代。我們在研究中看到，當 AI 試圖「幫策展人決定」一首歌的時候，策展人會立刻失去信任；但當 AI 以片段而不是整首歌的方式檢索、當 AI 把「為什麼推薦」的邏輯打開給策展人看的時候，信任才開始建立。\n\n這個研究讓我看見人本 AI 的設計重點：不是讓 AI 更聰明，而是讓 AI 更透明—讓專業者理解它在做什麼、並保有覆寫它的權力。AI 看得見人（理解策展人實際的工作節奏），人才看得見 AI（理解它的邏輯），兩者才可能真正協作。\n\n當 AI 看得見人，人才能信任它。',
      methods: [
        '人本 AI (Human-Centered AI)',
        '質性研究 (Qualitative Research)',
        'Research through Design',
      ],
      reflection: '當 AI 看得見人，人才能信任它。',
    },
    en: {
      title: 'Talaria',
      short: 'Talaria',
      subtitle: 'Human-Centered AI for Music Curation',
      duration: 'Ongoing',
      site: 'KKBox / KKCompany music platform',
      collaboration: 'KKCompany',
      grant: 'KKCompany',
      outcome: 'IASDR 2025 Best Paper (Human-Centered AI), journal paper in preparation (IJHCI)',
      narrative:
        'Talaria is a human-centered AI research project in collaboration with KKCompany, exploring how AI can become a collaborator — not a replacement — for professional music curators.\n\nMost AI products today treat "automation" as the goal — letting AI decide for people, saving them the effort of judgment. But music curation is work that depends heavily on professional intuition: a good curator knows when, for whom, and which segment of music to play. This kind of judgment cannot be replaced, and should not be replaced. In our research, we observed that when AI tried to "decide" a song for the curator, trust collapsed instantly; but when AI retrieved by segments rather than whole songs, and when AI opened up the reasoning of "why this recommendation" for curators to see, trust began to build.\n\nThis research showed me the real design focus of human-centered AI: not making AI smarter, but making AI more transparent — letting the professional understand what it is doing, and preserving their power to override it. When AI sees people, people can see AI; only then can genuine collaboration emerge.\n\nWhen AI sees people, people can trust it.',
      methods: ['Human-Centered AI', 'Qualitative Research', 'Research through Design'],
      reflection: 'When AI sees people, people can trust it.',
    },
  },
  {
    id: 5,
    track: '02',
    nature: 'industry',
    years: '2021–2026',
    image: null,
    zh: {
      title: '防災教育',
      short: '防災教育',
      subtitle: 'Disaster Education: From Risk to Action',
      duration: '6 年',
      site: '全台校園、經濟部水利署、防災輔導團',
      collaboration: '共同主持人—校園防災數位學習、智慧應答機器人',
      grant: '教育部、經濟部水利署',
      outcome:
        '教育部計畫 2 期（校園防災議題、地質災害與氣象水文）、水利署 6 年連續產學（110–115 年智慧應答機器人）、互動網站與防災電子書、全國輔導團培訓',
      narrative:
        '防災教育最大的難題，從來不是資訊不足—我們早就知道地震會來、颱風會來、淹水會來。真正的難題是：當風險抽象地存在於報告和數據中，人很難把它轉換成自己的行動。這個專案就是圍繞這個問題展開的：怎麼讓「知道風險」變成「做得到應對」。\n\n六年下來，這個問題我從兩個方向在回答。一個方向是教育部的校園防災計畫（2022–2025）—用問題導向學習（PBL）與 STEAM 教學法，讓學生不只是背誦地質災害或氣象水文的知識，而是透過動手解決具體情境的問題，把防災轉成可以實踐的能力。這個計畫是我進入防災教育的起點，也是我至今最在意的代表作。另一個方向是水利署的智慧應答機器人（2021–2026，連續六年產學）—把防災資訊設計成民眾可以在關鍵時刻即時詢問的介面，讓風險判斷不再只是專家的事。\n\n一個是在教室裡的轉譯，一個是在日常裡的轉譯。兩條線指向同一件事：風險知識只有在能被使用時才有意義。\n\n防災教育的關鍵，不是讓人知道風險，而是讓人能在風險來臨時知道怎麼做。',
      methods: [
        '問題導向學習 (PBL)',
        'STEAM 教學法',
        '以使用者經驗為中心的設計 (UX Design)',
      ],
      reflection: '防災教育的關鍵，不是讓人知道風險，而是讓人能在風險來臨時知道怎麼做。',
    },
    en: {
      title: 'Disaster Education',
      short: 'Disaster Education',
      subtitle: 'From Risk to Action',
      duration: '6 years',
      site: 'Schools across Taiwan, Water Resources Agency, disaster advisory teams',
      collaboration: 'Co-PI — school-based disaster digital learning; intelligent response robot',
      grant: 'Ministry of Education, Water Resources Agency',
      outcome:
        'Two MOE projects; 6 consecutive years of Water Resources Agency contracts (2021–2026); interactive website and disaster e-books; national teacher training',
      narrative:
        'The greatest difficulty in disaster education has never been a lack of information — we have long known that earthquakes come, typhoons come, floods come. The real difficulty is this: when risk exists abstractly in reports and data, people find it hard to translate it into their own actions. This project is built around that question: how do we turn "knowing the risk" into "knowing what to do about it"?\n\nOver six years, I have been answering this from two directions. The first is the MOE school-based disaster education project (2022–2025) — using Problem-Based Learning and STEAM pedagogy to let students engage with specific, hands-on scenarios rather than memorize facts, turning disaster awareness into an actionable capacity. This project is my entry point into disaster education, and remains the work I care about most. The second is the Water Resources Agency\'s intelligent response robot (2021–2026) — designing disaster information into an interface that citizens can query at critical moments, so that risk judgment no longer belongs only to experts.\n\nOne is translation in the classroom; the other is translation in everyday life. Both point to the same thing: risk knowledge is only meaningful when it can actually be used.\n\nThe key to disaster education is not letting people know about risk, but enabling them to know what to do when risk arrives.',
      methods: ['Problem-Based Learning (PBL)', 'STEAM Pedagogy', 'User Experience Design'],
      reflection:
        'The key to disaster education is not letting people know about risk, but enabling them to know what to do when risk arrives.',
    },
  },
  {
    id: 6,
    track: '01',
    nature: 'research',
    years: '2016–2019',
    image: null,
    zh: {
      title: '活躍高齡化 × 銀髮遊戲設計',
      short: '活躍高齡化',
      subtitle: 'Active Aging × Silver Gaming: Integrating WHO Framework into Game Design',
      duration: '3 年期國科會計畫（I）（II）（III）',
      site: '台北市信義區、萬華區高齡者社區場域',
      collaboration: '信義區公所、板橋榮家',
      grant: '國科會',
      outcome: '發表於 JMIR Serious Games (SCIE) 期刊',
      narrative:
        '「我還記得明星花露水的味道，因為我們家每天早上都用—它讓我想起跟媽媽和姐姐在一起的美好時光。」這是我們研究中一位長輩的話。當我們用十個 1960–1980 年代的物件（明星花露水、大同寶寶、竹蜻蜓、旋轉電話、茄芷帽、金平糖等）設計一個結合 AR 擴增實境的桌遊「懷舊尋寶者」（Nostalgic Seekers）時，我們看見的不是長輩在「玩遊戲」，而是長輩在透過物件找回自己的故事。\n\n這三年的國科會計畫（2016–2019），源於一個問題：主流遊戲設計幾乎完全忽略長輩—長輩要不被當作「需要被防備認知衰退的對象」，要不就被從市場中省略。但 WHO 的「活躍高齡化」框架提醒我們：長輩需要的是積極參與，不是被動防備。我們用這個框架重新定義遊戲設計的目標：為 50–59 歲、「下一世代的長輩」設計他們會想玩、玩得下去、從中找到意義的遊戲。\n\n研究過程中我們看見幾件令人意外的事。長輩在玩桌遊時，解決問題的對話遠比閒聊多—他們是專注的玩家，不是在殺時間。長輩不害怕 AR 技術—當他們遇到困難時，他們會彼此幫忙搞懂介面，反而把學習新科技變成遊戲的一部分。這個研究最後發表於 JMIR Serious Games，但對我而言更重要的是：它打破了一個我原本也帶著的預設—長輩不會玩、不懂科技、只能被動接受安排。\n\n為長輩設計遊戲，第一步是承認他們是玩家。',
      methods: [
        '以玩家為中心的設計 (Player-Centered Design)',
        '活躍高齡化框架 (Active Aging Framework)',
        '遊戲設計 (Game Design)',
        '脈絡研究 (Contextual Inquiry)',
        '混合研究方法 (Mixed Methods)',
      ],
      reflection: '為長輩設計遊戲，第一步是承認他們是玩家。',
    },
    en: {
      title: 'Active Aging × Silver Gaming',
      short: 'Active Aging',
      subtitle: 'Integrating the WHO Active Aging Framework into Game Design for Older Adults',
      duration: '3-year NSTC project (I)(II)(III)',
      site: 'Community sites in Xinyi and Wanhua Districts, Taipei',
      collaboration: 'Taipei Xinyi District Office, Banqiao Veterans Home',
      grant: 'NSTC',
      outcome: 'Published in JMIR Serious Games (SCIE)',
      narrative:
        '"I still remember the smell of Ming Sing Floral Water because my family used it every morning — it reminds me of the wonderful time I had with my mom and sisters." This is what one elder said during our research. When we designed Nostalgic Seekers — an augmented reality board game built around ten objects from 1960s–1980s Taiwan — what we saw was not elders "playing a game," but elders reclaiming their own stories through objects.\n\nThis three-year NSTC project (2016–2019) began with a problem: mainstream game design almost entirely ignores older adults. Elders are either treated as "subjects to be safeguarded against cognitive decline," or simply left out of the market. But the WHO\'s Active Aging framework reminds us: what elders need is active participation, not passive protection. We used this framework to redefine the goal of game design — to build games for 50–59 year-olds, "the next generation of elders," that they would want to play, could actually play, and would find meaning in.\n\nThe research revealed several surprising observations. When playing the board game, elders engaged in task-oriented problem-solving conversations far more than casual chat — they were focused players, not killing time. Elders were not afraid of AR technology — when they encountered difficulty, they helped each other figure out the interface, turning the learning of new technology into part of the game itself. The study was eventually published in JMIR Serious Games, but what mattered more to me is this: it broke an assumption I had carried myself — that elders cannot play, cannot handle technology, can only passively accept what is arranged for them.\n\nTo design games for elders, the first step is to recognize that they are players.',
      methods: [
        'Player-Centered Design',
        'Active Aging Framework',
        'Game Design',
        'Contextual Inquiry',
        'Mixed Methods',
      ],
      reflection: 'To design games for elders, the first step is to recognize that they are players.',
    },
  },
  {
    id: 7,
    track: '03',
    nature: 'industry',
    years: '2024–2026',
    image: null,
    zh: {
      title: '堉璘 Changemaker 高中計畫',
      short: '堉璘 Changemaker',
      subtitle: 'Yu-Lin Changemaker Program: Design Thinking into High Schools',
      duration: '2 年（進行中）',
      site: '全台合作高中',
      collaboration: '教育部苗圃計畫',
      grant: '林堉璘宏泰教育基金會',
      outcome: '超過 200 位高中生培力、合作 NPO 實際募款專案、第二年擴展到老師培力',
      narrative:
        '堉璘 Changemaker 是我與林堉璘宏泰教育基金會合作、結合教育部苗圃計畫的兩年產學計畫（2024–2026）。我擔任共同主持人，用設計思考與 PBL 方法，帶領超過 200 位高中生投入 NPO 的真實議題—不是模擬的案例，是合作 NPO 真正在頭痛的問題。\n\n第一年，我們看見的不是「高中生在學習設計思考」，而是高中生為 NPO 做出了具體的募款專案。這些募款專案不是教學展示，是 NPO 實際可以拿去用的東西。這個過程打破了我原本的一個預設—真實的設計工作，不需要等到大學或專業訓練之後才能開始。高中生本來就有設計的能力，只是很少有人把真實的問題交到他們手上。\n\n第二年，我們做了一個決定：把計畫從「培訓學生」擴展到「培力老師」。因為我們發現—學生的改變只是一個案例，老師的改變才是讓設計思考真正進入教育系統的關鍵。一個被培力的老師會繼續教下一屆、再下一屆，讓這些方法在高中課堂裡生根。這個計畫對我而言，是驗證設計思考可以如何跨入教育體制的一個實驗場。\n\n學生的改變只是開始，老師的改變才是真正的教育系統翻轉。',
      methods: [
        '設計思考 (Design Thinking)',
        '問題導向學習 (PBL)',
        '教師培力 (Teacher Training)',
        '產學合作 (Industry-Academic Collaboration)',
        'NPO 夥伴關係',
      ],
      reflection: '學生的改變只是開始，老師的改變才是真正的教育系統翻轉。',
    },
    en: {
      title: 'Yu-Lin Changemaker Program',
      short: 'Yu-Lin Changemaker',
      subtitle: 'Design Thinking into High Schools',
      duration: '2 years (ongoing)',
      site: 'Partner high schools across Taiwan',
      collaboration: 'MOE Miaopu Project',
      grant: 'Lin Yu-Lin Hongtai Education Foundation',
      outcome:
        'Over 200 high school students empowered; concrete fundraising projects for NPOs; expanded to teacher empowerment in Year 2',
      narrative:
        'Yu-Lin Changemaker is a two-year industry-academic collaboration (2024–2026) with the Lin Yu-Lin Hongtai Education Foundation, co-delivered with the Miaopu Project. As co-principal investigator, I led more than 200 high school students through design thinking and PBL to engage with real NPO issues — not simulated cases, but the problems the partner NPOs were actually grappling with.\n\nIn the first year, what we saw was not "high school students learning design thinking," but high school students producing concrete fundraising projects for NPOs. These were not teaching demos — they were deliverables that the NPOs could actually use. This process broke one of my own assumptions: real design work does not need to wait until university or professional training. High school students already have the capacity to design; what is rare is someone handing them a real problem.\n\nIn the second year, we made a decision: to expand the program from "training students" to "empowering teachers." We had realized that the change in a student is only one case, while the change in a teacher is what truly lets design thinking enter the educational system. An empowered teacher will go on teaching the next cohort, and the next, letting these methods take root in high school classrooms. For me, this project is a testbed for how design thinking can enter the formal education system.\n\nThe change in students is only the beginning; the change in teachers is what truly transforms the educational system.',
      methods: [
        'Design Thinking',
        'Problem-Based Learning (PBL)',
        'Teacher Training',
        'Industry-Academic Collaboration',
        'NPO Partnerships',
      ],
      reflection:
        'The change in students is only the beginning; the change in teachers is what truly transforms the educational system.',
    },
  },
];

// ─────────────────────────────────────────────
// 代表論文
//
// 只放精選；完整清單在 yfchen.info/研究著作。
//
// 新增一筆的寫法：
//   {
//     id: 'short-slug',          // 任意唯一字串
//     type: 'journal',           // 'journal' | 'conference'
//     year: '2026',
//     track: '01',               // 對應哪條研究軸線，沒有就寫 null
//     venue: 'Journal Name',
//     venueZh: null,             // 只有中文刊名不同時才填
//     tag: 'SSCI',               // 顯示在刊名下方的標籤
//     authors: 'Chen, Y-F., ...',
//     authorsZh: null,           // 只有「中文期刊」才填中文作者列。作者名的形式
//                                // 跟著論文本身的語言走，不跟著介面語言走 —— 作者列
//                                // 是引用資訊，正確形式由期刊決定。
//     title: 'English Title',
//     titleZh: null,             // 只有中文標題不同時才填
//     doi: '10.xxxx/xxxxx',      // 沒有就寫 null
//     award: null,               // 有得獎就填字串，會顯示成 ★ 標記
//   }
// ─────────────────────────────────────────────

export const publications = [
  {
    id: 'listening-with-frogs',
    type: 'journal',
    year: '2026',
    track: '02',
    venue: 'CoDesign',
    venueZh: null,
    tag: 'AHCI', // 待確認：不同索引資料庫對 CoDesign 的標示不一致，請以你查到的為準
    authors: 'Chen, Y-F., Wu, S-J., & Su, T-Y.',
    authorsZh: null,
    title: 'Listening with Frogs: Sonic Thick Mapping for More-than-Human Participation',
    titleZh: null,
    doi: '10.1080/15710882.2026.2726166',
    award: null,
  },
  {
    id: 'designing-engagement',
    type: 'journal',
    year: '2026',
    track: '01',
    venue: 'Dementia',
    venueZh: null,
    tag: 'SSCI',
    authors: 'Chen, Y-F., Hung, C-M., Yao, Y-T., & Chung, S-T.',
    authorsZh: null, // 英文期刊，引用形式就是英文；中文期刊才填中文作者列
    title:
      'Designing Engagement in Dementia Care: Embodied Participation, Situated Adaptation, and Co-Design-In-Practice',
    titleZh: null,
    doi: '10.1177/14713012261472933',
    award: null,
  },
  {
    id: 'coins-to-cups',
    type: 'journal',
    year: '2026',
    track: '01',
    venue: 'Dementia',
    venueZh: null,
    tag: 'SSCI',
    authors: 'Chen, Y-F., Yao, Y-T., & Hung, C-M.',
    authorsZh: null,
    title:
      'From Coins to Cups: Co-Designing Culturally Situated Technologies for Person-Centered Dementia Care',
    titleZh: null,
    doi: '10.1177/14713012261440582',
    award: null,
  },
  {
    id: 'water-intake',
    type: 'journal',
    year: '2025',
    track: '01',
    venue: 'Journal of Leisure Studies',
    venueZh: '休閒研究',
    tag: 'TCI-HSS',
    authors: 'Chen, Y-F., Yao, Y-T., & Hung, C-M.',
    authorsZh: '陳彥甫、姚彥廷、洪嘉妙',
    title: 'Promoting Healthy Water Intake for Older Adults with Dementia in Long-Term Care Facilities',
    titleZh: '促進長照機構內高齡失智症患者健康飲水之研究',
    doi: null,
    award: null,
  },
  {
    id: 'iasdr-talaria',
    type: 'conference',
    year: '2025',
    track: '04',
    venue: 'IASDR 2025',
    venueZh: null,
    tag: 'Human-Centered AI Track',
    authors: 'Chen, Y-F., Lou, J-K., Guan, S-H.',
    authorsZh: null,
    title:
      'Talaria: Designing Segment-Based Audio Retrieval to Support Human-Centered Music Curation',
    titleZh: null,
    doi: '10.21606/iasdr.2025.87',
    award: 'Best Paper',
  },
  {
    id: 'iasdr-serious-game',
    type: 'conference',
    year: '2025',
    track: '03',
    venue: 'IASDR 2025',
    venueZh: null,
    tag: 'Design Education Track',
    authors: 'Chen, Y-F., Weng, C-C., Cheng, T-Y.',
    authorsZh: null,
    title: 'Cultivating Critical Design Agency through Serious Game Design',
    titleZh: null,
    doi: '10.21606/iasdr.2025.731',
    award: 'Best Paper',
  },
  {
    id: 'jmir-board-game',
    type: 'journal',
    year: '2020',
    track: '01',
    venue: 'JMIR Serious Games',
    venueZh: null,
    tag: 'SCIE',
    authors: 'Chen, Y-F. & Janicki, S.',
    authorsZh: null,
    title:
      'A Cognitive-Based Board Game with Augmented Reality for Older Adults: Development and Usability Study',
    titleZh: null,
    doi: '10.2196/22007',
    award: null,
  },
  {
    id: 'cjse-dbl',
    type: 'journal',
    year: '2018',
    track: '03',
    venue: 'Chinese Journal of Science Education',
    venueZh: '科學教育學刊',
    tag: 'TSSCI',
    authors: 'Yang, C-Y., Kang, S-C., Chen, Y-F., et al.',
    authorsZh: '楊朝陽、康仕仲、陳彥甫 等',
    title: 'Exploring Age-Friendly Design Curriculum through Design-Based Learning',
    titleZh: '以「設計導向學習」模式初探智齡設計課程',
    doi: '10.6173/CJSE.201812/SP_26.0002',
    award: null,
  },
];

// ─────────────────────────────────────────────
// 研究地圖座標
// 桌機：菱形配置。手機：依跨軸連結的順序垂直排列（01 → 03 → 02 → 04）
// ─────────────────────────────────────────────

export const mapLayout = {
  desktop: {
    viewBox: '0 0 1000 700',
    trackRadius: 62,
    projectRadius: 26,
    tracks: { '01': [230, 240], '02': [770, 240], '03': [230, 520], '04': [770, 520] },
    projects: {
      1: [105, 120],
      6: [105, 360],
      2: [895, 120],
      5: [895, 360],
      3: [100, 640],
      7: [360, 646],
      4: [895, 640],
    },
  },
  mobile: {
    viewBox: '0 0 400 1230',
    trackRadius: 46,
    projectRadius: 20,
    tracks: { '01': [200, 165], '03': [200, 465], '02': [200, 765], '04': [200, 1065] },
    projects: {
      1: [80, 58],
      6: [320, 58],
      3: [80, 358],
      7: [320, 358],
      2: [80, 658],
      5: [320, 658],
      4: [320, 958],
    },
  },
};

// ─────────────────────────────────────────────
// 介面文字
// ─────────────────────────────────────────────

export const SITE_URL = 'https://work.yfchen.info';
export const FULL_PROFILE_URL = 'https://www.yfchen.info';
export const PUBLICATIONS_URL = 'https://www.yfchen.info/研究著作';

export const ui = {
  zh: {
    lang: 'zh-Hant',
    name: '陳彥甫',
    nameEn: 'Yen-Fu Chen',
    role: '大同大學 數位媒體設計學系',
    role2: '參與式設計研究室',
    nav: { home: '研究地圖', projects: '專案', profile: '完整學術檔案' },
    langToggle: 'EN',
    langToggleLabel: '切換為英文',
    heroEyebrow: '研究與實踐',
    heroTitle: '我關心設計如何\n走進生活',
    heroSubtitle: '尤其是在那些，\n還沒有人被邀請參與的地方。',
    heroNote: '這裡放的是研究軸線與專案。學歷、教學、演講、學術服務等完整資料在',
    mapLabel: '研究地圖',
    mapTitle: '四條軸線，七個專案，一張互連的地圖',
    mapHint:
      '滑過或以鍵盤聚焦節點，看見研究軸線之間的關聯。虛線是跨軸連結—研究並非各自獨立，而是透過大專生研究計畫、遊戲設計、AI 介面彼此延伸。點擊節點可跳到該軸線或專案。',
    mapLegendCross: '跨軸連結 · 研究的延伸方向',
    tracksLabel: '四條研究軸線',
    tracksTitle: '在真實場域中發展設計知識',
    tracksLede: '四條軸線的差別不在題目，而在誰被排除在參與之外。',
    excludedLabel: '誰被排除在參與之外',
    pubLabel: '代表論文',
    pubTitle: '在國際期刊與會議中累積',
    pubJournal: '期刊論文',
    pubConference: '國際會議',
    pubFullList: '查看完整論文清單',
    pubFullListNote: '完整著作、專書與研討會論文清單在主站。',
    projectsLabel: '研究與實踐',
    projectsTitle: '七個專案，四條軸線',
    projectsIntro:
      '以下七個計畫，差不多涵蓋了我這幾年的工作樣貌—有國科會支持的研究、有跟企業與政府的產學合作、也有從教學現場慢慢長出的實踐計畫。它們分屬四條研究軸，彼此之間也會互相影響。',
    filterLabel: '依性質篩選',
    filterAll: '全部',
    nature: { research: '研究', industry: '產學', practice: '實踐' },
    fieldPeriod: '期間',
    fieldSite: '場域',
    fieldPartners: '合作',
    fieldGrant: '計畫資助',
    fieldOutcome: '成果',
    sectionStory: '專案故事',
    sectionMethods: '使用方法',
    sectionReflection: '反思',
    viewProjects: '閱讀七個專案的完整故事',
    backHome: '回研究地圖',
    notFoundTitle: '找不到這一頁',
    notFoundBody: '這個網址不存在，可能是連結有誤或頁面已經搬家。',
    footerContact: '聯絡',
    footerProfiles: '學術檔案',
    footerAddress: '臺北市中山區中山北路三段 40 號\n大同大學經營大樓 202B',
    footerCta: '歡迎合作與指導學生申請',
    skipToContent: '跳到主要內容',
  },
  en: {
    lang: 'en',
    name: 'Yen-Fu Chen',
    nameEn: '陳彥甫',
    role: 'Tatung University, Digital Media Design',
    role2: 'Participatory Design Lab',
    nav: { home: 'Research Map', projects: 'Projects', profile: 'Full Academic Profile' },
    langToggle: '中',
    langToggleLabel: 'Switch to Chinese',
    heroEyebrow: 'Research & Practice',
    heroTitle: 'I care how design\nenters everyday life',
    heroSubtitle: 'Especially in the places where\nno one has yet been invited in.',
    heroNote:
      'This site covers research tracks and projects. Education, teaching, talks and academic service live at',
    mapLabel: 'Research Map',
    mapTitle: 'Four tracks, seven projects, one interconnected map',
    mapHint:
      'Hover or focus a node with the keyboard to see how the tracks interconnect. Dashed lines mark cross-track linkages — research extends across tracks through student projects, game design, and AI interfaces. Click a node to jump to that track or project.',
    mapLegendCross: 'Cross-track linkage · extending directions',
    tracksLabel: 'Four Research Tracks',
    tracksTitle: 'Developing design knowledge in real-world sites',
    tracksLede: 'What separates the four tracks is not the topic, but who has been excluded from participation.',
    excludedLabel: 'Who is excluded from participation',
    pubLabel: 'Selected Publications',
    pubTitle: 'Published in international venues',
    pubJournal: 'Journal Articles',
    pubConference: 'Conference Papers',
    pubFullList: 'View the full publication list',
    pubFullListNote: 'The complete list of articles, books and conference papers is on the main site.',
    projectsLabel: 'Research & Practice',
    projectsTitle: 'Seven projects, four tracks',
    projectsIntro:
      'The seven projects below roughly capture the shape of my work over these past few years — NSTC-funded research, industry and government collaborations, and practice projects that grew out of teaching. They belong to four research tracks, and they influence one another across tracks.',
    filterLabel: 'Filter by nature',
    filterAll: 'All',
    nature: { research: 'Research', industry: 'Industry', practice: 'Practice' },
    fieldPeriod: 'Period',
    fieldSite: 'Site',
    fieldPartners: 'Partners',
    fieldGrant: 'Grant',
    fieldOutcome: 'Outcome',
    sectionStory: 'Story',
    sectionMethods: 'Methods',
    sectionReflection: 'Reflection',
    viewProjects: 'Read the full stories of all seven projects',
    backHome: 'Back to the research map',
    notFoundTitle: 'Page not found',
    notFoundBody: 'This address does not exist. The link may be wrong, or the page has moved.',
    footerContact: 'Contact',
    footerProfiles: 'Profiles',
    footerAddress: 'No. 40, Sec. 3, Zhongshan N. Rd.\nTatung University, Taipei, Taiwan',
    footerCta: 'Open to collaboration and student inquiries',
    skipToContent: 'Skip to main content',
  },
};

export const contact = {
  email: 'yfchen@gm.ttu.edu.tw',
  phone: '+886-2-7736-4800',
  orcid: 'https://orcid.org/0000-0002-1884-2447',
  scholar: 'https://scholar.google.com/citations?user=9sRduaAAAAAJ&hl=zh-TW',
  researchgate: 'https://www.researchgate.net/profile/Yen-Fu-Chen',
};

// 每一頁的 <title> 與 meta description
export const pageMeta = {
  home: {
    zh: {
      title: '研究與實踐 | 陳彥甫 Yen-Fu Chen',
      desc: '設計研究者陳彥甫的研究地圖：失智照護的參與式設計、公民科學與 More-than-Human Design、設計思考教育、人本 AI。',
    },
    en: {
      title: 'Research & Practice | Yen-Fu Chen',
      desc: 'The research map of design researcher Yen-Fu Chen: participatory design for dementia care, citizen science, design thinking education, and human-centered AI.',
    },
  },
  projects: {
    zh: {
      title: '七個專案 | 陳彥甫 Yen-Fu Chen',
      desc: '認知悠能、蛙抵家、苗圃計畫、Talaria、防災教育、活躍高齡化、堉璘 Changemaker—七個橫跨研究、產學與教學實踐的計畫。',
    },
    en: {
      title: 'Seven Projects | Yen-Fu Chen',
      desc: 'Cognitive Vitality, Identifrog, Miaopu, Talaria, Disaster Education, Active Aging, Yu-Lin Changemaker — seven projects across research, industry and teaching practice.',
    },
  },
};
