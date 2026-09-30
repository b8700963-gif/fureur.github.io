import Link from "next/link";

const skillGroups = [
  {
    number: "01",
    title: "人员沟通与支持",
    subtitle: "PEOPLE SUPPORT",
    description:
      "能够在日常沟通中识别不同对象的需求和问题，通过持续跟进、信息协调和反馈推动问题解决。",
    evidence: [
      "负责240名硕士研究生日常管理",
      "累计开展107次个体谈话",
      "长期承担学生需求沟通与事务协调",
    ],
    fit: "适用于：员工关系 · 招聘沟通 · 人员服务",
    tone: "bg-[#ffd6df]",
  },
  {
    number: "02",
    title: "制度与评价执行",
    subtitle: "PROCESS & EVALUATION",
    description:
      "熟悉在明确规则下推进评审、人员选拔、材料审核和档案管理，重视公平、准确、规范和过程留痕。",
    evidence: [
      "参与600余人次研究生奖助评审",
      "组织班委选举与相关人员工作",
      "负责党务材料核查、台账与档案整理",
    ],
    fit: "适用于：绩效支持 · 人事事务 · 制度运营",
    tone: "bg-[#fff0a8]",
  },
  {
    number: "03",
    title: "项目运营与组织协同",
    subtitle: "PROJECT OPERATIONS",
    description:
      "能够将复杂任务拆分为人员、节点、场地、物料和流程，并协调不同角色持续推进至现场落地。",
    evidence: [
      "统筹299名新生迎新工作",
      "负责200余人次选调生出征仪式",
      "参与校友大会、学术年会等大型会务",
    ],
    fit: "适用于：行政运营 · 培训运营 · 项目管理",
    tone: "bg-[#bfeecf]",
  },
  {
    number: "04",
    title: "分析与材料表达",
    subtitle: "ANALYSIS & COMMUNICATION",
    description:
      "能够快速梳理复杂信息，并通过数据、文字和视觉材料形成结构清晰、便于决策和执行的成果。",
    evidence: [
      "熟练使用R、Stata等分析工具",
      "具有资政建议、研究报告撰写经验",
      "参与近100页会务PPT及多类汇报材料制作",
    ],
    fit: "适用于：汇报支持 · 数据分析 · 综合行政",
    tone: "bg-[#d8ceff]",
  },
];

const journey = [
  {
    period: "2020.09 — 2024.06",
    stage: "START",
    title: "从“为班级服务”开始",
    role: "班长",
    organization: "厦门大学国际商务国际化试点班",
    story:
      "大学四年持续承担班级行政事务、信息传达和活动组织，是我第一次长期处在“服务他人、协调集体”的角色中。",
    learned:
      "我开始理解：组织工作不只是通知和执行，更重要的是让信息被准确理解，让不同需求得到回应。",
    keywords: ["长期服务", "信息协调", "班级建设"],
    tone: "bg-[#ffd6df]",
  },
  {
    period: "2022.07 — 2023.07",
    stage: "EXPAND",
    title: "从服务一个班级，到协调一个团队",
    role: "学生会主席",
    organization: "厦门大学经济学院国际经济与贸易系学生会",
    story:
      "统筹4个部门运行，并参与师生交流会、升学分享等品牌活动，从个人执行逐步转向团队分工、资源协调与项目推进。",
    learned:
      "我开始意识到，真正的协调不是自己把所有事情做完，而是明确分工、控制节点，并让团队稳定协作。",
    keywords: ["团队协作", "活动运营", "任务分工"],
    tone: "bg-[#fff0a8]",
  },
  {
    period: "2024.08 — 至今",
    stage: "DEEPEN",
    title: "进入更真实、更复杂的人员服务场景",
    role: "兼职辅导员",
    organization: "大连理工大学经济管理学院研究生工作办公室",
    story:
      "开始承担240名硕士研究生日常教育管理，并参与奖助评审、学生事务、大型活动、会务和行政工作。",
    learned:
      "人员工作让我更加重视个体差异，也让我学会在服务对象、制度规则和组织目标之间寻找平衡。",
    keywords: ["人员服务", "制度执行", "行政统筹"],
    tone: "bg-[#79d4ff]",
  },
  {
    period: "2025.10 — 2026.06",
    stage: "STRUCTURE",
    title: "进一步理解组织如何稳定运转",
    role: "党支部副书记",
    organization: "大连理工大学应用经济学第一学生党支部",
    story:
      "承担日常事务统筹、支委协调、党员发展材料、工作台账和检查迎检等任务，更深入接触规范化组织运行。",
    learned:
      "这段经历强化了我对制度、流程、档案和责任边界的理解，也让我更加重视工作的规范性与可追溯性。",
    keywords: ["组织运行", "档案管理", "流程规范"],
    tone: "bg-[#d8ceff]",
  },
];

