import { Instagram, Mail, Phone } from "lucide-react";

const contacts = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@silvamikael",
    href: "https://instagram.com/silvamikael",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "mikael@impactoeducacao.com",
    href: "mailto:mikael@impactoeducacao.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (19) 98185-4103",
    href: "https://wa.me/5519981854103",
  },
];

const ContactSection = () => {
  return (
    <footer className="relative py-20 px-4 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Entre em <span className="text-primary text-glow">Contato</span>
          </h2>
          <p className="text-muted-foreground">
            Estamos prontos para ajudar você em sua jornada
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-6 text-center hover:glow-effect transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                <contact.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} English Center. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
