import skillIllustration from '@/assets/skill-illustration.webp';
import iconMec from '@/assets/icon-mec.webp';
import iconStudents from '@/assets/icon-students.webp';
import iconNetwork from '@/assets/icon-network.webp';
import iconApproval from '@/assets/icon-approval.webp';

const AboutSection = () => {
  const features = [
    {
      icon: iconMec,
      title: "Reconhecimento pelo MEC",
      description: "Contamos com instituições, todas reconhecidas e credenciadas pelo MEC."
    },
    {
      icon: iconStudents,
      title: "Número de alunos",
      description: "Mais de 2000 alunos já contaram com o apoio de nossa equipe para alcançar sua formação e o sucesso no mercado de trabalho."
    },
    {
      icon: iconNetwork,
      title: "Melhor Rede",
      description: "A FAESDE conta com parceiras em todo o Brasil, sempre oferecendo os melhores cursos."
    },
    {
      icon: iconApproval,
      title: "97% de aprovação",
      description: "Com o apoio de nossa equipe, a média de aprovação dos nossos alunos chega a 97%."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Somos a FAESDE
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unir os melhores alunos às melhores instituições de ensino. Esse é o objetivo da 
              Assessoria – FAESDE, uma unidade de apoio presencial. Desde 2015, representamos e 
              assessoramos instituições de ensino que oferecem cursos técnicos, cursos de graduação 
              e pós graduação, cursos de qualificação profissional e cursos livres tanto na 
              modalidade presencial quanto à distância.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-card">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img 
              src={skillIllustration} 
              alt="Skills Illustration" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;