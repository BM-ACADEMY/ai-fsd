import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChalkboardTeacher, FaGraduationCap, FaBriefcase, FaStar, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    icon: <FaTrophy />,
    title: "Proven Results",
    description: "90%+ placement rate with real companies and freelancing gigs.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Trainers",
    description: "Learn from industry pros who teach what employers want.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Beginner Friendly",
    description: "No prior coding needed—step-by-step guidance in Tamil/Tanglish.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Support",
    description: "1:1 mentorship, portfolio building, and interview prep.",
  },
  {
    icon: <FaStar />,
    title: "Trusted by Hundreds",
    description: "Join a community of successful tech alumni changing their lives.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}}></div>
        <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] text-yellow-500/5 opacity-40 blur-3xl animate-pulse" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
           <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[800px] h-[800px] text-blue-500/5 opacity-30 blur-3xl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           <rect x="20" y="20" width="60" height="60" rx="10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            Live Masterclass
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> BM Academy?</span>
          </motion.h1>
        </div>

        {/* CARDS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-yellow-500/30 transition-colors duration-300 flex flex-col items-center text-center">
                <div className="absolute -bottom-6 -right-6 text-9xl text-white/5 rotate-[-15deg] group-hover:text-yellow-500/5 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  {feature.icon}
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 text-yellow-500 flex items-center justify-center text-3xl shadow-lg group-hover:bg-yellow-500 group-hover:text-gray-900 group-hover:rotate-6 transition-all duration-300 mx-auto">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- NEW BOTTOM CTA SECTION --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-24 max-w-4xl mx-auto"
        >
            <div className="relative rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-white/10 p-8 md:p-12 text-center overflow-hidden shadow-2xl">
                
                {/* Glow Effects behind CTA */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                        Don't let another year pass wishing you had started. Join our next batch and become a job-ready developer in just 90 days.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        {/* Primary Button */}
                        <a href="#register" className="group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center gap-2">
                            <span>Secure Your FREE Seat Now!</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Secondary Phone Button */}
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-yellow-500 animate-pulse">
                                <FaPhoneAlt />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-gray-400 uppercase tracking-wider">Call for Enquiry</span>
                                <span className="text-xl font-bold tracking-wide">99442 88271</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;