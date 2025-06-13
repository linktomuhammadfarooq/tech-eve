import React from "react";
import {
  FaShieldAlt,
  FaCloud,
  FaUsers,
  FaPuzzlePiece,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt size={30} />,
    title: "Information security",
    description:
      "Experience unmatched security with Code Pyramid's unparalleled information security services and solutions.",
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud services",
    description:
      "Explore our range of robust cloud services for scalable and secure business solutions.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Talent partnerships",
    description:
      "Employ the industry's best talent to help you develop and refine your technology strategy.",
  },
  {
    icon: <FaPuzzlePiece size={30} />,
    title: "Emerging technologies",
    description:
      "Embrace the future with Code Pyramid leading in AI, ML, Digital Twins, Blockchain and Web 3.0 technologies, driving business growth.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "Data engineering",
    description:
      "Discover Code Pyramid's cutting-edge data engineering solutions for streamlined data management and advanced analytics.",
  },
  {
    icon: <FaRobot size={30} />,
    title: "AI, ML & data analytics",
    description:
      "Explore Code Pyramid's AI, ML and data analytics solutions for actionable insights and enhanced, data-driven decision-making.",
  },
];

const ServicesGrid = () => {
  return (
    <div className="px-6 py-24 bg-white w-full text-black" id="services">
      <div className="flex items-center justify-center gap-4 mb-10">
        <FaShieldAlt size={35} className="text-slate-700 animate-pulse" />
        <h2 className="text-3xl font-bold text-slate-600">Our Services</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300 
                         hover:bg-gray-50 group"
            >
              <div
                className="mb-4 text-sky-700 group-hover:scale-100  flex items-center gap-4
                            transition-transform duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-slate-700">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-slate-700 font-semibold hover:text-slate-800 
                         transition-colors duration-300 flex items-center gap-2"
              >
                Learn More
                <span
                  className="transform translate-x-0 group-hover:translate-x-2 
                              transition-transform duration-300"
                >
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
