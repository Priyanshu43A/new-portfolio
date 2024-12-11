import { motion } from 'framer-motion';
 
import { Scene3D } from '../components/Scene3D';

import { FaCode } from 'react-icons/fa';

export function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
       
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              i am Priyanshu
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Full Stack Developer & UI/UX Designer crafting digital experiences
              that merge functionality with stunning aesthetics.
            </p>
            
            <button className="group flex items-center gap-2 text-lg font-medium hover:text-primary/80 transition-colors">
              View My Work <FaCode />
               
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </div>
  );
}