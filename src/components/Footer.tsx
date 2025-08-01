import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoFaesde from '@/assets/logo-faesde.webp';

const Footer = () => {
  const institutionalLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Cursos', href: '#courses' },
    { name: 'Processo Seletivo', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' }
  ];

  const popularCourses = [
    'TÉCNICO EM ADMINISTRAÇÃO',
    'TÉCNICO EM SEGURANÇA DO TRABALHO',
    'TÉCNICO EM ELETRÔNICA',
    'TÉCNICO EM ELETROTÉCNICA',
    'TÉCNICO EM MECÂNICA INDUSTRIAL',
    'TÉCNICO EM EDIFICAÇÕES'
  ];

  const blogPosts = [
    'Reforma não muda Enem 2017 e pode gerar provas mais "exigentes"',
    'Estes aplicativos "salvam a vida" de qualquer estudante',
    '7 dicas para aproveitar ao máximo um curso online de inglês',
    'Aprenda aqui como escolher uma pós-graduação a distância',
    'Saiba como conciliar trabalho e estudo',
    'Como se destacar no mercado de trabalho? Aprenda aqui!'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* WhatsApp Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-hero"
        >
          <MessageCircle size={24} />
          <span className="ml-2 hidden sm:inline">Como posso ajudar?</span>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logoFaesde} alt="FAESDE" className="h-16 w-auto mb-6 brightness-0 invert" />
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="https://www.facebook.com/faesde/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/faesde/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/faesde/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <p className="text-sm opacity-80">
              Unir os melhores alunos às melhores instituições de ensino.
            </p>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Institucional</h3>
            <ul className="space-y-3">
              {institutionalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-80 hover:text-secondary hover:opacity-100 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">Cursos</h3>
            <ul className="space-y-3">
              {popularCourses.slice(0, 6).map((course, index) => (
                <li key={index}>
                  <a 
                    href="#courses"
                    className="text-sm opacity-80 hover:text-secondary hover:opacity-100 transition-all"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-xl font-bold mb-6">Blog</h3>
            <ul className="space-y-3">
              {blogPosts.slice(0, 6).map((post, index) => (
                <li key={index}>
                  <a 
                    href="#blog"
                    className="text-sm opacity-80 hover:text-secondary hover:opacity-100 transition-all line-clamp-2"
                  >
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Telefones</h4>
              <div className="space-y-1 text-sm opacity-80">
                <p>+55(27)99930-9740</p>
                <p>+55(27)99661-3427</p>
                <p>+55(27)98892-0031 - Secretaria 1</p>
                <p>+55(27)99720-3344 - Secretaria 2</p>
                <p>+55(27)2237-8054</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Horário Comercial</h4>
              <div className="text-sm opacity-80">
                <p>Segunda a sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Unidade Aracruz</h4>
              <div className="text-sm opacity-80">
                <p>Rua dos Ipês, 212, Coqueiral</p>
                <p>Aracruz/ES, CEP 29199-144</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            Copyright © 2025 FAESDE . CNPJ 21.819.091/0001-61
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;