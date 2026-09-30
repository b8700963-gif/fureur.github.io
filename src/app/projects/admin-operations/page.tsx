import Link from "next/link";

const projectStats = [
  {
    value: "299名",
    label: "学院新生迎新",
    tone: "bg-[#dff5ff]",
  },
  {
    value: "200+",
    label: "选调生出征仪式参与人次",
    tone: "bg-[#fff0a8]",
  },
  {
    value: "近100页",
    label: "校友大会演示文稿",
    tone: "bg-[#ffd6df]",
  },
  {
    value: "多部门",
    label: "协同推进与现场执行",
    tone: "bg-[#bfeecf]",
  },
];

const workflow = [
  {
    number: "01",
    title: "明确目标",
    subtitle: "DEFINE",
    text: "先明确活动对象、规模、核心任务和时间节点，把模糊需求转化为可以执行的任务清单。",
    tone: "bg-[#ffd6df]",
  },
  {
    number: "02",
    title: "拆解任务",
    subtitle: "PLAN",
    text: "将工作进一步拆分为场地、人员、物料、视觉材料、流程和现场保障等模块，并梳理先后顺序。",
    tone: "bg-[#fff0a8]",
  },
  {
    number: "03",
    title: "协调资源",
    subtitle: "COORDINATE",
    text: "持续与相关教师、学生工作人员及其他协作方沟通，确认任务状态并及时处理变化。",
    tone: "bg-[#d8ceff]",
  },
  {
    number: "04",
    title: "现场落地",
    subtitle: "DELIVER",
    text: "在活动现场关注流程衔接、人员到位、物料使用和突发情况，确保方案真正转化为现场结果。",
    tone: "bg-[#bfeecf]",
  },
];

const cases = [
  {
    number: "01",
    title: "2025级硕士研究生迎新",
    role: "负责人",
    scale: "299名新生",
    description:
      "统筹学院研究生迎新工作，从前期方案设计到场地布置、物料准备、人员协调和现场流程进行整体推进。",
    tasks: [
      "设计迎新工作方案并拆解执行任务",
      "协调场地布置、人员分工与现场流程",
      "推进物料采购、制作与现场使用",
      "根据实际情况及时处理临时变化",
    ],
    tone: "bg-[#dff5ff]",
  },
  {
    number: "02",
    title: "学校选调生出征仪式",
    role: "项目统筹",
    scale: "200余人次",
    description:
      "负责学校大型活动的组织执行，在人员规模更大、协作关系更多的场景中推进方案、物料和现场工作。",
    tasks: [
      "参与整体活动方案设计与工作推进",
      "协调不同人员和任务节点",
      "负责物料采购及现场准备",
      "关注活动流程衔接与现场执行",
    ],
    tone: "bg-[#fff0a8]",
  },
  {
    number: "03",
    title: "校友大会与学术年会",
    role: "会务支持 / 现场场控",
    scale: "近100页PPT及视听物料",
    description:
      "参与建校77周年、建院46周年校友大会及学院学术年会筹备，承担大量会务材料与现场保障工作。",
    tasks: [
      "筹备近100页大会演示文稿",
      "制作和整理相关视听物料",
      "参与校友办及相关办公室会议类工作",
      "承担现场场控与流程保障",
    ],
    tone: "bg-[#ffd6df]",
  },
];

const lessons = [
  {
    title: "方案要能被执行",
    text: "一份好的方案不是信息越多越好，而是让每个参与者都清楚自己什么时候、在哪里、完成什么。",
  },
  {
    title: "重要节点必须提前确认",
    text: "大型活动中的很多风险并不是现场才产生，而是前期缺少确认。因此我会特别关注关键人员、核心物料和时间节点。",
  },
  {
    title: "现场需要有人看整体",
    text: "每个人都在完成自己的任务时，仍需要有人持续观察整体流程，及时发现衔接问题并补位。",
  },
];

