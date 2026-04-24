import React, { useState, useEffect, useRef } from 'react';

// ============================================================
// 陳彥甫 Yen-Fu Chen, Ph.D. — Interactive Academic Portfolio
// Aesthetic: Editorial Modernism × Scholarly Warmth
// ============================================================

const content = {
  zh: {
    nav: ['首頁', '關於', '研究', '作品', '論文', '教學與服務', '聯絡'],
    hero: {
      title: '我關心設計如何\n走進生活',
      subtitle: '在照護、教育與科技之間,\n創造更有溫度的連結。',
      name: '陳彥甫',
      role: '大同大學 數位媒體設計學系',
      role2: '參與式設計研究室',
    },
    intro: {
      label: '研 究 定 位',
      body: '我的研究關心長照現場、社會中被忽略的議題,以及設計思考作為解決生活問題的哲學。我用三個動作工作:探索、轉譯、等待。設計需要被實際使用,才會顯現它真正的形狀。',
      stats: [
        { num: '10+', label: '年失智照護現場' },
        { num: '8', label: '個國科會計畫' },
        { num: '171+', label: '次演講與對話' },
        { num: '2', label: '2025 IASDR Best Paper' },
      ],
    },
    research: {
      label: '四 條 研 究 軸 線',
      title: '在真實場域中發展設計知識',
      tracks: [
        {
          id: 'dementia',
          num: '01',
          title: '失智照護的參與式設計',
          titleEn: 'Participatory Design for Dementia Care',
          tagline: '為很少人替他們發聲的照護者,做被看見的設計。',
          desc: '我自 2018 年起先在板橋榮家展開田野,2019 年擴展到台北榮家。透過參與式設計方法,與失智長輩、照護者共同開發多組關係性科技—夢想存錢筒、拾億手環、健康水管家。我的研究關心的不只是「科技能做什麼」,更想凸顯一件事:照護者的工作與價值長期被低估,卻很少人幫他們發聲。近年成果發表於 Dementia (SSCI)。',
          keywords: ['Participatory Design', 'Dementia Care', 'Relational Technology', 'Person-Centered Care'],
          projects: [1, 6],
        },
        {
          id: 'citizen',
          num: '02',
          title: '公民科學與 More-than-Human Design',
          titleEn: 'Citizen Science & More-than-Human Design',
          tagline: '讓每個人,都能為自己所處的生活環境盡一份力量。',
          desc: '公民科學的核心,是培養公民對自己所處生活環境的敏銳度。我的研究關心設計如何作為中介—讓一般民眾、社區、學生都能為生活的環境盡一份自己的力量。代表專案「蛙抵家 Identifrog」整合 AI 聲音辨識與行動學習,邀請民眾參與蛙類觀察;另有以生態議題為主題的一系列桌遊,讓環境知識透過遊戲被理解、被傳遞。這條軸線也延伸到「更多於人類設計(More-than-Human Design)」—重新思考設計與其他物種、與環境的關係。',
          keywords: ['Citizen Science', 'More-than-Human Design', 'Environmental Education', 'HCI'],
          projects: [2, 5],
        },
        {
          id: 'education',
          num: '03',
          title: '設計思考教育的方法論創新',
          titleEn: 'Design Thinking Education Methodology',
          tagline: '把設計思考帶進不是設計系的地方。',
          desc: '設計教育不只是培養設計師,而是培養能在複雜情境中行動的人。自 2016 年起,我探索設計思考如何與系統思考、問題導向學習 (PBL)、生成式 AI 等方法整合。我是教育部苗圃計畫的核心教練,從 2017 年參與至今,持續將設計思考工作坊擴散到全台 30 餘所大學與中小學—苗圃計畫目前已納入教育部新工程教育計畫 (NEEMEC) 的體系中。此外,透過與林堉璘宏泰教育基金會合作的 Changemaker 高中計畫,我也將設計思考帶入高中現場,培力高中師生以設計思考回應真實的社會議題。',
          keywords: ['Design Thinking', 'Systems Thinking', 'PBL', 'Teacher Empowerment'],
          projects: [3, 7],
        },
        {
          id: 'humanai',
          num: '04',
          title: '人本 AI 設計',
          titleEn: 'Human-Centered AI Design',
          tagline: '讓 AI 看得見人,讓人看得見 AI 在做什麼。',
          desc: 'AI 進入設計與生活的速度太快,我們必須重新思考「人」在系統中的位置。這條軸線目前由 Talaria(KKCompany 合作,音樂策展 AI 系統)開展,探討當 AI 成為共同創作者時,人類的判斷、品味、價值如何被保留。未來蛙抵家的 AI 聲音辨識介面設計,也將延伸這條軸線—如何讓民眾與 AI 一起工作,而不是被 AI 代替。',
          keywords: ['Human-Centered AI', 'Task-System Fit', 'Critical Thinking', 'Interface Design'],
          projects: [4],
        },
      ],
    },
    projects: {
      label: '代 表 作 品',
      title: '七個專案,四條軸線',
      filter: { all: '全部', t01: '失智照護', t02: '公民科學', t03: '設計思考教育', t04: '人本 AI' },
      items: [
        {
          id: 1, track: '01', year: '2021–2025',
          title: '認知悠能',
          subtitle: '失智長輩的認知康復裝置研究',
          desc: '讓失智長輩繼續做自己—以參與式設計介入照護現場,從錢幣到水杯,看見長輩如何透過物件找回自己。',
          tags: ['失智照護', '參與式設計', '關係性科技'],
          highlight: 'Dementia (SSCI) 2026',
        },
        {
          id: 2, track: '02', year: '2022–',
          title: '蛙抵家 Identifrog',
          subtitle: 'AI 聲音辨識的公民科學',
          desc: '讓科學變成生活的一部分—用手機讓市民參與台灣蛙類調查,不是當資料來源,而是作為感知環境的一員。',
          tags: ['Citizen Science', 'AI', 'Mobile Learning'],
          highlight: '國科會 + 大浪據文化 + 景澤創意 + 元智大學',
        },
        {
          id: 3, track: '03', year: '2017–',
          title: '苗圃計畫',
          subtitle: '設計思考教育的跨校擴散',
          desc: '以核心教練身份,把設計思考帶進不是設計系的地方。',
          tags: ['Design Thinking', 'Teacher Training', 'PBL'],
          highlight: 'IASDR 2025 Best Paper',
        },
        {
          id: 4, track: '04', year: '2024–',
          title: 'Talaria',
          subtitle: '人本 AI 音樂策展',
          desc: '讓 AI 看得見人—與 KKCompany 合作探索 AI 如何成為音樂策展人的協作者,而不是取代者。',
          tags: ['Human-Centered AI', 'Task-System Fit'],
          highlight: 'IASDR 2025 Best Paper × KKBox',
        },
        {
          id: 5, track: '02', year: '2021–2026',
          title: '防災教育',
          subtitle: '從風險到行動',
          desc: '結合教育部的校園防災(地震、氣象、水文)與水利署的智慧應答機器人,把抽象的防災知識變成可以操作、可以傳遞的學習經驗。',
          tags: ['Risk Communication', 'EdTech', 'Disaster Education'],
          highlight: '教育部計畫 × 水利署 6 年產學',
        },
        {
          id: 6, track: '01', year: '2016–2019',
          title: '活躍高齡化 × 銀髮遊戲設計',
          subtitle: '以 WHO 框架重構銀髮族遊戲設計',
          desc: '承認長輩是玩家—用 WHO 活躍高齡化框架,為下一世代的銀髮族設計他們真的會想玩的遊戲。',
          tags: ['Active Aging', 'Game Design', 'Silver Design'],
          highlight: 'JMIR Serious Games (SCIE)',
        },
        {
          id: 7, track: '03', year: '2024–2026',
          title: '堉璘 Changemaker 高中計畫',
          subtitle: '設計思考走進高中現場',
          desc: '帶領高中生用設計思考與 PBL 為 NPO 做真實的募款專案,從培訓學生擴展到培力老師。',
          tags: ['Design Thinking', 'PBL', 'High School'],
          highlight: '林堉璘宏泰教育基金會 × 苗圃計畫',
        },
      ],
    },
    publications: {
      label: '代 表 論 文',
      title: '在國際期刊與會議中累積',
      journal: '期刊論文 Journal Articles',
      conf: '國際會議 Conference Papers (Award-Winning)',
      items: [
        {
          type: 'journal', year: '2026', venue: 'Dementia', tag: 'SSCI',
          authors: 'Chen, Y-F., Yao, Y-T., & Hung, C-M.',
          title: 'From Coins to Cups: Co-Designing Culturally Situated Technologies for Person-Centered Dementia Care',
          doi: '10.1177/14713012261440582',
        },
        {
          type: 'journal', year: '2020', venue: 'JMIR Serious Games', tag: 'SCIE · IF 4.14',
          authors: 'Chen, Y-F. & Janicki, S.',
          title: 'A Cognitive-Based Board Game with Augmented Reality for Older Adults: Development and Usability Study',
          doi: '10.2196/22007',
        },
        {
          type: 'journal', year: '2018', venue: '科學教育學刊', tag: 'TSSCI',
          authors: '楊朝陽、康仕仲、陳彥甫 等',
          title: '以「設計導向學習」模式初探智齡設計課程',
          doi: '10.6173/CJSE.201812/SP_26.0002',
        },
        {
          type: 'conf', year: '2025', venue: 'IASDR 2025', tag: 'Best Paper · Design Education',
          authors: 'Chen, Y-F., Weng, C-C., Cheng, T-Y.',
          title: 'Cultivating Critical Design Agency through Serious Game Design',
          doi: '10.21606/iasdr.2025.731',
        },
        {
          type: 'conf', year: '2025', venue: 'IASDR 2025', tag: 'Best Paper · Human-Centered AI',
          authors: 'Chen, Y-F., Lou, J-K., Guan, S-H.',
          title: 'Talaria: Designing Segment-Based Audio Retrieval to Support Human-Centered Music Curation',
          doi: '10.21606/iasdr.2025.87',
        },
      ],
    },
    footer: {
      address: '臺北市中山區中山北路三段 40 號',
      building: '大同大學經營大樓 202B',
      cta: '歡迎合作與指導學生申請',
    },
  },
  en: {
    nav: ['Home', 'About', 'Research', 'Projects', 'Publications', 'Teaching', 'Contact'],
    hero: {
      title: 'I care how design\nenters everyday life',
      subtitle: 'Creating warmer connections between\ncare, education, and technology.',
      name: 'Yen-Fu Chen',
      role: 'Tatung University, Digital Media Design',
      role2: 'Participatory Design Lab',
    },
    intro: {
      label: 'R E S E A R C H   P O S I T I O N',
      body: 'My research engages with long-term care, with social and ecological issues that go unseen, and with design thinking as a philosophy for solving everyday problems. I work through three actions: explore, translate, wait. A design only reveals its true shape once it is actually used.',
      stats: [
        { num: '10+', label: 'years on the dementia care floor' },
        { num: '8', label: 'NSTC grants' },
        { num: '171+', label: 'talks and conversations' },
        { num: '2', label: '2025 IASDR Best Paper' },
      ],
    },
    research: {
      label: 'F O U R   R E S E A R C H   T R A C K S',
      title: 'Developing design knowledge in real-world sites',
      tracks: [
        {
          id: 'dementia',
          num: '01',
          title: 'Participatory Design for Dementia Care',
          titleEn: '失智照護的參與式設計',
          tagline: 'Designing to make visible the caregivers whose voices too few have carried.',
          desc: 'I began fieldwork at Banqiao Veterans Home in 2018 and extended to Taipei Veterans Home in 2019. Through participatory design with residents living with dementia and their caregivers, we have co-developed a series of relational technologies — Dream Coin Bank (夢想存錢筒), Memory Bracelet (拾億手環), and Health Water Butler (健康水管家). My research is not only about what technology can do. I want to foreground something else: the work and value of caregivers have long been undervalued, and too few are speaking up on their behalf. Recent outcomes are published in Dementia (SSCI).',
          keywords: ['Participatory Design', 'Dementia Care', 'Relational Technology', 'Person-Centered Care'],
          projects: [1, 6],
        },
        {
          id: 'citizen',
          num: '02',
          title: 'Citizen Science & More-than-Human Design',
          titleEn: '公民科學與 More-than-Human Design',
          tagline: 'So that everyone can contribute their part to the environment they live in.',
          desc: 'At the heart of citizen science is cultivating citizens\' sensitivity to the environments they inhabit. My research examines design as a mediator—enabling citizens, communities, and students to contribute their own part to the environments they live in. The Identifrog project integrates AI sound recognition with mobile learning to invite citizens into frog observation; a series of board games on ecological themes lets environmental knowledge be understood and transmitted through play. This track also extends into More-than-Human Design—rethinking the relationships between design, other species, and the environment.',
          keywords: ['Citizen Science', 'More-than-Human Design', 'Environmental Education', 'HCI'],
          projects: [2, 5],
        },
        {
          id: 'education',
          num: '03',
          title: 'Design Thinking Education Methodology',
          titleEn: '設計思考教育的方法論創新',
          tagline: 'Bringing design thinking to places that are not design schools.',
          desc: 'Design education is not only about training designers, but cultivating people who can act in complex situations. Since 2016, I have explored how design thinking integrates with systems thinking, PBL, and generative AI. I have been a core coach of the Miaopu Project (苗圃計畫) for Design Thinking since 2017, diffusing workshops to 30+ universities and schools across Taiwan. The Miaopu Project has since been incorporated into the MOE NEEMEC (New Engineering Education) program. In addition, through the Yu-Lin Changemaker Program in collaboration with the Lin Yu-Lin Hongtai Education Foundation, I have brought design thinking into high schools—empowering high school teachers and students to respond to real social issues through design thinking.',
          keywords: ['Design Thinking', 'Systems Thinking', 'PBL', 'Teacher Empowerment'],
          projects: [3, 7],
        },
        {
          id: 'humanai',
          num: '04',
          title: 'Human-Centered AI Design',
          titleEn: '人本 AI 設計',
          tagline: 'Letting AI see humans; letting humans see what AI is doing.',
          desc: 'AI is entering design and everyday life too fast. We have to rethink the place of "the human" in these systems. This track currently unfolds through Talaria (a music curation AI system developed with KKCompany), which examines how human judgment, taste, and values can be preserved when AI becomes a co-creator. Identifrog\'s future direction—designing human-AI interaction in the sound recognition interface—will extend this track: letting citizens work with AI, rather than be replaced by it.',
          keywords: ['Human-Centered AI', 'Task-System Fit', 'Critical Thinking', 'Interface Design'],
          projects: [4],
        },
      ],
    },
    projects: {
      label: 'S E L E C T E D   P R O J E C T S',
      title: 'Seven projects, four tracks',
      filter: { all: 'All', t01: 'Dementia', t02: 'Citizen Science', t03: 'Design Thinking Edu', t04: 'Human-Centered AI' },
      items: [
        {
          id: 1, track: '01', year: '2021–2025',
          title: 'Cognitive Vitality',
          subtitle: 'Cognitive Rehabilitation Devices for Dementia',
          desc: 'Letting elders go on being themselves—participatory design in dementia care, from coin banks to water cups, seeing how elders reclaim themselves through objects.',
          tags: ['Dementia Care', 'Participatory Design', 'Relational Tech'],
          highlight: 'Dementia (SSCI) 2026',
        },
        {
          id: 2, track: '02', year: '2022–',
          title: 'Identifrog',
          subtitle: 'AI-powered Citizen Science',
          desc: 'Making science part of everyday life—letting citizens join Taiwan\'s frog survey through their phones, not as data sources but as participants perceiving their own environment.',
          tags: ['Citizen Science', 'AI', 'Mobile Learning'],
          highlight: 'NSTC + DaLangJu + ECoDreaming + Yuan Ze U.',
        },
        {
          id: 3, track: '03', year: '2017–',
          title: 'Miaopu Project',
          subtitle: 'The Project for Interdisciplinary Faculty Development and Talent Cultivation',
          desc: 'As a founding coach, bringing design thinking to places that are not design schools.',
          tags: ['Design Thinking', 'Teacher Training', 'PBL'],
          highlight: 'IASDR 2025 Best Paper',
        },
        {
          id: 4, track: '04', year: '2024–',
          title: 'Talaria',
          subtitle: 'Human-Centered AI for Music Curation',
          desc: 'Letting AI see people—collaborating with KKCompany to explore how AI can become a partner for music curators, not a replacement.',
          tags: ['Human-Centered AI', 'Task-System Fit'],
          highlight: 'IASDR 2025 Best Paper × KKBox',
        },
        {
          id: 5, track: '02', year: '2021–2026',
          title: 'Disaster Education',
          subtitle: 'From Risk to Action',
          desc: 'Combining MOE\'s school-based disaster curriculum (seismic, meteorological, hydrological) with the Water Resources Agency\'s intelligent response robot, turning abstract disaster knowledge into actionable, transmissible learning experiences.',
          tags: ['Risk Communication', 'EdTech', 'Disaster Education'],
          highlight: 'MOE × 6-year WRA Partnership',
        },
        {
          id: 6, track: '01', year: '2016–2019',
          title: 'Active Aging × Silver Gaming',
          subtitle: 'Reframing Games for Older Adults via WHO Framework',
          desc: 'Recognizing elders as players—using the WHO Active Aging framework to design games the next generation of elders actually want to play.',
          tags: ['Active Aging', 'Game Design', 'Silver Design'],
          highlight: 'JMIR Serious Games (SCIE)',
        },
        {
          id: 7, track: '03', year: '2024–2026',
          title: 'Yu-Lin Changemaker Program',
          subtitle: 'Design Thinking into High Schools',
          desc: 'Guiding high school students to use design thinking and PBL to build real fundraising projects for NPOs, scaling from student training to teacher empowerment.',
          tags: ['Design Thinking', 'PBL', 'High School'],
          highlight: 'Lin Yu-Lin Hongtai Education Foundation × Miaopu Project',
        },
      ],
    },
    publications: {
      label: 'S E L E C T E D   P U B L I C A T I O N S',
      title: 'Published in international venues',
      journal: 'Journal Articles',
      conf: 'Conference Papers (Award-Winning)',
      items: [
        {
          type: 'journal', year: '2026', venue: 'Dementia', tag: 'SSCI',
          authors: 'Chen, Y-F., Yao, Y-T., & Hung, C-M.',
          title: 'From Coins to Cups: Co-Designing Culturally Situated Technologies for Person-Centered Dementia Care',
          doi: '10.1177/14713012261440582',
        },
        {
          type: 'journal', year: '2020', venue: 'JMIR Serious Games', tag: 'SCIE · IF 4.14',
          authors: 'Chen, Y-F. & Janicki, S.',
          title: 'A Cognitive-Based Board Game with Augmented Reality for Older Adults: Development and Usability Study',
          doi: '10.2196/22007',
        },
        {
          type: 'journal', year: '2018', venue: 'Chinese J. of Science Education', tag: 'TSSCI',
          authors: 'Yang, C-Y., Kang, S-C., Chen, Y-F., et al.',
          title: 'Exploring Age-Friendly Design Curriculum through Design-Based Learning',
          doi: '10.6173/CJSE.201812/SP_26.0002',
        },
        {
          type: 'conf', year: '2025', venue: 'IASDR 2025', tag: 'Best Paper · Design Education',
          authors: 'Chen, Y-F., Weng, C-C., Cheng, T-Y.',
          title: 'Cultivating Critical Design Agency through Serious Game Design',
          doi: '10.21606/iasdr.2025.731',
        },
        {
          type: 'conf', year: '2025', venue: 'IASDR 2025', tag: 'Best Paper · Human-Centered AI',
          authors: 'Chen, Y-F., Lou, J-K., Guan, S-H.',
          title: 'Talaria: Designing Segment-Based Audio Retrieval to Support Human-Centered Music Curation',
          doi: '10.21606/iasdr.2025.87',
        },
      ],
    },
    footer: {
      address: 'No. 40, Sec. 3, Zhongshan N. Rd.',
      building: 'Tatung University, Taipei, Taiwan',
      cta: 'Open to collaboration and student inquiries',
    },
  },
};

// ============================================================
// Extended Content — for sub-pages (About, Teaching, Talks, Service)
// ============================================================

