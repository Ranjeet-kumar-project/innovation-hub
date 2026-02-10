import { Link } from "react-router-dom";
import { FiCode, FiTrendingUp, FiSmartphone, FiLayout, FiTarget, FiUsers, FiArrowRight, FiCheck } from "react-icons/fi";

const services = [
  { icon: FiCode, title: "Web Development", desc: "Scalable web applications built with modern technologies and best practices." },
  { icon: FiSmartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
  { icon: FiLayout, title: "UI/UX Design", desc: "User-centered design that creates engaging and intuitive digital experiences." },
  { icon: FiTrendingUp, title: "SEO Services", desc: "Data-driven SEO strategies to improve your search engine visibility." },
  { icon: FiTarget, title: "Digital Marketing", desc: "Comprehensive digital marketing campaigns that drive real results." },
  { icon: FiUsers, title: "IT Consulting", desc: "Expert technology consulting to help you make informed decisions." },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Team Members" },
  { value: "5+", label: "Years Experience" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container-main relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-primary-foreground/20 px-4 py-1 text-sm font-medium text-primary-foreground/80 animate-fade-in">
              🚀 Transforming Ideas Into Digital Reality
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Innovation Private Limited
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We deliver world-class software development and digital marketing
              solutions that help businesses grow, scale, and succeed in the
              digital landscape.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105">
                Our Services <FiArrowRight />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-main py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive suite of technology and marketing services
              tailored to your business needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon size={24} />
                </div>
                <h3 className="mb-2 font-sans text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Why Choose Innovation?
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                With years of experience in the technology industry, we bring a
                unique blend of technical expertise and creative thinking to every
                project.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced team of developers & marketers",
                  "Agile methodology for faster delivery",
                  "24/7 support and maintenance",
                  "Transparent pricing with no hidden costs",
                  "100% client satisfaction guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <FiCheck size={14} />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl hero-gradient p-8 text-center lg:p-12">
              <div className="text-5xl font-bold text-primary-foreground lg:text-6xl">5+</div>
              <div className="mt-2 text-lg text-primary-foreground/80">Years of Excellence</div>
              <div className="my-6 h-px bg-primary-foreground/20"></div>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                Trusted by 50+ businesses across multiple industries, delivering
                200+ successful projects with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Let's discuss how Innovation Private Limited can help bring your
            vision to life with our expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Contact Us Today <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
