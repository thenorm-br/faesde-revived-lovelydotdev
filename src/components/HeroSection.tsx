import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[60vh] bg-gradient-hero flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Prepare-se para o futuro!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Unir os melhores alunos às melhores instituições de ensino.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Escreva para iniciar a pesquisa..."
              className="pl-12 pr-4 py-3 bg-white/90 text-foreground border-none rounded-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Button 
              variant="secondary" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6"
            >
              Pesquisar
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="hero">
            Ver Cursos
          </Button>
          <Button size="lg" variant="secondary">
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;