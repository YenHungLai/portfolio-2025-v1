"use client";

import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { DeviceType, useDeviceType } from "@/hooks/useDeviceType";

export default function Experience() {
  const TABS = ["Fyresite", "Incluvie"];
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();

  function renderTabContent() {
    if (ref.current) {
      if (deviceType === DeviceType.MOBILE) {
        ref.current.style.transform = `translateX(${active * 104}px)`;
      } else {
        ref.current.style.transform = `translateY(${active * 42}px)`;
      }
    }

    switch (active) {
      case 0:
        return (
          <div>
            <h3 className="text-[22px] font-calibre-semibold text-slate-lighter">
              Software Engineer &nbsp;
              <a
                href="https://fyresite.com"
                target="_blank"
                className="text-[22px] text-green font-calibre-semibold"
              >
                @Fyresite
              </a>
            </h3>
            <p className="text-[13px] text-slate font-sf-mono mb-[25px]">
              May 2020 - Present
            </p>
            <ul className="*:text-slate *:text-[18px] *:before:relative *:before:bottom-[2px] font-calibre list">
              <li>
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="text-[22px] font-calibre-semibold text-slate-lighter">
              Software Engineer &nbsp;
              <a
                href="https://incluvie.com"
                target="_blank"
                className="text-[22px] text-green font-calibre-semibold"
              >
                @Incluvie
              </a>
            </h3>
            <p className="text-[13px] text-slate font-sf-mono mb-[25px]">
              Aug 2019 - May 2020
            </p>
            <ul className="*:text-slate *:text-[18px] *:before:relative *:before:bottom-[2px] font-calibre list">
              <li>
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </li>
            </ul>
          </div>
        );
      default:
        break;
    }
  }

  return (
    <section id="experience" className="mx-auto lg:max-w-[700px]">
      <SectionHeading>Where I’ve Worked</SectionHeading>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="tabs">
          {TABS.map((tab, index) => (
            <button
              key={index}
              className={`tab ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {tab}
            </button>
          ))}
          <div ref={ref} className="active-tab-indicator" />
        </div>

        {renderTabContent()}
      </div>
    </section>
  );
}

interface TabContentProps {
  heading: string;
  duration: string;
}

function TabContent({ heading, duration }: TabContentProps) {
  return (
    <div>
      <h3></h3>
    </div>
  );
}
