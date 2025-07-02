import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ContainerAnimatedPage = ({ children,className }: { children: ReactNode,className:string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ContainerAnimatedPage;
