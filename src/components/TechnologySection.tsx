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
      title: "PLC Integration",
      description: "Direct connection to Siemens, Allen-Bradley, Schneider Electric, and other major PLC systems"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Industrial-grade embedded PCs designed for harsh manufacturing environments"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "End-to-end encryption and industrial cybersecurity protocols"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Sub-second response times for critical operational queries"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask questions about plant status in plain English and get intelligent responses"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Predictive insights and trend analysis powered by machine learning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Technology Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Bridging <span className="text-primary">OT & AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our embedded solutions create intelligent interfaces between your operational 
            technology and advanced AI systems, enabling unprecedented plant visibility.
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
                  <h3 className="text-2xl font-bold mb-3">Industrial Embedded Computing</h3>
                  <p className="text-muted-foreground mb-4">
                    Ruggedized embedded PCs with specialized I/O modules for seamless 
                    integration with your existing automation infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Fanless Design</Badge>
                    <Badge variant="secondary">Wide Temperature Range</Badge>
                    <Badge variant="secondary">Industrial I/O</Badge>
                    <Badge variant="secondary">Edge AI Processing</Badge>
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
                  <h3 className="text-2xl font-bold mb-3">Intelligent Query System</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced LLM+RAG architecture that understands your plant operations 
                    and provides contextual, actionable insights in real-time.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Natural Language</Badge>
                    <Badge variant="secondary">Contextual AI</Badge>
                    <Badge variant="secondary">Real-time Data</Badge>
                    <Badge variant="secondary">Predictive Analytics</Badge>
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
            Schedule Technical Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;