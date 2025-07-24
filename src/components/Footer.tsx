import Image from "next/image";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";

export default function Footer() {
  return (
    <footer className="min-h-[70px] p-[15px]">
      <ul className="visible md:hidden flex gap-[20px] justify-center">
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

      <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-[10px] font-sf-mono text-slate text-[12px]"
      >
        <p className="whitespace-nowrap text-center">
          Built by Young Lai
          <br />
          Design Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-slate"
          >
            Brittany Chiang
          </a>
        </p>
      </a>
    </footer>
  );
}
