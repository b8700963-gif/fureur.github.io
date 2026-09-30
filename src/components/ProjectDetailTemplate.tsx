import Image from "next/image";
import Link from "next/link";

type Stat = {
  value: string;
  label: string;
  tone: string;
};

type ProjectImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type Step = {
  number: string;
  title: string;
  subtitle: string;
  text: string;
  tone: string;
};

type Section = {
  number: string;
  title: string;
  description: string;
  points: string[];
  tone: string;
};

type Lesson = {
  title: string;
  text: string;
};

type ProjectDetailProps = {
  category: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;

  roleDescription: string;

  stats: Stat[];
  contextTitle: string;
  contextText: string[];

  workflowTitle: string;
  workflow: Step[];

  sectionTitle: string;
  sections: Section[];

  lessonTitle: string;
  lessons: Lesson[];

  connectionTitle: string;
  connectionText: string;

  tags: string[];
  images?: ProjectImage[];
};

export default function ProjectDetailTemplate({
  category,
  title,
  subtitle,
  role,
  period,
  roleDescription,
  stats,
  contextTitle,
  contextText,
  workflowTitle,
  workflow,
  sectionTitle,
  sections,
  lessonTitle,
  lessons,
  connectionTitle,
  connectionText,
  tags,
  images,
}: ProjectDetailProps) {
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

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <span className="inline-block rotate-[-2deg] border-[3px] border-[#10243e] bg-[#79d4ff] px-4 py-2 text-xs font-black tracking-[0.12em] shadow-[4px_4px_0_#10243e]">
                  {category}
                </span>

                <h1 className="mt-7 text-[clamp(2.8rem,5.5vw,5.4rem)] font-black leading-[1.04] tracking-[-0.05em]">
                  {title}
                </h1>

                <p className="mt-7 max-w-[720px] text-lg font-medium leading-9 text-[#40536b]">
                  {subtitle}
                </p>
              </div>

              <div className="border-[3px] border-[#10243e] bg-white p-6 shadow-[8px_8px_0_#10243e]">
                <p className="text-xs font-black tracking-[0.14em] text-[#078ac4]">
                  MY ROLE
                </p>

                <p className="mt-3 text-3xl font-black">{role}</p>

                <p className="mt-3 text-sm font-black">{period}</p>

                <div className="mt-6 border-t-[3px] border-[#10243e] pt-5">
                  <p className="font-medium leading-7 text-[#40536b]">
                    {roleDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y-[3px] border-[#10243e] bg-white px-5 py-8 lg:px-8">
          <div className="mx-auto grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <article
                key={`${item.value}-${item.label}`}
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
                {contextTitle}
              </h2>
            </div>

            <div className="border-[3px] border-[#10243e] bg-[#dff5ff] p-7 shadow-[7px_7px_0_#10243e] sm:p-9">
              {contextText.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 first:mt-0 font-medium leading-8 text-[#40536b]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
{/* PROJECT IMAGES */}
{images && images.length > 0 && (
  <section className="mx-auto max-w-[1180px] px-5 pb-20 lg:px-8 lg:pb-28">
    <div
      className={`grid gap-6 ${
        images.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
      }`}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`relative overflow-hidden border-[3px] border-[#10243e] bg-white p-2 shadow-[7px_7px_0_#10243e] ${
            index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
          } transition duration-300 hover:rotate-0 hover:-translate-y-1`}
        >
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-[#10243e] bg-[#dff5ff]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
              style={{
                objectPosition: image.objectPosition ?? "center",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
)}
        {/* WORKFLOW */}
        <section className="border-y-[3px] border-[#10243e] bg-[#10243e] px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-sm font-black tracking-[0.18em] text-[#79d4ff]">
              HOW I WORK
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {workflowTitle}
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

                  <h3 className="mt-7 text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 font-medium leading-7 text-[#40536b]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-black tracking-[0.18em] text-[#078ac4]">
            SELECTED WORK
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            {sectionTitle}
          </h2>

          <div className="mt-12 grid gap-8">
            {sections.map((item) => (
              <article
                key={item.number}
                className={`${item.tone} border-[3px] border-[#10243e] p-6 shadow-[8px_8px_0_#10243e] sm:p-8`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
                  <div>
                    <span className="text-4xl font-black">{item.number}</span>

                    <h3 className="mt-5 text-3xl font-black">{item.title}</h3>
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-8">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="border-2 border-[#10243e] bg-white p-4 text-sm font-bold leading-6"
                        >
                          {point}
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
              {lessonTitle}
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

                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 font-medium leading-7 text-[#40536b]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTION */}
        <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="border-[3px] border-[#10243e] bg-[#79d4ff] p-8 shadow-[9px_9px_0_#10243e] sm:p-12">
            <p className="text-sm font-black tracking-[0.16em]">
              WHY IT MATTERS
            </p>

            <h2 className="mt-5 max-w-[900px] text-3xl font-black leading-tight sm:text-5xl">
              {connectionTitle}
            </h2>

            <p className="mt-6 max-w-[880px] text-lg font-medium leading-8">
              {connectionText}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {tags.map((tag) => (
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

        {/* FOOT */}
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
              返回项目列表 →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}