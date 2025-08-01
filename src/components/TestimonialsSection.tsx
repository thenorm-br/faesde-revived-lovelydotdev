import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import testimonialMa from '@/assets/testimonial-ma-ribeiro.jpg';
import testimonialRicardo from '@/assets/testimonial-ricardo.webp';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "MA Ribeiro",
      image: testimonialMa,
      text: "Parabéns fiz o curso técnico em edificações e já peguei o meu diploma e já ta registrado no MEC to muito feliz obrigado.",
      source: "Avaliações do Google"
    },
    {
      id: 2,
      name: "Ricardo Vecci",
      image: testimonialRicardo,
      text: "Conclui meu curso de técnico em eletrotécnica, já recebi meu certificado na data que a instituição me informou, sempre com um excelente atendimento e dedicação dos funcionários… Venho parabenizar a Faesde pelo ótimo trabalho.",
      source: "Avaliações do Google"
    },
    {
      id: 3,
      name: "Mauro Henrique",
      image: null,
      text: "Pode confiar nesta instituição concluir meu curso e já recebi meu certificado.",
      source: "Avaliações do Google"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos falam sobre a experiência na FAESDE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-card hover:shadow-hero transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="text-secondary mb-4" size={32} />
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Fonte: {testimonial.source}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;