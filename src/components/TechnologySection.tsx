import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Cpu, Shield, Zap, MessageSquare, BarChart3 } from "lucide-react";
import embeddedSystemImage from "@/assets/embedded-system.jpg";
import aiNetworkImage from "@/assets/ai-network.jpg";

const TechnologySection = () => {
  const capabilities = [
    {
      icon: Network,
      title: "Integración PLC",
      description: "Conexión directa a sistemas Siemens, Allen-Bradley, Schneider Electric, y otros PLC principales"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "PCs embebidos de grado industrial diseñados para entornos de manufactura adversos"
    },
    {
      icon: Shield,
      title: "Comunicación Segura",
      description: "Cifrado de extremo a extremo y protocolos de ciberseguridad industrial"
    },
    {
      icon: Zap,
      title: "Procesamiento en Tiempo Real",
      description: "Tiempos de respuesta sub-segundo para consultas operacionales críticas"
    },
    {
      icon: MessageSquare,
      title: "Consultas en Lenguaje Natural",
      description: "Haz preguntas sobre el estado de la planta en español simple y obtén respuestas inteligentes"
    },
    {
      icon: BarChart3,
      title: "Analítica Avanzada",
      description: "Insights predictivos y análisis de tendencias potenciados por machine learning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Resumen Tecnológico
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conectando <span className="text-primary">OT e IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestras soluciones embebidas crean interfaces inteligentes entre tu 
            tecnología operacional y sistemas de IA avanzados, habilitando visibilidad de planta sin precedentes.
          </p>
        </div>

        {/* Main Technology Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Embedded System */}
          <div className="space-y-8 animate-slide-up">
            <Card className="overflow-hidden shadow-tech border-0">
              <CardContent className="p-0">
                <img 
                  src={embeddedSystemImage} 
                  alt="Embedded System" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Computación Industrial Embebida</h3>
                  <p className="text-muted-foreground mb-4">
                    PCs embebidos ruguerizados con módulos de E/S especializados para integración 
                    perfecta con tu infraestructura de automatización existente.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Diseño Sin Ventiladores</Badge>
                    <Badge variant="secondary">Rango Amplio de Temperatura</Badge>
                    <Badge variant="secondary">E/S Industrial</Badge>
                    <Badge variant="secondary">Procesamiento IA en el Edge</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Network */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="overflow-hidden shadow-tech border-0">
              <CardContent className="p-0">
                <img 
                  src={aiNetworkImage} 
                  alt="AI Network" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Sistema de Consultas Inteligente</h3>
                  <p className="text-muted-foreground mb-4">
                    Arquitectura LLM+RAG avanzada que comprende las operaciones de tu planta 
                    y proporciona insights contextuales y accionables en tiempo real.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Lenguaje Natural</Badge>
                    <Badge variant="secondary">IA Contextual</Badge>
                    <Badge variant="secondary">Datos en Tiempo Real</Badge>
                    <Badge variant="secondary">Analítica Predictiva</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div 
              key={capability.title}
              className="group p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:shadow-tech transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <capability.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
              <p className="text-muted-foreground text-sm">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8 py-4">
            Agendar Demo Técnico
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;