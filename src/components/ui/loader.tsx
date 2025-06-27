import { motion } from "framer-motion"

const Loader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-200"
  >
    <div className="flex flex-col items-center gap-4">
        <img src="loading.svg" alt="" />
      
      <p className="text-secondary-content">Chargement...</p>
    </div>
  </motion.div>
);

export default Loader;
