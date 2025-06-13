import { motion } from "framer-motion";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaClipboardCheck,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-2xl text-sky-700" />,
    title: "Requirement",
    subtitle: "Analysis",
  },
  {
    icon: <FaPencilRuler className="text-2xl text-sky-700" />,
    title: "Design",
  },
  {
    icon: <FaCode className="text-2xl text-sky-700" />,
    title: "Coding",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-sky-700" />,
    title: "Testing",
  },
  {
    icon: <FaRocket className="text-2xl text-sky-700" />,
    title: "Deployment",
  },
  {
    icon: <FaTools className="text-2xl text-sky-700" />,
    title: "Maintenance",
  },
];

const SoftwareLifecycle = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-slate-600 mb-12"
      >
        Our Software Development Lifecycle
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 relative max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.2 },
            }}
            className="bg-gray-100  rounded-2xl shadow-lg w-40 h-40 flex flex-col items-center justify-center text-center p-4 relative z-10 hover:shadow-xl hover:bg-gray-50  transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                type: "spring",
                stiffness: 65,
              }}
            >
              {step.icon}
            </motion.div>
            <h4 className="text-md font-semibold mt-2 text-slate-700">
              {step.title}
            </h4>
            {step.subtitle && (
              <p className="text-sm text-slate-700">{step.subtitle}</p>
            )}
          </motion.div>
        ))}

        {/* Dotted Curves (simulated with absolute dots — simple alt to SVG arrows) */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          {/* You could replace this with actual SVG paths/arrows for curved lines */}
          {/* For now, let's just simulate flow with animated dots or dashed lines if needed */}
        </div>
      </div>
    </div>
  );
};

export default SoftwareLifecycle;
