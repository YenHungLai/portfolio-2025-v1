"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Loading() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflowY = "auto";
      ref.current?.classList.add("hidden");
    }, 2000);
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
          className="animate-pulse [animation-duration:2s]"
          priority
        />
      </div>
    </div>
  );
}
