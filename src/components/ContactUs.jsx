import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import emailjs from "@emailjs/browser";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Points,
  PointMaterial,
  useTexture,
} from "@react-three/drei";
import * as random from "maath/random";

const BubblesBackground = () => {
  const count = 2000;
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      sizes[i] = Math.random() * 0.2 + 0.1; // varied sizes for depth effect
    }
    return [positions, sizes];
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.position.y = Math.sin(time * 0.2) * 0.2;

      // Gentle wave effect
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pointsRef.current.geometry.attributes.position.array[i3 + 1] +=
          Math.sin(time + positions[i3] * 0.5) * 0.002;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} sizes={sizes}>
      <PointMaterial
        transparent
        color="#4338ca"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Scene = () => {
  return (
    <>
      <color attach="background" args={["#000810"]} />
      <fog attach="fog" args={["#000810", 5, 15]} />
      <BubblesBackground />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const AnimatedBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Scene />
    </Canvas>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "junaidurrehman2112@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add floating animation variants
  const floatingAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Contact Form Section */}
          <motion.div
            className="flex-1"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-extrabold text-white">Contact Us</h2>
              <p className="mt-2 text-gray-300">We'd love to hear from you!</p>
            </motion.div>

            <motion.form
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="backdrop-blur-lg bg-gray-800/50 shadow-2xl rounded-lg p-8 space-y-6 border border-gray-700/50"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                  }}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700/50 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                  }}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700/50 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <motion.input
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                  }}
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700/50 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                  }}
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-700/50 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="flex-1 text-gray-300 space-y-8 backdrop-blur-lg bg-gray-800/30 p-8 rounded-lg border border-gray-700/50"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Info
              </h3>
              <div className="space-y-2">
                <p>📧 info@codepyramid.com</p>
                <p>📞 +1 (123) 456-7890</p>
                <p>📞 +971 1234567890</p>
                <p>📞 +92.3001234567</p>
                <p>📞 +92.3001234567</p>
                <p>📞 +92.3001234567</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">USA Office</h3>
              <p>New York, 123 Main St – 5th Floor -Office 503</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">UAE Office</h3>
              <p>
                Sharjah Media City (Shams), Al Bataeh, Sharjah, United Arab
                Emirates.
              </p>
              <p>P.O. Box 123456</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Development Center
              </h3>
              <p>Office # 123, Main Blvd, Johar Town, Lahore Pakistan</p>
              <p>Office # 123, Main Blvd, Johar Town, Lahore Pakistan</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Corporate Office
              </h3>
              <p>123 Main St, Johar Town, Lahore Pakistan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