const values = [
  {
    number: "01",
    title: "先理解人，再处理事",
    subtitle: "UNDERSTAND FIRST",
    text:
      "制度和流程需要被执行，但好的执行并不意味着机械。在沟通和处理问题之前，我习惯先理解对方所处的情境、真正的需求和可能存在的顾虑。",
    note: "理解情境 · 尊重个体 · 保持边界",
    tone: "bg-[#ffd6df]",
  },
  {
    number: "02",
    title: "复杂任务，先建立秩序",
    subtitle: "MAKE IT CLEAR",
    text:
      "面对同时到来的多项任务，我会先拆解工作、判断轻重缓急，明确关键节点和责任边界，再按照优先级逐项推进，而不是被事情推着走。",
    note: "任务拆解 · 优先级 · 节点管理",
    tone: "bg-[#fff0a8]",
  },
  {
    number: "03",
    title: "做完不等于做到位",
    subtitle: "CLOSE THE LOOP",
    text:
      "我会关注事情最后是否真正形成结果：信息有没有传达到位、材料是否方便继续使用、问题是否得到反馈、后续是否有人能够顺利接手。",
    note: "持续跟进 · 及时反馈 · 工作闭环",
    tone: "bg-[#bfeecf]",
  },
];

const lifeTags = [
  "跑步",
  "羽毛球",
  "乒乓球",
  "高尔夫",
  "篮球",
  "志愿活动",
  "散步",
  "游戏",
];

