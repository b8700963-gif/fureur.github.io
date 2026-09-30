import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function MarketResearchPage() {
  return (
    <ProjectDetailTemplate
      category="TEAM LEADERSHIP · DATA ANALYSIS"
      title="青年健康养生消费市场调查"
      subtitle="带领团队从研究问题出发，完成理论模型、问卷调查、文本挖掘、数据分析、访谈和成果汇报，最终获得全国大学生市场调查与分析大赛国家级三等奖。"
      role="团队队长"
      period="2025.12 — 2026.04"
      roleDescription="负责项目总体规划、选题把控、团队分工、交付节点、导师对接和项目报销，并深度参与模型构建、数据分析和答辩材料设计。"
      stats={[
        {
          value: "1458份",
          label: "全国有效调查问卷",
          tone: "bg-[#dff5ff]",
        },
        {
          value: "10万+",
          label: "社交媒体用户评论",
          tone: "bg-[#fff0a8]",
        },
        {
          value: "300+",
          label: "行业研报及研究资料",
          tone: "bg-[#ffd6df]",
        },
        {
          value: "国家级",
          label: "市场调查大赛三等奖",
          tone: "bg-[#bfeecf]",
        },
      ]}
      contextTitle="一个好的调研，不能只靠一份问卷。"
      contextText={[
        "项目聚焦18—35岁青年群体健康养生消费行为，希望回答青年消费者如何认识健康养生产品、哪些因素影响消费意愿和行为，以及企业和行业可以如何回应这些需求。",
        "因此团队同时使用理论研究、文本挖掘、问卷调查、结构方程模型和深度访谈，希望让不同类型的数据相互补充。",
      ]}
      workflowTitle="我如何带领团队完成一项完整市场研究"
      workflow={[
        {
          number: "01",
          title: "明确研究问题",
          subtitle: "DEFINE",
          text: "从宏观市场和青年消费现象出发确定主题，梳理研究问题并明确项目整体研究框架。",
          tone: "bg-[#ffd6df]",
        },
        {
          number: "02",
          title: "组织团队推进",
          subtitle: "LEAD",
          text: "划分成员任务和交付节点，持续对接导师并协调不同研究模块之间的衔接。",
          tone: "bg-[#fff0a8]",
        },
        {
          number: "03",
          title: "完成数据分析",
          subtitle: "ANALYZE",
          text: "参与理论模型、问卷和数据分析，同时运用Python及大语言模型处理大规模用户评论。",
          tone: "bg-[#d8ceff]",
        },
        {
          number: "04",
          title: "表达研究成果",
          subtitle: "PRESENT",
          text: "整合不同成员成果，主导约80%的答辩PPT设计与迭代，让复杂研究可以被更清晰地理解。",
          tone: "bg-[#bfeecf]",
        },
      ]}
      sectionTitle="研究是怎样一步步完成的"
      sections={[
        {
          number: "01",
          title: "理论与研究设计",
          description:
            "通过文献调查和理论梳理，将一个宽泛的消费现象转化为能够被验证的研究问题。",
          points: [
            "使用PEST分析宏观环境",
            "以SOR理论为核心框架",
            "融合健康信念等理论",
            "构建综合研究模型",
          ],
          tone: "bg-[#dff5ff]",
        },
        {
          number: "02",
          title: "多源数据分析",
          description:
            "同时利用线上文本和问卷数据，从消费者表达与统计关系两个角度理解青年健康消费。",
          points: [
            "分析300余份行业研报",
            "处理10万余条用户评论",
            "完成情感分析和词频统计",
            "收集1458份有效问卷",
          ],
          tone: "bg-[#fff0a8]",
        },
        {
          number: "03",
          title: "定量与定性结合",
          description:
            "在统计模型之外加入深度访谈，避免研究只停留在数字关系，进一步理解真实决策过程。",
          points: [
            "使用结构方程模型检验假设",
            "开展半结构化深度访谈",
            "覆盖学生、员工等不同群体",
            "综合形成研究建议",
          ],
          tone: "bg-[#d8ceff]",
        },
      ]}
      lessonTitle="作为队长，我真正学到的三件事"
      lessons={[
        {
          title: "项目管理和研究同样重要",
          text: "团队能力再强，如果没有清晰的分工、节点和成果标准，研究也很难稳定推进。",
        },
        {
          title: "复杂分析要能够被解释",
          text: "模型和数据本身不是最终成果，真正重要的是能否把结果转化为清晰、准确、让他人理解的结论。",
        },
        {
          title: "队长需要对整体负责",
          text: "不仅要完成自己的模块，还要持续观察项目整体进度，在出现缺口时及时补位。",
        },
      ]}
      connectionTitle="数据分析是方法，团队推进和结果表达同样是能力。"
      connectionText="这个项目让我同时经历团队管理、任务拆解、数据研究和成果汇报。对于人力资源或行政职能岗位而言，我希望把这种结构化思考迁移到员工调研、人才数据分析、项目运营和管理支持等实际工作中。"
      tags={[
        "团队管理",
        "项目推进",
        "数据分析",
        "问卷研究",
        "PPT表达",
        "结构化思考",
      ]}
      images={[
  {
    src: "/images/market/competition.jpg",
    alt: "市场调查大赛决赛打卡",
  },
  {
    src: "/images/market/presentation.jpg",
    alt: "市场调查决赛答辩现场",
  },
]}
    />
  );
}