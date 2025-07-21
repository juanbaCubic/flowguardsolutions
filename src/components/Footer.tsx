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
                <p className="text-primary-foreground/70 text-sm">Industrial AI Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Transforming industrial operations with intelligent LLM+RAG solutions. 
              Connecting OT systems to unlock unprecedented plant intelligence.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">PLC Integration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Edge Computing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Predictive Maintenance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 FLOWGUARD. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;