export default function AdminOperationsProject() {
  return (
    <div className="portfolio-grid min-h-screen overflow-x-hidden text-[#10243e]">
      {/* HEADER */}
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

          <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
            <Link href="/" className="transition hover:text-[#078ac4]">
              首页
            </Link>

            <Link href="/about" className="transition hover:text-[#078ac4]">
              关于我
            </Link>

            <Link
              href="/#projects"
              className="transition hover:text-[#078ac4]"
            >
              项目实践
            </Link>
          </nav>

          <a
            href="mailto:fureur72@163.com"
            className="rounded-full border-[3px] border-[#10243e] bg-[#fff0a8] px-4 py-2 text-sm font-black shadow-[3px_3px_0_#10243e]"
          >
            联系我
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-20 top-20 h-48 w-48 rounded-full border-[3px] border-[#10243e] bg-[#bfeecf]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[5%] top-14 h-24 w-24 rotate-12 border-[3px] border-[#10243e] bg-[#fff0a8]"
          />

          <div className="relative mx-auto max-w-[1180px]">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-black text-[#078ac4]"
            >
              ← 返回项目实践
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="inline-block rotate-[-2deg] border-[3px] border-[#10243e] bg-[#79d4ff] px-4 py-2 text-xs font-black tracking-[0.12em] shadow-[4px_4px_0_#10243e]">
                  ADMIN OPERATIONS
                </span>

                <h1 className="mt-7 text-[clamp(3rem,6vw,5.8rem)] font-black leading-[1.03] tracking-[-0.055em]">
                  大型活动与
                  <br />
                  会务统筹
                </h1>

                <p className="mt-7 max-w-[700px] text-lg font-medium leading-9 text-[#40536b]">
                  从迎新、出征仪式到校友大会和学术年会，
                  我在不同规模的活动中持续处理方案、人员、场地、
                  物料、内容和现场流程。
                </p>
              </div>

              <div className="border-[3px] border-[#10243e] bg-white p-6 shadow-[8px_8px_0_#10243e]">
                <p className="text-xs font-black tracking-[0.14em] text-[#078ac4]">
                  MY ROLE
                </p>

                <p className="mt-3 text-3xl font-black">
                  项目负责人
                  <br />
                  & 会务执行
                </p>

                <div className="mt-6 border-t-[3px] border-[#10243e] pt-5">
                  <p className="text-sm font-bold leading-7 text-[#40536b]">
                    核心工作：
                    <br />
                    方案设计 · 资源协调 · 物料管理
                    <br />
                    流程管控 · 现场执行 · 会务材料
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUMBERS */}
        <section className="border-y-[3px] border-[#10243e] bg-white px-5 py-8 lg:px-8">
          <div className="mx-auto grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((item) => (
              <article
                key={item.value}
                className={`${item.tone} border-[3px] border-[#10243e] p-5 shadow-[5px_5px_0_#10243e]`}
              >
                <p className="text-3xl font-black">{item.value}</p>

                <p className="mt-2 text-sm font-bold leading-6 text-[#40536b]">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTEXT */}
        <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
                PROJECT CONTEXT
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                大型活动，
                <br />
                真正难在哪里？
              </h2>
            </div>

            <div className="border-[3px] border-[#10243e] bg-[#dff5ff] p-7 shadow-[7px_7px_0_#10243e] sm:p-9">
              <p className="text-lg font-bold leading-8">
                对我来说，大型活动的难点从来不是某一个具体动作，
                而是大量细小任务必须在同一个时间节点正确发生。
              </p>

              <p className="mt-5 font-medium leading-8 text-[#40536b]">
                场地是否准备好、人员是否清楚职责、物料有没有遗漏、
                内容是否最终确认、时间有没有延误、临时变化由谁处理……
                这些问题彼此关联，因此需要有人持续观察整体，
                也需要前期把每一个环节尽可能拆清楚。
              </p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="border-y-[3px] border-[#10243e] bg-[#10243e] px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-sm font-black tracking-[0.18em] text-[#79d4ff]">
              HOW I WORK
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              我如何把活动推进到现场
            </h2>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((item) => (
                <article
                  key={item.number}
                  className={`${item.tone} border-[3px] border-white p-6 text-[#10243e] shadow-[7px_7px_0_#79d4ff]`}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10243e] bg-white font-black">
                      {item.number}
                    </span>

                    <span className="text-xs font-black tracking-[0.1em]">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-medium leading-7 text-[#40536b]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
            SELECTED CASES
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            三个代表性场景
          </h2>

          <div className="mt-12 grid gap-8">
            {cases.map((item) => (
              <article
                key={item.number}
                className={`${item.tone} border-[3px] border-[#10243e] p-6 shadow-[8px_8px_0_#10243e] sm:p-8`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                  <div>
                    <span className="text-4xl font-black">
                      {item.number}
                    </span>

                    <h3 className="mt-5 text-3xl font-black">
                      {item.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="border-2 border-[#10243e] bg-white px-3 py-1 text-xs font-black">
                        {item.role}
                      </span>

                      <span className="border-2 border-[#10243e] bg-[#10243e] px-3 py-1 text-xs font-black text-white">
                        {item.scale}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-8">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.tasks.map((task) => (
                        <div
                          key={task}
                          className="border-2 border-[#10243e] bg-white p-4 text-sm font-bold leading-6"
                        >
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LESSONS */}
        <section className="border-y-[3px] border-[#10243e] bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
              WHAT I LEARNED
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              这类工作让我形成的习惯
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {lessons.map((item, index) => (
                <article
                  key={item.title}
                  className="border-[3px] border-[#10243e] bg-[#f7fcff] p-7 shadow-[6px_6px_0_#10243e]"
                >
                  <span className="text-sm font-black text-[#078ac4]">
                    LESSON {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-medium leading-7 text-[#40536b]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HR CONNECTION */}
        <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="border-[3px] border-[#10243e] bg-[#79d4ff] p-8 shadow-[9px_9px_0_#10243e] sm:p-12">
            <p className="text-sm font-black tracking-[0.16em]">
              WHY IT MATTERS
            </p>

            <h2 className="mt-5 max-w-[850px] text-3xl font-black leading-tight sm:text-5xl">
              活动统筹只是场景，
              <br />
              真正沉淀下来的是组织运营能力。
            </h2>

            <p className="mt-6 max-w-[850px] text-lg font-medium leading-8">
              这些经历训练我的，不只是“办活动”，
              而是任务拆解、资源协调、节点管理、材料表达、
              风险预判和现场应变。
              这些能力同样可以迁移到行政运营、员工活动、
              招聘组织、培训运营以及其他综合职能工作中。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "项目统筹",
                "资源协调",
                "节点管理",
                "会务执行",
                "材料表达",
                "应急处理",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-[#10243e] bg-white px-4 py-2 text-sm font-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT */}
        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-5 border-t-[3px] border-[#10243e] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black tracking-[0.14em] text-[#078ac4]">
                BACK TO PORTFOLIO
              </p>

              <p className="mt-2 text-xl font-black">
                继续看看我的其他项目实践。
              </p>
            </div>

            <Link
              href="/#projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border-[3px] border-[#10243e] bg-[#10243e] px-6 py-3 font-black shadow-[5px_5px_0_#79d4ff]"
              style={{ color: "#ffffff" }}
            >
              返回项目列表
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}