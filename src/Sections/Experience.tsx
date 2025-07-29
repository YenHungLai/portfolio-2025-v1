"use client";

import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { DeviceType, useDeviceType } from "@/hooks/useDeviceType";

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();
  const TABS = ["Fyresite", "Incluvie"];

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
                Collaborate with UI designers, project managers, and other
                engineers to translate client requirements into digital
                solutions that meet their business needs
              </li>
              <li>
                Convert UI designs into production-ready, performant, and
                mobile-friendly React components.
              </li>
              <li>
                Design and implement backend services powered by TypeScript and
                cloud providers such as AWS, Firebase, etc. to handle
                authentication, database connection, and business logic
              </li>
              <li>
                Work as part of a Scrum team, participating in daily standups,
                sprint planning, sprint reviews, and led demo meetings to update
                clients on progress and gather feedbacks
              </li>
              <li>
                Develop cross-platform mobile applications using React Native
                and Flutter to help clients grow and streamline their business
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
                Maintained a movie review website using React and Firebase and
                added multiple new features
              </li>
              <li>
                Designed and implemented cloud solutions for a serverless web
                app utilizing Firebase Firestore, Firebase Hosting, Firebase
                Functions, and Firebase Storage
              </li>
            </ul>
          </div>
        );
      default:
        break;
    }
  }

  return (
    <section id="experience" className="lg:max-w-[700px]">
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
