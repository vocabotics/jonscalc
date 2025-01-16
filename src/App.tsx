import { Calculator } from '@/components/calculator/Calculator';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen flex items-center justify-center p-4 bg-background">
        <Calculator />
      </main>
    </ThemeProvider>
  );
}

export default App;