const extendedContent = {
  zh: {
    about: {
      intro: '設計研究者最常做的動作,其實是等待。等照護現場的長輩用他們的節奏告訴你他們需要什麼;等學生把任務做出來,讓我看見下一步該怎麼教;等一個被設計出來的物件,被部署到真實生活中,慢慢變成它原本不是的樣子。我從 design-in-use(Henderson & Kyng, 1991)這個概念中得到很多啟發—設計需要被實際使用,才會顯現它真正的形狀。同時,我也以 research-through-design(Frayling, 1993)為方法論基礎:從設計實踐中創造知識,讓做出來的物件與過程本身成為研究的產出與論述。',
      intro2: '我的研究有四層。最核心的是設計思考—不只是設計系的課程,而是我 2016 年以來所有工作的方法論骨幹:它是我怎麼看世界、怎麼進入每一個研究現場的方式。往外一層,是我紮根最深的長照與失智研究—不只是長輩,也包括承受生理與心理煎熬的照護者。再往外,是社會中值得關心、卻沒被看見的環境與生態議題。最新的一層,是人本 AI—這一層最開放,是我對當代 AI 如何進入人類生活的思考。我的方法可以用三個字描述:探索、轉譯、等待。',
      education: {
        title: '學歷',
        items: [
          { year: '2014', degree: 'Ph.D. in Design', school: '英國雪菲爾哈倫大學 藝術、設計與媒體研究中心', note: 'Sheffield Hallam University, U.K.' },
          { year: '2008', degree: 'M.A. in Research in Arts and Design', school: '英國雪菲爾哈倫大學 藝術與設計研究中心', note: 'Sheffield Hallam University, U.K.' },
          { year: '2004', degree: '工業設計碩士', school: '大同大學 工業設計學系', note: 'Tatung University, Taiwan' },
          { year: '2002', degree: '工業設計學士', school: '大同大學 工業設計學系', note: 'Tatung University, Taiwan' },
        ],
      },
      experience: {
        title: '現任與經歷',
        items: [
          { period: '2014/8–', role: '主持人', org: '大同大學 參與式設計研究室', current: true },
          { period: '2021/8–', role: '副教授', org: '大同大學 數位媒體設計學系', current: true },
          { period: '2015/2–2021/7', role: '助理教授', org: '大同大學 數位媒體設計學系' },
          { period: '2014/8–2015/1', role: '助理教授', org: '大同大學 工業設計學系' },
          { period: '2010/8–2012/1', role: '教學助理', org: '英國雪菲爾哈倫大學' },
          { period: '2006/2–2007/5', role: '助教', org: '大同大學 工業設計學系' },
          { period: '2003/9–2004/4', role: '產品設計師(兼職)', org: 'EG Design Studio' },
        ],
      },
      awards: {
        title: '獎項與肯定',
        items: [
          { year: '2026', title: '大同大學產學研究績優', issuer: '大同大學' },
          { year: '2025', title: 'IASDR 2025 Best Paper × 2', issuer: 'Design Education & Human-Centered AI Tracks', star: true },
          { year: '2025', title: '教學卓越特優教師', issuer: '大同大學(113 學年度)' },
          { year: '2023', title: '最佳論文獎', issuer: '第 16 屆跨域設計暨台灣數位媒體設計國際研討會' },
          { year: '2023', title: '教學實踐績優計畫', issuer: '教育部(110 學年度)' },
          { year: '2022', title: '最佳論文獎', issuer: '台灣感性學會暨台灣數位媒體設計學會國際研討會' },
          { year: '2022', title: '教學創新優良教師', issuer: '大同大學(110 學年度)' },
          { year: '2019', title: '專題設計總指導教師', issuer: '大同大學(107 學年度)' },
          { year: '2018', title: '鼓勵學生參加藝術與設計類國際競賽計畫', issuer: '教育部' },
          { year: '2017', title: '智慧生活整合性人才培育計畫績優教師', issuer: '教育部(105 學年度)' },
        ],
      },
      areas: {
        title: '學術領域',
        items: ['參與式設計 Participatory Design', 'More-than-Human Design', '人本 AI Human-Centered AI', '設計思考教育 Design Thinking Education'],
      },
      courses: {
        title: '開授課程',
        items: ['設計基礎', '互動設計', '遊戲設計', '作品集', '認知遊戲設計特論', '多模態設計特論'],
      },
    },
    teaching: {
      heroTitle: '教學',
      heroSubtitle: '培養能在複雜情境中行動的人',
      intro: '教學一路走來,我陪過 30+ 組大學生的專題,5 位碩士生已經畢業、4 位還在進行中。另一邊在苗圃計畫當核心教練,也累積了 200+ 位跨校老師一起摸索設計思考的教學。這些學生與夥伴去的地方很不一樣—有的做設計、有的去做研究、有的回到自己原本的工作—但我希望他們每個人,都帶走一樣可以跟著他一輩子的東西。',
      philosophy: [
        { title: '設計從品味開始', body: '設計思考的核心是 insight—但比起翻成「洞見」,我更願意叫它「品味」。我希望學生能夠品味自己與別人的生活,從日常的細節中讀出設計的可能。' },
        { title: '教學是另一種 design-in-use', body: '我看學生如何做我給的任務,再調整下一次的教法。教學跟設計一樣,需要被部署、被回應、再修正。' },
        { title: '理論與實踐互相追逐', body: '"In theory, practice follows theory; in practice, theory follows practice." 理論先於實踐,或實踐先於理論—兩者其實是互相追逐、互相生成的。' },
      ],
      philosophyClosing: '我最希望聽見的,是學生告訴我:他如何讀懂人生,別人的,與自己的。',
      graduateTitle: '碩士論文指導',
      graduates: [
        { year: '2024', name: '吳孟璇', thesis: '以使用者經驗設計建構互動式水利防災教育網站',
          link: 'https://hdl.handle.net/11296/9d84pf', portfolio: 'https://reurl.cc/qv8o5y' },
        { year: '2021', name: '鍾適存', thesis: '應用快速民族誌法於失智症認知遊具設計',
          link: 'https://hdl.handle.net/11296/k4mnb8', portfolio: 'https://reurl.cc/jG8ZxL' },
        { year: '2019', name: '鄭鈺閩', thesis: '遊戲難度動態調整對高齡者進行遊戲化運動參與意願的影響—以靜態臥式腳踏車為例',
          link: 'https://hdl.handle.net/11296/82cayp' },
        { year: '2017', name: '丁偉翔', thesis: '應用區域發展過程於桌遊設計之研究-以台北市信義區為例',
          link: 'https://hdl.handle.net/11296/4xcps6' },
        { year: '2016', name: '唐英嘉', thesis: '運用參與式設計發展小坪數臥室之書桌概念',
          link: 'https://hdl.handle.net/11296/tvsw9k' },
      ],
      currentTitle: '進行中的論文指導',
      current: [
        { name: '劉羽蟬', topic: 'More-than-Human Design × 狗照護 App',
          note: '兩篇期刊論文準備投稿(HCI Journal / IJHCS)' },
      ],
      currentFirstYear: '另指導 3 位碩一學生(2024 入學),研究方向正在展開。',
      undergradTitle: '大學生專題指導(獲獎選粹)',
      undergradIntro: '歷年指導 30+ 組大學生專題,以下列出獲得國際或全國性獎項的代表作品。',
      undergradAwards: [
        { year: '2025', students: '王韻筑、吳蘊璇、謝婉怡', work: '戲影', award: '2025 台灣數位媒體設計獎 新媒體互動類銀獎', type: '互動教具' },
        { year: '2025', students: '周沛妤', work: '失智症家庭照護 App', award: '國科會 114 年度大專生研究計畫補助', type: '研究計畫' },
        { year: '2023', students: '梁紓瑄', work: '認識及友善失智互動數位繪本', award: '國科會 112 年度大專生研究計畫補助', type: '研究計畫' },
        { year: '2021', students: '黃宥喬', work: '跨雲同婚', award: '2021 台灣數位媒體設計獎 桌上遊戲銅獎', type: '桌上遊戲' },
        { year: '2020', students: '郭家蓉等 5 人', work: '花繡', award: '第 15 屆李國鼎科技與人文藝術創意競賽 互動科技藝術組佳作', type: '互動裝置' },
        { year: '2019', students: '陳玟君等 4 人', work: 'TRACK IT OUT', award: '2019 台灣數位媒體設計獎 互動科技佳作', type: '互動產品' },
        { year: '2019', students: '陳鈺明、劉家妤、沈融', work: '翻?不翻?翻吧', award: '教育部 107 年度三創專題競賽 創意組特優', type: '數位桌遊' },
        { year: '2018', students: '杜天寶等 4 人', work: 'CROSS WAR 交錯戰爭', award: '2018 放視大賞 跨領域類銅獎 + 智崴特別獎', type: 'AR 互動遊戲' },
        { year: '2017', students: '顏吟竹、劉采釉、李依婷', work: '屍體買賣', award: '2017 德國紅點設計獎 傳達設計獎 Winner', type: '2D 動畫' },
        { year: '2017', students: '林沛臻等 5 人', work: '幻·緹', award: '2017 放視大賞 廠商贊助獎 + 艾鳴優秀遊戲設計獎', type: '3D PC 遊戲' },
        { year: '2015', students: '丁偉翔、陳唯甄、陳映如', work: 'The Mask', award: '2015 巴哈姆特 ACG 大賽 動畫組佳作', type: '2D 動畫' },
      ],
    },
    talks: {
      heroTitle: '主題演講',
      heroSubtitle: '近 200 場跨越台灣的設計對話',
      intro: '2017 年開始接到第一場邀請,到現在累積下來將近 200 場。每一場過來的聽眾都不一樣—有設計系的學生,也有社工、老師、護理師、工程師—他們對同一個設計概念的反應總是不同,這讓我看見設計在各種脈絡裡長出不一樣的樣子。準備每一場演講的過程,同時也是我整理自己想法的方式。這些對話,慢慢讓我更知道自己在做什麼。',
      categories: [
        {
          id: 'dt',
          title: '設計思考與教學創新',
          titleEn: 'Design Thinking & Teaching Innovation',
          count: 60,
          color: '#3B4E6B',
          desc: '我是教育部苗圃計畫的核心教練,從 2017 年參與至今。這些工作坊的核心不只是教設計思考的步驟,而是開發新的教材與教案,讓老師真正理解設計思考的細節—特別是引導學生的方法,以及如何讓學生從快速迭代中找到更接近真實的解法。',
          samples: ['教育部苗圃計畫 跨校初階/進階工作坊', '實踐大學 設計思考系列', '成功大學、東海大學、靜宜大學、輔仁大學 苗圃工作坊'],
        },
        {
          id: 'disaster',
          title: '防災教育與數位教材',
          titleEn: 'Disaster Education & Digital Learning',
          count: 25,
          color: '#556B48',
          desc: '我將設計思考與 PBL(問題導向學習)導入防災教學—設計思考對我而言,就是解決生活問題的思考流程。與水利署、防災輔導團、教育部的長期合作,讓我有機會把這套思路帶進全台防災教育現場。',
          samples: ['新北/新竹/苗栗/宜蘭/高雄/金門 防災輔導團', '教育部防災數位教材推廣', '經濟部水利署 水利防災教育教師增能'],
        },
        {
          id: 'ai',
          title: '生成式 AI 與設計應用',
          titleEn: 'Generative AI & Design Applications',
          count: 15,
          color: '#C27B56',
          desc: '近兩年我持續探索 GenAI 與設計思考、教學實踐的整合。我常提醒學生:帶著批判性思考與 GenAI 合作,不是照單全收。設計教育面對 GenAI 最大的挑戰是速度太快—我們必須重新思考,設計師的價值到底在哪裡。',
          samples: ['實踐大學 GenAI 創意應用系列', '教育部 iLink 生成式 AI 創意應用競賽培力', '國際行為認知發展教育協會 Copilot 工作坊'],
        },
        {
          id: 'dementia',
          title: '失智照護與科技',
          titleEn: 'Dementia Care & Technology',
          count: 6,
          color: '#8B4E2E',
          desc: '將長照現場的田野經驗,分享給醫護、社工、長照專業人員—包含我們做的裝置、研究方法、以及在照護現場的觀察。這些聽眾常以為自己是在等「設計團隊」來幫他們解決問題,但其實他們也可以成為設計團隊的一份子。我最希望他們帶走的是一個觀念:如何意識到自己面對的情況,背後真正的問題是什麼。',
          samples: ['馬偕醫學院 科技×照護', '北商大 設計思考在失智照護', '台北市社會局 探訪技巧', '松德院區 遊戲化體驗設計'],
        },
        {
          id: 'citizen',
          title: '公民科學與環境',
          titleEn: 'Citizen Science & Environment',
          count: 12,
          color: '#4A6B55',
          desc: '對設計學院與工學院的學生,我想傳達的是:每個人都可以為生活的環境盡一份自己的力量。公民科學不只是「民眾幫忙收集資料」,而是培養公民對自己所處生活環境的敏銳度。這也是為什麼我會在演講中提到「跨物種共生」與「更多於人類設計(More-than-Human Design)」—這些不是學術名詞,是讓我們重新看見環境的方式。',
          samples: ['陽明交通大學 綠動城市 濕地/行道樹生態工作坊', '臺灣科技大學 USR 蛙抵家分享', '公民科學講座 蛙抵家發展歷程'],
        },
        {
          id: 'international',
          title: '國際演講',
          titleEn: 'International Talks',
          count: 3,
          color: '#6B5443',
          desc: '受邀至馬來西亞博特拉大學參與 TEEPiD(Taiwan Education Experience Programme in Design),以及香港樂齡科技博覽暨高峰會。馬來西亞的三種文化脈絡(華人、馬來人、印度人)讓我重新思考設計的文化敏感度—這也是我未來想持續擴展的方向。',
          samples: ['馬來西亞博特拉大學 TEEPiD@TTU (2018, 2019)', '香港 樂齡科技博覽暨高峰會 SMART AGING DESIGN (2017)'],
        },
      ],
      recent: {
        title: '近期精選演講(2025–2026)',
        items: [
          { date: '2026/4', title: '從想法到圖像:如何用 GenAI 把創意變成視覺與藝術(短講)', venue: '實踐大學' },
          { date: '2026/3', title: '設計思考與 AI 應用', venue: '實踐大學' },
          { date: '2026/3', title: '綠動城市—解構城市濕地生態挑戰', venue: '陽明交通大學' },
          { date: '2026/3', title: 'Crossing Borders, Creating Impact—苗圃論壇', venue: '教育部苗圃計畫' },
          { date: '2026/3', title: '跨域綠色工程課程設計工作坊', venue: '東海大學' },
          { date: '2026/2', title: '綠色工程跨域教師備課工作坊', venue: '教育部綠色工程計畫' },
          { date: '2026/1', title: '智慧照護產業議題驅動之專題教案設計', venue: '教育部智慧雨林產業創生人才育成計畫' },
          { date: '2025/12', title: '設計思考 x 防災推廣', venue: '教育部青年大使' },
          { date: '2025/10', title: '從想法到圖像:用 GenAI 把創意變成視覺與藝術', venue: '實踐大學' },
          { date: '2025/9', title: '聆聽青蛙:聲音地圖中的跨物種共生', venue: '臺灣科技大學 USR' },
          { date: '2025/6', title: '科技×照護—重新定義長照的想像與邊界', venue: '馬偕醫學院' },
        ],
      },
    },
    service: {
      heroTitle: '學術服務',
      heroSubtitle: '期刊審查、評審委員、產學顧問',
      intro: '擔任審查委員或審稿人的時候,我常常發現自己在學習。讀一本還沒出版的論文、看一份還沒核定的計畫、聽一個博物館正在摸索的展覽方向—這些都是我進入其他研究者腦袋的機會。多年下來,我幫 SSCI/SCIE 期刊審過稿、當過國科會與教育部計畫的審查委員、也在政府單位與博物館當過諮詢委員。這些工作讓我有機會看見很多人還在思考中的問題,這種過程,有時比讀已經出版的論文更有意思。',
      journal: {
        title: '期刊審稿(Journal Reviewer)',
        items: [
          { name: 'Journal of Gerontological Social Work', tag: 'SSCI · Taylor & Francis', count: '4 次(2025–2026)' },
          { name: 'Virtual Reality', tag: 'SCIE · Springer Nature', count: '2024' },
          { name: 'Educational Gerontology', tag: 'SSCI · Taylor & Francis', count: '2022' },
          { name: '科學教育學刊', tag: 'TSSCI', count: '2021' },
        ],
      },
      grantReview: {
        title: '研究計畫審查',
        items: [
          { category: '國科會', detail: '專題研究計畫審查(2019, 2025, 2026)、大專學生研究計畫審查(連續 2019–2026)、大專生創作獎(2020)' },
          { category: '教育部', detail: '教學實踐研究計畫審查(2024, 2025, 2026)、人工智慧技術及應用領域課程計畫(2024)' },
          { category: '新工程計畫諮詢', detail: '東海大學電機工程、臺灣科技大學營建工程、中興大學工學院、馬偕醫學大學高齡福祉科技、明志科技大學(2024–2026)' },
        ],
      },
      advisor: {
        title: '長期顧問 / 教練',
        items: [
          { role: '共同發起人及主持人', org: '貳拾號公民會所社會設計實驗室', period: '2018–' },
          { role: '教練', org: '教育部跨領域教師發展暨人才培育計畫', period: '2017–' },
          { role: '顧問', org: '臺北市文化局 三井物產株式會社舊倉庫委託經營管理', period: '2019–' },
          { role: '顧問', org: '桃園市政府農業局 龜山苗圃綠環境生態園區', period: '2023–' },
          { role: '顧問', org: '經濟部水利署臺北水源特定區管理局 環境教育推廣計畫', period: '2023–2024' },
          { role: 'Level 3 課程講師', org: '社團法人台灣長期照護專業協會', period: '2017–' },
        ],
      },
      conference: {
        title: '研討會服務',
        items: [
          { year: '2025', role: 'Session Chair', venue: 'IASDR 2025 — Design Education / Human-Centered AI / Art, Design and Technology' },
          { year: '2025', role: 'Reviewer', venue: 'IASDR 2025' },
          { year: '2024–2025', role: '評審', venue: 'iLink 生成式 AI 創意應用大賽' },
          { year: '2021', role: 'Session Host & Reviewer', venue: '14th International Conference on Taiwan Digital Media Design' },
          { year: '2019', role: '議程委員', venue: 'International Conference on Applied Informatics and Technology' },
        ],
      },
      international: {
        title: '國際合作',
        schools: [
          { name: '英國雪菲爾哈倫大學 雪菲爾藝術學院', nameEn: 'Sheffield Institute of Arts, Sheffield Hallam University, UK' },
          { name: '馬來西亞博特拉大學 工業設計學系', nameEn: 'Department of Industrial Design, Universiti Putra Malaysia' },
          { name: '日本筑波大學 視覺傳達', nameEn: 'Visual Communication, University of Tsukuba' },
        ],
        scholars: [
          { name: 'Gordon Young', affiliation: '英國雪菲爾哈倫大學' },
          { name: 'Nigel WK Ball', affiliation: '英國雪菲爾哈倫大學' },
          { name: 'Mark Fisher', affiliation: '英國雪菲爾哈倫大學' },
          { name: 'Roger Bateman', affiliation: '英國雪菲爾哈倫大學' },
          { name: 'Dr. Mohd Shahrizal Bin Dolah', affiliation: '馬來西亞博特拉大學' },
          { name: 'Dr. Saiful Hasley Bin Ramli', affiliation: '馬來西亞博特拉大學' },
          { name: 'Dr. Gary McLeod', affiliation: '日本筑波大學' },
          { name: 'Dr. Çiğdem Kaya', affiliation: '伊斯坦堡科技大學' },
        ],
      },
    },
    projectsDetail: {
      heroTitle: '研究與實踐',
      heroSubtitle: '橫跨研究、產學與教學實踐的代表性計畫',
      intro: '以下七個計畫,差不多涵蓋了我這幾年的工作樣貌—有國科會支持的研究、有跟企業與政府的產學合作、也有從教學現場慢慢長出的實踐計畫。它們分屬四條研究軸,彼此之間也會互相影響。每個計畫用軸線顏色標示,讓讀者能看見「設計研究者」這個身份,在不同場域裡怎麼展開。',
      natureLabels: { research: '研究', industry: '產學', practice: '實踐' },
      projects: [
        {
          id: 1, track: '01',
          nature: 'research',
          title: '認知悠能',
          subtitle: 'Cognitive Vitality: Co-Designing Culturally Situated Technologies for Dementia Care',
          year: '2021–2025',
          duration: '3 年期國科會計畫(I)(II)(III) + 2024 起新系列(多重感官體驗)',
          site: '板橋榮民之家 / 台北榮民之家',
          collaboration: '板橋榮家、台北榮家',
          grant: '國科會',
          outcome: '「從錢幣到水杯」發表於 Dementia (SSCI) 期刊',
          narrative: '有位長輩第一次看到夢想存錢筒時,指著上面的飛機圖案說他想去巴西看家人。旁邊的護理師沒有糾正他,只說:「北北,那我們要認真存錢,才能買機票。」這一幕讓我看見,照護不是把長輩拉回我們的現實,而是走進他們的現實裡、陪他們繼續活著。這個裝置後來被照護者重新使用—當長輩情緒失調時,它成了轉移注意力的媒介。這是設計最動人的部分:它在現場被重新定義(design-in-use)。\n\n另一位長輩失智前是太極拳好手,失智後幾乎不動。我們為他部署了拾億手環—一個會連動周邊螢幕、播放太極拳影片的裝置。八週之後,他從不動,到跟著動,到最後,教照服員打太極拳。那不是科技讓他動起來,是科技打開了一扇門,讓他想起自己是誰。\n\n這個研究讓我明白:最好的照護科技,不是幫長輩「做」什麼,而是讓他們繼續做自己。',
          methods: ['參與式設計 (Participatory Design)', '民族誌研究 (Ethnography)', '關係性科技 (Relational Technology)', 'design-in-use 觀點 (Design-in-use Perspective)', 'Research through Design'],
          reflection: '最好的照護科技,是能讓長輩繼續做自己的那一種。',
        },
        {
          id: 2, track: '02',
          nature: 'industry',
          title: '蛙抵家 Identifrog',
          subtitle: 'AI-powered Citizen Science for Frog Observation',
          year: '2022–',
          duration: '進行中',
          site: '全台蛙類棲地(以濕地為主)',
          collaboration: '大浪據文化(生態內容)、景澤創意(公民科學社群經營)、元智大學蘇泰元(AI 聲音辨識)',
          grant: '國科會、大浪據文化、景澤創意',
          outcome: '上架 App、IRB 通過、AI 蛙類聲音辨識模型、GitHub 開源',
          narrative: '為什麼是蛙類?不是貓狗、不是鳥類,也不是蝴蝶。\n\n青蛙特別的地方,在於我們很少為牠們「停下來聽」。牠們的存在不像鳥鳴那樣清亮,也不像昆蟲那樣隨處可見—蛙鳴往往藏在春夏的雨夜裡,只有當一個人願意停下腳步、打開耳朵,才會被聽見。做一個讓公民聽青蛙的 App,本質上是在邀請大家重新感知那些平常不會被注意到的生活環境。這是 More-than-Human Design 的起點:我們不是為人類的方便設計,而是為人與蛙共同存在的那個環境設計。\n\n蛙抵家是一個跨單位的協作成果。大同大學負責設計與使用者經驗、大浪據文化負責生態內容、景澤創意負責公民科學社群經營、元智大學(蘇泰元老師)負責 AI 聲音辨識。把生態學家、社群經營者、AI 工程師、設計師的語言整合進同一個介面,是這個研究最困難的部分—每一方對「怎樣才叫一次有意義的觀察」都有自己的堅持。我們花了很多時間把這些堅持對齊,才做出一個讓一般人真的打得開、用得下去的 App。\n\n公民科學的意義,不是讓民眾變成科學家,而是讓科學變成生活的一部分。',
          methods: ['公民科學 (Citizen Science)', '參與式設計 (Participatory Design)', '更多於人類的設計 (More-than-Human Design)', 'Research through Design'],
          reflection: '公民科學的意義,不是讓民眾變成科學家,而是讓科學變成生活的一部分。',
        },
        {
          id: 3, track: '03',
          nature: 'practice',
          title: '苗圃計畫',
          subtitle: 'Miaopu Project: The Project for Interdisciplinary Faculty Development and Talent Cultivation',
          year: '2017–',
          duration: '9 年',
          site: '全台 30+ 所大學、多所中小學',
          collaboration: '全台合作學校;參與 NEEMEC 新工程教育計畫',
          grant: '教育部',
          outcome: 'IASDR 2025 Best Paper (Design Education Track)、多場跨校工作坊、授證教練社群',
          narrative: '苗圃計畫從 2017 年開始,我以核心教練的身份參與至今,九年下來已經陪伴超過 200 位跨校教師發展設計思考教學,合作學校遍及全台 30 所以上的大學與中小學。\n\n這個計畫的推進有一條清晰的內在軌跡:最初是專業教師的培訓—把設計思考的方法論帶到各校工作坊;接著形成授證教練的社群—一群跨校的教師開始彼此交流、共同開發教材、互相支援;近年則進一步與教育部 NEEMEC(新工程教育)接軌,把設計思考整合進更大的跨領域師資發展計畫。從個別培訓到社群、再到體制接軌,這不只是一個計畫的擴張,而是一個方法論在不同尺度上被重新檢驗的過程。\n\n十年下來,我最深的一個觀察是:願意接受並真正執行設計思考的老師與學生,都對跨領域的對話和合作保持著開放的態度。設計思考不是一個可以被教會的「方法」—它是一種態度的延伸。工作坊真正做到的事,其實是辨認出那些本來就願意打開邊界的人,然後陪他們把這個態度在自己的學科裡具體展開。\n\n在不是設計系的地方教設計思考,是把設計還給它本來應該屬於的生活所有地方。',
          methods: ['設計思考 (Design Thinking)', '問題導向學習 (Problem-Based Learning, PBL)', '教師培力 (Teacher Training)', '跨領域協作 (Interdisciplinary Collaboration)'],
          reflection: '在不是設計系的地方教設計思考,是把設計還給它本來應該屬於的生活所有地方。',
        },
        {
          id: 4, track: '04',
          nature: 'industry',
          title: 'Talaria',
          subtitle: 'Human-Centered AI for Music Curation',
          year: '2024–',
          duration: '進行中',
          site: 'KKBox / KKCompany 音樂平台',
          collaboration: 'KKCompany',
          grant: 'KKCompany',
          outcome: 'IASDR 2025 Best Paper (Human-Centered AI Track)、期刊論文準備中 (IJHCI)',
          narrative: 'Talaria 是我與 KKCompany 合作的人本 AI 研究,探討 AI 如何成為專業音樂策展人的協作者,而不是取代者。\n\n當前大部分的 AI 產品把「自動化」當成目的—讓 AI 替人做決定、省去人的判斷。但音樂策展是一份高度依賴專業直覺的工作:好的策展人知道在什麼時刻、為什麼樣的聽眾、播哪一段音樂。這種判斷力無法被取代,也不應該被取代。我們在研究中看到,當 AI 試圖「幫策展人決定」一首歌的時候,策展人會立刻失去信任;但當 AI 以片段而不是整首歌的方式檢索、當 AI 把「為什麼推薦」的邏輯打開給策展人看的時候,信任才開始建立。\n\n這個研究讓我看見人本 AI 的設計重點:不是讓 AI 更聰明,而是讓 AI 更透明—讓專業者理解它在做什麼、並保有覆寫它的權力。AI 看得見人(理解策展人實際的工作節奏),人才看得見 AI(理解它的邏輯),兩者才可能真正協作。\n\n當 AI 看得見人,人才能信任它。',
          methods: ['人本 AI (Human-Centered AI)', '質性研究 (Qualitative Research)', 'Research through Design'],
          reflection: '當 AI 看得見人,人才能信任它。',
        },
        {
          id: 5, track: '02',
          nature: 'industry',
          title: '防災教育',
          subtitle: 'Disaster Education: From Risk to Action',
          year: '2021–2026',
          duration: '6 年',
          site: '全台校園、經濟部水利署、防災輔導團',
          collaboration: '共同主持人 — 校園防災數位學習、智慧應答機器人',
          grant: '教育部、經濟部水利署',
          outcome: '教育部計畫 2 期(校園防災議題、地質災害與氣象水文)、水利署 6 年連續產學(110–115 年智慧應答機器人)、互動網站與防災電子書、全國輔導團培訓',
          narrative: '防災教育最大的難題,從來不是資訊不足—我們早就知道地震會來、颱風會來、淹水會來。真正的難題是:當風險抽象地存在於報告和數據中,人很難把它轉換成自己的行動。這個專案就是圍繞這個問題展開的:怎麼讓「知道風險」變成「做得到應對」。\n\n六年下來,這個問題我從兩個方向在回答。一個方向是教育部的校園防災計畫(2022–2025)—用問題導向學習(PBL)與 STEAM 教學法,讓學生不只是背誦地質災害或氣象水文的知識,而是透過動手解決具體情境的問題,把防災轉成可以實踐的能力。這個計畫是我進入防災教育的起點,也是我至今最在意的代表作。另一個方向是水利署的智慧應答機器人(2021–2026,連續六年產學)—把防災資訊設計成民眾可以在關鍵時刻即時詢問的介面,讓風險判斷不再只是專家的事。\n\n一個是在教室裡的轉譯,一個是在日常裡的轉譯。兩條線指向同一件事:風險知識只有在能被使用時才有意義。\n\n防災教育的關鍵,不是讓人知道風險,而是讓人能在風險來臨時知道怎麼做。',
          methods: ['問題導向學習 (Problem-Based Learning)', 'STEAM 教學法 (STEAM Pedagogy)', '以使用者經驗為中心的設計 (UX Design)'],
          reflection: '防災教育的關鍵,不是讓人知道風險,而是讓人能在風險來臨時知道怎麼做。',
        },
        {
          id: 6, track: '01',
          nature: 'research',
          title: '活躍高齡化 × 銀髮遊戲設計',
          subtitle: 'Active Aging × Silver Gaming: Integrating WHO Framework into Game Design',
          year: '2016–2019',
          duration: '3 年期國科會計畫(I)(II)(III)',
          site: '台北市信義區、萬華區高齡者社區場域',
          collaboration: '信義區公所、板橋榮家',
          grant: '國科會',
          outcome: '發表於 JMIR Serious Games (SCIE) 期刊',
          narrative: '「我還記得明星花露水的味道,因為我們家每天早上都用—它讓我想起跟媽媽和姐姐在一起的美好時光。」這是我們研究中一位長輩的話。當我們用十個 1960–1980 年代的物件(明星花露水、大同寶寶、竹蜻蜓、旋轉電話、茄芷帽、金平糖等)設計一個結合 AR 擴增實境的桌遊「懷舊尋寶者」(Nostalgic Seekers)時,我們看見的不是長輩在「玩遊戲」,而是長輩在透過物件找回自己的故事。\n\n這三年的國科會計畫(2016–2019),源於一個問題:主流遊戲設計幾乎完全忽略長輩—長輩要不被當作「需要被防備認知衰退的對象」,要不就被從市場中省略。但 WHO 的「活躍高齡化」框架提醒我們:長輩需要的是積極參與,不是被動防備。我們用這個框架重新定義遊戲設計的目標:為 50–59 歲、「下一世代的長輩」設計他們會想玩、玩得下去、從中找到意義的遊戲。\n\n研究過程中我們看見幾件令人意外的事。長輩在玩桌遊時,解決問題的對話遠比閒聊多—他們是專注的玩家,不是在殺時間。長輩不害怕 AR 技術—當他們遇到困難時,他們會彼此幫忙搞懂介面,反而把學習新科技變成遊戲的一部分。這個研究最後發表於 JMIR Serious Games,但對我而言更重要的是:它打破了一個我原本也帶著的預設—長輩不會玩、不懂科技、只能被動接受安排。\n\n為長輩設計遊戲,第一步是承認他們是玩家。',
          methods: ['以玩家為中心的設計 (Player-Centered Design)', '活躍高齡化框架 (Active Aging Framework)', '遊戲設計 (Game Design)', '脈絡研究 (Contextual Inquiry)', '混合研究方法 (Mixed Methods)'],
          reflection: '為長輩設計遊戲,第一步是承認他們是玩家。',
        },
        {
          id: 7, track: '03',
          nature: 'industry',
          title: '堉璘 Changemaker 高中計畫',
          subtitle: 'Yu-Lin Changemaker Program: Design Thinking into High Schools',
          year: '2024–2026',
          duration: '2 年(進行中)',
          site: '全台合作高中',
          collaboration: '教育部苗圃計畫',
          grant: '林堉璘宏泰教育基金會',
          outcome: '超過 200 位高中生培力、合作 NPO 實際募款專案、第二年擴展到老師培力',
          narrative: '堉璘 Changemaker 是我與林堉璘宏泰教育基金會合作、結合教育部苗圃計畫的兩年產學計畫(2024–2026)。我擔任共同主持人,用設計思考與 PBL 方法,帶領超過 200 位高中生投入 NPO 的真實議題—不是模擬的案例,是合作 NPO 真正在頭痛的問題。\n\n第一年,我們看見的不是「高中生在學習設計思考」,而是高中生為 NPO 做出了具體的募款專案。這些募款專案不是教學展示,是 NPO 實際可以拿去用的東西。這個過程打破了我原本的一個預設—真實的設計工作,不需要等到大學或專業訓練之後才能開始。高中生本來就有設計的能力,只是很少有人把真實的問題交到他們手上。\n\n第二年,我們做了一個決定:把計畫從「培訓學生」擴展到「培力老師」。因為我們發現—學生的改變只是一個案例,老師的改變才是讓設計思考真正進入教育系統的關鍵。一個被培力的老師會繼續教下一屆、再下一屆,讓這些方法在高中課堂裡生根。這個計畫對我而言,是驗證設計思考可以如何跨入教育體制的一個實驗場。\n\n學生的改變只是開始,老師的改變才是真正的教育系統翻轉。',
          methods: ['設計思考 (Design Thinking)', '問題導向學習 (Problem-Based Learning)', '教師培力 (Teacher Training)', '產學合作 (Industry-Academic Collaboration)', 'NPO 夥伴關係 (NPO Partnerships)'],
          reflection: '學生的改變只是開始,老師的改變才是真正的教育系統翻轉。',
        },
      ],
    },
  },
  en: {
    about: {
      intro: 'What a design researcher does most often, in fact, is wait. Wait for elders in care to tell you—at their own pace—what they need. Wait for students to attempt the task you set, so you can see how to teach next. Wait for a designed object to be deployed into real life, where it slowly becomes something it was never meant to be. I draw inspiration from the concept of design-in-use (Henderson & Kyng, 1991): a design only reveals its true shape once it is actually used. At the same time, I ground my methodology in research-through-design (Frayling, 1993)—creating knowledge from design practice, so that the artifacts and processes we make become research outputs and arguments in their own right.',
      intro2: 'My research has four layers. At the core is design thinking—not as a course taught in design schools, but as the methodological backbone of everything I have done since 2016: it is how I see the world and enter each research site. One layer out is the work where I have rooted most deeply—long-term care and dementia research, covering not only elders but also caregivers who carry both physical and emotional strain. Further out are environmental and ecological issues that deserve attention but remain unseen in society. The newest layer is human-centered AI—the most open one, where I think through how contemporary AI enters human lives. My approach can be described in three words: explore, translate, wait.',
      education: {
        title: 'Education',
        items: [
          { year: '2014', degree: 'Ph.D. in Design', school: 'Art, Design and Media Research Centre', note: 'Sheffield Hallam University, U.K.' },
          { year: '2008', degree: 'M.A. in Research in Arts and Design', school: 'Art and Design Research Centre', note: 'Sheffield Hallam University, U.K.' },
          { year: '2004', degree: 'M.Sc. in Industrial Design', school: 'Department of Industrial Design', note: 'Tatung University, Taiwan' },
          { year: '2002', degree: 'B.Sc. in Industrial Design', school: 'Department of Industrial Design', note: 'Tatung University, Taiwan' },
        ],
      },
      experience: {
        title: 'Positions & Experience',
        items: [
          { period: '2014–', role: 'Principal Investigator', org: 'Participatory Design Lab, Tatung University', current: true },
          { period: '2021–', role: 'Associate Professor', org: 'Dept. of Digital Media Design, Tatung University', current: true },
          { period: '2015–2021', role: 'Assistant Professor', org: 'Dept. of Digital Media Design, Tatung University' },
          { period: '2014–2015', role: 'Assistant Professor', org: 'Dept. of Industrial Design, Tatung University' },
          { period: '2010–2012', role: 'Teaching Assistant', org: 'Sheffield Hallam University' },
        ],
      },
      awards: {
        title: 'Awards & Recognition',
        items: [
          { year: '2026', title: 'Outstanding Research–Industry Collaboration', issuer: 'Tatung University' },
          { year: '2025', title: 'IASDR 2025 Best Paper × 2', issuer: 'Design Education & Human-Centered AI Tracks', star: true },
          { year: '2025', title: 'Teaching Excellence Award', issuer: 'Tatung University (2024–25)' },
          { year: '2023', title: 'Best Paper Award', issuer: '16th Cross-Domain Design Conference' },
          { year: '2023', title: 'Outstanding Teaching Practice Grant', issuer: 'MOE Taiwan' },
          { year: '2022', title: 'Best Paper Award', issuer: 'Taiwan KES & TADMD Conference' },
          { year: '2022', title: 'Teaching Innovation Award', issuer: 'Tatung University' },
          { year: '2018', title: 'MOE International Competition Grant', issuer: 'Ministry of Education' },
          { year: '2017', title: 'Smart Living Curriculum Outstanding Faculty', issuer: 'Ministry of Education' },
        ],
      },
      areas: {
        title: 'Research Areas',
        items: ['Participatory Design', 'More-than-Human Design', 'Human-Centered AI', 'Design Thinking Education'],
      },
      courses: {
        title: 'Courses Taught',
        items: ['Design Fundamentals', 'Interaction Design', 'Game Design', 'Portfolio', 'Advanced Cognitive Game Design', 'Advanced Multimodal Design'],
      },
    },
    teaching: {
      heroTitle: 'Teaching',
      heroSubtitle: 'Cultivating agents who can act in complex situations',
      intro: 'Over the years of teaching, I have walked alongside 30+ groups of undergraduate capstone students; 5 of my master\'s students have graduated, and 4 are still working on their theses. On the other side, as a core coach of the Miaopu Project, I have accompanied 200+ cross-university educators as they figured out their own design thinking pedagogy. These students and fellow educators have gone in very different directions—into design, into research, or back into their original fields—but I hope each of them has taken with them something that stays for a lifetime.',
      philosophy: [
        { title: 'Design begins with taste', body: 'At the heart of design thinking lies insight—but I prefer to call it taste. I want students to develop a taste for their own lives and the lives of others, and to read possibilities for design from the textures of the everyday.' },
        { title: 'Teaching is another design-in-use', body: 'I watch how students engage with the tasks I set, then adjust how I teach next time. Teaching, like design, must be deployed, responded to, and revised.' },
        { title: 'Theory and practice chase each other', body: '"In theory, practice follows theory; in practice, theory follows practice." Whether theory leads or practice leads—they generate each other in motion.' },
      ],
      philosophyClosing: 'What I most hope to hear is a student telling me how they have come to read a life—someone else\'s, and their own.',
      graduateTitle: 'Master\'s Thesis Supervised',
      graduates: [
        { year: '2024', name: 'Wu Meng-Hsuan', thesis: 'Constructing an Interactive Water Safety Education Website through UX Design',
          link: 'https://hdl.handle.net/11296/9d84pf', portfolio: 'https://reurl.cc/qv8o5y' },
        { year: '2021', name: 'Chung Shih-Tsun', thesis: 'Applying Rapid Ethnography to Dementia Cognitive Play Design',
          link: 'https://hdl.handle.net/11296/k4mnb8', portfolio: 'https://reurl.cc/jG8ZxL' },
        { year: '2019', name: 'Cheng Yu-Min', thesis: 'The Effect of Dynamic Difficulty Adjustment on Older Adults\' Willingness to Engage in Gamified Exercise',
          link: 'https://hdl.handle.net/11296/82cayp' },
        { year: '2017', name: 'Ting Wei-Hsiang', thesis: 'Applying Regional Development Processes to Board Game Design: Taipei Xinyi District',
          link: 'https://hdl.handle.net/11296/4xcps6' },
        { year: '2016', name: 'Tang Ying-Chia', thesis: 'Developing Small-Bedroom Desk Concepts through Participatory Design',
          link: 'https://hdl.handle.net/11296/tvsw9k' },
      ],
      currentTitle: 'Ongoing Thesis Supervision',
      current: [
        { name: 'Liu Yu-Chan', topic: 'More-than-Human Design × Dog Care App',
          note: 'Two journal papers in preparation (HCI Journal / IJHCS)' },
      ],
      currentFirstYear: 'Also supervising 3 first-year master\'s students (entered in 2024), whose research directions are unfolding.',
      undergradTitle: 'Undergraduate Capstones (Award-Winning)',
      undergradIntro: 'Over the years I have supervised 30+ undergraduate capstone teams. Below are selected projects that received international or national recognition.',
      undergradAwards: [
        { year: '2025', students: 'Wang et al.', work: 'Shadow Play', award: 'Taiwan Digital Media Design Award: Silver (New Media Interactive)', type: 'Interactive Learning Tool' },
        { year: '2025', students: 'Chou Pei-Yu', work: 'Dementia Family Caregiving App', award: 'NSTC Undergraduate Research Grant 2025', type: 'Research Project' },
        { year: '2023', students: 'Liang Shu-Hsuan', work: 'Interactive Digital Picture Book on Dementia Awareness', award: 'NSTC Undergraduate Research Grant 2023', type: 'Research Project' },
        { year: '2021', students: 'Huang Yu-Chiao', work: 'Cross-Cloud Same-Sex Marriage', award: 'Taiwan Digital Media Design Award: Bronze (Board Game)', type: 'Board Game' },
        { year: '2020', students: 'Kuo et al.', work: 'Flower Embroidery', award: '15th KT Science-Arts Creativity Competition: Honorable Mention', type: 'Interactive Installation' },
        { year: '2019', students: 'Chen et al.', work: 'TRACK IT OUT', award: 'Taiwan Digital Media Design Award: Honorable Mention (Interactive Tech)', type: 'Interactive Product' },
        { year: '2019', students: 'Chen, Liu, Shen', work: 'Flip or Not Flip', award: 'MOE Innovation-Creativity-Entrepreneurship: Outstanding', type: 'Digital Board Game' },
        { year: '2018', students: 'Du et al.', work: 'CROSS WAR', award: 'Vision Get Wild Bronze + Brogent Special Award', type: 'AR Interactive Game' },
        { year: '2017', students: 'Yen, Liu, Lee', work: 'Corpse Trade', award: 'Red Dot Design Award 2017: Winner (Communication)', type: '2D Animation' },
        { year: '2017', students: 'Lin et al.', work: 'Huan-Ti', award: 'Vision Get Wild: Sponsor & Excellent Game Design', type: '3D PC Game' },
      ],
    },
    talks: {
      heroTitle: 'Talks & Workshops',
      heroSubtitle: 'Nearly 200 design conversations across Taiwan',
      intro: 'The first invitation came in 2017, and nearly 200 have come since. The audience changes each time—design students, social workers, teachers, nurses, engineers—and their reactions to the same design idea are always different. That is how I see design taking on different shapes in different contexts. Preparing each talk is also how I come to understand my own thinking better. These conversations, slowly, have taught me what I am actually doing.',
      categories: [
        {
          id: 'dt',
          title: 'Design Thinking & Teaching Innovation',
          titleEn: '設計思考與教學創新',
          count: 60,
          color: '#3B4E6B',
          desc: 'I have been a core coach of the Miaopu Project (苗圃計畫) since 2017. These workshops are not just about teaching the steps of design thinking, but about developing new materials and lesson plans that help educators grasp its nuances—especially how to facilitate students, and how to guide them to find, through rapid iteration, solutions closer to real life.',
          samples: ['Miaopu Project: cross-university intro & advanced workshops', 'Shih Chien University: Design Thinking Series', 'NCKU, THU, Providence, FJCU: Miaopu Workshops'],
        },
        {
          id: 'disaster',
          title: 'Disaster Education & Digital Learning',
          titleEn: '防災教育與數位教材',
          count: 25,
          color: '#556B48',
          desc: 'I bring design thinking and PBL (problem-based learning) into disaster education—because for me, design thinking is a way of thinking through everyday problems. Long-term collaborations with the Water Resources Agency, regional disaster advisory teams, and the Ministry of Education let me carry this approach into classrooms across Taiwan.',
          samples: ['Regional disaster advisory teams (New Taipei, Hsinchu, Miaoli, Yilan, etc.)', 'MOE Digital Disaster Education Promotion', 'Water Resources Agency: Teacher Training'],
        },
        {
          id: 'ai',
          title: 'Generative AI & Design Applications',
          titleEn: '生成式 AI 與設計應用',
          count: 15,
          color: '#C27B56',
          desc: 'Over the past two years I have been exploring how GenAI integrates with design thinking and teaching practice. I often remind students: collaborate with GenAI critically, not uncritically. The biggest challenge design education faces with GenAI is speed—we have to rethink where the designer\'s value actually lies.',
          samples: ['Shih Chien University GenAI Series', 'MOE iLink GenAI Competition Training', 'International Behavioral Cognitive Association: Copilot Workshops'],
        },
        {
          id: 'dementia',
          title: 'Dementia Care & Technology',
          titleEn: '失智照護與科技',
          count: 6,
          color: '#8B4E2E',
          desc: 'Sharing fieldwork experience from long-term care with healthcare, social work, and care professionals—including the devices we have built, our research methods, and our observations on care sites. These audiences often see themselves as waiting for a "design team" to come solve their problems, but in fact they can become part of the design team themselves. What I most hope they take away is an idea: how to recognize what the real problem behind their situation actually is.',
          samples: ['MacKay Medical College: Tech × Care', 'NTUB: Design Thinking in Dementia Care', 'Taipei Social Affairs Bureau: Visiting Techniques', 'Songde Hospital: Gamified Experience Design'],
        },
        {
          id: 'citizen',
          title: 'Citizen Science & Environment',
          titleEn: '公民科學與環境',
          count: 12,
          color: '#4A6B55',
          desc: 'To design and engineering students, I want to convey this: everyone can contribute something to the environment they live in. Citizen science is not just "the public helping collect data"—it is about cultivating citizens\' sensitivity to the environments they inhabit. This is also why I discuss "interspecies coexistence" and "More-than-Human Design" in these talks—these are not academic jargon, but ways to see the environment anew.',
          samples: ['NYCU: Green City — Wetland & Street Tree Ecology Workshops', 'NTUST USR: Identifrog Sharing', 'Citizen Science Lecture Series'],
        },
        {
          id: 'international',
          title: 'International Talks',
          titleEn: '國際演講',
          count: 3,
          color: '#6B5443',
          desc: 'Invited to Universiti Putra Malaysia for the TEEPiD (Taiwan Education Experience Programme in Design), and to the Hong Kong Gerontech Expo & Summit. Malaysia\'s three intersecting cultures (Chinese, Malay, Indian) made me rethink cultural sensitivity in design—a direction I hope to continue expanding.',
          samples: ['Universiti Putra Malaysia: TEEPiD@TTU (2018, 2019)', 'Hong Kong Gerontech Expo & Summit: SMART AGING DESIGN (2017)'],
        },
      ],
      recent: {
        title: 'Selected Recent Talks (2025–2026)',
        items: [
          { date: '2026/4', title: 'From Idea to Image: Using GenAI for Visual & Art (Short Talk)', venue: 'Shih Chien University' },
          { date: '2026/3', title: 'Design Thinking & AI Applications', venue: 'Shih Chien University' },
          { date: '2026/3', title: 'Green City — Deconstructing Urban Wetland Ecology', venue: 'NYCU' },
          { date: '2026/3', title: 'Crossing Borders, Creating Impact — Miaopu Forum', venue: 'Miaopu Project' },
          { date: '2026/3', title: 'Cross-Disciplinary Green Engineering Curriculum Design Workshop', venue: 'Tunghai University' },
          { date: '2026/2', title: 'Green Engineering Cross-Disciplinary Teacher Workshop', venue: 'MOE Green Engineering Program' },
          { date: '2026/1', title: 'Smart Care Industry: Issue-Driven Lesson Design', venue: 'MOE Smart Rainforest Program' },
          { date: '2025/12', title: 'Design Thinking × Disaster Education', venue: 'MOE Youth Ambassador' },
          { date: '2025/10', title: 'From Idea to Image: Using GenAI for Visual & Art', venue: 'Shih Chien University' },
          { date: '2025/9', title: 'Listening to Frogs: Interspecies Coexistence in Sound Maps', venue: 'NTUST USR' },
          { date: '2025/6', title: 'Tech × Care — Rethinking Long-term Care', venue: 'MacKay Medical College' },
        ],
      },
    },
    service: {
      heroTitle: 'Academic Service',
      heroSubtitle: 'Peer review, advisory, and community building',
      intro: 'When I serve as a reviewer or advisor, I often find myself learning. Reading a manuscript before it is published, reviewing a grant proposal before it is approved, listening to a museum thinking through an exhibition it is still figuring out—each of these is a chance to enter another researcher\'s mind. Over the years, I have reviewed for SSCI/SCIE journals, served on review panels for NSTC and MOE programs, and sat as an advisor for government agencies and museums. These roles give me access to the questions people are still working through, and that process is sometimes more interesting than reading what has already been published.',
      journal: {
        title: 'Journal Reviewer',
        items: [
          { name: 'Journal of Gerontological Social Work', tag: 'SSCI · Taylor & Francis', count: '4 times (2025–2026)' },
          { name: 'Virtual Reality', tag: 'SCIE · Springer Nature', count: '2024' },
          { name: 'Educational Gerontology', tag: 'SSCI · Taylor & Francis', count: '2022' },
          { name: 'Chinese J. of Science Education', tag: 'TSSCI', count: '2021' },
        ],
      },
      grantReview: {
        title: 'Grant Review',
        items: [
          { category: 'NSTC (National Science & Technology Council)', detail: 'Research grants (2019, 2025, 2026); Undergraduate research (continuous 2019–2026); Creative awards (2020)' },
          { category: 'Ministry of Education', detail: 'Teaching Practice Research Grants (2024, 2025, 2026); AI Curriculum Program (2024)' },
          { category: 'New Engineering Program Consulting', detail: 'THU, NTUST, NCHU, MMC, MCUT (2024–2026)' },
        ],
      },
      advisor: {
        title: 'Long-term Advisory / Coaching',
        items: [
          { role: 'Co-founder & Host', org: 'No. 20 Civic Hall Social Design Lab', period: '2018–' },
          { role: 'Coach', org: 'MOE Cross-Disciplinary Teacher Development Program', period: '2017–' },
          { role: 'Advisor', org: 'Taipei City Cultural Affairs: Mitsui Warehouse Management', period: '2019–' },
          { role: 'Advisor', org: 'Taoyuan Gueishan Eco-Park Environmental Education', period: '2023–' },
          { role: 'Advisor', org: 'Water Resources Agency: Taipei Water Source Environmental Education', period: '2023–2024' },
          { role: 'Level 3 Instructor', org: 'Taiwan Long-Term Care Professionals Association', period: '2017–' },
        ],
      },
      conference: {
        title: 'Conference Service',
        items: [
          { year: '2025', role: 'Session Chair', venue: 'IASDR 2025 — Design Education / Human-Centered AI / Art, Design and Technology' },
          { year: '2025', role: 'Reviewer', venue: 'IASDR 2025' },
          { year: '2024–2025', role: 'Judge', venue: 'iLink Generative AI Creative Application Competition' },
          { year: '2021', role: 'Session Host & Reviewer', venue: '14th International Conference on Taiwan Digital Media Design' },
          { year: '2019', role: 'Program Committee', venue: 'International Conference on Applied Informatics and Technology' },
        ],
      },
      international: {
        title: 'International Collaboration',
        schools: [
          { name: 'Sheffield Institute of Arts, Sheffield Hallam University', nameEn: 'United Kingdom' },
          { name: 'Department of Industrial Design, Universiti Putra Malaysia', nameEn: 'Malaysia' },
          { name: 'Visual Communication, University of Tsukuba', nameEn: 'Japan' },
        ],
        scholars: [
          { name: 'Gordon Young', affiliation: 'Sheffield Hallam University' },
          { name: 'Nigel WK Ball', affiliation: 'Sheffield Hallam University' },
          { name: 'Mark Fisher', affiliation: 'Sheffield Hallam University' },
          { name: 'Roger Bateman', affiliation: 'Sheffield Hallam University' },
          { name: 'Dr. Mohd Shahrizal Bin Dolah', affiliation: 'Universiti Putra Malaysia' },
          { name: 'Dr. Saiful Hasley Bin Ramli', affiliation: 'Universiti Putra Malaysia' },
          { name: 'Dr. Gary McLeod', affiliation: 'University of Tsukuba' },
          { name: 'Dr. Çiğdem Kaya', affiliation: 'Istanbul Technical University' },
        ],
      },
    },
    projectsDetail: {
      heroTitle: 'Research & Practice',
      heroSubtitle: 'Spanning academic research, industry collaboration, and teaching practice',
      intro: 'The seven projects below roughly capture the shape of my work over these past few years—some are NSTC-funded research, others are industry or government collaborations, and some have gradually grown out of teaching practice. They belong to four research tracks, and they influence one another across tracks. Each project is labeled by its track color, so readers can see how a "design researcher" role unfolds across different sites.',
      natureLabels: { research: 'Research', industry: 'Industry', practice: 'Practice' },
      projects: [
        {
          id: 1, track: '01',
          nature: 'research',
          title: 'Cognitive Vitality',
          subtitle: 'Co-Designing Culturally Situated Technologies for Dementia Care',
          year: '2021–2025',
          duration: '3-year NSTC project (I)(II)(III) + 2024 new multi-sensory series',
          site: 'Banqiao & Taipei Veterans Homes',
          collaboration: 'Banqiao Veterans Home, Taipei Veterans Home',
          grant: 'NSTC',
          outcome: '"From Coins to Cups" published in Dementia (SSCI)',
          narrative: 'The first time an elder saw the Dream Coin Bank, he pointed at the airplane on it and said he wanted to go to Brazil to visit his family. The nurse beside him did not correct him. She simply said: "Bei-bei (affectionate term for elder), then we will have to save up for the ticket." That moment showed me something: care is not about pulling elders back into our reality—it is about entering theirs, and continuing to live alongside them. The device was later repurposed by caregivers: when an elder experienced BPSD, it became a way to redirect attention. This is the most moving part of design—it gets redefined on-site (design-in-use).\n\nAnother elder had been a Tai Chi practitioner before dementia; afterwards, he barely moved. We deployed the Memory Bracelet for him—a device that connects to nearby screens and plays Tai Chi videos. Over eight weeks, he went from not moving, to moving along, and finally, to teaching the care aides how to do Tai Chi. It was not technology that made him move. Technology opened a door, and he remembered who he was.\n\nThis research taught me: the best care technology is not about doing things for elders. It is about letting them go on being themselves.',
          methods: ['Participatory Design', 'Ethnography', 'Relational Technology', 'Design-in-use Perspective', 'Research through Design'],
          reflection: 'The best care technology is the kind that lets elders go on being themselves.',
        },
        {
          id: 2, track: '02',
          nature: 'industry',
          title: 'Identifrog',
          subtitle: 'AI-powered Citizen Science for Frog Observation',
          year: '2022–',
          duration: 'Ongoing',
          site: 'Frog habitats across Taiwan (wetlands)',
          collaboration: 'DaLangJu Culture (ecological content), ECoDreaming (citizen science community), Yuan Ze University — Prof. Su Tai-Yuan (AI sound recognition)',
          grant: 'NSTC, DaLangJu Culture, ECoDreaming',
          outcome: 'Published app, IRB approval, AI frog sound recognition model, GitHub repository',
          narrative: 'Why frogs? Not cats or dogs, not birds, not butterflies.\n\nWhat is special about frogs is that we rarely "stop to listen" for them. Their presence is not as clear as birdsong, nor as ubiquitous as insects—frog calls are hidden in the rainy nights of spring and summer, heard only when a person is willing to stop, and open their ears. To build an app that invites citizens to listen to frogs is, fundamentally, to invite people to re-perceive the living environments that usually go unnoticed. This is the starting point of More-than-Human Design: we design not for human convenience, but for the environment in which humans and frogs co-exist.\n\nIdentifrog is a cross-institutional collaboration. Tatung University leads design and user experience; DaLangJu Culture handles ecological content; ECoDreaming manages the citizen science community; Yuan Ze University (Prof. Su Tai-Yuan) develops the AI sound recognition. Integrating the languages of ecologists, community organizers, AI engineers, and designers into one interface is the hardest part of this research—each party has its own insistence on what counts as "a meaningful observation." We spent a long time aligning these insistences, so we could build an app that ordinary people could actually open and keep using.\n\nThe meaning of citizen science is not to turn citizens into scientists, but to make science part of everyday life.',
          methods: ['Citizen Science', 'Participatory Design', 'More-than-Human Design', 'Research through Design'],
          reflection: 'The meaning of citizen science is not to turn citizens into scientists, but to make science part of everyday life.',
        },
        {
          id: 3, track: '03',
          nature: 'practice',
          title: 'Miaopu Project',
          subtitle: 'The Project for Interdisciplinary Faculty Development and Talent Cultivation',
          year: '2017–',
          duration: '9 years',
          site: '30+ universities and K-12 schools across Taiwan',
          collaboration: 'Partner schools; participating in NEEMEC (New Engineering Education)',
          grant: 'Ministry of Education',
          outcome: 'IASDR 2025 Best Paper (Design Education), cross-university workshops, certified coach community',
          narrative: 'The Miaopu Project began in 2017, and I have participated as a core coach ever since. Over these nine years, I have accompanied more than 200 cross-university educators in developing their design thinking pedagogy, working with 30+ universities and K-12 schools across Taiwan.\n\nThe project has followed a clear inner trajectory: it began with professional teacher training—bringing design thinking methodology into workshops at various schools; it then grew into a certified coach community—a cross-university network of educators who exchange ideas, co-develop teaching materials, and support one another; and in recent years it has been integrated into the MOE NEEMEC (New Engineering Education) program, embedding design thinking within a larger interdisciplinary faculty development initiative. From individual training to community, and from community to institutional integration, this is not merely the expansion of a project—it is a methodology being re-examined at different scales.\n\nMy deepest observation over these ten years is this: the teachers and students who actually take up and practice design thinking are the ones who hold an openness toward interdisciplinary dialogue and collaboration. Design thinking is not a "method" that can be taught—it is the extension of an attitude. What our workshops really do is recognize those who are already willing to open their boundaries, and then walk alongside them as they unfold that attitude within their own disciplines.\n\nTeaching design thinking in places that are not design schools is returning design to all the places in life where it has always belonged.',
          methods: ['Design Thinking', 'Problem-Based Learning (PBL)', 'Teacher Training', 'Interdisciplinary Collaboration'],
          reflection: 'Teaching design thinking in places that are not design schools is returning design to all the places in life where it has always belonged.',
        },
        {
          id: 4, track: '04',
          nature: 'industry',
          title: 'Talaria',
          subtitle: 'Human-Centered AI for Music Curation',
          year: '2024–',
          duration: 'Ongoing',
          site: 'KKBox / KKCompany music platform',
          collaboration: 'KKCompany',
          grant: 'KKCompany',
          outcome: 'IASDR 2025 Best Paper (Human-Centered AI), journal paper in preparation (IJHCI)',
          narrative: 'Talaria is a human-centered AI research project in collaboration with KKCompany, exploring how AI can become a collaborator—not a replacement—for professional music curators.\n\nMost AI products today treat "automation" as the goal—letting AI decide for people, saving them the effort of judgment. But music curation is work that depends heavily on professional intuition: a good curator knows when, for whom, and which segment of music to play. This kind of judgment cannot be replaced, and should not be replaced. In our research, we observed that when AI tried to "decide" a song for the curator, trust collapsed instantly; but when AI retrieved by segments rather than whole songs, and when AI opened up the reasoning of "why this recommendation" for curators to see, trust began to build.\n\nThis research showed me the real design focus of human-centered AI: not making AI smarter, but making AI more transparent—letting the professional understand what it is doing, and preserving their power to override it. When AI sees people (understanding curators\' actual work rhythms), people can see AI (understanding its reasoning); only then can genuine collaboration emerge.\n\nWhen AI sees people, people can trust it.',
          methods: ['Human-Centered AI', 'Qualitative Research', 'Research through Design'],
          reflection: 'When AI sees people, people can trust it.',
        },
        {
          id: 5, track: '02',
          nature: 'industry',
          title: 'Disaster Education',
          subtitle: 'From Risk to Action',
          year: '2021–2026',
          duration: '6 years',
          site: 'Schools across Taiwan, Water Resources Agency, disaster advisory teams',
          collaboration: 'Co-PI — school-based disaster digital learning; intelligent response robot',
          grant: 'Ministry of Education, Water Resources Agency',
          outcome: 'Two MOE projects (school disaster issues; seismic, meteorological, hydrological hazards); 6 consecutive years of Water Resources Agency contracts (2021–2026) on the intelligent response robot; interactive website and disaster e-books; national teacher training',
          narrative: 'The greatest difficulty in disaster education has never been a lack of information—we have long known that earthquakes come, typhoons come, floods come. The real difficulty is this: when risk exists abstractly in reports and data, people find it hard to translate it into their own actions. This project is built around that question: how do we turn "knowing the risk" into "knowing what to do about it"?\n\nOver six years, I have been answering this from two directions. The first is the MOE school-based disaster education project (2022–2025)—using Problem-Based Learning (PBL) and STEAM pedagogy to let students engage with specific, hands-on scenarios rather than memorize facts about seismic, meteorological, or hydrological hazards, turning disaster awareness into an actionable capacity. This project is my entry point into disaster education, and remains the work I care about most. The second is the Water Resources Agency\'s intelligent response robot (2021–2026, six consecutive years of industry collaboration)—designing disaster information into an interface that citizens can query at critical moments, so that risk judgment no longer belongs only to experts.\n\nOne is translation in the classroom; the other is translation in everyday life. Both point to the same thing: risk knowledge is only meaningful when it can actually be used.\n\nThe key to disaster education is not letting people know about risk, but enabling them to know what to do when risk arrives.',
          methods: ['Problem-Based Learning (PBL)', 'STEAM Pedagogy', 'User Experience Design'],
          reflection: 'The key to disaster education is not letting people know about risk, but enabling them to know what to do when risk arrives.',
        },
        {
          id: 6, track: '01',
          nature: 'research',
          title: 'Active Aging × Silver Gaming',
          subtitle: 'Integrating WHO Active Aging Framework into Game Design for Older Adults',
          year: '2016–2019',
          duration: '3-year NSTC project (I)(II)(III)',
          site: 'Community sites in Xinyi and Wanhua Districts, Taipei',
          collaboration: 'Taipei Xinyi District Office, Banqiao Veterans Home',
          grant: 'NSTC',
          outcome: 'Published in JMIR Serious Games (SCIE)',
          narrative: '"I still remember the smell of Ming Sing Floral Water because my family used it every morning—it reminds me of the wonderful time I had with my mom and sisters." This is what one elder said during our research. When we designed Nostalgic Seekers—an augmented reality (AR) board game built around ten objects from 1960s–1980s Taiwan (Ming Sing Floral Water, Tatung Boy, bamboo-copter, rotary phone, Asian conical hat, Konpetio candy, and others)—what we saw was not elders "playing a game," but elders reclaiming their own stories through objects.\n\nThis three-year NSTC project (2016–2019) began with a problem: mainstream game design almost entirely ignores older adults. Elders are either treated as "subjects to be safeguarded against cognitive decline," or simply left out of the market. But the WHO\'s "Active Aging" framework reminds us: what elders need is active participation, not passive protection. We used this framework to redefine the goal of game design—to build games for 50–59 year-olds, "the next generation of elders," that they would want to play, could actually play, and would find meaning in.\n\nThe research revealed several surprising observations. When playing the board game, elders engaged in task-oriented problem-solving conversations far more than casual chat—they were focused players, not killing time. Elders were not afraid of AR technology—when they encountered difficulty, they helped each other figure out the interface, turning the learning of new technology into part of the game itself. The study was eventually published in JMIR Serious Games, but what mattered more to me is this: it broke an assumption I had carried myself—that elders cannot play, cannot handle technology, can only passively accept what is arranged for them.\n\nTo design games for elders, the first step is to recognize that they are players.',
          methods: ['Player-Centered Design', 'Active Aging Framework', 'Game Design', 'Contextual Inquiry', 'Mixed Methods'],
          reflection: 'To design games for elders, the first step is to recognize that they are players.',
        },
        {
          id: 7, track: '03',
          nature: 'industry',
          title: 'Yu-Lin Changemaker Program',
          subtitle: 'Design Thinking into High Schools',
          year: '2024–2026',
          duration: '2 years (ongoing)',
          site: 'Partner high schools across Taiwan',
          collaboration: 'MOE Miaopu Project',
          grant: 'Lin Yu-Lin Hongtai Education Foundation',
          outcome: 'Over 200 high school students empowered; concrete fundraising projects for NPOs; program expanded to teacher empowerment in Year 2',
          narrative: 'Yu-Lin Changemaker is a two-year industry-academic collaboration (2024–2026) with the Lin Yu-Lin Hongtai Education Foundation, co-delivered with the Miaopu Project. As co-principal investigator, I led more than 200 high school students through design thinking and PBL to engage with real NPO issues—not simulated cases, but the problems the partner NPOs were actually grappling with.\n\nIn the first year, what we saw was not "high school students learning design thinking," but high school students producing concrete fundraising projects for NPOs. These were not teaching demos—they were deliverables that the NPOs could actually use. This process broke one of my own assumptions: real design work does not need to wait until university or professional training. High school students already have the capacity to design; what is rare is someone handing them a real problem.\n\nIn the second year, we made a decision: to expand the program from "training students" to "empowering teachers." We had realized that the change in a student is only one case, while the change in a teacher is what truly lets design thinking enter the educational system. An empowered teacher will go on teaching the next cohort, and the next, letting these methods take root in high school classrooms. For me, this project is a testbed for how design thinking can enter the formal education system.\n\nThe change in students is only the beginning; the change in teachers is what truly transforms the educational system.',
          methods: ['Design Thinking', 'Problem-Based Learning (PBL)', 'Teacher Training', 'Industry-Academic Collaboration', 'NPO Partnerships'],
          reflection: 'The change in students is only the beginning; the change in teachers is what truly transforms the educational system.',
        },
      ],
    },
  },
};

