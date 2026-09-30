import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function SilkRoadPage() {
  return (
    <ProjectDetailTemplate
      category="GUIDANCE · COORDINATION"
      title="“丝路连理·船越古今”暑期社会实践"
      subtitle="带领12人学生团队横跨福建、浙江、上海三地，用7天完成文化调研、企业访谈与案例分析，并推动团队完成成果输出。"
      role="带队老师"
      period="2025.08 — 2025.09"
      roleDescription="负责学生团队组织协调、任务推进与安全保障，并指导调研过程及成果产出。"
      stats={[
        {
          value: "12人",
          label: "学生实践团队",
          tone: "bg-[#dff5ff]",
        },
        {
          value: "3地",
          label: "福建 · 浙江 · 上海",
          tone: "bg-[#fff0a8]",
        },
        {
          value: "7天",
          label: "连续实践调研",
          tone: "bg-[#ffd6df]",
        },
        {
          value: "4家",
          label: "现代港航企业深度访谈",
          tone: "bg-[#bfeecf]",
        },
      ]}
      contextTitle="带队，不只是带着大家完成行程。"
      contextText={[
        "社会实践横跨多个城市，包含博物馆调研、企业访谈、团队协作和成果产出。与自己参与项目不同，作为带队老师，我需要更多考虑整个团队的节奏、安全、任务分配和成员状态。",
        "因此这段经历更像一次小型团队管理实践：既要保证项目目标，又要让12名成员都能够参与其中并完成自己的任务。",
      ]}
      workflowTitle="我如何支持一个学生团队完成实践"
      workflow={[
        {
          number: "01",
          title: "明确路线",
          subtitle: "PLAN",
          text: "根据实践主题和目标组织跨城市行程，明确博物馆、企业和调研节点之间的安排。",
          tone: "bg-[#ffd6df]",
        },
        {
          number: "02",
          title: "组织团队",
          subtitle: "ORGANIZE",
          text: "协调12名成员的任务分工和行动安排，确保信息传递、人员协作和安全管理。",
          tone: "bg-[#fff0a8]",
        },
        {
          number: "03",
          title: "推进调研",
          subtitle: "RESEARCH",
          text: "围绕海上丝绸之路主题开展文化考察，并与现代港航企业进行深度访谈和案例分析。",
          tone: "bg-[#d8ceff]",
        },
        {
          number: "04",
          title: "形成成果",
          subtitle: "DELIVER",
          text: "持续跟进学生成果撰写和项目表达，帮助团队将实践过程转化为完整成果。",
          tone: "bg-[#bfeecf]",
        },
      ]}
      sectionTitle="这段实践中的三个角色"
      sections={[
        {
          number: "01",
          title: "组织者",
          description:
            "跨城市实践意味着人员、时间和行程必须高度协调，带队老师需要始终掌握团队整体状态。",
          points: [
            "带领12人学生团队",
            "横跨福建、浙江、上海",
            "连续开展7天实践",
            "协调行程与团队任务",
          ],
          tone: "bg-[#dff5ff]",
        },
        {
          number: "02",
          title: "支持者",
          description:
            "与直接替学生完成任务相比，我更需要帮助他们明确方向、解决困难，并在关键节点给予支持。",
          points: [
            "跟进成员任务状态",
            "支持现场调研推进",
            "协调团队内部沟通",
            "承担安全与秩序保障",
          ],
          tone: "bg-[#fff0a8]",
        },
        {
          number: "03",
          title: "指导者",
          description:
            "最终目标不仅是完成一次实践，更要让过程转化为有质量的调研成果和团队成长。",
          points: [
            "与4家港航企业深度访谈",
            "开展企业案例分析",
            "指导项目成果形成",
            "学生团队获校级一等奖",
          ],
          tone: "bg-[#bfeecf]",
        },
      ]}
      lessonTitle="第一次以带队角色参与实践，我学到什么"
      lessons={[
        {
          title: "管理需要留出空间",
          text: "带团队并不是所有问题都替成员解决，而是让每个人清楚目标和责任，同时保留自主发挥的空间。",
        },
        {
          title: "团队状态同样重要",
          text: "连续多日实践中，成员的体力、情绪和沟通状态都会影响项目，因此管理不仅关注任务，也要关注人。",
        },
        {
          title: "负责人必须看整体",
          text: "成员通常关注自己的模块，而负责人需要持续观察整体进度、风险和协作关系。",
        },
      ]}
      connectionTitle="从“自己把事情做好”，到“支持一群人把事情做好”。"
      connectionText="这次带队经历让我对组织支持有了新的理解。人力资源和行政岗位很多时候同样不是自己完成所有工作，而是通过规则、沟通、资源和服务，让其他成员能够更顺畅地完成工作。"
      tags={[
        "团队带领",
        "人员协调",
        "实践指导",
        "安全管理",
        "企业访谈",
        "组织支持",
      ]}
        images={[
  {
    src: "/images/silk-road/fieldwork.jpg",
    alt: "海上丝绸之路社会实践合照",
  },
  {
    src: "/images/silk-road/company-interview.jpg",
    alt: "实践团队开展物流企业座谈",
  },
]}
    />
  );
}