import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
// import { Code2, Palette, Terminal } from 'lucide-react';

const skills = [
  {
   
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks.',
  },
  {
    
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs.',
  },
  {
     
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
  },
];

export function About() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate Full Stack Developer and UI/UX Designer with a keen eye for detail
              and a love for creating seamless digital experiences. With years of experience
              in web development, I bring ideas to life through clean code and beautiful design.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-8">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-card"
            >
              <FaCode className='mb-4' size={52} />
              <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}