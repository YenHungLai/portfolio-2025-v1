import Image from "next/image";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";

export default function Footer() {
  return (
    <footer className="min-h-[70px] p-[15px]">
      <ul className="visible md:hidden flex gap-[20px] justify-center mb-[10px]">
        <li>
          <a
            href="https://github.com/YenHungLai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="github" width={20} height={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yash-kumar-singh-b0b55b200/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="linkedin" width={20} height={20} />
          </a>
        </li>
      </ul>

      <div className="p-[10px]">
        <a
          href="https://github.com/YenHungLai/portfolio-2025-v1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sf-mono text-slate text-[12px] text-center block leading-5"
        >
          Built by Young Lai
          <br />
          Built with Next.js, Tailwind, and AWS
        </a>
      </div>
    </footer>
  );
}
