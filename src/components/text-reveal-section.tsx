import React from "react";

import { TextReveal } from "@/components/magicui/text-reveal";

const TextRevealSection = () => {
  return (
    <section className="dark bg-background my-0 ">
      <div className=" flex flex-col items-center justify-center">
        <TextReveal className="font-medium">
          VibeCode AI is the autonomous product delivery engine that transforms
          your SaaS concepts into production-ready systems. Deploy AI agents to
          design, build, and ship—from ideation to deployment, automatically.
        </TextReveal>
      </div>
    </section>
  );
};

export { TextRevealSection };