
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
         <FaRegSun />
      ) : (
        <FaRegMoon />
      )}
    </button>
  );
}