export default function AboutPage() {
  return (
    <div className="portfolio-grid min-h-screen text-[#10243e]">
      <header className="sticky top-0 z-50 border-b-[3px] border-[#10243e] bg-[#f7fcff]/95 backdrop-blur">
  <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 lg:px-8">
    <Link href="/" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#10243e] bg-[#79d4ff] text-lg font-black shadow-[3px_3px_0_#10243e]">
        W
      </span>

      <span className="text-sm font-black tracking-[0.12em] sm:text-base">
        WANG XIRONG
      </span>
    </Link>

    <nav
      className="hidden items-center gap-6 text-sm font-bold lg:flex"
      aria-label="主导航"
    >
      <Link
        className="text-[#078ac4]"
        href="/about"
        aria-current="page"
      >
        关于我
      </Link>

      <Link
        className="transition hover:text-[#078ac4]"
        href="/#experience"
      >
        任职经历
      </Link>

      <Link
        className="transition hover:text-[#078ac4]"
        href="/#projects"
      >
        项目实践
      </Link>

      <Link
        className="transition hover:text-[#078ac4]"
        href="/#education"
      >
        教育与荣誉
      </Link>
    </nav>

    <a
      href="mailto:fureur72@163.com"
      className="rounded-full border-[3px] border-[#10243e] bg-[#fff0a8] px-4 py-2 text-sm font-black shadow-[3px_3px_0_#10243e] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:px-5"
    >
      联系我
    </a>
  </div>
</header>

      <main id="top">
        <section className="relative isolate overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
  {/* 装饰元素 */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-24 top-24 h-52 w-52 rounded-full border-[3px] border-[#10243e] bg-[#bfeecf]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-[5%] top-12 h-24 w-24 rotate-12 border-[3px] border-[#10243e] bg-[#fff0a8]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-12 left-[45%] h-12 w-12 rounded-full border-[3px] border-[#10243e] bg-[#ffd6df]"
  />

  <div className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
    
    {/* 左侧：职业故事 */}
    <div>
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-[#10243e] bg-white px-4 py-2 text-xs font-black tracking-[0.12em] shadow-[3px_3px_0_#10243e]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#20b76b]" />
        ABOUT ME · PEOPLE × ORGANIZATION
      </div>

      <h1 className="max-w-[760px] text-[clamp(2.8rem,5.4vw,5.2rem)] font-black leading-[1.07] tracking-[-0.05em]">
        我想做的，
        <br />
        不只是把事情
        <span className="mx-2 inline-block rotate-[-2deg] border-[3px] border-[#10243e] bg-[#79d4ff] px-3 py-1 shadow-[5px_5px_0_#10243e]">
          做完
        </span>
        。
      </h1>

      <p className="mt-8 max-w-[700px] text-[clamp(1.35rem,2.2vw,2rem)] font-black leading-[1.45] tracking-[-0.025em]">
        更希望让
        <span className="mx-2 bg-[#ffd6df] px-2">人被看见</span>
        ，让
        <span className="mx-2 bg-[#fff0a8] px-2">流程更顺</span>
        ，
        <br className="hidden sm:block" />
        让
        <span className="mx-2 bg-[#bfeecf] px-2">结果真正落地</span>
        。
      </p>

      <div className="mt-8 max-w-[700px] space-y-4 text-base font-medium leading-8 text-[#40536b] sm:text-lg">
        <p>
          从本科四年班长、学生会主席，到研究生辅导员和党支部副书记，
          我一直在真实的组织环境中与人打交道，也持续处理流程、材料、
          活动和多方协作。
        </p>

        <p>
          这些经历让我逐渐确认，比起单纯完成一项任务，
          我更喜欢理解人的需求、理清复杂事务，并把事情一步一步推进到位。
        </p>
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        {[
          "细致耐心",
          "逻辑清晰",
          "善于沟通",
          "重视闭环",
          "服务意识",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border-2 border-[#10243e] bg-white px-4 py-2 text-sm font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-9">
        <a
  href="#career-direction"
  className="relative z-20 inline-flex items-center gap-3 rounded-full border-[3px] border-[#10243e] bg-[#10243e] px-6 py-3 font-black shadow-[5px_5px_0_#79d4ff] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
  style={{ color: "#ffffff" }}
>
  <span
    className="relative z-30"
    style={{ color: "#ffffff" }}
  >
    为什么选择 HR / 行政
  </span>

  <span
    className="relative z-30"
    style={{ color: "#ffffff" }}
    aria-hidden="true"
  >
    ↓
  </span>
</a>
      </div>
    </div>

    {/* 右侧：工作方式卡片 */}
    <div className="relative mx-auto w-full max-w-[460px] py-8">
      <div className="absolute -left-5 top-0 z-20 rotate-[-5deg] border-[3px] border-[#10243e] bg-[#ffd6df] px-4 py-2 text-xs font-black shadow-[4px_4px_0_#10243e]">
        HOW I WORK
      </div>

      <div className="absolute -right-4 bottom-3 z-20 rotate-[4deg] border-[3px] border-[#10243e] bg-[#fff0a8] px-4 py-2 text-xs font-black shadow-[4px_4px_0_#10243e]">
        RELIABLE SUPPORTER
      </div>

      <article className="rotate-[1.5deg] border-[3px] border-[#10243e] bg-white p-5 shadow-[9px_9px_0_#10243e] transition duration-300 hover:rotate-0 sm:p-6">
        
        <div className="flex items-center justify-between border-b-[3px] border-[#10243e] pb-4">
          <span className="text-xs font-black tracking-[0.15em]">
            WORKING STYLE
          </span>

          <span className="rounded-full border-2 border-[#10243e] bg-[#bfeecf] px-3 py-1 text-[11px] font-black">
            HR · ADMIN
          </span>
        </div>

        <div className="mt-5 border-[3px] border-[#10243e] bg-[#79d4ff] p-6">
          <p className="text-xs font-black tracking-[0.15em]">
            MY PRINCIPLE
          </p>

          <p className="mt-3 text-3xl font-black leading-tight">
            专业与温度并重，
            <br />
            细节与结果兼顾。
          </p>
        </div>

        <div className="mt-5 grid gap-4">
          
          <div className="grid grid-cols-[54px_1fr] gap-4 border-[3px] border-[#10243e] bg-[#ffd6df] p-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
              01
            </div>

            <div>
              <h3 className="font-black">先理解人</h3>
              <p className="mt-1 text-sm font-medium leading-6 text-[#40536b]">
                在沟通和执行之前，先理解对方的情境、需求和顾虑。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[54px_1fr] gap-4 border-[3px] border-[#10243e] bg-[#fff0a8] p-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
              02
            </div>

            <div>
              <h3 className="font-black">再理清事</h3>
              <p className="mt-1 text-sm font-medium leading-6 text-[#40536b]">
                拆解任务、判断优先级、明确节点，让复杂事务变得有序。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[54px_1fr] gap-4 border-[3px] border-[#10243e] bg-[#bfeecf] p-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
              03
            </div>

            <div>
              <h3 className="font-black">最后做到位</h3>
              <p className="mt-1 text-sm font-medium leading-6 text-[#40536b]">
                持续跟进、及时反馈，直到事情形成真正的工作闭环。
              </p>
            </div>
          </div>

        </div>

        <div className="mt-5 border-t-[3px] border-[#10243e] pt-5">
          <p className="text-xs font-black tracking-[0.14em] text-[#078ac4]">
            WHAT I WANT TO BE
          </p>

          <p className="mt-2 text-lg font-black">
            一个让同事放心、让服务对象信任的组织支持者。
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

       {/* CAREER POSITION */}
<section
  id="career-direction"
  className="scroll-mt-24 border-y-[3px] border-[#10243e] bg-[#10243e] px-5 py-20 text-white lg:px-8 lg:py-28"
>
  <div className="mx-auto max-w-[1180px]">

    {/* 标题区域 */}
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="text-sm font-black tracking-[0.18em] text-[#79d4ff]">
          WHY HR &amp; ADMINISTRATION
        </p>

        <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,4.3rem)] font-black leading-[1.08] tracking-[-0.04em]">
          这不是一次
          <br />
          突然的职业转向。
        </h2>
      </div>

      <div className="max-w-[650px] lg:justify-self-end">
        <p className="text-lg font-bold leading-8 text-white">
          回看过去几年的经历，我反复做的其实是同一类事情：
        </p>

        <p className="mt-3 text-base font-medium leading-8 text-[#cbd7e4] sm:text-lg">
          理解人的需求、维护制度流程、协调不同角色，
          再把一件复杂的事情真正推进到结果。
          人力资源与行政职能，并不是脱离过往经历的新方向，
          而是这些经验逐渐汇聚出的职业选择。
        </p>
      </div>
    </div>

    {/* 三张核心证据卡 */}
    <div className="mt-14 grid gap-7 lg:grid-cols-3">

      {/* 01 人 */}
      <article className="relative border-[3px] border-white bg-[#ffd6df] p-6 text-[#10243e] shadow-[8px_8px_0_#79d4ff] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
            01
          </span>

          <span className="rotate-[2deg] border-2 border-[#10243e] bg-white px-3 py-1 text-xs font-black">
            PEOPLE
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-black">
          我长期在和“人”打交道
        </h3>

        <p className="mt-4 font-medium leading-7 text-[#40536b]">
          从四年班长到研究生辅导员，我持续处在人员服务与沟通一线，
          需要理解不同个体的需求、情绪和现实问题，并跟进解决。
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="border-2 border-[#10243e] bg-white p-3">
            <p className="text-2xl font-black">240名</p>
            <p className="mt-1 text-xs font-bold text-[#607086]">
              硕士研究生日常管理
            </p>
          </div>

          <div className="border-2 border-[#10243e] bg-white p-3">
            <p className="text-2xl font-black">107次</p>
            <p className="mt-1 text-xs font-bold text-[#607086]">
              个体谈话与跟进
            </p>
          </div>
        </div>

        <p className="mt-6 border-t-2 border-[#10243e] pt-5 text-sm font-black">
          对应能力：人员沟通 · 需求识别 · 个体支持
        </p>
      </article>

      {/* 02 流程 */}
      <article className="relative border-[3px] border-white bg-[#fff0a8] p-6 text-[#10243e] shadow-[8px_8px_0_#79d4ff] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
            02
          </span>

          <span className="rotate-[-2deg] border-2 border-[#10243e] bg-white px-3 py-1 text-xs font-black">
            PROCESS
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-black">
          我习惯在规则中把流程做稳
        </h3>

        <p className="mt-4 font-medium leading-7 text-[#40536b]">
          奖助评审、班委选拔、党务材料和档案管理，
          都要求准确、公平、规范和可追溯。
          这些经历让我建立了对制度执行和流程细节的敏感度。
        </p>

        <div className="mt-7 border-2 border-[#10243e] bg-white p-4">
          <p className="text-3xl font-black">600+ 人次</p>

          <p className="mt-1 text-sm font-bold text-[#607086]">
            研究生奖助评审及相关行政事务
          </p>
        </div>

        <p className="mt-6 border-t-2 border-[#10243e] pt-5 text-sm font-black">
          对应能力：制度执行 · 流程管理 · 材料规范
        </p>
      </article>

      {/* 03 落地 */}
      <article className="relative border-[3px] border-white bg-[#bfeecf] p-6 text-[#10243e] shadow-[8px_8px_0_#79d4ff] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
            03
          </span>

          <span className="rotate-[2deg] border-2 border-[#10243e] bg-white px-3 py-1 text-xs font-black">
            EXECUTION
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-black">
          我也喜欢把复杂事务真正落地
        </h3>

        <p className="mt-4 font-medium leading-7 text-[#40536b]">
          从方案、场地、人员到物料和现场流程，
          大型活动让我反复练习多线程任务管理，
          也让我更习惯提前预判、持续跟进和及时补位。
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="border-2 border-[#10243e] bg-white p-3">
            <p className="text-2xl font-black">299名</p>
            <p className="mt-1 text-xs font-bold text-[#607086]">
              新生迎新统筹
            </p>
          </div>

          <div className="border-2 border-[#10243e] bg-white p-3">
            <p className="text-2xl font-black">200+</p>
            <p className="mt-1 text-xs font-bold text-[#607086]">
              人次大型活动
            </p>
          </div>
        </div>

        <p className="mt-6 border-t-2 border-[#10243e] pt-5 text-sm font-black">
          对应能力：项目统筹 · 多方协调 · 执行闭环
        </p>
      </article>
    </div>

    {/* 收束结论 */}
    <div className="mt-12 grid gap-6 border-[3px] border-white bg-[#79d4ff] p-7 text-[#10243e] shadow-[8px_8px_0_white] lg:grid-cols-[1fr_auto] lg:items-center sm:p-9">
      <div>
        <p className="text-xs font-black tracking-[0.15em]">
          SO, WHY THIS CAREER?
        </p>

        <p className="mt-3 max-w-[820px] text-xl font-black leading-8 sm:text-2xl">
          我希望把已经积累的“人员服务 + 流程执行 + 组织协调”
          从校园场景进一步转化为专业的人力资源与行政管理能力。
        </p>
      </div>

      <a
        href="#capabilities"
        className="relative z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[3px] border-[#10243e] bg-[#10243e] px-6 py-3 font-black shadow-[5px_5px_0_white]"
        style={{ color: "#ffffff" }}
      >
        <span className="relative z-30" style={{ color: "#ffffff" }}>
          看我的能力
        </span>

        <span
          className="relative z-30"
          style={{ color: "#ffffff" }}
          aria-hidden="true"
        >
          ↓
        </span>
      </a>
    </div>
  </div>
</section>

       {/* CAPABILITIES */}
<section
  id="capabilities"
  className="mx-auto max-w-[1180px] scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28"
>
  {/* 标题 */}
  <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
    <div>
      <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
        WHAT I CAN BRING
      </p>

      <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.4rem)] font-black leading-[1.08] tracking-[-0.04em]">
        从经历中，
        <br />
        沉淀出的岗位能力。
      </h2>
    </div>

    <div className="max-w-[650px] lg:justify-self-end">
      <p className="text-lg font-bold leading-8">
        我不希望只用“沟通能力强”“执行力强”来描述自己。
      </p>

      <p className="mt-3 font-medium leading-8 text-[#52647a]">
        更重要的是，这些能力分别在哪些真实场景中被反复使用，
        又能够如何迁移到人力资源和行政职能岗位。
      </p>
    </div>
  </div>

  {/* 能力卡 */}
  <div className="mt-12 grid gap-7 md:grid-cols-2">
    {skillGroups.map((skill) => (
      <article
        key={skill.number}
        className={`${skill.tone} group border-[3px] border-[#10243e] p-6 shadow-[7px_7px_0_#10243e] transition duration-300 hover:-translate-y-1 sm:p-8`}
      >
        {/* 卡片头部 */}
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full border-[3px] border-[#10243e] bg-white text-lg font-black">
            {skill.number}
          </span>

          <span className="rotate-[2deg] border-2 border-[#10243e] bg-white px-3 py-1 text-[11px] font-black tracking-[0.08em]">
            {skill.subtitle}
          </span>
        </div>

        {/* 标题与说明 */}
        <h3 className="mt-7 text-2xl font-black sm:text-3xl">
          {skill.title}
        </h3>

        <p className="mt-4 font-medium leading-7 text-[#40536b]">
          {skill.description}
        </p>

        {/* 证据 */}
        <div className="mt-7 border-t-[3px] border-[#10243e] pt-5">
          <p className="text-xs font-black tracking-[0.14em]">
            EVIDENCE · 经历证据
          </p>

          <div className="mt-4 grid gap-3">
            {skill.evidence.map((item) => (
              <div
                key={item}
                className="grid grid-cols-[14px_1fr] gap-3"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-2.5 w-2.5 rounded-full border-2 border-[#10243e] bg-white"
                />

                <p className="text-sm font-bold leading-6 text-[#40536b]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 对应岗位场景 */}
        <div className="mt-6 border-[2px] border-[#10243e] bg-white px-4 py-3">
          <p className="text-sm font-black">
            {skill.fit}
          </p>
        </div>
      </article>
    ))}
  </div>

  {/* 小结 */}
  <div className="mt-10 flex flex-col gap-5 border-[3px] border-[#10243e] bg-white p-6 shadow-[6px_6px_0_#10243e] sm:flex-row sm:items-center sm:justify-between sm:p-8">
    <div>
      <p className="text-xs font-black tracking-[0.14em] text-[#078ac4]">
        MY ADVANTAGE
      </p>

      <p className="mt-2 max-w-[760px] text-lg font-black leading-8">
        我的优势不在于已经掌握了所有HR专业模块，
        而在于已经具备较成熟的人员沟通、流程执行、
        组织协调和综合支持基础。
      </p>
    </div>

    <a
      href="#journey"
      className="relative z-20 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-[3px] border-[#10243e] bg-[#79d4ff] px-6 py-3 font-black shadow-[4px_4px_0_#10243e] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    >
      看成长轨迹
      <span aria-hidden="true">↓</span>
    </a>
  </div>
</section>

       {/* JOURNEY */}
<section
  id="journey"
  className="scroll-mt-24 border-y-[3px] border-[#10243e] bg-white px-5 py-20 lg:px-8 lg:py-28"
>
  <div className="mx-auto max-w-[1180px]">

    {/* 标题 */}
    <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
          MY JOURNEY
        </p>

        <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-black leading-[1.08] tracking-[-0.04em]">
          一路做下来，
          <br />
          我越来越确定自己喜欢什么。
        </h2>
      </div>

      <div className="max-w-[650px] lg:justify-self-end">
        <p className="text-lg font-bold leading-8">
          我的职业方向，并不是某一天突然决定的。
        </p>

        <p className="mt-3 font-medium leading-8 text-[#52647a]">
          从班级、学生组织，到研究生工作和党支部，
          我承担的角色不断变化，但始终围绕着
          “人与组织如何更好地协作”这个问题。
        </p>
      </div>
    </div>

    {/* 时间线 */}
    <div className="relative mt-14">

      {/* 桌面端纵向线 */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[25px] top-0 hidden w-[3px] bg-[#10243e] md:block"
      />

      <div className="grid gap-8">
        {journey.map((item, index) => (
          <article
            key={`${item.period}-${item.role}`}
            className="relative grid gap-6 md:grid-cols-[80px_1fr]"
          >
            {/* 时间节点 */}
            <div className="relative z-10 hidden md:flex md:justify-start">
              <div
                className={`${item.tone} grid h-[54px] w-[54px] place-items-center rounded-full border-[3px] border-[#10243e] text-sm font-black shadow-[3px_3px_0_#10243e]`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* 内容卡 */}
            <div
              className={`${item.tone} border-[3px] border-[#10243e] p-6 shadow-[7px_7px_0_#10243e] transition duration-300 hover:-translate-y-1 sm:p-8`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border-2 border-[#10243e] bg-white px-3 py-1 text-xs font-black tracking-[0.1em]">
                      {item.stage}
                    </span>

                    <span className="text-sm font-black">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div className="shrink-0 border-2 border-[#10243e] bg-white px-4 py-3 sm:text-right">
                  <p className="font-black">
                    {item.role}
                  </p>

                  <p className="mt-1 max-w-[260px] text-xs font-bold leading-5 text-[#607086]">
                    {item.organization}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-2">

                {/* 做了什么 */}
                <div className="border-t-[3px] border-[#10243e] pt-5">
                  <p className="text-xs font-black tracking-[0.14em]">
                    WHAT I DID · 经历
                  </p>

                  <p className="mt-3 font-medium leading-7 text-[#40536b]">
                    {item.story}
                  </p>
                </div>

                {/* 学到了什么 */}
                <div className="border-t-[3px] border-[#10243e] pt-5">
                  <p className="text-xs font-black tracking-[0.14em]">
                    WHAT I LEARNED · 沉淀
                  </p>

                  <p className="mt-3 font-bold leading-7 text-[#10243e]">
                    {item.learned}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {item.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border-2 border-[#10243e] bg-white px-3 py-1 text-xs font-bold"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* 时间线结论 */}
    <div className="mt-12 border-[3px] border-[#10243e] bg-[#79d4ff] p-7 shadow-[8px_8px_0_#10243e] sm:p-9">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black tracking-[0.15em]">
            WHAT CONNECTS THEM?
          </p>

          <p className="mt-3 max-w-[820px] text-xl font-black leading-8 sm:text-2xl">
            看起来是四种不同身份，
            但它们一直在训练同一件事：
            理解人、协调关系、建立秩序，并对结果负责。
          </p>
        </div>

        <a
          href="#values"
          className="relative z-20 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-[3px] border-[#10243e] bg-[#10243e] px-6 py-3 font-black shadow-[5px_5px_0_white]"
          style={{ color: "#ffffff" }}
        >
          <span
            className="relative z-30"
            style={{ color: "#ffffff" }}
          >
            我的工作原则
          </span>

          <span
            className="relative z-30"
            style={{ color: "#ffffff" }}
            aria-hidden="true"
          >
            ↓
          </span>
        </a>
      </div>
    </div>

  </div>
</section>

        {/* VALUES */}
<section
  id="values"
  className="mx-auto max-w-[1180px] scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28"
>
  {/* 标题 */}
  <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
    <div>
      <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
        HOW I WORK
      </p>

      <h2 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-black leading-[1.08] tracking-[-0.04em]">
        比“做事认真”更具体的，
        <br />
        是我怎样把事情做好。
      </h2>
    </div>

    <div className="max-w-[650px] lg:justify-self-end">
      <p className="text-lg font-bold leading-8">
        我希望自己是一个可靠的人。
      </p>

      <p className="mt-3 font-medium leading-8 text-[#52647a]">
        所谓可靠，对我来说不是永远不出问题，
        而是在面对复杂情况时依然能够理解人、理清事情，
        并持续把责任推进到结果。
      </p>
    </div>
  </div>

  {/* 三条工作原则 */}
  <div className="mt-12 grid gap-7 lg:grid-cols-3">
    {values.map((value) => (
      <article
        key={value.number}
        className={`${value.tone} flex flex-col border-[3px] border-[#10243e] p-6 shadow-[7px_7px_0_#10243e] transition duration-300 hover:-translate-y-1 sm:p-7`}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
            {value.number}
          </span>

          <span className="rotate-[2deg] border-2 border-[#10243e] bg-white px-3 py-1 text-[10px] font-black tracking-[0.08em]">
            {value.subtitle}
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-black leading-tight">
          {value.title}
        </h3>

        <p className="mt-4 flex-1 font-medium leading-7 text-[#40536b]">
          {value.text}
        </p>

        <div className="mt-7 border-t-[3px] border-[#10243e] pt-5">
          <p className="text-sm font-black">
            {value.note}
          </p>
        </div>
      </article>
    ))}
  </div>

  {/* 核心工作观 */}
  <div className="mt-10 rotate-[-0.5deg] border-[3px] border-[#10243e] bg-[#79d4ff] p-7 shadow-[8px_8px_0_#10243e] sm:p-9">
    <div className="grid gap-5 lg:grid-cols-[auto_1fr] lg:items-center">
      <span className="inline-flex w-fit border-[3px] border-[#10243e] bg-white px-4 py-2 text-xs font-black tracking-[0.12em]">
        MY PRINCIPLE
      </span>

      <p className="text-2xl font-black leading-tight sm:text-3xl">
        专业与温度并重，
        <br className="sm:hidden" />
        细节与结果兼顾。
      </p>
    </div>
  </div>

  {/* 工作之外 */}
  <div className="mt-14 grid gap-8 border-t-[3px] border-[#10243e] pt-12 lg:grid-cols-[0.75fr_1.25fr]">
    <div>
      <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
        OUTSIDE WORK
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
        工作之外，
        <br />
        我也在认真生活。
      </h3>
    </div>

    <div>
      <p className="max-w-[720px] text-base font-medium leading-8 text-[#40536b] sm:text-lg">
        我喜欢尝试新的运动和活动，也会参加社区志愿和社团活动。
        羽毛球、乒乓球、高尔夫、篮球都学过一些，目前保持跑步；
        空闲时也喜欢散步、体验不同类型的游戏。
      </p>

      <p className="mt-4 max-w-[720px] font-bold leading-7">
        我很喜欢这种持续接触新事物的状态——
        不一定每件事都做到专业，但愿意开始、愿意学习，也愿意坚持。
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {lifeTags.map((tag, index) => {
          const tones = [
            "bg-[#dff5ff]",
            "bg-[#ffd6df]",
            "bg-[#fff0a8]",
            "bg-[#bfeecf]",
            "bg-[#d8ceff]",
          ];

          return (
            <span
              key={tag}
              className={`${tones[index % tones.length]} rotate-[-1deg] border-2 border-[#10243e] px-4 py-2 text-sm font-black shadow-[2px_2px_0_#10243e]`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  </div>
</section>

        {/* CTA */}
        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-[1180px] border-[3px] border-[#10243e] bg-[#79d4ff] p-8 shadow-[9px_9px_0_#10243e] sm:p-12">
            <p className="text-sm font-black tracking-[0.16em]">
              NEXT
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              了解了“我是谁”，
              <br />
              接下来看看“我还参与过什么”。
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              

              <Link
  href="/#projects"
  className="rounded-full border-[3px] border-[#10243e] bg-white px-6 py-3 font-black shadow-[5px_5px_0_#10243e] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
>
  查看项目实践 ↗
</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-[#10243e] bg-white px-5 py-7">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 text-sm font-bold sm:flex-row sm:justify-between">
          <p>© 2026 王溪荣 · Personal Portfolio</p>
          <Link
  href="/"
  className="text-[#078ac4] transition hover:underline"
>
  ← 返回首页
</Link>
        </div>
      </footer>
    </div>
  );
}