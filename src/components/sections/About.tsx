'use client'

import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('About');

  const skills = [
    { name: 'Java', icon: () => <img src="/java.svg" alt="Java" className="h-10 p-0.5" /> },
    { name: 'Spring Boot', icon: () => <img src="/spring.svg" alt="Spring Boot" className="h-10 p-1" /> },
    { name: 'Angular', icon: () => <img src="/angular.svg" alt="Angular" className="h-10" /> },
    { name: 'Typescript', icon: () => <img src="/typescript.svg" alt="Typescript" className="h-10 p-1" /> },
    { name: 'C#', icon: () => <img src="/csharp.svg" alt="C#" className="h-10" /> },
    { name: 'SQL', icon: () => <img src="/sql.svg" alt="SQL" className="h-10 p-0.5" /> },
    { name: 'Azure', icon: () => <img src="/azure.svg" alt="Azure" className="h-10 p-1" /> },
    { name: 'Git', icon: () => <img src="/git.svg" alt="Git" className="h-10 p-0.5" /> }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
          >
            <span className="text-gradient">{t('title')}</span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-primary rounded-full"
              variants={itemVariants}
            />
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mx-auto w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
              LT
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              {t('description')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              {t('passion')}
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {t('skillsTitle')}
              </h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover="hover"
                      className="justify-items-center bg-card border border-border rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent />
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}