import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import blogEletrotecnica from '@/assets/blog-eletrotecnica.jpg';
import blogQuimica from '@/assets/blog-quimica.png';
import blogDesign from '@/assets/blog-design.png';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Técnico em Redes vs Automação vs Eletrotécnica: Qual Curso Escolher em 2025?",
      image: blogEletrotecnica,
      category: "Sem categoria",
      date: "17 de julho de 2025",
      excerpt: "Descubra as diferenças entre esses cursos técnicos e faça a melhor escolha para sua carreira."
    },
    {
      id: 2,
      title: "O que faz um Técnico em Química CBO?",
      image: blogQuimica,
      category: "Sem categoria", 
      date: "19 de março de 2025",
      excerpt: "Conheça as responsabilidades e oportunidades na área de química técnica."
    },
    {
      id: 3,
      title: "Quanto tempo dura Design de Interiores?",
      image: blogDesign,
      category: "Técnico em Design De Interiores",
      date: "19 de março de 2025",
      excerpt: "Saiba tudo sobre a duração e estrutura do curso de Design de Interiores."
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e dicas sobre educação técnica e mercado de trabalho.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-card hover:shadow-hero transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto hover:text-secondary">
                    Leia mais <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Button size="lg" variant="secondary">
            VER TODOS OS POSTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;