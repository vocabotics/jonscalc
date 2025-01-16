import { Card, CardContent } from '@/components/ui/card';
import { useCalculatorStore } from '@/store/calculatorStore';

export const CalculatorDisplay = () => {
  const display = useCalculatorStore((state) => state.display);

  return (
    <Card className="w-full mb-4">
      <CardContent className="p-4">
        <div className="text-right text-3xl font-mono truncate">
          {display}
        </div>
      </CardContent>
    </Card>
  );
};
