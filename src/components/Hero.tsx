"use client";

import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-start justify-center ml-0">
      <h1 className="text-green font-sf-mono mb-[30px] ml-[4px]">
        Hi, my name is
      </h1>
      <h2 className="text-slate-lighter text-[40px] sm:text-[80px] font-calibre-semibold leading-[1.1]">
        Young Lai.
      </h2>
      <h3 className="text-slate text-[40px] sm:text-[80px] font-calibre-semibold leading-[0.9] mt-[5px]">
        I build things for the web.
      </h3>
      <p className="text-slate font-calibre text-[18px] sm:text-[20px] max-w-[540px] mt-[20px]">
        I'm a software engineer specializing in building exceptional digital
        experiences. Currently, I'm focused on building accessible,
        human-centered products.
      </p>
      <Button className="mt-[50px]">Get in touch</Button>
    </section>
  );
}