// ============================================================
// Hooks
// ============================================================

const useIntersection = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const useCountUp = (target, duration = 1800, visible) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const numeric = parseInt(String(target).replace(/\D/g, ''), 10) || 0;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * numeric));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, visible]);
  return n;
};

// ============================================================
// Component: Background texture
// ============================================================

const GrainTexture = () => (
  <svg style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.35, mixBlendMode: 'multiply', zIndex: 1 }}>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix values="0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0 0.3  0 0 0 0.08 0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

// ============================================================
// Component: Navigation
// ============================================================

const Nav = ({ lang, setLang, t, route, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const routes = ['home', 'about', 'projects', 'publications', 'teaching', 'talks', 'service'];
  const navLabels = lang === 'zh'
    ? ['首頁', '關於', '研究與實踐', '論文', '教學', '演講', '服務']
    : ['Home', 'About', 'Research & Practice', 'Publications', 'Teaching', 'Talks', 'Service'];

  const handleNavClick = (r) => {
    navigate(r);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? (isMobile ? '12px 20px' : '16px 48px') : (isMobile ? '20px 20px' : '28px 48px'),
      background: scrolled || menuOpen ? 'rgba(245, 241, 232, 0.92)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(60, 50, 40, 0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: 'var(--sans)',
      flexWrap: 'wrap',
    }}>
      <button onClick={() => handleNavClick('home')} style={{
        fontFamily: 'var(--serif)',
        fontSize: isMobile ? '17px' : '20px', fontWeight: 500, letterSpacing: '-0.01em',
        color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'baseline', gap: isMobile ? '8px' : '12px', padding: 0,
      }}>
        <span>Yen-Fu Chen</span>
        <span style={{ fontSize: isMobile ? '11px' : '13px', color: 'var(--muted)', fontWeight: 400 }}>陳彥甫</span>
      </button>

      {/* Desktop nav */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {routes.map((r, i) => (
            <button
              key={r}
              onClick={() => navigate(r)}
              style={{
                fontSize: '13px',
                color: route === r ? 'var(--accent)' : 'var(--ink)',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px 14px', letterSpacing: '0.02em',
                fontFamily: 'var(--sans)',
                transition: 'color 0.2s',
                fontWeight: route === r ? 600 : 400,
                position: 'relative',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (route !== r) e.target.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { if (route !== r) e.target.style.color = 'var(--ink)'; }}
            >
              {navLabels[i]}
              {route === r && (
                <span style={{
                  position: 'absolute', bottom: '2px', left: '14px', right: '14px',
                  height: '1px', background: 'var(--accent)',
                }} />
              )}
            </button>
          ))}
          <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} style={{
            marginLeft: '16px', padding: '8px 14px',
            border: '1px solid var(--ink)', background: 'transparent',
            fontFamily: 'var(--sans)', fontSize: '12px', letterSpacing: '0.08em',
            cursor: 'pointer', color: 'var(--ink)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--cream)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--ink)'; }}>
            {lang === 'zh' ? 'EN' : '中'}
          </button>
        </div>
      )}

      {/* Mobile hamburger button */}
      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
          display: 'flex', flexDirection: 'column', gap: '5px',
        }} aria-label="Menu">
          <span style={{ width: '22px', height: '1.5px', background: 'var(--ink)', transition: 'all 0.3s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span style={{ width: '22px', height: '1.5px', background: 'var(--ink)', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <span style={{ width: '22px', height: '1.5px', background: 'var(--ink)', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      )}

      {/* Mobile menu drawer */}
      {isMobile && menuOpen && (
        <div style={{
          width: '100%', marginTop: '16px',
          display: 'flex', flexDirection: 'column', gap: '4px',
          paddingBottom: '8px',
        }}>
          {routes.map((r, i) => (
            <button
              key={r}
              onClick={() => handleNavClick(r)}
              style={{
                fontSize: '15px',
                color: route === r ? 'var(--accent)' : 'var(--ink)',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '12px 0', letterSpacing: '0.02em',
                fontFamily: 'var(--sans)',
                fontWeight: route === r ? 600 : 400,
                textAlign: 'left',
                borderBottom: '1px solid rgba(60, 50, 40, 0.06)',
              }}
            >
              {navLabels[i]}
            </button>
          ))}
          <button onClick={() => { setLang(lang === 'zh' ? 'en' : 'zh'); setMenuOpen(false); }} style={{
            marginTop: '12px', padding: '10px 14px',
            border: '1px solid var(--ink)', background: 'transparent',
            fontFamily: 'var(--sans)', fontSize: '12px', letterSpacing: '0.08em',
            cursor: 'pointer', color: 'var(--ink)',
            alignSelf: 'flex-start',
          }}>
            {lang === 'zh' ? 'EN — Switch to English' : '中 — 切換為中文'}
          </button>
        </div>
      )}
    </nav>
  );
};

