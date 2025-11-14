"use client";
import { motion } from "motion/react";

const StatsSection = () => {
  return (
    <section className="pt-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-foreground text-balance max-w-xl  text-center mx-auto text-3xl font-semibold md:text-4xl"
        >
          <span className="text-muted-foreground">VibeCode AI by the Numbers</span>{" "}
          Impact
        </motion.h2>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Accelerate product timelines by
            </p>
            <p className="pt-4 text-5xl font-semibold lg:pt-10">5-10x</p>
            <p className="text-xl font-semibold text-muted-foreground">
              faster
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Development overhead reduced by
            </p>
            <p className="pt-4 text-5xl font-semibold lg:pt-10">80%</p>
            <p className="text-xl font-semibold text-muted-foreground">
              cost savings
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              From concept to deployment in
            </p>
            <p className="pt-4 text-5xl font-semibold lg:pt-10">Days</p>
            <p className="text-xl font-semibold text-muted-foreground">
              not months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StatsSection };