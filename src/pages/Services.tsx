import { FiCode, FiSmartphone, FiLayout, FiTrendingUp, FiTarget, FiDatabase, FiCloud, FiShield, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FiCode,
    title: "Custom Software Development",
    desc: "We build tailor-made software solutions that perfectly align with your business processes and goals.",
    features: ["Enterprise Applications", "SaaS Products", "API Development", "Legacy System Modernization"],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Optimization"],
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    desc: "Human-centered design approach that creates intuitive, engaging, and accessible interfaces.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
  },
  {
    icon: FiTrendingUp,
    title: "SEO Services",
    desc: "Data-driven search engine optimization strategies to boost your online visibility and organic traffic.",
    features: ["On-Page SEO", "Technical SEO", "Link Building", "Content Strategy"],
  },
  {
    icon: FiTarget,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing campaigns across multiple channels to maximize your ROI.",
    features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Marketing"],
  },
  {
    icon: FiDatabase,
    title: "Data Analytics",
    desc: "Turn raw data into actionable insights with our advanced analytics and reporting solutions.",
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Custom Dashboards"],
  },
  {
    icon: FiCloud,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration services to modernize your technology stack.",
    features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"],
  },
  {
    icon: FiShield,
    title: "Cybersecurity",
    desc: "Protect your digital assets with our comprehensive cybersecurity assessment and implementation.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
  },
];

const Services = () => {
  return (
    <>
      <section className="hero-gradient section-padding">
        <div className="container-main text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl animate-fade-in">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            End-to-end technology and marketing solutions designed to accelerate
            your business growth.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 card-shadow hover:card-shadow-hover lg:p-8 animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon size={28} />
                </div>
                <h3 className="mb-2 font-sans text-xl font-semibold text-card-foreground">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Need a Custom Solution?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Every business is unique. Let's discuss how we can tailor our services
            to fit your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Get a Free Quote <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
