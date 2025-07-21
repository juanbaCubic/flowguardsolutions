import flowguardLogo from "@/assets/flowguard-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={flowguardLogo} 
                alt="FlowGuard Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">FLOWGUARD</h3>
                <p className="text-primary-foreground/70 text-sm">Soluciones IA Industrial</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Transformando operaciones industriales con soluciones inteligentes LLM+RAG. 
              Conectando sistemas OT para desbloquear inteligencia de planta sin precedentes.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Integración PLC</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Edge Computing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Analítica IA</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mantenimiento Predictivo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Socios</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Soporte</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 FLOWGUARD. Todos los derechos reservados. | Política de Privacidad | Términos de Servicio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;