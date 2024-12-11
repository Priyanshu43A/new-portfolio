import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
// import { Calendar, ArrowRight } from 'lucide-react';

const thoughts = [
  {
    title: 'The Future of Web Development',
    date: 'March 15, 2024',
    excerpt: 'Exploring upcoming trends in web development and how they will shape the future.',
    readTime: '5 min read',
  },
  {
    title: 'Designing for Accessibility',
    date: 'March 10, 2024',
    excerpt: 'Why accessibility should be a priority in modern web design and development.',
    readTime: '4 min read',
  },
  {
    title: 'Building Better User Experiences',
    date: 'March 5, 2024',
    excerpt: 'Key principles and practices for creating engaging user experiences.',
    readTime: '6 min read',
  },
];

export function Thoughts() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12">Thoughts & Articles</h2>
        <div className="space-y-8">
          {thoughts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <FaCalendarAlt />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <button className="group/btn flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Read More
                <IoBookSharp />
              </button>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}