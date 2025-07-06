import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart, Coffee, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { number: "15+", label: "Technologies", icon: Code2 },
    { number: "50+", label: "Projects", icon: Rocket },
    { number: "3+", label: "Years Experience", icon: Zap },
    { number: "∞", label: "Coffee Cups", icon: Coffee },
  ];

  const skills = [
    "Frontend Development",
    "UI/UX Design",
    "React Ecosystem",
    "Modern CSS",
    "JavaScript ES6+",
    "Responsive Design",
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            >
              Crafting Digital Experiences
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 ">
            {/* Left Column - Image and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-20 mt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="glass-effect rounded-2xl p-6 text-center hover:glow-effect transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="w-14 h-14 mx-auto mb-2 text-purple-600" />
                    <div className="text-2xl font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-400 dark:text-gray-300 leading-relaxed"
                >
                  I'm a passionate frontend developer with a strong command of
                  modern web technologies. My journey in web development is
                  driven by the art of crafting user-centric designs where
                  pixel-perfection meets seamless interactivity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.7 }}
                  className="text-lg text-gray-400 dark:text-gray-300 leading-relaxed"
                >
                  With a keen eye for detail and a love for staying up-to-date
                  with the latest technologies, I'm driven to create exceptional
                  digital solutions that captivate users and elevate brands.
                </motion.p>
              </div>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  What I Love Doing
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="px-4 py-2 glass-effect rounded-full text-sm font-medium hover:glow-effect transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>Let's Work Together</span>
                  <Palette className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
