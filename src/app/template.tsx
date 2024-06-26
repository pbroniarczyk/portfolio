"use client";

import { FC, ReactElement } from "react";

import { motion } from "framer-motion";

type Props = {
  children: ReactElement;
};

const Template: FC<Props> = ({ children }) => {
  return (
    <div className="view-wrapper bg-custom-background bg-no-repeat">
      <main className="view flex min-h-screen flex-col items-center justify-center p-5 py-10 sm:p-12 md:px-24 md:py-36">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default Template;
