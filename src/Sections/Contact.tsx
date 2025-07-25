"use client";

import Button from "@/components/Button";

export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-green text-[16px] text-sm font-sf-mono mt-[10px] mb-[20px]">
        04. What's Next?
      </h2>
      <h2 className="text-[40px] font-calibre-semibold text-slate-lighter mb-[10px]">
        Get In Touch
      </h2>
      <p className="max-w-[600px] mx-auto font-calibre text-slate text-[18px] mb-[50px]">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll try my best to get back to you!
      </p>
      <Button href="mailto:youngyhlai1029@gmail.com">Say Hello</Button>
    </section>
  );
}
