import { motion } from "framer-motion";
import { FiAward, FiHeart, FiTarget, FiEye } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }),
};

const values = [
  { icon: FiAward, title: "Uncompromising Quality", desc: "Every piece undergoes rigorous quality checks using only premium-grade materials." },
  { icon: FiHeart, title: "Passion for Design", desc: "Our artisans pour their heart into each creation, ensuring uniqueness and beauty." },
  { icon: FiTarget, title: "Customer First", desc: "Your satisfaction drives everything we do — from design to delivery." },
  { icon: FiEye, title: "Innovation Forward", desc: "We blend tradition with modern technology to craft the extraordinary." },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Products Crafted" },
  { value: "50+", label: "Artisans" },
  { value: "5+", label: "Years of Trust" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(40_60%_50%/0.06),transparent_60%)]" />
        <div className="container-main relative text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-4 text-4xl font-bold text-foreground lg:text-6xl">
            Crafting <span className="text-gradient-gold">Excellence</span> Since 2019
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto max-w-2xl text-muted-foreground">
            Infiniox was born from a passion for premium craftsmanship. We combine traditional artistry with modern design to create furniture, smart watches, and epoxy art that stand the test of time.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=750&fit=crop" alt="Artisan workshop" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Who We Are</p>
                <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">A Legacy of Fine Craftsmanship</h2>
              </motion.div>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="leading-relaxed text-muted-foreground">
                Founded in 2019, Infiniox started as a small workshop with a big dream — to bring premium, handcrafted products to discerning customers. Today, we are a trusted name in luxury furniture, smart wearables, and bespoke epoxy art.
              </motion.p>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="leading-relaxed text-muted-foreground">
                Our team of 50+ skilled artisans and designers work tirelessly to ensure every product that leaves our studio is a masterpiece. We source the finest materials from around the world and blend traditional techniques with cutting-edge technology.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gold bg-card">
        <div className="container-main py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="text-center">
                <div className="text-3xl font-bold text-gradient-gold font-display lg:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Values</p>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">What We Stand For</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="group rounded-sm border border-gold bg-card p-6 text-center transition-all hover:gold-glow"
              >
                <div className="mx-auto mb-4 inline-flex rounded-sm bg-gold-subtle p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <val.icon size={22} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