// ============================================================
// Component: Hero
// ============================================================

const Hero = ({ t, navigate }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      paddingTop: '140px', paddingLeft: '48px', paddingRight: '48px',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Decorative floating shapes */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%', width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(194, 123, 86, 0.14) 0%, transparent 60%)',
        transform: `translateY(${scrollY * 0.15}px)`, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(46, 74, 62, 0.12) 0%, transparent 60%)',
        transform: `translateY(${-scrollY * 0.2}px)`, pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px', margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center',
        position: 'relative', zIndex: 2,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--muted)', marginBottom: '32px', textTransform: 'uppercase',
            opacity: 0, animation: 'fadeInUp 0.8s 0.2s forwards',
          }}>
            — Design Researcher / Educator
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(48px, 6.5vw, 92px)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            color: 'var(--ink)', margin: 0, fontWeight: 400,
            whiteSpace: 'pre-line',
            opacity: 0, animation: 'fadeInUp 1s 0.4s forwards',
          }}>
            {t.hero.title}
          </h1>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: 'clamp(18px, 1.8vw, 24px)',
            color: 'var(--accent-deep)', marginTop: '36px', lineHeight: 1.5,
            whiteSpace: 'pre-line', fontWeight: 400,
            opacity: 0, animation: 'fadeInUp 1s 0.6s forwards',
          }}>
            {t.hero.subtitle}
          </p>

          <div style={{
            marginTop: '60px', display: 'flex', alignItems: 'baseline', gap: '20px',
            fontFamily: 'var(--sans)',
            opacity: 0, animation: 'fadeInUp 1s 0.8s forwards',
          }}>
            <span style={{
              fontFamily: 'var(--serif)', fontSize: '22px',
              color: 'var(--ink)', fontWeight: 500,
            }}>{t.hero.name}</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--muted)' }} />
            <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              <div>{t.hero.role}</div>
              <div>{t.hero.role2}</div>
            </div>
          </div>
        </div>

        {/* Portrait with decorative frame */}
        <div style={{
          position: 'relative', aspectRatio: '3/4', maxWidth: '420px', marginLeft: 'auto',
          opacity: 0, animation: 'fadeInUp 1.2s 0.5s forwards',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-deep) 100%)',
            transform: 'translate(16px, 16px)', zIndex: 0,
          }} />
          <img
            src="data:image/jpeg;base64,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"
            alt="Yen-Fu Chen"
            style={{
              position: 'relative', zIndex: 1, width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
        color: 'var(--muted)', textTransform: 'uppercase',
        opacity: 0, animation: 'fadeIn 1s 1.5s forwards',
      }}>
        <div>Scroll</div>
        <div style={{
          width: '1px', height: '40px', background: 'var(--muted)',
          animation: 'scrollDown 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
};

// ============================================================
// Component: Intro + Stats
// ============================================================

const Stat = ({ num, label, visible, delay }) => {
  const [ref, localVisible] = useIntersection();
  const count = useCountUp(num, 1800, localVisible);
  const suffix = String(num).replace(/[\d]/g, '');

  return (
    <div ref={ref} style={{
      opacity: localVisible ? 1 : 0,
      transform: localVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.8s ${delay}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
    }}>
      <div style={{
        fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)',
        fontWeight: 400, color: 'var(--accent)', lineHeight: 1,
        letterSpacing: '-0.03em',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
        marginTop: '12px', letterSpacing: '0.02em',
      }}>
        {label}
      </div>
    </div>
  );
};

