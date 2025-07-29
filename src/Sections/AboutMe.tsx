import SectionHeading from "@/components/SectionHeading";

export default function AboutMe() {
  return (
    <section id="about" className="">
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col sm:flex-row gap-[50px]">
        <div className="**:text-[20px] **:font-calibre *:text-slate [&>p]:mb-[15px]">
          <p>
            Hello! My name is Young Lai and I enjoy building applications that
            solves real-world problems. I'm a
            <a
              href="https://www.credly.com/badges/75344ab0-00d5-4056-a435-ff6bdcc58f7d/public_url"
              rel="noopener noreferrer"
              target="_blank"
              className="text-green"
            >
              &nbsp;certified AWS solutions architect&nbsp;
            </a>
            and a fullstack software engineer.
          </p>
          <p>
            For the past 5 years, I've been working at a
            <a
              href="https://www.fyresite.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-green"
            >
              &nbsp;software development agency&nbsp;
            </a>
            where we take on a wide range of projects from Shopify themes,
            custom Shopify apps, web/mobile apps, integrations between platforms
            and services, and so on. This has honed my ability to learn things
            quickly and adapt to new technologies.
          </p>
          <p>
            Currently, I'm developing my skills in native iOS development and
            I'm trying to launch an app in the app store.
          </p>
          <p>I have strong experience with:</p>
          <ul className="grid grid-cols-2 mt-5 list">
            <li>AWS</li>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div className="w-[70%] mx-auto sm:max-w-[300px]">
          <div className="image-wrapper">
            <img
              className="rounded-[4px]"
              src="https://fs.mingpao.com/ldy/20211105/s00008/39bd6e06ab35c506ba9ad7c939617c90.jpg"
              alt="Temp"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
