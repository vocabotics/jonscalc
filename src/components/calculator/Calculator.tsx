import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CalculatorButton } from './CalculatorButton';
import { CalculatorDisplay } from './CalculatorDisplay';
import { useCalculatorStore } from '@/store/calculatorStore';
import { Operation } from '@/types/calculator';

export const Calculator = () => {
  const { 
    display, 
    previousValue, 
    operation, 
    clearDisplay,
    setDisplay, 
    setPreviousValue, 
    setOperation, 
    setClearDisplay,
    clear 
  } = useCalculatorStore();

  const handleNumber = (num: string) => {
    if (clearDisplay) {
      setDisplay(num);
      setClearDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: Operation) => {
    const current = parseFloat(display);
    
    if (previousValue && operation) {
      const prev = parseFloat(previousValue);
      let result: number;

      switch (operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setPreviousValue(op === '=' ? '' : result.toString());
      setOperation(op === '=' ? null : op);
    } else {
      setPreviousValue(display);
      setOperation(op);
    }
    setClearDisplay(true);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.match(/[0-9]/)) {
        handleNumber(e.key);
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        handleOperation(e.key as Operation);
      } else if (e.key === 'Enter') {
        handleOperation('=');
      } else if (e.key === 'Escape') {
        clear();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [display, previousValue, operation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[320px] p-4 shadow-lg">
        <CardContent className="p-0">
          <CalculatorDisplay />
          <div className="grid grid-cols-4 gap-2">
            <CalculatorButton value="7" onClick={() => handleNumber('7')} />
            <CalculatorButton value="8" onClick={() => handleNumber('8')} />
            <CalculatorButton value="9" onClick={() => handleNumber('9')} />
            <CalculatorButton value="÷" onClick={() => handleOperation('/')} variant="secondary" />
            <CalculatorButton value="4" onClick={() => handleNumber('4')} />
            <CalculatorButton value="5" onClick={() => handleNumber('5')} />
            <CalculatorButton value="6" onClick={() => handleNumber('6')} />
            <CalculatorButton value="×" onClick={() => handleOperation('*')} variant="secondary" />
            <CalculatorButton value="1" onClick={() => handleNumber('1')} />
            <CalculatorButton value="2" onClick={() => handleNumber('2')} />
            <CalculatorButton value="3" onClick={() => handleNumber('3')} />
            <CalculatorButton value="-" onClick={() => handleOperation('-')} variant="secondary" />
            <CalculatorButton value="0" onClick={() => handleNumber('0')} />
            <CalculatorButton value="C" onClick={clear} variant="ghost" />
            <CalculatorButton value="=" onClick={() => handleOperation('=')} variant="secondary" />
            <CalculatorButton value="+" onClick={() => handleOperation('+')} variant="secondary" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