const Intro = ({ t, lang }) => {
  const [ref, visible] = useIntersection();

  return (
    <section id="about" ref={ref} style={{
      padding: '180px 48px', position: 'relative',
      background: 'var(--cream-dark)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.4em',
          color: 'var(--muted)', marginBottom: '60px', textTransform: 'uppercase',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          § &nbsp; {t.intro.label}
        </div>

        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(26px, 3vw, 42px)',
          lineHeight: 1.45, color: 'var(--ink)', margin: 0,
          maxWidth: '1100px', fontWeight: 400, letterSpacing: '-0.01em',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          {t.intro.body}
        </p>

        <div style={{
          marginTop: '120px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px',
          paddingTop: '60px', borderTop: '1px solid rgba(60, 50, 40, 0.1)',
        }}>
          {t.intro.stats.map((s, i) => (
            <Stat key={i} num={s.num} label={s.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Component: Draft Badge — for content that's AI-drafted
// ============================================================

const DraftBadge = ({ lang, inline = false }) => (
  <div style={{
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center', gap: '6px',
    padding: '4px 10px',
    background: 'rgba(194, 123, 86, 0.1)',
    border: '1px dashed rgba(194, 123, 86, 0.5)',
    color: 'var(--accent-deep)',
    fontFamily: 'var(--sans)', fontSize: '10px',
    letterSpacing: '0.15em', textTransform: 'uppercase',
    fontWeight: 500,
    width: 'fit-content',
    marginBottom: inline ? 0 : '12px',
  }}>
    <span>✏️</span>
    <span>{lang === 'zh' ? 'AI 起草草稿,待陳老師修改' : 'AI Draft – Please Edit'}</span>
  </div>
);

// ============================================================
// Sub-page: Page Header (shared)
// ============================================================

const PageHeader = ({ title, subtitle, intro, isDraft, lang }) => {
  return (
    <section style={{
      padding: '180px 48px 80px', background: 'var(--cream)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(194, 123, 86, 0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.4em',
          color: 'var(--muted)', marginBottom: '32px', textTransform: 'uppercase',
          opacity: 0, animation: 'fadeInUp 0.8s 0.1s forwards',
        }}>
          § &nbsp; {subtitle}
        </div>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(56px, 8vw, 120px)',
          lineHeight: 1, letterSpacing: '-0.03em',
          color: 'var(--ink)', margin: 0, fontWeight: 400,
          opacity: 0, animation: 'fadeInUp 1s 0.3s forwards',
        }}>
          {title}
        </h1>
        {intro && (
          <div style={{
            marginTop: '48px',
            opacity: 0, animation: 'fadeInUp 1s 0.5s forwards',
          }}>
            {isDraft && <DraftBadge lang={lang} />}
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: 'var(--ink)', lineHeight: 1.55, maxWidth: '900px',
              margin: 0, fontWeight: 400,
            }}>
              {intro}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================================
// Sub-page: About
// ============================================================

const ResearchLayersSVG = ({ lang }) => {
  const labels = lang === 'zh'
    ? [
        { title: '人本 AI', caption: 'Human-Centered AI', sub: '最新 · 最開放' },
        { title: '環境 × 生態', caption: 'Environment & Ecology', sub: '沒被看見的議題' },
        { title: '長照 × 失智', caption: 'Long-term Care & Dementia', sub: '紮根最深的田野' },
        { title: '設計思考', caption: 'Design Thinking', sub: '最核心 · 方法論骨幹' },
      ]
    : [
        { title: 'Human-Centered AI', caption: 'Newest, most open', sub: 'Emerging frontier' },
        { title: 'Environment & Ecology', caption: 'Unseen issues', sub: 'Often unnoticed' },
        { title: 'Long-term Care & Dementia', caption: 'Deepest fieldwork', sub: 'Most rooted' },
        { title: 'Design Thinking', caption: 'Methodological core', sub: 'Since 2016' },
      ];

  return (
    <svg width="100%" viewBox="0 0 680 480" style={{ maxWidth: '680px' }} role="img" aria-label={lang === 'zh' ? '四層研究地圖' : 'Four layers of research'}>
      <title>{lang === 'zh' ? '四層研究地圖' : 'Four layers of research'}</title>
      <g transform="translate(200, 240)">
        <circle cx="0" cy="0" r="160" fill="none" stroke="#6B4A7A" strokeWidth="1" strokeOpacity="0.45" strokeDasharray="4 6" />
        <circle cx="0" cy="0" r="120" fill="none" stroke="#556B48" strokeWidth="1.2" strokeOpacity="0.7" />
        <circle cx="0" cy="0" r="78" fill="none" stroke="#C27B56" strokeWidth="1.5" strokeOpacity="0.85" />
        <circle cx="0" cy="0" r="40" fill="#3B4E6B" fillOpacity="0.15" stroke="#3B4E6B" strokeWidth="1.8" />
      </g>

      {/* 人本 AI - 最外層 (r=160) */}
      <path d="M 332.6 150.5 L 420 115" fill="none" stroke="#6B4A7A" strokeWidth="0.8" strokeOpacity="0.6" strokeDasharray="3 3" />
      <rect x="425" y="110" width="10" height="10" fill="none" stroke="#6B4A7A" strokeWidth="1" strokeDasharray="2 2" />
      <text x="445" y="118" fontFamily="Georgia, 'Noto Serif TC', serif" fontSize="14" fill="#6B4A7A">{labels[0].title}</text>
      <text x="445" y="133" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="11" fill="#6B4A7A" fillOpacity="0.75">{labels[0].caption}</text>
      <text x="445" y="147" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="10" fill="#5A4A3E" fillOpacity="0.5">{labels[0].sub}</text>

      {/* 環境 × 生態 - 第三層 (r=120) */}
      <path d="M 308.8 189.3 L 420 185" fill="none" stroke="#556B48" strokeWidth="0.8" strokeOpacity="0.7" />
      <rect x="425" y="180" width="10" height="10" fill="none" stroke="#556B48" strokeWidth="1.2" />
      <text x="445" y="188" fontFamily="Georgia, 'Noto Serif TC', serif" fontSize="14" fill="#556B48">{labels[1].title}</text>
      <text x="445" y="203" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="11" fill="#556B48" fillOpacity="0.75">{labels[1].caption}</text>
      <text x="445" y="217" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="10" fill="#5A4A3E" fillOpacity="0.5">{labels[1].sub}</text>

      {/* 長照 × 失智 - 第二層 (r=78) */}
      <path d="M 278.0 240.0 L 420 255" fill="none" stroke="#C27B56" strokeWidth="0.8" strokeOpacity="0.75" />
      <rect x="425" y="250" width="10" height="10" fill="none" stroke="#C27B56" strokeWidth="1.5" />
      <text x="445" y="258" fontFamily="Georgia, 'Noto Serif TC', serif" fontSize="14" fill="#C27B56">{labels[2].title}</text>
      <text x="445" y="273" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="11" fill="#C27B56" fillOpacity="0.75">{labels[2].caption}</text>
      <text x="445" y="287" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="10" fill="#5A4A3E" fillOpacity="0.5">{labels[2].sub}</text>

      {/* 設計思考 - 最核心 (r=40) */}
      <path d="M 236.3 256.9 L 420 325" fill="none" stroke="#3B4E6B" strokeWidth="0.8" strokeOpacity="0.75" />
      <rect x="425" y="320" width="10" height="10" fill="#3B4E6B" fillOpacity="0.35" stroke="#3B4E6B" strokeWidth="1.5" />
      <text x="445" y="328" fontFamily="Georgia, 'Noto Serif TC', serif" fontSize="14" fill="#3B4E6B">{labels[3].title}</text>
      <text x="445" y="343" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="11" fill="#3B4E6B" fillOpacity="0.75">{labels[3].caption}</text>
      <text x="445" y="357" fontFamily="Georgia, 'Noto Serif TC', serif" fontStyle="italic" fontSize="10" fill="#5A4A3E" fillOpacity="0.5">{labels[3].sub}</text>
    </svg>
  );
};

const AboutPage = ({ ext, lang, navigate }) => {
  const a = ext.about;
  return (
    <div>
      <PageHeader
        title={lang === 'zh' ? '關於' : 'About'}
        subtitle={lang === 'zh' ? '學者履歷 · 研究取向' : 'Profile · Research Position'}
        intro={a.intro}
      />

      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div style={{
          maxWidth: '1400px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: '16px', lineHeight: 1.8,
              color: 'var(--ink)', opacity: 0.85, margin: 0,
            }}>
              {a.intro2}
            </p>
          </div>
          <div style={{ flex: '1 1 400px', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
            <ResearchLayersSVG lang={lang} />
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: '100px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 48px)',
            color: 'var(--ink)', margin: '0 0 60px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {a.education.title}
          </h2>
          <div>
            {a.education.items.map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '140px 1fr',
                gap: '48px', padding: '28px 0',
                borderTop: '1px solid rgba(60, 50, 40, 0.15)',
                borderBottom: i === a.education.items.length - 1 ? '1px solid rgba(60, 50, 40, 0.15)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--accent)',
                  fontWeight: 400, letterSpacing: '-0.02em',
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500,
                    color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em',
                  }}>
                    {item.degree}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--ink)',
                    marginTop: '6px', opacity: 0.85,
                  }}>
                    {item.school}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)',
                    marginTop: '4px', fontStyle: 'italic',
                  }}>
                    {item.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 48px)',
            color: 'var(--ink)', margin: '0 0 60px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {a.experience.title}
          </h2>
          <div>
            {a.experience.items.map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr',
                gap: '48px', padding: '24px 0',
                borderTop: '1px solid rgba(60, 50, 40, 0.1)',
                position: 'relative',
              }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                  letterSpacing: '0.05em', fontWeight: item.current ? 600 : 400,
                }}>
                  {item.period}
                  {item.current && (
                    <span style={{
                      marginLeft: '10px', display: 'inline-block',
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: 'var(--accent)',
                    }} />
                  )}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--ink)',
                    fontWeight: 500,
                  }}>
                    {item.role}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                    marginTop: '4px',
                  }}>
                    {item.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '100px 48px', background: 'var(--ink)', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 48px)',
            margin: '0 0 60px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {a.awards.title}
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '24px',
          }}>
            {a.awards.items.map((item, i) => (
              <div key={i} style={{
                padding: '28px',
                border: '1px solid rgba(245, 241, 232, 0.15)',
                background: item.star ? 'rgba(194, 123, 86, 0.12)' : 'transparent',
                position: 'relative',
              }}>
                {item.star && (
                  <div style={{
                    position: 'absolute', top: '12px', right: '16px',
                    fontSize: '16px', color: 'var(--accent)',
                  }}>★</div>
                )}
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--accent)',
                  marginBottom: '12px', letterSpacing: '-0.02em',
                }}>
                  {item.year}
                </div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '18px', margin: 0,
                  fontWeight: 500, lineHeight: 1.35,
                }}>
                  {item.title}
                </h3>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '12px', color: 'rgba(245, 241, 232, 0.6)',
                  marginTop: '10px', letterSpacing: '0.02em',
                }}>
                  {item.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas & Courses */}
      <section style={{ padding: '100px 48px', background: 'var(--cream-dark)' }}>
        <div style={{
          maxWidth: '1400px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: '32px', color: 'var(--ink)',
              margin: '0 0 32px', fontWeight: 400, letterSpacing: '-0.01em',
            }}>
              — {a.areas.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {a.areas.items.map((item, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--sans)', fontSize: '12px',
                  padding: '8px 14px',
                  border: '1px solid var(--ink)', color: 'var(--ink)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: '32px', color: 'var(--ink)',
              margin: '0 0 32px', fontWeight: 400, letterSpacing: '-0.01em',
            }}>
              — {a.courses.title}
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px 24px',
              fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--ink)',
            }}>
              {a.courses.items.map((item, i) => (
                <div key={i} style={{
                  padding: '8px 0', borderBottom: '1px solid rgba(60, 50, 40, 0.1)',
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================
// Sub-page: Projects (Detailed)
// ============================================================

const ProjectsPage = ({ ext, lang, navigate }) => {
  const p = ext.projectsDetail;
  const [activeId, setActiveId] = useState(p.projects[0].id);
  const [natureFilter, setNatureFilter] = useState('all');
  const activeProject = p.projects.find(pr => pr.id === activeId);

  const trackColors = { '01': '#C27B56', '02': '#556B48', '03': '#3B4E6B', '04': '#6B4A7A' };
  const trackNames = lang === 'zh'
    ? { '01': '失智照護', '02': '公民科學', '03': '設計思考教育', '04': '人本 AI' }
    : { '01': 'Dementia Care', '02': 'Citizen Science', '03': 'Design Thinking Education', '04': 'Human-Centered AI' };

  // Nature styles: research / industry / practice
  const natureStyles = {
    research: { color: '#5A4A8B', bg: 'rgba(90, 74, 139, 0.1)', label: p.natureLabels?.research || 'Research' },
    industry: { color: '#A65A2E', bg: 'rgba(166, 90, 46, 0.1)', label: p.natureLabels?.industry || 'Industry' },
    practice: { color: '#3D6B5C', bg: 'rgba(61, 107, 92, 0.1)', label: p.natureLabels?.practice || 'Practice' },
  };

  // Filter by nature
  const visibleProjects = natureFilter === 'all'
    ? p.projects
    : p.projects.filter(pr => pr.nature === natureFilter);

  // If active project filtered out, fall back to first visible
  useEffect(() => {
    if (!visibleProjects.find(pr => pr.id === activeId) && visibleProjects.length > 0) {
      setActiveId(visibleProjects[0].id);
    }
  }, [natureFilter]);

  return (
    <div>
      <PageHeader
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        intro={p.intro}
        lang={lang}
      />

      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Nature filter */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '40px', flexWrap: 'wrap',
          }}>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
              color: 'var(--muted)', textTransform: 'uppercase',
            }}>
              {lang === 'zh' ? '依性質篩選' : 'Filter by nature'}
            </div>
            {[
              { id: 'all', label: lang === 'zh' ? '全部' : 'All' },
              { id: 'research', label: natureStyles.research.label, color: natureStyles.research.color },
              { id: 'industry', label: natureStyles.industry.label, color: natureStyles.industry.color },
              { id: 'practice', label: natureStyles.practice.label, color: natureStyles.practice.color },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setNatureFilter(opt.id)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '12px',
                  padding: '8px 16px',
                  background: natureFilter === opt.id ? (opt.color || 'var(--ink)') : 'transparent',
                  border: `1px solid ${opt.color || 'var(--ink)'}`,
                  color: natureFilter === opt.id ? 'var(--cream)' : (opt.color || 'var(--ink)'),
                  cursor: 'pointer', letterSpacing: '0.05em',
                  transition: 'all 0.2s',
                }}
              >
                {opt.label}
                {opt.id !== 'all' && ` (${p.projects.filter(pr => pr.nature === opt.id).length})`}
              </button>
            ))}
          </div>

          {/* Tab selector */}
          <div style={{
            display: 'flex', gap: '4px', marginBottom: '60px', flexWrap: 'wrap',
            borderBottom: '1px solid rgba(60, 50, 40, 0.15)', paddingBottom: '4px',
          }}>
            {visibleProjects.map(pr => (
              <button
                key={pr.id}
                onClick={() => setActiveId(pr.id)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '13px',
                  padding: '16px 20px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: activeId === pr.id ? trackColors[pr.track] : 'var(--muted)',
                  borderBottom: activeId === pr.id ? `2px solid ${trackColors[pr.track]}` : '2px solid transparent',
                  fontWeight: activeId === pr.id ? 600 : 400,
                  transition: 'all 0.2s', letterSpacing: '0.02em',
                  marginBottom: '-4px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                {pr.nature && natureStyles[pr.nature] && (
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: natureStyles[pr.nature].color,
                    display: 'inline-block',
                  }} />
                )}
                {pr.title}
              </button>
            ))}
          </div>

          {/* Project detail */}
          <div key={activeProject.id} style={{
            animation: 'fadeInUp 0.5s forwards',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
              marginBottom: '60px',
            }}>
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: trackColors[activeProject.track],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--cream)', fontFamily: 'var(--serif)',
                    fontSize: '16px', fontWeight: 500,
                  }}>
                    {activeProject.track}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
                    color: 'var(--muted)', textTransform: 'uppercase',
                  }}>
                    {trackNames[activeProject.track]}
                  </div>
                  {/* Nature badge */}
                  {activeProject.nature && natureStyles[activeProject.nature] && (
                    <div style={{
                      fontFamily: 'var(--sans)', fontSize: '11px',
                      padding: '4px 10px',
                      background: natureStyles[activeProject.nature].bg,
                      color: natureStyles[activeProject.nature].color,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      fontWeight: 600,
                      border: `1px solid ${natureStyles[activeProject.nature].color}`,
                    }}>
                      {natureStyles[activeProject.nature].label}
                    </div>
                  )}
                </div>
                <h2 style={{
                  fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 60px)',
                  color: 'var(--ink)', margin: 0, fontWeight: 400, letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                }}>
                  {activeProject.title}
                </h2>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: '18px', color: trackColors[activeProject.track],
                  marginTop: '16px',
                }}>
                  {activeProject.subtitle}
                </div>
              </div>

              <div>
                <div style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px 20px',
                  fontFamily: 'var(--sans)', fontSize: '13px', lineHeight: 1.8,
                }}>
                  <div style={{ color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '11px' }}>
                    {lang === 'zh' ? '期間' : 'Period'}
                  </div>
                  <div style={{ color: 'var(--ink)' }}>{activeProject.year} ({activeProject.duration})</div>

                  <div style={{ color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '11px' }}>
                    {lang === 'zh' ? '場域' : 'Site'}
                  </div>
                  <div style={{ color: 'var(--ink)' }}>{activeProject.site}</div>

                  <div style={{ color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '11px' }}>
                    {lang === 'zh' ? '合作' : 'Partners'}
                  </div>
                  <div style={{ color: 'var(--ink)' }}>{activeProject.collaboration}</div>

                  {activeProject.grant && (
                    <>
                      <div style={{ color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '11px' }}>
                        {lang === 'zh' ? '計畫資助' : 'Grant'}
                      </div>
                      <div style={{ color: 'var(--ink)' }}>{activeProject.grant}</div>
                    </>
                  )}

                  <div style={{ color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '11px' }}>
                    {lang === 'zh' ? '成果' : 'Outcome'}
                  </div>
                  <div style={{ color: 'var(--ink)' }}>{activeProject.outcome}</div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div style={{
              padding: '48px', background: 'var(--cream-dark)',
              borderLeft: `4px solid ${trackColors[activeProject.track]}`,
              marginBottom: '40px',
            }}>
              <div style={{
                fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
                color: 'var(--muted)', marginBottom: '20px', textTransform: 'uppercase',
              }}>
                § {lang === 'zh' ? '專案故事' : 'Story'}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: '18px', lineHeight: 1.7,
                color: 'var(--ink)', fontWeight: 400,
              }}>
                {activeProject.narrative.split('\n\n').map((para, i) => (
                  <p key={i} style={{ margin: i === 0 ? '0 0 16px' : '16px 0' }}>{para}</p>
                ))}
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
                  color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase',
                }}>
                  § {lang === 'zh' ? '使用方法' : 'Methods'}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeProject.methods.map((m, i) => (
                    <span key={i} style={{
                      fontFamily: 'var(--sans)', fontSize: '12px',
                      padding: '8px 14px',
                      border: `1px solid ${trackColors[activeProject.track]}`,
                      color: trackColors[activeProject.track],
                    }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
                  color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase',
                }}>
                  § {lang === 'zh' ? '反思' : 'Reflection'}
                </div>
                <p style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '16px',
                  color: 'var(--ink)', margin: 0, lineHeight: 1.6,
                }}>
                  "{activeProject.reflection}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================
