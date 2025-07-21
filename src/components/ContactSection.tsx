import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Listo para Transformar tus <span className="text-primary">Operaciones?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecta con nuestros expertos en IA industrial para discutir tus requerimientos específicos 
            y descubre cómo nuestras soluciones pueden optimizar las operaciones de tu planta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-tech border-0 bg-card/50 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl">Contáctanos</CardTitle>
              <CardDescription>
                Cuéntanos sobre tu proyecto y te responderemos en 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de la empresa" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu.email@empresa.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+52 (55) 1234-5678" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Detalles del Proyecto</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos sobre tu configuración de automatización industrial, desafíos actuales, y qué buscas lograr..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full">
                Enviar Mensaje <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Direct Contact */}
            <Card className="shadow-tech border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Contacto Directo</CardTitle>
                <CardDescription>
                  Habla directamente con nuestro equipo técnico
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ventas@flowguard.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+52 (55) IA-PLANTA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Distrito Industrial, Ciudad Tecnológica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start */}
            <Card className="shadow-tech border-0 bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-xl text-primary-foreground">Opciones de Inicio Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="glass" className="w-full justify-start">
                    📋 Descargar Especificaciones Técnicas
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    🎯 Agendar Demo en Vivo
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    💬 Unirse al Webinar Técnico
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    📊 Solicitar Análisis ROI
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;