export type GalleryBlock =
  | { type: "full"; image: string; alt: string; caption?: string }
  | { type: "two"; images: { image: string; alt: string }[]; caption?: string }
  | { type: "three"; images: { image: string; alt: string }[]; caption?: string };

export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  period: string;
  keywords: string[];
  summary: string;
  role: string;
  cover: string;
  featured: boolean;
  overview: string;
  challenge: string;
  myRole: string[];
  process: { step: string; desc: string }[];
  deliverables: string[];
  reflection: string[];
  gallery: GalleryBlock[];
}

export const projects: Project[] = [
  {
    slug: "tonghanchuntang-packaging",
    title: "童涵春堂包装设计实习项目",
    titleEn: "Heritage Pharmacy Packaging Internship",
    category: "包装设计｜品牌视觉｜设计落地",
    period: "2025.08 – 2025.11",
    keywords: ["Packaging", "VI Guideline", "Print Proofing", "File Management"],
    summary:
      "参与老字号药业品牌包装从设计修改、文件校对、打样反馈到量产前确认的落地流程。",
    role: "包装设计实习生",
    cover: "/images/projects/tonghanchuntang/cover.jpg",
    featured: true,
    overview:
      "童涵春堂是上海老字号药业品牌。实习期间，我加入包装设计团队，参与多个在售与新品包装的设计支持工作，接触到从设计稿到量产成品之间的完整环节。",
    challenge:
      "老字号品牌的包装既要遵守品牌视觉规范和药品包装的合规要求，又要在货架上保持清晰、可信、有辨识度的呈现。设计修改必须准确、文件必须规范，才能顺利进入打样和量产。",
    myRole: [
      "根据设计负责人的要求，完成包装稿的修改与延展",
      "参与包装文件的文字校对、尺寸核对与出血检查",
      "整理打样反馈，协助对比打样稿与设计稿的色彩和工艺差异",
      "按命名规范整理设计文件版本，配合量产前的最终确认",
    ],
    process: [
      { step: "需求理解", desc: "理解每个包装任务的品牌规范、合规要求与修改重点。" },
      { step: "视觉调研", desc: "查看品牌既有包装体系与同类产品货架表现。" },
      { step: "方案输出", desc: "在规范内完成包装稿修改、延展与排版调整。" },
      { step: "反馈修改", desc: "根据负责人与打样反馈进行多轮细节调整。" },
      { step: "文件整理", desc: "完成文字校对、尺寸核对、出血检查与版本归档。" },
      { step: "落地交付", desc: "配合打样确认与量产前文件交付。" },
    ],
    deliverables: [
      "包装设计修改稿与延展稿",
      "符合印刷要求的规范文件",
      "打样反馈整理记录",
      "版本清晰的文件归档",
    ],
    reflection: [
      "理解了包装从设计稿到量产之间的真实流程：打样、工艺、色差与反复确认。",
      "建立了文件规范意识：命名、版本、出血、字体转曲，每一步都影响落地质量。",
      "学会在品牌规范和合规限制内做设计，而不是只追求画面自由发挥。",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/projects/tonghanchuntang/01.jpg",
        alt: "童涵春堂包装设计主视觉展示",
        caption: "此处替换为真实项目图片：包装主视觉 / 货架效果图",
      },
      {
        type: "two",
        images: [
          { image: "/images/projects/tonghanchuntang/02.jpg", alt: "包装平面展开图" },
          { image: "/images/projects/tonghanchuntang/03.jpg", alt: "包装立体效果图" },
        ],
        caption: "此处替换为真实项目图片：平面展开图与立体效果",
      },
      {
        type: "three",
        images: [
          { image: "/images/projects/tonghanchuntang/04.jpg", alt: "包装文字细节" },
          { image: "/images/projects/tonghanchuntang/05.jpg", alt: "打样对比细节" },
          { image: "/images/projects/tonghanchuntang/06.jpg", alt: "工艺细节展示" },
        ],
        caption: "此处替换为真实项目图片：细节与打样对比",
      },
    ],
  },
  {
    slug: "bund-cultural-ip",
    title: "外滩风华 IP 文创设计",
    titleEn: "Bund Cultural IP Merchandise",
    category: "城市文化 IP｜文创产品｜视觉提案",
    period: "2025.05 – 2025.07",
    keywords: ["Cultural IP", "Souvenir", "Visual Proposal", "Client Feedback"],
    summary:
      "参与城市文化 IP 衍生品及包装视觉方案输出，协助完成客户反馈整理与多轮修改。",
    role: "视觉设计（项目成员）",
    cover: "/images/projects/bund-ip/cover.jpg",
    featured: true,
    overview:
      "「外滩风华」是围绕上海外滩城市文化展开的 IP 文创项目，目标是把外滩的建筑、色彩与城市记忆转化为可售卖的文创产品和视觉体系。",
    challenge:
      "城市文化题材容易做得符号化、纪念品化。项目需要在保留外滩识别度的同时，让视觉语言更年轻、更有设计感，并且方案要经得起客户多轮反馈与调整。",
    myRole: [
      "参与视觉方向探索与 IP 图形延展设计",
      "完成部分文创产品（周边、包装）的视觉方案输出",
      "协助整理客户反馈，归纳修改要点并跟进多轮调整",
      "参与提案文件的排版与展示图制作",
    ],
    process: [
      { step: "需求理解", desc: "梳理项目目标、目标人群与产品形态。" },
      { step: "视觉调研", desc: "收集外滩建筑、历史图像与同类城市文创参考。" },
      { step: "方向探索", desc: "尝试不同图形语言与配色方向，形成候选方案。" },
      { step: "方案输出", desc: "完成 IP 图形延展、产品视觉与包装方案。" },
      { step: "反馈修改", desc: "整理客户意见，多轮修改并保持视觉一致性。" },
      { step: "提案交付", desc: "输出提案文件与产品展示图。" },
    ],
    deliverables: [
      "IP 图形与延展视觉",
      "文创产品视觉方案与包装方案",
      "提案文件与产品展示图",
      "客户反馈整理与修改记录",
    ],
    reflection: [
      "理解了文创项目里「好看」和「可生产、可售卖」之间的差距。",
      "学会把客户模糊的反馈翻译成具体的视觉修改动作。",
      "体会到多轮修改中保持视觉系统一致性的重要性。",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/projects/bund-ip/01.jpg",
        alt: "外滩风华 IP 主视觉",
        caption: "此处替换为真实项目图片：IP 主视觉",
      },
      {
        type: "two",
        images: [
          { image: "/images/projects/bund-ip/02.jpg", alt: "文创产品视觉方案" },
          { image: "/images/projects/bund-ip/03.jpg", alt: "文创包装方案" },
        ],
        caption: "此处替换为真实项目图片：产品与包装方案",
      },
      {
        type: "three",
        images: [
          { image: "/images/projects/bund-ip/04.jpg", alt: "IP 图形延展细节一" },
          { image: "/images/projects/bund-ip/05.jpg", alt: "IP 图形延展细节二" },
          { image: "/images/projects/bund-ip/06.jpg", alt: "提案版面细节" },
        ],
        caption: "此处替换为真实项目图片：图形延展与提案细节",
      },
    ],
  },
  {
    slug: "yutiancheng-brand-refresh",
    title: "余天成品牌宣传提案设计",
    titleEn: "Yutiancheng Heritage Brand Refresh",
    category: "老字号品牌升级｜包装｜IP 形象",
    period: "2024.09 – 2024.11",
    keywords: ["Brand Refresh", "Heritage Brand", "Packaging", "IP Extension"],
    summary:
      "参与老字号品牌年轻化视觉升级项目，协助完成包装、IP 形象及延展物料设计。",
    role: "视觉设计（项目成员）",
    cover: "/images/projects/yutiancheng/cover.jpg",
    featured: true,
    overview:
      "余天成是一家历史悠久的老字号品牌。项目围绕品牌年轻化展开，探索如何在保留品牌历史资产的前提下，让视觉表达更贴近当下的消费语境。",
    challenge:
      "老字号年轻化最大的风险是丢掉品牌原有的信任感。项目需要找到「保留什么、更新什么」的平衡点，并把这个判断落实到包装、IP 形象和延展物料上。",
    myRole: [
      "参与品牌视觉资产梳理与年轻化方向探索",
      "协助完成包装视觉升级方案设计",
      "参与 IP 形象设计与表情、动作延展",
      "完成部分延展物料（周边、宣传物料）设计与提案排版",
    ],
    process: [
      { step: "需求理解", desc: "梳理品牌历史资产与年轻化诉求。" },
      { step: "视觉调研", desc: "研究老字号升级案例与目标人群审美语境。" },
      { step: "方向探索", desc: "确定「保留信任感 + 更新表达方式」的视觉策略。" },
      { step: "方案输出", desc: "完成包装升级、IP 形象与延展物料设计。" },
      { step: "反馈修改", desc: "根据评审意见调整方案细节。" },
      { step: "提案交付", desc: "输出完整提案文件。" },
    ],
    deliverables: [
      "包装视觉升级方案",
      "IP 形象设计与延展",
      "宣传物料与周边设计",
      "品牌提案文件",
    ],
    reflection: [
      "理解了老字号年轻化不是换一套潮流皮肤，而是重新组织品牌资产。",
      "第一次完整参与从品牌梳理到提案输出的流程，建立了提案结构意识。",
      "IP 形象设计让我意识到角色需要服务品牌，而不是独立的插画创作。",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/projects/yutiancheng/01.jpg",
        alt: "余天成品牌升级主视觉",
        caption: "此处替换为真实项目图片：品牌升级主视觉",
      },
      {
        type: "two",
        images: [
          { image: "/images/projects/yutiancheng/02.jpg", alt: "包装升级方案" },
          { image: "/images/projects/yutiancheng/03.jpg", alt: "IP 形象设计" },
        ],
        caption: "此处替换为真实项目图片：包装与 IP 形象",
      },
      {
        type: "three",
        images: [
          { image: "/images/projects/yutiancheng/04.jpg", alt: "IP 表情延展" },
          { image: "/images/projects/yutiancheng/05.jpg", alt: "延展物料设计" },
          { image: "/images/projects/yutiancheng/06.jpg", alt: "提案版面细节" },
        ],
        caption: "此处替换为真实项目图片：延展与提案细节",
      },
    ],
  },
  {
    slug: "private-visual-commission",
    title: "长期私人视觉定制项目",
    titleEn: "Long-term Private Visual Commissions",
    category: "插画｜视觉定制｜客户沟通",
    period: "2022 至今",
    keywords: ["Illustration", "Custom Visual", "Client Communication", "Delivery"],
    summary:
      "长期对接私人客户需求，完成插画与视觉定制方案，积累需求沟通和按时交付经验。",
    role: "独立设计师",
    cover: "/images/projects/private-commission/cover.jpg",
    featured: true,
    overview:
      "从 2022 年起，我长期承接私人客户的插画与视觉定制需求，独立完成从需求沟通、方案确认、绘制修改到最终交付的完整流程。",
    challenge:
      "私人客户往往无法用专业语言描述需求。我需要通过提问、参考图和草图确认，把模糊的想法转化成明确的视觉方案，并在约定时间内完成交付。",
    myRole: [
      "独立对接客户，梳理需求并确认风格方向",
      "输出草图供客户确认，控制修改范围",
      "完成插画与视觉定制成稿",
      "按约定格式与时间交付文件",
    ],
    process: [
      { step: "需求沟通", desc: "通过提问和参考图明确客户的真实需求。" },
      { step: "方向确认", desc: "输出草图或风格样例，先确认方向再深入。" },
      { step: "绘制输出", desc: "完成成稿绘制与细节刻画。" },
      { step: "反馈修改", desc: "在约定的修改范围内调整细节。" },
      { step: "交付归档", desc: "按格式要求交付文件并做好归档。" },
    ],
    deliverables: [
      "定制插画成稿",
      "视觉定制方案",
      "规范格式的交付文件",
    ],
    reflection: [
      "学会了先确认方向再投入细节，大幅减少无效修改。",
      "建立了「约定修改范围与交付时间」的项目习惯。",
      "长期积累了直接面对客户的沟通经验，这是课程项目给不了的。",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/projects/private-commission/01.jpg",
        alt: "私人视觉定制作品展示",
        caption: "此处替换为真实项目图片：代表性定制作品",
      },
      {
        type: "two",
        images: [
          { image: "/images/projects/private-commission/02.jpg", alt: "定制插画作品一" },
          { image: "/images/projects/private-commission/03.jpg", alt: "定制插画作品二" },
        ],
        caption: "此处替换为真实项目图片：定制插画作品",
      },
      {
        type: "three",
        images: [
          { image: "/images/projects/private-commission/04.jpg", alt: "草图到成稿过程一" },
          { image: "/images/projects/private-commission/05.jpg", alt: "草图到成稿过程二" },
          { image: "/images/projects/private-commission/06.jpg", alt: "细节刻画展示" },
        ],
        caption: "此处替换为真实项目图片：草图到成稿的过程",
      },
    ],
  },
  {
    slug: "ai-visual-exploration",
    title: "AI 辅助视觉探索项目",
    titleEn: "AI-assisted Visual Exploration",
    category: "AI-assisted Visual Exploration｜Moodboard｜Concept Design",
    period: "2026",
    keywords: ["AI Workflow", "Moodboard", "Prompt", "Visual Direction"],
    summary:
      "尝试使用 AI 工具进行视觉灵感整理、风格探索、文案辅助和作品集网站搭建。",
    role: "个人探索项目",
    cover: "/images/projects/ai-exploration/cover.jpg",
    featured: false,
    overview:
      "这是一个持续进行的个人探索项目：把 AI 工具纳入我的设计工作流，测试它在调研、灵感、文案和网站搭建环节中能提供多少真实帮助。",
    challenge:
      "AI 工具很多，但真正能稳定提升效率的用法很少。我的目标不是展示炫技，而是找到哪些环节适合 AI 辅助、哪些环节必须由设计判断主导。",
    myRole: [
      "使用 ChatGPT 辅助整理品牌背景、竞品信息与提案框架",
      "使用 AI 图像工具生成风格参考，辅助 moodboard 搭建",
      "使用 AI 辅助优化项目说明与作品集文案",
      "在 Codex 协助下完成本作品集网站的搭建",
    ],
    process: [
      { step: "工具测试", desc: "分环节测试 AI 在调研、灵感、文案中的实际效果。" },
      { step: "流程整合", desc: "把有效的用法固定到自己的工作流程中。" },
      { step: "边界确认", desc: "明确哪些判断必须由人完成：方向选择、内容取舍、视觉标准。" },
      { step: "落地验证", desc: "用这套流程完成作品集文案与网站搭建。" },
    ],
    deliverables: [
      "AI 辅助的 moodboard 与风格探索记录",
      "优化后的项目说明与作品集文案",
      "本作品集网站",
    ],
    reflection: [
      "AI 最有价值的环节是调研整理和思路发散，而不是替我做设计决定。",
      "写好提示词的前提是想清楚自己要什么——这本身就是设计思考。",
      "在 Codex 协助下搭建网站，让我理解了设计稿之外的实现逻辑。",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/projects/ai-exploration/01.jpg",
        alt: "AI 辅助视觉探索展示",
        caption: "此处替换为真实项目图片：AI 辅助 moodboard 示例",
      },
      {
        type: "two",
        images: [
          { image: "/images/projects/ai-exploration/02.jpg", alt: "风格探索对比一" },
          { image: "/images/projects/ai-exploration/03.jpg", alt: "风格探索对比二" },
        ],
        caption: "此处替换为真实项目图片：风格探索过程",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
