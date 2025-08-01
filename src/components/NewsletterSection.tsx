import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Rocket } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 shadow-hero">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="text-secondary" size={32} />
                    <h2 className="text-3xl font-bold">Capacite-se</h2>
                  </div>
                  <p className="text-xl mb-6 opacity-90">
                    Escolha entre os mais variados cursos técnicos.
                  </p>
                  <Button size="lg" variant="secondary" className="mb-8 lg:mb-0">
                    VER CURSOS
                  </Button>
                </div>

                {/* Right Content - Newsletter */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="text-secondary" size={24} />
                    <h3 className="text-2xl font-bold">Receba os nossos informativos</h3>
                  </div>
                  <p className="mb-6 opacity-90">
                    Fique por dentro de cursos altamente lucrativos na Faesde e receba dicas 
                    exclusivas para o mercado de trabalho.
                  </p>
                  
                  <div className="space-y-4">
                    <Input 
                      placeholder="Nome"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Input 
                      type="email"
                      placeholder="Email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button variant="secondary" className="w-full">
                      Cadastrar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;