// Sub-page: Publications (Full)
// ============================================================

const PublicationsPage = ({ t, lang, navigate }) => {
  return (
    <div>
      <PageHeader
        title={lang === 'zh' ? '論文' : 'Publications'}
        subtitle={lang === 'zh' ? '期刊 · 國際會議 · 專書' : 'Journals · Conferences · Books'}
        intro={lang === 'zh'
          ? '以下是代表性學術著作,涵蓋 SSCI/SCIE/TSSCI 期刊、IASDR 等頂級設計會議,以及專書與專書論文。'
          : 'Selected academic works across SSCI/SCIE/TSSCI journals, top design conferences (IASDR), and book chapters.'}
      />

      <Publications t={t} lang={lang} navigate={navigate} />

      {/* Full list */}
      <section style={{ padding: '80px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {lang === 'zh' ? '其他學術著作' : 'Other Academic Works'}
          </h2>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: '14px', lineHeight: 1.8,
            color: 'var(--ink)', opacity: 0.85, maxWidth: '1000px',
          }}>
            <p>
              {lang === 'zh'
                ? '除了首頁列出的代表性論文,我也有多篇中文期刊論文、國際會議論文(含 JSSD 年會多年、ICEPS、ICDIH、ECEI 等)、專書與專書論文,以及博士論文《Creating Meaningful Bodily Expression in Virtual Worlds: Inquiring Methods for Designers》(Sheffield Hallam University, 2014)。'
                : 'Beyond the representative publications listed above, I have authored multiple Chinese-language journal papers, international conference papers (JSSD Annual Conferences across multiple years, ICEPS, ICDIH, ECEI), book chapters, and my doctoral thesis "Creating Meaningful Bodily Expression in Virtual Worlds: Inquiring Methods for Designers" (Sheffield Hallam University, 2014).'}
            </p>
            <p style={{ marginTop: '24px' }}>
              {lang === 'zh'
                ? '完整論文清單請參考 Google Scholar、ORCID 或聯絡我索取完整 CV。'
                : 'For a complete publication list, please refer to Google Scholar, ORCID, or contact me for a full CV.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================
// Sub-page: Teaching
// ============================================================

const TeachingPage = ({ ext, lang, navigate }) => {
  const te = ext.teaching;
  return (
    <div>
      <PageHeader
        title={te.heroTitle}
        subtitle={te.heroSubtitle}
        intro={te.intro}
        lang={lang}
      />

      {/* Teaching philosophy */}
      <section style={{ padding: '80px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.3em',
            color: 'var(--muted)', marginBottom: '40px', textTransform: 'uppercase',
          }}>
            § {lang === 'zh' ? '教學信念' : 'Teaching Philosophy'}
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {te.philosophy.map((ph, i) => (
              <div key={i} style={{
                padding: '32px', background: 'var(--cream)',
                borderTop: `3px solid ${['var(--accent)', 'var(--moss)', 'var(--indigo)'][i]}`,
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '56px', fontWeight: 300,
                  color: ['var(--accent)', 'var(--moss)', 'var(--indigo)'][i],
                  lineHeight: 1, marginBottom: '24px', letterSpacing: '-0.03em',
                }}>
                  0{i + 1}
                </div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 500,
                  color: 'var(--ink)', margin: '0 0 16px', letterSpacing: '-0.01em',
                }}>
                  {ph.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--sans)', fontSize: '14px', lineHeight: 1.7,
                  color: 'var(--ink)', opacity: 0.8, margin: 0,
                }}>
                  {ph.body}
                </p>
              </div>
            ))}
          </div>

          {/* Closing quote */}
          {te.philosophyClosing && (
            <div style={{
              marginTop: '80px', paddingTop: '60px',
              borderTop: '1px solid rgba(60, 50, 40, 0.15)',
              maxWidth: '900px', margin: '80px auto 0',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.4vw, 28px)',
                color: 'var(--ink)', lineHeight: 1.55, margin: 0,
                fontWeight: 400, letterSpacing: '-0.005em',
              }}>
                {te.philosophyClosing}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ongoing supervision */}
      {te.current && te.current.length > 0 && (
        <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
              color: 'var(--ink)', margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
            }}>
              — {te.currentTitle}
            </h2>
            {te.current.map((c, i) => (
              <div key={i} style={{
                padding: '36px',
                background: 'linear-gradient(135deg, rgba(194, 123, 86, 0.08), rgba(194, 123, 86, 0.02))',
                border: '1px solid rgba(194, 123, 86, 0.25)',
                maxWidth: '800px',
              }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
                  color: 'var(--accent)', marginBottom: '12px', textTransform: 'uppercase',
                  fontWeight: 600,
                }}>
                  ● {lang === 'zh' ? '進行中' : 'In Progress'}
                </div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--ink)',
                  margin: 0, fontWeight: 500,
                }}>
                  {c.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: '18px', color: 'var(--accent-deep)', margin: '12px 0',
                }}>
                  {c.topic}
                </p>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                }}>
                  {c.note}
                </div>
              </div>
            ))}
            {te.currentFirstYear && (
              <p style={{
                fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                marginTop: '24px', fontStyle: 'italic', letterSpacing: '0.02em',
                maxWidth: '800px',
              }}>
                + {te.currentFirstYear}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Graduate thesis list */}
      <section style={{ padding: '80px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 16px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {te.graduateTitle}
          </h2>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '13px', lineHeight: 1.7,
            color: 'var(--muted)', maxWidth: '900px',
            margin: '0 0 40px', fontStyle: 'italic',
          }}>
            {lang === 'zh'
              ? '以 research-through-design 取向指導:部分學生的研究以作品形式呈現,「論文作品」連結即為該研究的作品集實踐。'
              : 'Supervised in the spirit of research-through-design: some students present their research as designed works; "Work" links lead to the project portfolio that constitutes the thesis.'}
          </p>
          <div>
            {te.graduates.map((g, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '100px 180px 1fr auto',
                gap: '32px', padding: '28px 0', alignItems: 'start',
                borderTop: '1px solid rgba(60, 50, 40, 0.12)',
                borderBottom: i === te.graduates.length - 1 ? '1px solid rgba(60, 50, 40, 0.12)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--accent)',
                  fontWeight: 400,
                }}>
                  {g.year}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--ink)',
                  fontWeight: 500,
                }}>
                  {g.name}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--ink)',
                    lineHeight: 1.6,
                  }}>
                    {g.thesis}
                  </div>
                  {g.note && (
                    <div style={{
                      fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--muted)',
                      marginTop: '6px', letterSpacing: '0.05em',
                    }}>
                      {g.note}
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  {g.link && (
                    <a href={g.link} target="_blank" rel="noreferrer" style={{
                      fontFamily: 'var(--sans)', fontSize: '11px',
                      color: 'var(--muted)', letterSpacing: '0.08em',
                      textDecoration: 'none', whiteSpace: 'nowrap',
                      padding: '5px 10px', border: '1px solid var(--muted-light)',
                    }}>
                      {lang === 'zh' ? '論文 ↗' : 'Thesis ↗'}
                    </a>
                  )}
                  {g.portfolio && (
                    <a href={g.portfolio} target="_blank" rel="noreferrer" style={{
                      fontFamily: 'var(--sans)', fontSize: '11px',
                      color: 'var(--accent)', letterSpacing: '0.08em',
                      textDecoration: 'none', whiteSpace: 'nowrap',
                      padding: '5px 10px', border: '1px solid var(--accent)',
                    }}>
                      {lang === 'zh' ? '論文作品 ↗' : 'Work ↗'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Undergraduate awards */}
      <section style={{ padding: '80px 48px', background: 'var(--ink)', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            margin: '0 0 20px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {te.undergradTitle}
          </h2>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '14px', color: 'rgba(245, 241, 232, 0.7)',
            maxWidth: '800px', marginBottom: '60px', lineHeight: 1.7,
          }}>
            {te.undergradIntro}
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2px', background: 'rgba(245, 241, 232, 0.1)',
          }}>
            {te.undergradAwards.map((a, i) => (
              <div key={i} style={{
                background: 'var(--ink)', padding: '32px',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245, 241, 232, 0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px',
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--accent)',
                    fontWeight: 400, letterSpacing: '-0.02em',
                  }}>
                    {a.year}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '10px',
                    padding: '3px 8px', background: 'rgba(245, 241, 232, 0.12)',
                    color: 'rgba(245, 241, 232, 0.7)', letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    {a.type}
                  </div>
                </div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 500,
                  margin: '0 0 8px', letterSpacing: '-0.005em',
                }}>
                  {a.work}
                </h3>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '12px',
                  color: 'rgba(245, 241, 232, 0.6)', marginBottom: '16px',
                }}>
                  {a.students}
                </div>
                <div style={{
                  paddingTop: '16px', borderTop: '1px solid rgba(245, 241, 232, 0.15)',
                  fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--accent)',
                  fontWeight: 500, lineHeight: 1.5,
                }}>
                  ★ {a.award}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================
// Sub-page: Talks (with visualization)
// ============================================================

