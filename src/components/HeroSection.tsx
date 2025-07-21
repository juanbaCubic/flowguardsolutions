import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Zap } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";
import flowguardLogo from "@/assets/flowguard-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial Control Room" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Integration */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src={flowguardLogo} 
              alt="FlowGuard Logo" 
              className="h-16 w-auto animate-float"
            />
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">FLOWGUARD</h1>
              <p className="text-white/80 text-sm">Soluciones IA Industrial</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluciones <span className="text-accent">Industriales</span>
            <br />
            Inteligentes con IA
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Diseñamos, desarrollamos, desplegamos y mantenemos soluciones LLM+RAG de vanguardia 
            para entornos industriales. Conecta tus sistemas OT a través de PCs embebidos 
            y desbloquea el monitoreo inteligente de plantas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Comenzar <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Ver Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Computación Embebida</h3>
              <p className="text-white/80 text-center">PCs embebidos de grado industrial con interfaces OT robustas</p>
            </div>

            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Database className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integración RAG</h3>
              <p className="text-white/80 text-center">Generación aumentada por recuperación avanzada para inteligencia de planta</p>
            </div>

            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Insights en Tiempo Real</h3>
              <p className="text-white/80 text-center">Consulta el estado de la planta y obtén respuestas inteligentes al instante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;