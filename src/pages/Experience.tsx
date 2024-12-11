import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoBriefcase } from 'react-icons/io5';
// import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: 'Leading development of enterprise web applications using React and Node.js.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description: 'Designed user interfaces and experiences for various client projects.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Hub',
    period: '2016 - 2018',
    description: 'Developed responsive web applications using modern JavaScript frameworks.',
  },
];

export function Experience() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-background border-2 border-primary rounded-full" />
              <div className="mb-2 flex items-center gap-2 text-primary">
              <IoBriefcase />
                <span className="font-semibold">{exp.company}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <FaCalendarAlt />
                <span>{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}