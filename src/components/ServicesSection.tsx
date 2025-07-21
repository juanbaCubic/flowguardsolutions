import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Diseñar",
      description: "Arquitectura de soluciones inteligentes adaptadas a tu entorno industrial y requerimientos operacionales.",
      features: ["Arquitectura de Sistema", "Diseño de Interfaces", "Planificación de Flujos", "Análisis de Requerimientos"]
    },
    {
      icon: Code,
      title: "Desarrollar",
      description: "Construir sistemas LLM+RAG robustos con integración PLC perfecta y confiabilidad de grado industrial.",
      features: ["Modelos IA Personalizados", "Integración OT", "APIs Seguras", "Optimización de Rendimiento"]
    },
    {
      icon: Rocket,
      title: "Desplegar",
      description: "Implementar tu solución con tiempo de inactividad mínimo y protocolos de pruebas exhaustivos.",
      features: ["Migración Sin Tiempo Muerto", "Pruebas y Validación", "Entrenamiento y Soporte", "Asistencia Go-Live"]
    },
    {
      icon: Settings,
      title: "Mantener",
      description: "Asegurar operación continua con monitoreo proactivo y mantenimiento inteligente.",
      features: ["Monitoreo 24/7", "Mantenimiento Predictivo", "Actualizaciones y Parches", "Ajuste de Rendimiento"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ciclo de Vida <span className="text-primary">Completo de Soluciones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde el concepto inicial hasta la optimización continua, proporcionamos servicios 
            de extremo a extremo para tu jornada de transformación industrial con IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  Saber Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;