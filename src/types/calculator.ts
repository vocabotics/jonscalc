export type Operation = '+' | '-' | '*' | '/' | '=';

export interface CalculatorState {
  display: string;
  previousValue: string;
  operation: Operation | null;
  clearDisplay: boolean;
}
