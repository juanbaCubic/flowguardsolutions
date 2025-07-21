import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Zap } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Intelligent <span className="text-accent">Industrial</span>
            <br />
            Solutions with AI
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We design, develop, deploy, and maintain cutting-edge LLM+RAG solutions 
            for industrial environments. Connect your OT systems through embedded PCs 
            and unlock intelligent plant monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              View Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Embedded Computing</h3>
              <p className="text-white/80 text-center">Industrial-grade embedded PCs with robust OT interfaces</p>
            </div>

            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Database className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">RAG Integration</h3>
              <p className="text-white/80 text-center">Advanced retrieval-augmented generation for plant intelligence</p>
            </div>

            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-time Insights</h3>
              <p className="text-white/80 text-center">Query plant status and get intelligent responses instantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;