import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function BoaoLechengPage() {
  return (
    <ProjectDetailTemplate
      category="FIELD RESEARCH · TALENT DEVELOPMENT"
      title="博鳌乐城医疗产业与人才发展调研"
      subtitle="走进医疗机构、医药企业、人才服务工作站和园区管理机构，从真实组织中理解政策、产业创新与人才发展之间的关系。"
      role="团队副队长"
      period="2024.12 — 2025.03"
      roleDescription="协助团队分工、行程安排和单位对接，并参与访谈、报告撰写及成果汇报；独立完成一份项目资政建议。"
      stats={[
        {
          value: "11家",
          label: "医院、企业及管理机构走访",
          tone: "bg-[#dff5ff]",
        },
        {
          value: "副队长",
          label: "承担组织与协调职责",
          tone: "bg-[#fff0a8]",
        },
        {
          value: "1份",
          label: "独立撰写资政建议",
          tone: "bg-[#ffd6df]",
        },
        {
          value: "3项",
          label: "项目相关成果奖励",
          tone: "bg-[#bfeecf]",
        },
      ]}
      contextTitle="我们想弄清楚：产业创新背后，人从哪里来？"
      contextText={[
        "博鳌乐城国际医疗旅游先行区具有特殊的先行先试政策环境。我们不仅关注医疗产业和企业发展，也希望进一步理解人才引进、培养和服务机制如何支撑产业创新。",
        "因此，调研对象覆盖医院、医药企业、人才服务工作站和园区管理机构，希望从不同角色的视角理解政策、产业和人才之间的真实联系。",
      ]}
      workflowTitle="我是如何参与一次跨机构调研的"
      workflow={[
        {
          number: "01",
          title: "前期统筹",
          subtitle: "PLAN",
          text: "协助队长进行成员分工、调研行程安排，并提前梳理不同类型机构的访谈重点。",
          tone: "bg-[#ffd6df]",
        },
        {
          number: "02",
          title: "机构对接",
          subtitle: "CONNECT",
          text: "参与医院、医药企业及园区管理机构等单位的沟通和行程确认，保障团队调研顺利推进。",
          tone: "bg-[#fff0a8]",
        },
        {
          number: "03",
          title: "访谈整理",
          subtitle: "RESEARCH",
          text: "参与现场访谈和资料整理，从政策、企业运营和人才发展等多个角度提炼关键信息。",
          tone: "bg-[#d8ceff]",
        },
        {
          number: "04",
          title: "形成成果",
          subtitle: "DELIVER",
          text: "参与项目报告和PPT制作，并独立撰写资政建议，将调研发现进一步转化为可表达的政策建议。",
          tone: "bg-[#bfeecf]",
        },
      ]}
      sectionTitle="我重点参与的三个环节"
      sections={[
        {
          number: "01",
          title: "组织与协调",
          description:
            "作为副队长，我不仅参与研究内容，也需要帮助团队稳定运行，让人员、时间和调研对象能够顺利衔接。",
          points: [
            "辅助成员分工与任务推进",
            "参与整体行程安排",
            "协助企业及机构对接",
            "跟进现场调研计划",
          ],
          tone: "bg-[#dff5ff]",
        },
        {
          number: "02",
          title: "实地访谈",
          description:
            "调研覆盖医院、医药企业、人才服务工作站和园区管理机构，通过多类型组织的访谈建立更完整的观察视角。",
          points: [
            "累计走访11家单位",
            "关注医疗产业发展模式",
            "了解人才引进与培养举措",
            "分析政策与产业创新关系",
          ],
          tone: "bg-[#fff0a8]",
        },
        {
          number: "03",
          title: "研究成果转化",
          description:
            "调研并没有停留在资料记录，而是进一步形成报告、演示材料和政策建议，提升项目成果的实际使用价值。",
          points: [
            "参与调研报告撰写",
            "参与项目PPT制作",
            "独立撰写资政建议",
            "建议提交管理层并获感谢信反馈",
          ],
          tone: "bg-[#bfeecf]",
        },
      ]}
      lessonTitle="这次调研让我理解的三件事"
      lessons={[
        {
          title: "不同组织关心的问题不同",
          text: "管理机构、企业、医院和人才服务机构处在不同位置，只有理解各方诉求，才能形成完整判断。",
        },
        {
          title: "访谈不仅是提问",
          text: "真正有效的调研需要提前了解背景、根据回答继续追问，并在大量信息中识别真正有价值的线索。",
        },
        {
          title: "研究成果要能够被使用",
          text: "从访谈记录到报告和资政建议，需要重新组织信息，让结论更清晰，也让建议具有更强的可操作性。",
        },
      ]}
      connectionTitle="它让我第一次更具体地观察“产业发展中的人”。"
      connectionText="虽然这是一个产业调研项目，但其中大量问题都与组织和人才有关：人才为什么愿意进入一个区域、企业如何吸引并留住专业人才、政策如何转化为人才服务。它让我对人才发展和组织支持的理解从校园场景进一步延伸到真实产业环境。"
      tags={[
        "访谈沟通",
        "跨机构协调",
        "人才发展",
        "政策研究",
        "报告撰写",
        "团队协作",
      ]}
      images={[
  {
    src: "/images/boao/team.jpg",
    alt: "博鳌乐城调研团队合影",
  },
  {
    src: "/images/boao/bureau.png",
    alt: "博鳌乐城管理局座谈",
  },
]}
    />
  );
}