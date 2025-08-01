import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import courseEletrica from '@/assets/course-eletrica.png';
import courseSolar from '@/assets/course-solar.png';
import courseUsinagem from '@/assets/course-usinagem.png';
import courseBeneficios from '@/assets/course-beneficios.png';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "ESPECIALIZAÇÃO TÉCNICA EM INSTALAÇÃO ELÉTRICA PREDIAL DE BAIXA TENSÃO",
      image: courseEletrica,
      link: "#"
    },
    {
      id: 2,
      title: "ESPECIALIZAÇÃO TÉCNICA EM ENERGIA SOLAR FOTOVOLTAICA",
      image: courseSolar,
      link: "#"
    },
    {
      id: 3,
      title: "ESPECIALIZAÇÃO TÉCNICA EM USINAGEM",
      image: courseUsinagem,
      link: "#"
    },
    {
      id: 4,
      title: "ESPECIALIZAÇÃO TÉCNICA EM BENEFÍCIOS",
      image: courseBeneficios,
      link: "#"
    }
  ];

  const popularCourses = [
    "TÉCNICO EM ADMINISTRAÇÃO",
    "TÉCNICO EM SEGURANÇA DO TRABALHO",
    "TÉCNICO EM ELETRÔNICA",
    "TÉCNICO EM ELETROTÉCNICA",
    "TÉCNICO EM MECÂNICA INDUSTRIAL",
    "TÉCNICO EM EDIFICAÇÕES"
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Cursos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre os mais variados cursos técnicos e especializações.
          </p>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="shadow-card hover:shadow-hero transition-shadow duration-300">
              <CardHeader className="p-0">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm text-primary mb-3 line-clamp-3">
                  {course.title}
                </h3>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full hover:bg-secondary hover:text-secondary-foreground">
                  Quero participar »
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Popular Courses List */}
        <div className="bg-gradient-section rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Cursos Técnicos Populares
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCourses.map((course, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-card hover:shadow-hero transition-shadow duration-300"
              >
                <h4 className="font-semibold text-primary hover:text-secondary transition-colors cursor-pointer">
                  {course}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-8">
          <Button size="lg" variant="secondary">
            VER TODOS OS CURSOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;