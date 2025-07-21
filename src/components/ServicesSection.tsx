import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Design",
      description: "Architect intelligent solutions tailored to your industrial environment and operational requirements.",
      features: ["System Architecture", "Interface Design", "Workflow Planning", "Requirements Analysis"]
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build robust LLM+RAG systems with seamless PLC integration and industrial-grade reliability.",
      features: ["Custom AI Models", "OT Integration", "Secure APIs", "Performance Optimization"]
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Implement your solution with minimal downtime and comprehensive testing protocols.",
      features: ["Zero-Downtime Migration", "Testing & Validation", "Training & Support", "Go-Live Assistance"]
    },
    {
      icon: Settings,
      title: "Maintain",
      description: "Ensure continuous operation with proactive monitoring and intelligent maintenance.",
      features: ["24/7 Monitoring", "Predictive Maintenance", "Updates & Patches", "Performance Tuning"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete <span className="text-primary">Solution Lifecycle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to ongoing optimization, we provide end-to-end services 
            for your industrial AI transformation journey.
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
                  Learn More
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