const TalksPage = ({ ext, lang, navigate }) => {
  const tk = ext.talks;
  const [activeCategory, setActiveCategory] = useState(tk.categories[0].id);

  const totalTalks = tk.categories.reduce((sum, c) => sum + c.count, 0);
  const activeCat = tk.categories.find(c => c.id === activeCategory);

  return (
    <div>
      <PageHeader
        title={tk.heroTitle}
        subtitle={tk.heroSubtitle}
        intro={tk.intro}
        lang={lang}
      />

      {/* Category distribution visualization */}
      <section style={{ padding: '80px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.3em',
            color: 'var(--muted)', marginBottom: '32px', textTransform: 'uppercase',
          }}>
            § {lang === 'zh' ? '演講主題分佈' : 'Topic Distribution'} · {totalTalks}+ {lang === 'zh' ? '場' : 'talks'}
          </div>

          {/* Horizontal stacked bar */}
          <div style={{
            width: '100%', height: '80px', display: 'flex',
            marginBottom: '40px', overflow: 'hidden',
          }}>
            {tk.categories.map((cat, i) => (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                onMouseEnter={() => setActiveCategory(cat.id)}
                style={{
                  flex: cat.count,
                  background: cat.color,
                  opacity: activeCategory === cat.id ? 1 : 0.6,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--cream)', fontFamily: 'var(--sans)',
                  fontSize: '14px', fontWeight: 500,
                  transition: 'opacity 0.3s',
                  position: 'relative',
                }}
              >
                {cat.count}
              </div>
            ))}
          </div>

          {/* Category cards as legend */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px', marginBottom: '60px',
          }}>
            {tk.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '16px',
                  background: activeCategory === cat.id ? 'var(--cream)' : 'transparent',
                  border: `1px solid ${activeCategory === cat.id ? cat.color : 'rgba(60, 50, 40, 0.15)'}`,
                  cursor: 'pointer', textAlign: 'left',
                  borderLeft: `4px solid ${cat.color}`,
                  transition: 'all 0.3s',
                }}
              >
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px',
                  color: 'var(--ink)', fontWeight: activeCategory === cat.id ? 600 : 400,
                  marginBottom: '4px',
                }}>
                  {cat.title}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px',
                  color: 'var(--muted)', letterSpacing: '0.05em',
                }}>
                  {cat.count}+ {lang === 'zh' ? '場' : 'talks'}
                </div>
              </button>
            ))}
          </div>

          {/* Active category detail */}
          <div key={activeCategory} style={{
            padding: '48px',
            background: 'var(--cream)',
            borderLeft: `4px solid ${activeCat.color}`,
            animation: 'fadeInUp 0.4s forwards',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 400,
                  color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1,
                }}>
                  {activeCat.title}
                </h3>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                  marginTop: '8px', fontStyle: 'italic',
                }}>
                  {activeCat.titleEn}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '64px', color: activeCat.color,
                  marginTop: '32px', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1,
                }}>
                  {activeCat.count}+
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '8px',
                }}>
                  {lang === 'zh' ? '場' : 'invited talks'}
                </div>
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--serif)', fontSize: '18px', lineHeight: 1.6,
                  color: 'var(--ink)', margin: '0 0 32px',
                }}>
                  {activeCat.desc}
                </p>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
                  color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase',
                }}>
                  § {lang === 'zh' ? '代表場次' : 'Representative Venues'}
                </div>
                <ul style={{
                  padding: 0, margin: 0, listStyle: 'none',
                  fontFamily: 'var(--sans)', fontSize: '13px', lineHeight: 1.8,
                  color: 'var(--ink)',
                }}>
                  {activeCat.samples.map((s, i) => (
                    <li key={i} style={{
                      paddingLeft: '20px', position: 'relative', marginBottom: '8px',
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '10px',
                        width: '8px', height: '1px', background: activeCat.color,
                      }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent talks timeline */}
      <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 50px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {tk.recent.title}
          </h2>
          <div>
            {tk.recent.items.map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr 2fr',
                gap: '40px', padding: '24px 0',
                borderTop: '1px solid rgba(60, 50, 40, 0.1)',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '16px', color: 'var(--accent)',
                  fontWeight: 500, letterSpacing: '0.02em',
                }}>
                  {item.date}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--ink)',
                  fontWeight: 500, letterSpacing: '-0.005em', lineHeight: 1.4,
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                  fontStyle: 'italic',
                }}>
                  @ {item.venue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================
// Sub-page: Service
// ============================================================

const ServicePage = ({ ext, lang, navigate }) => {
  const sv = ext.service;
  return (
    <div>
      <PageHeader
        title={sv.heroTitle}
        subtitle={sv.heroSubtitle}
        intro={sv.intro}
      />

      {/* Journal reviewer */}
      <section style={{ padding: '80px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {sv.journal.title}
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {sv.journal.items.map((j, i) => (
              <div key={i} style={{
                padding: '28px', background: 'var(--cream)',
                borderTop: '3px solid var(--accent)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '18px',
                  color: 'var(--ink)', margin: '0 0 12px', fontWeight: 500,
                  fontStyle: 'italic', letterSpacing: '-0.005em',
                }}>
                  {j.name}
                </h3>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px',
                  color: 'var(--accent-deep)', marginBottom: '10px',
                  letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
                }}>
                  {j.tag}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)',
                }}>
                  {j.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant review */}
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {sv.grantReview.title}
          </h2>
          <div>
            {sv.grantReview.items.map((g, i) => (
              <div key={i} style={{
                padding: '32px 0',
                borderTop: '1px solid rgba(60, 50, 40, 0.15)',
                borderBottom: i === sv.grantReview.items.length - 1 ? '1px solid rgba(60, 50, 40, 0.15)' : 'none',
                display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px',
                alignItems: 'start',
              }}>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '20px', color: 'var(--ink)',
                  margin: 0, fontWeight: 500,
                }}>
                  {g.category}
                </h3>
                <p style={{
                  fontFamily: 'var(--sans)', fontSize: '14px', lineHeight: 1.7,
                  color: 'var(--ink)', opacity: 0.85, margin: 0,
                }}>
                  {g.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section style={{ padding: '80px 48px', background: 'var(--ink)', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {sv.advisor.title}
          </h2>
          <div>
            {sv.advisor.items.map((a, i) => (
              <div key={i} style={{
                padding: '24px 0',
                borderTop: '1px solid rgba(245, 241, 232, 0.15)',
                borderBottom: i === sv.advisor.items.length - 1 ? '1px solid rgba(245, 241, 232, 0.15)' : 'none',
                display: 'grid', gridTemplateColumns: '180px 220px 1fr', gap: '40px',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '13px',
                  color: 'var(--accent)', letterSpacing: '0.05em', fontWeight: 500,
                }}>
                  {a.period}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '16px', fontWeight: 500,
                }}>
                  {a.role}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '14px',
                  color: 'rgba(245, 241, 232, 0.75)', lineHeight: 1.5,
                }}>
                  {a.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference service */}
      <section style={{ padding: '80px 48px', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {sv.conference.title}
          </h2>
          <div>
            {sv.conference.items.map((c, i) => (
              <div key={i} style={{
                padding: '20px 0',
                borderTop: '1px solid rgba(60, 50, 40, 0.1)',
                display: 'grid', gridTemplateColumns: '100px 180px 1fr', gap: '32px',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--accent)',
                }}>
                  {c.year}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '12px',
                  color: 'var(--accent-deep)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontWeight: 600,
                }}>
                  {c.role}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--ink)',
                  fontStyle: 'italic',
                }}>
                  {c.venue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International collaboration */}
      <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)',
            color: 'var(--ink)', margin: '0 0 40px', fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            — {sv.international.title}
          </h2>

          <div style={{ marginBottom: '60px' }}>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.3em',
              color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase',
            }}>
              § {lang === 'zh' ? '合作學校' : 'Partner Institutions'}
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}>
              {sv.international.schools.map((s, i) => (
                <div key={i} style={{
                  padding: '24px', border: '1px solid rgba(60, 50, 40, 0.15)',
                  background: 'var(--cream-dark)',
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '16px', color: 'var(--ink)',
                    fontWeight: 500, lineHeight: 1.4,
                  }}>
                    {s.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)',
                    marginTop: '8px', fontStyle: 'italic',
                  }}>
                    {s.nameEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.3em',
              color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase',
            }}>
              § {lang === 'zh' ? '合作學者' : 'Collaborating Scholars'}
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px',
            }}>
              {sv.international.scholars.map((sc, i) => (
                <div key={i} style={{
                  padding: '16px', borderLeft: '2px solid var(--accent)',
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--ink)',
                    fontWeight: 500,
                  }}>
                    {sc.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--muted)',
                    marginTop: '4px',
                  }}>
                    {sc.affiliation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================
// Component: Research Network Graph (SVG Interactive)
// ============================================================

const ResearchNetwork = ({ t, activeTrack, setActiveTrack, lang }) => {
  const [ref, visible] = useIntersection(0.2);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [time, setTime] = useState(0);

  // Animate time for gentle floating
  useEffect(() => {
    let raf;
    const start = Date.now();
    const animate = () => {
      setTime((Date.now() - start) / 1000);
      raf = requestAnimationFrame(animate);
    };
    if (visible) animate();
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  const trackColors = {
    '01': '#C27B56',
    '02': '#556B48',
    '03': '#3B4E6B',
    '04': '#6B4A7A',
  };

  // Layout: four anchor tracks positioned in a diamond shape,
  // seven projects orbit around, with cross-track dashed connections
  const width = 1000;
  const height = 700;

  const tracks = [
    { id: '01', x: 230, y: 240, r: 66, label: lang === 'zh' ? '失智照護' : 'Dementia', labelFull: lang === 'zh' ? '失智照護的\n參與式設計' : 'Participatory\nDementia Care' },
    { id: '02', x: 770, y: 240, r: 66, label: lang === 'zh' ? '公民科學' : 'Citizen Science', labelFull: lang === 'zh' ? '公民科學 &\nMore-than-Human' : 'Citizen Science &\nMore-than-Human' },
    { id: '03', x: 230, y: 520, r: 66, label: lang === 'zh' ? '設計思考教育' : 'Design Thinking Education', labelFull: lang === 'zh' ? '設計思考教育的\n方法論創新' : 'Design Thinking Education\nMethodology' },
    { id: '04', x: 770, y: 520, r: 66, label: lang === 'zh' ? '人本 AI' : 'Human-Centered AI', labelFull: lang === 'zh' ? '人本 AI 設計\n(發展中)' : 'Human-Centered AI\n(Emerging)' },
  ];

  // Projects positioned around their track(s)
  const projects = [
    { id: 1, x: 105, y: 125, r: 28, tracks: ['01'], label: t.projects.items[0].title, short: lang === 'zh' ? '認知悠能' : 'Cognitive Vitality' },
    { id: 6, x: 105, y: 360, r: 28, tracks: ['01'], label: t.projects.items[5].title, short: lang === 'zh' ? '活躍高齡化' : 'Active Aging' },
    { id: 2, x: 895, y: 125, r: 28, tracks: ['02'], label: t.projects.items[1].title, short: lang === 'zh' ? '蛙抵家' : 'Identifrog' },
    { id: 5, x: 895, y: 360, r: 28, tracks: ['02'], label: t.projects.items[4].title, short: lang === 'zh' ? '防災教育' : 'Disaster Edu' },
    { id: 3, x: 105, y: 640, r: 28, tracks: ['03'], label: t.projects.items[2].title, short: lang === 'zh' ? '苗圃計畫' : 'Miaopu' },
    { id: 7, x: 355, y: 640, r: 28, tracks: ['03'], label: t.projects.items[6].title, short: lang === 'zh' ? '堉璘 Changemaker' : 'Yu-Lin Changemaker' },
    { id: 4, x: 895, y: 640, r: 28, tracks: ['04'], label: t.projects.items[3].title, short: 'Talaria' },
  ];

  // Cross-track connections (dashed lines) — actual research linkages
  // These represent real connections, not speculative ones
  const crossTrackLinks = [
    // 失智照護 → 設計教育:透過大專生研究計畫(周沛妤失智 App、梁紓瑄失智繪本)
    { from: '01', to: '03', label: lang === 'zh' ? '大專生研究計畫' : 'Student Research' },
    // 設計教育 → 公民科學:透過遊戲設計(IASDR 2025 paper, 生態議題系列桌遊)
    { from: '03', to: '02', label: lang === 'zh' ? '遊戲設計' : 'Game Design' },
    // 公民科學 → 人本 AI:蛙抵家未來走向(AI 聲音辨識介面)
    { from: '02', to: '04', label: lang === 'zh' ? '蛙抵家未來' : 'Identifrog→' },
  ];

  // Gentle float offset for each node
  const floatOffset = (seed, axis) => {
    const phase = seed * 1.7;
    const amp = 3;
    if (axis === 'x') return Math.sin(time * 0.6 + phase) * amp;
    return Math.cos(time * 0.5 + phase * 1.3) * amp;
  };

  const isTrackActive = (trackId) => {
    if (activeTrack === trackId) return true;
    if (hoveredNode && hoveredNode.type === 'track' && hoveredNode.id === trackId) return true;
    if (hoveredNode && hoveredNode.type === 'project') {
      const proj = projects.find(p => p.id === hoveredNode.id);
      return proj && proj.tracks.includes(trackId);
    }
    return false;
  };

  const isProjectActive = (project) => {
    if (hoveredNode && hoveredNode.type === 'project' && hoveredNode.id === project.id) return true;
    if (activeTrack && project.tracks.includes(activeTrack)) return true;
    if (hoveredNode && hoveredNode.type === 'track' && project.tracks.includes(hoveredNode.id)) return true;
    return false;
  };

  const anyHover = hoveredNode !== null || activeTrack !== null;

  return (
    <section ref={ref} style={{
      padding: '140px 48px 80px', background: 'var(--cream)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: '60px', flexWrap: 'wrap', gap: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.4em',
              color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase',
              opacity: visible ? 1 : 0, transition: 'opacity 0.8s',
            }}>
              § &nbsp; {lang === 'zh' ? '研究地圖' : 'Research Map'}
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 54px)',
              lineHeight: 1.15, color: 'var(--ink)', margin: 0, fontWeight: 400,
              letterSpacing: '-0.02em', maxWidth: '800px',
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}>
              {lang === 'zh' ? '四條軸線,七個專案,一張互連的地圖' : 'Four tracks, seven projects, one interconnected map'}
            </h2>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--muted)',
              marginTop: '20px', maxWidth: '600px', lineHeight: 1.7,
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}>
              {lang === 'zh'
                ? '滑過節點,看見研究軸線之間的關聯。虛線代表跨軸連結—研究並非各自獨立,而是透過大專生研究計畫、遊戲設計、AI 介面等橋接彼此延伸。'
                : 'Hover over nodes to see how tracks interconnect. Dashed lines mark cross-track linkages—research extends across tracks through student projects, game design, and AI interfaces.'}
            </p>
          </div>
        </div>

        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 1.2s 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          <svg
            viewBox={`0 0 ${width} ${height}`}
            style={{ width: '100%', height: 'auto', maxHeight: '780px', display: 'block' }}
          >
            {/* Decorative concentric rings */}
            <defs>
              <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C27B56" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#C27B56" stopOpacity="0" />
              </radialGradient>
              {Object.entries(trackColors).map(([id, color]) => (
                <radialGradient key={id} id={`glow-${id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
              ))}
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Subtle background mesh */}
            <rect width={width} height={height} fill="url(#bgGlow)" />

            {/* Decorative guide circles around tracks */}
            {tracks.map(track => (
              <circle
                key={`guide-${track.id}`}
                cx={track.x + floatOffset(parseInt(track.id), 'x')}
                cy={track.y + floatOffset(parseInt(track.id), 'y')}
                r={track.r + 40}
                fill="none"
                stroke={trackColors[track.id]}
                strokeOpacity={isTrackActive(track.id) ? 0.25 : 0.08}
                strokeWidth="1"
                strokeDasharray="2 6"
                style={{ transition: 'stroke-opacity 0.5s' }}
              />
            ))}

            {/* Cross-track connections (dashed) — actual research linkages */}
            {crossTrackLinks.map((link, i) => {
              const from = tracks.find(t => t.id === link.from);
              const to = tracks.find(t => t.id === link.to);
              if (!from || !to) return null;
              const fromX = from.x + floatOffset(parseInt(from.id), 'x');
              const fromY = from.y + floatOffset(parseInt(from.id), 'y');
              const toX = to.x + floatOffset(parseInt(to.id), 'x');
              const toY = to.y + floatOffset(parseInt(to.id), 'y');
              const midX = (fromX + toX) / 2;
              const midY = (fromY + toY) / 2;
              const isActive = isTrackActive(from.id) || isTrackActive(to.id);
              return (
                <g key={`cross-${i}`}>
                  <line
                    x1={fromX} y1={fromY} x2={toX} y2={toY}
                    stroke="var(--muted)"
                    strokeOpacity={isActive ? 0.5 : 0.2}
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    style={{ transition: 'stroke-opacity 0.4s' }}
                  />
                  <text
                    x={midX} y={midY - 6}
                    fill="var(--muted)"
                    fontSize="12"
                    fontFamily="var(--sans)"
                    textAnchor="middle"
                    opacity={isActive ? 0.85 : 0.35}
                    style={{ transition: 'opacity 0.4s', letterSpacing: '0.1em' }}
                  >
                    {link.label}
                  </text>
                </g>
              );
            })}

            {/* Connection lines: project -> track(s) */}
            {projects.map(project => (
              project.tracks.map(trackId => {
                const track = tracks.find(t => t.id === trackId);
                if (!track) return null;
                const pX = project.x + floatOffset(project.id * 2, 'x');
                const pY = project.y + floatOffset(project.id * 2, 'y');
                const tX = track.x + floatOffset(parseInt(track.id), 'x');
                const tY = track.y + floatOffset(parseInt(track.id), 'y');

                const active = isTrackActive(trackId) || isProjectActive(project);
                const dimmed = anyHover && !active;

                // Curved path for more organic feel
                const mx = (pX + tX) / 2;
                const my = (pY + tY) / 2;
                const dx = tX - pX;
                const dy = tY - pY;
                const perpX = -dy * 0.15;
                const perpY = dx * 0.15;

                return (
                  <path
                    key={`link-${project.id}-${trackId}`}
                    d={`M ${pX} ${pY} Q ${mx + perpX} ${my + perpY} ${tX} ${tY}`}
                    fill="none"
                    stroke={trackColors[trackId]}
                    strokeWidth={active ? 3 : 1.5}
                    strokeOpacity={dimmed ? 0.08 : active ? 0.7 : 0.25}
                    strokeLinecap="round"
                    strokeDasharray={active ? 'none' : '3 4'}
                    style={{ transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                  />
                );
              })
            ))}

            {/* Track nodes (main) */}
            {tracks.map(track => {
              const active = isTrackActive(track.id);
              const dimmed = anyHover && !active;
              const tX = track.x + floatOffset(parseInt(track.id), 'x');
              const tY = track.y + floatOffset(parseInt(track.id), 'y');

              return (
                <g
                  key={`track-${track.id}`}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredNode({ type: 'track', id: track.id })}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => {
                    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
                    setActiveTrack(track.id);
                    setTimeout(() => setActiveTrack(null), 2000);
                  }}
                >
                  {/* Glow halo */}
                  <circle
                    cx={tX} cy={tY} r={track.r + (active ? 35 : 15)}
                    fill={`url(#glow-${track.id})`}
                    style={{ transition: 'all 0.5s' }}
                  />
                  {/* Main circle */}
                  <circle
                    cx={tX} cy={tY} r={active ? track.r + 4 : track.r}
                    fill={trackColors[track.id]}
                    opacity={dimmed ? 0.4 : 1}
                    style={{ transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                  />
                  {/* Inner highlight ring */}
                  <circle
                    cx={tX} cy={tY} r={track.r - 8}
                    fill="none"
                    stroke="rgba(245, 241, 232, 0.35)"
                    strokeWidth="1"
                  />
                  {/* Track number */}
                  <text
                    x={tX} y={tY + 5}
                    textAnchor="middle"
                    fontFamily="Fraunces, serif"
                    fontSize="40"
                    fontWeight="300"
                    fill="var(--cream)"
                    letterSpacing="-1"
                    style={{ pointerEvents: 'none' }}
                  >
                    {track.id}
                  </text>
                  {/* Label below */}
                  <text
                    x={tX} y={tY + track.r + 30}
                    textAnchor="middle"
                    fontFamily="Noto Serif TC, Fraunces, serif"
                    fontSize="19"
                    fontWeight="500"
                    fill="var(--ink)"
                    opacity={dimmed ? 0.3 : 1}
                    style={{ transition: 'opacity 0.5s', pointerEvents: 'none' }}
                  >
                    {track.label}
                  </text>
                </g>
              );
            })}

            {/* Project nodes (satellites) */}
            {projects.map(project => {
              const active = isProjectActive(project);
              const hovered = hoveredNode?.type === 'project' && hoveredNode.id === project.id;
              const dimmed = anyHover && !active;
              const pX = project.x + floatOffset(project.id * 2, 'x');
              const pY = project.y + floatOffset(project.id * 2, 'y');
              const isBridge = project.tracks.length > 1;

              return (
                <g
                  key={`proj-${project.id}`}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredNode({ type: 'project', id: project.id })}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {/* Ping pulse for bridge node */}
                  {isBridge && (
                    <circle
                      cx={pX} cy={pY} r={project.r}
                      fill="none"
                      stroke={trackColors['03']}
                      strokeWidth="1.5"
                      opacity={0.3 + 0.3 * Math.sin(time * 2)}
                      style={{
                        transform: `scale(${1 + 0.15 * Math.sin(time * 2)})`,
                        transformOrigin: `${pX}px ${pY}px`,
                      }}
                    />
                  )}

                  {/* Hover halo */}
                  {hovered && (
                    <circle
                      cx={pX} cy={pY} r={project.r + 14}
                      fill="none"
                      stroke={trackColors[project.tracks[0]]}
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />
                  )}

                  {/* Main node */}
                  <circle
                    cx={pX} cy={pY} r={active ? project.r + 3 : project.r}
                    fill="var(--cream)"
                    stroke={trackColors[project.tracks[0]]}
                    strokeWidth={active ? 2.5 : 1.5}
                    opacity={dimmed ? 0.35 : 1}
                    style={{ transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                  />

                  {/* Inner dot */}
                  <circle
                    cx={pX} cy={pY} r={active ? 6 : 4}
                    fill={trackColors[project.tracks[0]]}
                    opacity={dimmed ? 0.35 : 1}
                    style={{ transition: 'all 0.4s' }}
                  />

                  {/* Bridge indicator: small dot in second color */}
                  {isBridge && (
                    <circle
                      cx={pX + 8} cy={pY - 8} r="3"
                      fill={trackColors[project.tracks[1]]}
                      opacity={dimmed ? 0.35 : 1}
                    />
                  )}

                  {/* Project label */}
                  <text
                    x={pX}
                    y={pY + project.r + 22}
                    textAnchor="middle"
                    fontFamily="Noto Sans TC, Inter, sans-serif"
                    fontSize="15"
                    fontWeight="500"
                    fill="var(--ink)"
                    opacity={dimmed ? 0.3 : 1}
                    style={{ transition: 'opacity 0.4s', pointerEvents: 'none' }}
                  >
                    {project.short}
                  </text>

                  {/* Tooltip on hover */}
                  {hovered && (
                    <g style={{ pointerEvents: 'none' }}>
                      <rect
                        x={pX - 90} y={pY - project.r - 44}
                        width="180" height="30" rx="4"
                        fill="var(--ink)"
                      />
                      <text
                        x={pX} y={pY - project.r - 24}
                        textAnchor="middle"
                        fontFamily="Noto Serif TC, Fraunces, serif"
                        fontSize="13"
                        fill="var(--cream)"
                        fontStyle="italic"
                      >
                        {project.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

          </svg>
        </div>

        {/* Legend / Key bridge note */}
        <div style={{
          marginTop: '40px',
          display: 'flex', gap: '32px', flexWrap: 'wrap',
          fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)',
          paddingTop: '32px', borderTop: '1px solid rgba(60, 50, 40, 0.1)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s 0.6s',
        }}>
          {tracks.map(track => (
            <div key={track.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: trackColors[track.id],
              }} />
              <span>{track.labelFull.replace('\n', ' ')}</span>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
            <svg width="32" height="12" style={{ display: 'block' }}>
              <line x1="0" y1="6" x2="32" y2="6"
                stroke="var(--muted)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <span style={{ fontStyle: 'italic' }}>
              {lang === 'zh' ? '跨軸連結 · 研究的延伸方向' : 'Cross-track linkage · extending directions'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Component: Research Tracks (Interactive Visualization)
// ============================================================

const ResearchSection = ({ t, setActiveTrack, activeTrack, lang }) => {
  const [ref, visible] = useIntersection();

  const trackColors = {
    '01': 'var(--accent)',      // 陶土橘 — 失智
    '02': 'var(--moss)',         // 苔綠 — 公民科學
    '03': 'var(--indigo)',       // 靛藍 — 設計教育
  };

  return (
    <section id="research" ref={ref} style={{
      padding: '180px 48px', position: 'relative',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: '100px', flexWrap: 'wrap', gap: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.4em',
              color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase',
            }}>
              § &nbsp; {t.research.label}
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.1, color: 'var(--ink)', margin: 0, fontWeight: 400,
              letterSpacing: '-0.02em', maxWidth: '800px',
            }}>
              {t.research.title}
            </h2>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {t.research.tracks.map((track, i) => {
            const isActive = activeTrack === track.num;
            return (
              <div
                key={track.num}
                onMouseEnter={() => setActiveTrack(track.num)}
                onMouseLeave={() => setActiveTrack(null)}
                style={{
                  padding: '60px 0',
                  borderTop: '1px solid rgba(60, 50, 40, 0.15)',
                  borderBottom: i === t.research.tracks.length - 1 ? '1px solid rgba(60, 50, 40, 0.15)' : 'none',
                  position: 'relative', cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Moving accent bar */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: isActive ? '6px' : '0px',
                  background: trackColors[track.num],
                  transition: 'width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }} />

                <div style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '60px',
                  alignItems: 'start',
                  paddingLeft: isActive ? '32px' : '0',
                  transition: 'padding 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '80px', lineHeight: 1,
                    color: isActive ? trackColors[track.num] : 'var(--muted-light)',
                    fontWeight: 300, letterSpacing: '-0.04em',
                    transition: 'color 0.4s',
                  }}>
                    {track.num}
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.4vw, 34px)',
                      color: 'var(--ink)', margin: 0, fontWeight: 500, lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}>
                      {track.title}
                    </h3>
                    <div style={{
                      fontFamily: 'var(--sans)', fontSize: '13px',
                      color: 'var(--muted)', marginTop: '8px', letterSpacing: '0.02em',
                      fontStyle: 'italic',
                    }}>
                      {track.titleEn}
                    </div>
                    <p style={{
                      fontFamily: 'var(--serif)', fontStyle: 'italic',
                      fontSize: '18px', color: trackColors[track.num],
                      marginTop: '24px', lineHeight: 1.5, fontWeight: 400,
                    }}>
                      {track.tagline}
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontFamily: 'var(--sans)', fontSize: '14px', lineHeight: 1.75,
                      color: 'var(--ink)', margin: 0, opacity: 0.8,
                    }}>
                      {track.desc}
                    </p>
                    <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {track.keywords.map((kw, ki) => (
                        <span key={ki} style={{
                          fontFamily: 'var(--sans)', fontSize: '11px',
                          padding: '6px 12px', letterSpacing: '0.04em',
                          border: `1px solid ${isActive ? trackColors[track.num] : 'var(--muted-light)'}`,
                          color: isActive ? trackColors[track.num] : 'var(--muted)',
                          transition: 'all 0.4s',
                          borderRadius: '2px',
                        }}>
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Component: Projects (Filterable Grid)
// ============================================================

const ProjectsSection = ({ t, activeTrack, setActiveTrack, navigate, lang }) => {
  const [ref, visible] = useIntersection();
  const [filter, setFilter] = useState('all');

  const trackColors = {
    '01': 'var(--accent)',
    '02': 'var(--moss)',
    '03': 'var(--indigo)',
    '04': '#6B4A7A',
  };

  const filtered = filter === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => p.track === filter.replace('t', ''));

  // Sync with research hover (activeTrack is '01'/'02'/'03', filter is 't01'/'t02'/'t03')
  useEffect(() => {
    if (activeTrack) setFilter('t' + activeTrack);
  }, [activeTrack]);

  return (
    <section id="projects" ref={ref} style={{
      padding: '180px 48px',
      background: 'var(--ink)', color: 'var(--cream)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(194, 123, 86, 0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: '80px', flexWrap: 'wrap', gap: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.4em',
              color: 'rgba(245, 241, 232, 0.5)', marginBottom: '24px', textTransform: 'uppercase',
            }}>
              § &nbsp; {t.projects.label}
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.1, margin: 0, fontWeight: 400, letterSpacing: '-0.02em',
            }}>
              {t.projects.title}
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {Object.entries(t.projects.filter).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '12px', letterSpacing: '0.05em',
                  padding: '10px 18px',
                  background: filter === key ? 'var(--cream)' : 'transparent',
                  color: filter === key ? 'var(--ink)' : 'var(--cream)',
                  border: '1px solid rgba(245, 241, 232, 0.3)',
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2px', background: 'rgba(245, 241, 232, 0.1)',
        }}>
          {filtered.map((p, i) => (
            <div key={p.id} style={{
              background: 'var(--ink)',
              padding: '48px 36px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.7s ${i * 80}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
              position: 'relative', cursor: 'pointer', overflow: 'hidden',
              minHeight: '340px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(245, 241, 232, 0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
            >
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px',
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: trackColors[p.track],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--cream)',
                    fontWeight: 600,
                  }}>
                    {p.track}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '11px',
                    color: 'rgba(245, 241, 232, 0.5)', letterSpacing: '0.1em',
                  }}>
                    {p.year}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '28px',
                  margin: 0, fontWeight: 500, lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}>
                  {p.title}
                </h3>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: '15px', color: 'rgba(245, 241, 232, 0.6)',
                  marginTop: '8px',
                }}>
                  {p.subtitle}
                </div>

                <p style={{
                  fontFamily: 'var(--sans)', fontSize: '13px', lineHeight: 1.7,
                  color: 'rgba(245, 241, 232, 0.75)', marginTop: '24px',
                }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {p.tags.map((tag, ti) => (
                    <span key={ti} style={{
                      fontFamily: 'var(--sans)', fontSize: '10px',
                      padding: '4px 8px', letterSpacing: '0.04em',
                      border: '1px solid rgba(245, 241, 232, 0.2)',
                      color: 'rgba(245, 241, 232, 0.6)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px',
                  color: trackColors[p.track],
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  paddingTop: '16px', borderTop: '1px solid rgba(245, 241, 232, 0.1)',
                }}>
                  ★ {p.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: view full projects page */}
        {navigate && (
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <button
              onClick={() => navigate('projects')}
              style={{
                fontFamily: 'var(--sans)', fontSize: '13px',
                padding: '18px 36px',
                background: 'transparent',
                border: '1px solid var(--cream)',
                color: 'var(--cream)',
                cursor: 'pointer', letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.target.style.background = 'var(--cream)'; e.target.style.color = 'var(--ink)'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cream)'; }}
            >
              {lang === 'zh' ? '閱讀完整專案故事 →' : 'Read Full Project Stories →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================================
// Component: Publications
// ============================================================

const Publications = ({ t, navigate, lang }) => {
  const [ref, visible] = useIntersection();

  const journals = t.publications.items.filter(p => p.type === 'journal');
  const confs = t.publications.items.filter(p => p.type === 'conf');

  return (
    <section id="publications" ref={ref} style={{
      padding: '180px 48px', background: 'var(--cream-dark)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.4em',
          color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase',
        }}>
          § &nbsp; {t.publications.label}
        </div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4.5vw, 64px)',
          lineHeight: 1.1, color: 'var(--ink)', margin: '0 0 100px', fontWeight: 400,
          letterSpacing: '-0.02em', maxWidth: '800px',
        }}>
          {t.publications.title}
        </h2>

        {/* Journals */}
        <div style={{ marginBottom: '100px' }}>
          <h3 style={{
            fontFamily: 'var(--sans)', fontSize: '14px',
            color: 'var(--accent-deep)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '40px', fontWeight: 500,
          }}>
            — {t.publications.journal}
          </h3>
          <div>
            {journals.map((p, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 180px 1fr',
                gap: '40px', padding: '32px 0',
                borderTop: '1px solid rgba(60, 50, 40, 0.15)',
                borderBottom: i === journals.length - 1 ? '1px solid rgba(60, 50, 40, 0.15)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ${i * 100}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 300,
                  color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em',
                }}>
                  {p.year}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic',
                    fontSize: '16px', color: 'var(--ink)', marginBottom: '8px',
                  }}>
                    {p.venue}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    fontFamily: 'var(--sans)', fontSize: '10px',
                    padding: '4px 10px', letterSpacing: '0.1em',
                    background: 'var(--accent)', color: 'var(--cream)',
                    textTransform: 'uppercase', fontWeight: 600,
                  }}>
                    {p.tag}
                  </div>
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--serif)', fontSize: '20px',
                    color: 'var(--ink)', margin: 0, fontWeight: 500,
                    lineHeight: 1.35, letterSpacing: '-0.005em',
                  }}>
                    {p.title}
                  </h4>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '13px',
                    color: 'var(--muted)', marginTop: '12px',
                  }}>
                    {p.authors}
                  </div>
                  {p.doi && (
                    <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" style={{
                      display: 'inline-block', marginTop: '12px',
                      fontFamily: 'var(--sans)', fontSize: '11px',
                      color: 'var(--accent-deep)', letterSpacing: '0.08em',
                      borderBottom: '1px solid var(--accent-deep)',
                      textDecoration: 'none', paddingBottom: '2px',
                    }}>
                      DOI: {p.doi} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Best Papers */}
        <div>
          <h3 style={{
            fontFamily: 'var(--sans)', fontSize: '14px',
            color: 'var(--accent-deep)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '40px', fontWeight: 500,
          }}>
            — {t.publications.conf}
          </h3>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px',
          }}>
            {confs.map((p, i) => (
              <div key={i} style={{
                background: 'var(--cream)', padding: '36px 32px',
                border: '1px solid rgba(60, 50, 40, 0.12)',
                position: 'relative', overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ${400 + i * 100}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
              }}>
                {/* Trophy accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'var(--accent)', color: 'var(--cream)',
                  padding: '8px 14px',
                  fontFamily: 'var(--sans)', fontSize: '10px',
                  letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600,
                }}>
                  ★ Best Paper
                </div>

                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.1em',
                  color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase',
                }}>
                  {p.year} · {p.venue}
                </div>
                <h4 style={{
                  fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--ink)',
                  margin: 0, fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.005em',
                }}>
                  {p.title}
                </h4>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: '12px',
                  color: 'var(--muted)', marginTop: '16px',
                }}>
                  {p.authors}
                </div>
                {p.doi && (
                  <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" style={{
                    display: 'inline-block', marginTop: '12px',
                    fontFamily: 'var(--sans)', fontSize: '11px',
                    color: 'var(--accent-deep)', letterSpacing: '0.08em',
                    borderBottom: '1px solid var(--accent-deep)',
                    textDecoration: 'none', paddingBottom: '2px',
                  }}>
                    DOI: {p.doi} ↗
                  </a>
                )}
                <div style={{
                  marginTop: '20px', paddingTop: '16px',
                  borderTop: '1px solid rgba(60, 50, 40, 0.1)',
                  fontFamily: 'var(--sans)', fontSize: '11px',
                  color: 'var(--accent-deep)', letterSpacing: '0.08em',
                  fontWeight: 500,
                }}>
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: view full publications */}
        {navigate && (
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <button
              onClick={() => navigate('publications')}
              style={{
                fontFamily: 'var(--sans)', fontSize: '13px',
                padding: '18px 36px',
                background: 'transparent',
                border: '1px solid var(--ink)',
                color: 'var(--ink)',
                cursor: 'pointer', letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--cream)'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--ink)'; }}
            >
              {lang === 'zh' ? '查看完整論文清單 →' : 'View Full Publications →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================================
// Component: Contact / Footer
// ============================================================

const Footer = ({ t, lang }) => {
  const [ref, visible] = useIntersection();

  return (
    <section id="contact" ref={ref} style={{
      padding: '180px 48px 80px',
      background: 'var(--ink)', color: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 8vw, 140px)',
          lineHeight: 1, margin: 0, fontWeight: 400, letterSpacing: '-0.04em',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          {lang === 'zh' ? '讓我們一起' : 'Let\'s create'}<br/>
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            {lang === 'zh' ? '創造連結' : 'connections.'}
          </span>
        </div>

        <div style={{
          marginTop: '120px',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px',
          paddingTop: '60px', borderTop: '1px solid rgba(245, 241, 232, 0.2)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
              color: 'rgba(245, 241, 232, 0.5)', marginBottom: '16px', textTransform: 'uppercase',
            }}>
              Address
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '15px', lineHeight: 1.6 }}>
              {t.footer.address}<br />
              {t.footer.building}
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
              color: 'rgba(245, 241, 232, 0.5)', marginBottom: '16px', textTransform: 'uppercase',
            }}>
              Contact
            </div>
            <a href="mailto:yfchen@gm.ttu.edu.tw" style={{
              fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--cream)',
              textDecoration: 'none', display: 'block', marginBottom: '4px',
            }}>
              yfchen@gm.ttu.edu.tw
            </a>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '15px' }}>
              +886-2-7736-4800
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em',
              color: 'rgba(245, 241, 232, 0.5)', marginBottom: '16px', textTransform: 'uppercase',
            }}>
              Profiles
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://orcid.org/0000-0002-1884-2447" target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--cream)',
                textDecoration: 'none',
              }}>ORCID ↗</a>
              <a href="https://scholar.google.com/citations?user=9sRduaAAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--cream)',
                textDecoration: 'none',
              }}>Google Scholar ↗</a>
              <a href="https://www.researchgate.net/profile/Yen-Fu-Chen" target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--cream)',
                textDecoration: 'none',
              }}>ResearchGate ↗</a>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '80px', paddingTop: '32px',
          borderTop: '1px solid rgba(245, 241, 232, 0.1)',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.1em',
          color: 'rgba(245, 241, 232, 0.4)', textTransform: 'uppercase',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <div>© 2026 Yen-Fu Chen · Tatung University</div>
          <div>{t.footer.cta}</div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Main App with Routing
