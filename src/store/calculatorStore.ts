import { create } from 'zustand';
import { Operation, CalculatorState } from '@/types/calculator';

interface CalculatorStore extends CalculatorState {
  setDisplay: (value: string) => void;
  setPreviousValue: (value: string) => void;
  setOperation: (operation: Operation | null) => void;
  setClearDisplay: (value: boolean) => void;
  clear: () => void;
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  display: '0',
  previousValue: '',
  operation: null,
  clearDisplay: false,
  setDisplay: (value) => set({ display: value }),
  setPreviousValue: (value) => set({ previousValue: value }),
  setOperation: (operation) => set({ operation }),
  setClearDisplay: (value) => set({ clearDisplay: value }),
  clear: () => set({ display: '0', previousValue: '', operation: null, clearDisplay: false }),
}));
