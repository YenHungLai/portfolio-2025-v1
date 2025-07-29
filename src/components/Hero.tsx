"use client";

import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex w-full h-screen flex-col items-start justify-center m-0 max-w-full relative">
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
        AWS-certified software engineer passionate about building performant web
        and mobile applications. I craft scalable, modern solutions that deliver
        value to users.
      </p>

      <Button
        className="mt-[50px]"
        href="mailto:youngyhlai1029+portfolio@gmail.com"
      >
        Get in touch
      </Button>

      <a
        href="https://www.credly.com/badges/d0b816eb-0adb-4bec-9344-6c96a7999106/public_url"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-10 lg:bottom-20 right-0"
      >
        <img
          width="120"
          height="120"
          alt="AWS Developer Associate Badge"
          src="https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
        />
      </a>
      <a
        href="https://www.credly.com/badges/75344ab0-00d5-4056-a435-ff6bdcc58f7d/public_url"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-10 lg:bottom-20 right-[120px]"
      >
        <img
          src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
          alt="AWS Solutions Architect Badge"
          width="120"
          height="120"
        />
      </a>
    </section>
  );
}
