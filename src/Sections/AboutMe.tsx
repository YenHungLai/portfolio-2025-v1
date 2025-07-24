import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function AboutMe() {
  return (
    <section id="about" className="">
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col sm:flex-row gap-[50px]">
        <div className="**:text-[18px] **:font-calibre **:text-slate [&>p]:mb-[15px]">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML
            &amp; CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at{" "}
            <a
              href="https://us.mullenlowe.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              an advertising agency
            </a>
            ,
            <a
              href="https://starry.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              a start-up
            </a>
            ,
            <a
              href="https://www.apple.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              a huge corporation
            </a>
            , and
            <a
              href="https://scout.camd.northeastern.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              a student-led design studio
            </a>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at
            <a
              href="https://upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Upstatement
            </a>
            for a variety of clients.
          </p>
          <p>
            I also recently
            <a
              href="https://www.newline.co/courses/build-a-spotify-connected-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              launched a course
            </a>
            that covers everything you need to build a web app with the Spotify
            API using Node &amp; React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid grid-cols-2 mt-5 list">
            <li>AWS</li>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Shopify</li>
          </ul>
        </div>

        <div className="w-[70%] mx-auto sm:max-w-[300px]">
          <div className="image-wrapper">
            <img
              className="rounded-[4px]"
              src="https://v4.brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif"
              alt="Brittany Chiang"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
