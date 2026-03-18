import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-[var(--navy)]"
      >
        
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl text-gray-600"
      >
        
      </motion.p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl text-white bg-[var(--blue)] shadow hover:bg-blue-700 transition"
        >
     
        </a>

        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-[var(--blue)] text-[var(--blue)] hover:bg-blue-50 transition"
        >
        
        </a>
      </div>
    </section>
  );
}
