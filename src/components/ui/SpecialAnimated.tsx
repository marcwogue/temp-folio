import { motion } from "framer-motion";
import type { ReactNode } from "react";

const SpecialSpeecialAnimatedPage = ({ children ,className }: { children: ReactNode, className? :string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SpecialSpeecialAnimatedPage;
