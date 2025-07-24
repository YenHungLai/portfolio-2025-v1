"use client";

import Link from "next/link";
import { HTMLAttributes, Fragment } from "react";
import Image from "next/image";

interface FloatingLinksProps extends HTMLAttributes<HTMLElement> {
  position?: "left" | "right";
  type?: "social" | "email";
}

export default function FloatingLinks({
  position = "left",
  type = "social",
  className,
  ...props
}: FloatingLinksProps) {
  return (
    <aside
      className={`hidden md:block fixed bottom-0 ${
        position === "left"
          ? "left-[20px] lg:left-[40px]"
          : "right-[20px] lg:right-[40px]"
      } z-10 w-[40px]`}
    >
      <ul className="flex flex-col items-center gap-[20px] after:block after:h-[90px] after:w-[1px] after:bg-slate after:mt-[20px]">
        {type === "social" ? (
          <Fragment>
            <li className="hover:translate-y-[-5px] transition-[var(--transition)]">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/github.svg" alt="GitHub" width={20} height={20} />
              </Link>
            </li>
            <li className="hover:translate-y-[-5px] transition-[var(--transition)]">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </Fragment>
        ) : (
          <li className="hover:translate-y-[-5px] hover:*:text-green transition-[var(--transition)]">
            <Link
              href="mailto:young@younglai.com"
              className="[writing-mode:vertical-lr] tracking-[0.1em] font-sf-mono text-[12px]"
            >
              young@younglai.com
            </Link>
          </li>
        )}
      </ul>
    </aside>
  );
}