// ============================================================

export default function App() {
  const [lang, setLang] = useState('zh');
  const [activeTrack, setActiveTrack] = useState(null);
  const [route, setRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#/', '');
      return hash || 'home';
    }
    return 'home';
  });
  const t = content[lang];
  const ext = extendedContent[lang];

  // Listen to hash changes
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      setRoute(hash || 'home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = `/${path}`;
  };

  return (
    <div style={{
      background: 'var(--cream)', minHeight: '100vh',
      color: 'var(--ink)', position: 'relative',
    }}>
      <style>{`
        :root {
          --serif: 'Fraunces', 'Noto Serif TC', Georgia, serif;
          --sans: 'Inter', 'Noto Sans TC', -apple-system, sans-serif;
          --cream: #F5F1E8;
          --cream-dark: #EDE6D5;
          --ink: #2A241C;
          --muted: #7A6D5A;
          --muted-light: #C8BFB0;
          --accent: #C27B56;
          --accent-deep: #8B4E2E;
          --moss: #556B48;
          --indigo: #3B4E6B;
        }
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600&family=Noto+Serif+TC:wght@300;400;500;600&family=Noto+Sans+TC:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: var(--sans); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollDown {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
        html { scroll-behavior: smooth; }
        html, body { overflow-x: hidden; max-width: 100vw; }
        ::selection { background: var(--accent); color: var(--cream); }
        
        /* Mobile responsive overrides */
        @media (max-width: 767px) {
          /* Reduce ALL section paddings on mobile (covers more padding formats) */
          section[style*="48px"] {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          section[style*="80px 48px"],
          section[style*="100px 48px"],
          section[style*="120px 48px"],
          section[style*="140px 48px"],
          section[style*="160px 48px"],
          section[style*="180px 48px"] {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          /* Reduce inner div paddings */
          div[style*="padding: 0 48px"] {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          /* Force flex containers to wrap at lower threshold */
          div[style*="minWidth: '280px'"],
          div[style*="minWidth: \"280px\""] {
            min-width: 100% !important;
            flex-basis: 100% !important;
          }
          /* Smaller stat numbers on mobile */
          div[style*="fontSize: 'clamp(56px, 8vw, 120px)'"] {
            font-size: 44px !important;
          }
          /* Hero adjustments */
          h1 { word-break: keep-all; overflow-wrap: break-word; }
          /* SVG: maximize width on mobile */
          svg {
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
            max-height: none !important;
          }
          /* Tables and grids */
          div[style*="grid-template-columns"], 
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          /* Make all containers respect viewport width */
          div[style*="maxWidth: '1400px'"],
          div[style*="maxWidth: '1200px'"],
          div[style*="maxWidth: '1100px'"] {
            max-width: 100% !important;
          }
        }
      `}</style>

      <GrainTexture />
      <Nav lang={lang} setLang={setLang} t={t} route={route} navigate={navigate} />

      {route === 'home' && (
        <>
          <Hero t={t} navigate={navigate} />
          <Intro t={t} lang={lang} />
          <ResearchNetwork t={t} activeTrack={activeTrack} setActiveTrack={setActiveTrack} lang={lang} />
          <ResearchSection t={t} activeTrack={activeTrack} setActiveTrack={setActiveTrack} lang={lang} />
          <ProjectsSection t={t} activeTrack={activeTrack} setActiveTrack={setActiveTrack} navigate={navigate} lang={lang} />
          <Publications t={t} navigate={navigate} lang={lang} />
        </>
      )}
      {route === 'about' && <AboutPage ext={ext} lang={lang} navigate={navigate} />}
      {route === 'projects' && <ProjectsPage ext={ext} lang={lang} navigate={navigate} />}
      {route === 'publications' && <PublicationsPage t={t} lang={lang} navigate={navigate} />}
      {route === 'teaching' && <TeachingPage ext={ext} lang={lang} navigate={navigate} />}
      {route === 'talks' && <TalksPage ext={ext} lang={lang} navigate={navigate} />}
      {route === 'service' && <ServicePage ext={ext} lang={lang} navigate={navigate} />}

      <Footer t={t} lang={lang} />
    </div>
  );
}
