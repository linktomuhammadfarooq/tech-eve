import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaUser } from "react-icons/fa";
import Farooq from "../assets/images/farooq.jpeg";
import Junaid from "../assets/images/junaid.jpeg";
const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      id="aboutUs"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto" id="aboutUs">
        <motion.h1
          className="text-5xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16"
          variants={itemVariants}
        >
          We're passionate about creating innovative solutions that make a
          difference
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Tech Stack Section */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-blue-500 text-5xl mb-4 transition-colors hover:text-blue-400">
              <FaReact />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Frontend Excellence</h3>
            <p className="text-gray-400">
              Building beautiful, responsive interfaces with React and modern
              web technologies
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-green-500 text-5xl mb-4 transition-colors hover:text-green-400">
              <FaNodeJs />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Robust Backend</h3>
            <p className="text-gray-400">
              Powering applications with scalable and efficient server-side
              solutions
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-yellow-500 text-5xl mb-4 transition-colors hover:text-yellow-400">
              <FaDatabase />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Data Management</h3>
            <p className="text-gray-400">
              Implementing secure and optimized database solutions
            </p>
          </motion.div>
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We strive to deliver exceptional digital experiences through
            innovative technology solutions, helping businesses transform and
            succeed in the digital age.
          </p>
        </motion.div>

        {/* Team Members Section */}
        <h2 className="text-3xl text-center font-bold mb-8">Our Team</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
        >
          {/* Muhammad Farooq Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <img src={Farooq} alt="Muhammad Farooq" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Muhammad Farooq</h3>
            <p className="mb-4">CTO,Founder</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Tech Leadership
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                System Architecture
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Innovation
              </span>
            </div>
          </motion.div>

          {/* Ehtisham Asghar Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <FaUser size={100} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Muhammad Ehtisham</h3>
            <p className=" mb-4">COO/CPO,Founder</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Business Development
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Business Strategy
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Operations
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Growth
              </span>
            </div>
          </motion.div>

          {/* Junaid Rehman Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            variants={itemVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <img src={Junaid} alt="Junaid Rehman" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Junaid Rehman</h3>
            <p className=" mb-4">CEO,Founder</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Web Development
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                DevOps
              </span>
              <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                Security
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
