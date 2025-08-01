import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        "+55(27)99930-9740",
        "+55(27)99661-3427", 
        "+55(27)98892-0031 - Secretaria 1",
        "+55(27)99720-3344 - Secretaria 2",
        "+55(27)2237-8054"
      ]
    },
    {
      icon: Clock,
      title: "Horário Comercial",
      details: [
        "Segunda a sexta: 9h às 18h",
        "Sábado: 9h às 13h"
      ]
    },
    {
      icon: MapPin,
      title: "Unidade Aracruz",
      details: [
        "Rua dos Ipês, 212, Coqueiral",
        "Aracruz/ES, CEP 29199-144"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e tire suas dúvidas sobre nossos cursos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <MessageCircle size={24} />
                Envie sua mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input placeholder="Seu nome completo" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="seu@email.com" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input placeholder="(27) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input placeholder="Assunto da mensagem" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Digite sua mensagem aqui..."
                  rows={5}
                  required
                />
              </div>

              <Button size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Maps */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-primary mb-4">
                  Localização
                </h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Mapa do Google<br />
                    <small>Rua dos Ipês, 212, Coqueiral, Aracruz/ES</small>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;