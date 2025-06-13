import { motion } from "framer-motion";
import { useState } from "react";
import { companies } from "../data/companies";

const PastWork = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  
  // Double the array to create seamless loop
  const doubledCompanies = [...companies, ...companies];

  return (
    <>
      <div className="overflow-hidden bg-gradient-to-r from-transparent via-white to-transparent py-12">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-600">
          Our Partners
        </h2>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubledCompanies.map((company, index) => (
            <motion.div
              key={index}
              className="relative group px-16"
              onClick={() => setSelectedCompany(company)}
            >
              <motion.div
                className="font-nunito text-3xl font-bold px-4 py-3 rounded-lg 
                           bg-gradient-to-r from-gray-50 to-white
                           shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                           backdrop-blur-sm border border-gray-100
                           text-gray-700 uppercase tracking-wider
                           cursor-pointer flex items-center justify-center
                           hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]
                           transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                <span
                  className="bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 
                               bg-clip-text text-transparent 
                               hover:from-slate-700 hover:via-slate-700 hover:to-slate-700"
                >
                  {company.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-0 h-1 
                             bg-gradient-to-r from-slate-700 to-slate-700 
                             group-hover:w-full group-hover:left-0 
                             transition-all duration-300"
                  layoutId={`underline-${index}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCompany && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCompany(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              {selectedCompany.name}
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Project Details</h4>
              <p className="text-gray-600">{selectedCompany.description}</p>
            </div>
            <div className="border-t pt-6">
              <h4 className="text-xl font-semibold mb-2">Client Review</h4>
              <p className="text-gray-600 italic mb-4">
                "{selectedCompany.review}"
              </p>
              <p className="text-gray-800 font-semibold">
                {selectedCompany.clientName}
              </p>
              <p className="text-gray-600">{selectedCompany.clientPosition}</p>
            </div>
            <button
              className="mt-6 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer duration-300"
              onClick={() => setSelectedCompany(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PastWork;
