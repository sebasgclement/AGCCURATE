"use client";

import { motion } from "framer-motion";

export default function MapFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full mt-6 border-2 border-green-700 rounded-xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://maps.google.com/maps?q=AGCCURATE&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
