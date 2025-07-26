"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Loading() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      document.body.style.overflowY = "auto";
      ref.current?.classList.add("hidden");
    }, 1500);
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 bg-navy z-100 flex items-center justify-center`}
    >
      <div className="w-24 h-24">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={96}
          height={96}
          className="animate-pulse [animation-duration:1.5s]"
          priority
        />
      </div>
    </div>
  );
}
