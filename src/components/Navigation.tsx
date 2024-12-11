import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/thoughts', label: 'Thoughts' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <motion.li
            key={item.path}
            whileHover={{ x: 10 }}
            className="relative"
          >
            <Link
              to={item.path}
              className={`text-lg font-medium ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
            {location.pathname === item.path && (
              <motion.div
                layoutId="active-nav"
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
              />
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}