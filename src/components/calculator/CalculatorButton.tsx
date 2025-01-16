import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CalculatorButtonProps {
  value: string;
  onClick: () => void;
  variant?: 'default' | 'secondary' | 'ghost';
  className?: string;
}

export const CalculatorButton = ({
  value,
  onClick,
  variant = 'default',
  className = '',
}: CalculatorButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={variant}
        onClick={onClick}
        className={`w-full h-14 text-xl ${className}`}
      >
        {value}
      </Button>
    </motion.div>
  );
};
