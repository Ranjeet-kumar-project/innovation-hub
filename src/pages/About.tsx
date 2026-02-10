import { FiTarget, FiEye, FiHeart, FiAward } from "react-icons/fi";

const values = [
  { icon: FiTarget, title: "Mission-Driven", desc: "We focus on delivering measurable results that align with your business objectives." },
  { icon: FiEye, title: "Visionary Thinking", desc: "We stay ahead of technology trends to provide future-proof solutions." },
  { icon: FiHeart, title: "Client-First", desc: "Your success is our top priority. We build lasting partnerships, not just products." },
  { icon: FiAward, title: "Quality Assured", desc: "Every deliverable undergoes rigorous quality checks before reaching you." },
];

const team = [
  { name: "Rahul Sharma", role: "CEO & Founder", initials: "RS" },
  { name: "Priya Patel", role: "CTO", initials: "PP" },
  { name: "Amit Kumar", role: "Lead Developer", initials: "AK" },
  { name: "Sneha Gupta", role: "Marketing Head", initials: "SG" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container-main text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl animate-fade-in">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Innovation Private Limited is a leading technology company dedicated
            to transforming businesses through innovative software solutions and
            strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between technology and
                business growth, Innovation Private Limited has grown from a small
                startup to a trusted technology partner for businesses across
                multiple industries.
              </p>
              <p>
                Our team of passionate developers, designers, and marketers work
                collaboratively to deliver solutions that not only meet but exceed
                our clients' expectations. We believe in the power of innovation
                to transform businesses and create lasting impact.
              </p>
              <p>
                Over the years, we have successfully delivered 200+ projects,
                served 50+ clients, and built a reputation for quality,
                reliability, and excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Core Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => (
              <div key={i} className="rounded-xl bg-card p-6 text-center card-shadow animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <val.icon size={24} />
                </div>
                <h3 className="mb-2 font-sans text-base font-semibold text-card-foreground">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Meet Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div key={i} className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:card-shadow-hover hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {member.initials}
                </div>
                <h3 className="font-sans text-base font-semibold text-card-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
