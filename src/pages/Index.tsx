import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar, FiAward, FiTruck, FiShield } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }),
};

const categories = [
  {
    title: "Premium Furniture",
    desc: "Handcrafted pieces with timeless elegance",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    tag: "New Collection",
  },
  {
    title: "Smart Watches",
    desc: "Where technology meets sophistication",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    tag: "Trending",
  },
  {
    title: "Epoxy Creations",
    desc: "Unique resin art pieces for modern spaces",
    image: "https://images.unsplash.com/photo-1631631480669-535cc43f2327?w=600&h=400&fit=crop",
    tag: "Artisan",
  },
];

const features = [
  { icon: FiAward, title: "Premium Quality", desc: "Only the finest materials and craftsmanship" },
  { icon: FiTruck, title: "Free Shipping", desc: "Complimentary delivery on orders above ₹5,000" },
  { icon: FiShield, title: "2-Year Warranty", desc: "Complete peace of mind with every purchase" },
  { icon: FiStar, title: "5-Star Rated", desc: "Trusted by 10,000+ premium customers" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(40_60%_50%/0.08),transparent_60%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        
        <div className="container-main relative z-10 py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold bg-gold-subtle px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
              >
                <FiStar size={12} /> Luxury Redefined
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-6 text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl lg:text-7xl"
              >
                Elevate Your
                <span className="block text-gradient-gold">Living Space</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground"
              >
                Discover our curated collection of premium furniture, smart watches, 
                and bespoke epoxy art pieces — designed for those who appreciate the finer things.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
                  Explore Collection <FiArrowRight />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-gold-subtle">
                  Our Story
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=750&fit=crop"
                  alt="Premium furniture showcase"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-sm border border-gold bg-card p-4 gold-glow">
                <p className="text-xs uppercase tracking-wider text-primary">Since 2019</p>
                <p className="text-2xl font-bold text-foreground font-display">10K+</p>
                <p className="text-xs text-muted-foreground">Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="border-y border-gold bg-card">
        <div className="container-main py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-3"
              >
                <div className="rounded-sm bg-gold-subtle p-2 text-primary">
                  <f.icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mx-auto mb-14 max-w-xl text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Collections</p>
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Curated For You</h2>
            <p className="text-muted-foreground">Explore our signature categories, each crafted with precision and passion.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <Link to="/products" className="group relative block overflow-hidden rounded-sm aspect-[3/4]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-sm bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      {cat.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-1 text-2xl font-bold text-foreground font-display">{cat.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-1">
                      Shop Now <FiArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Statement */}
      <section className="section-padding bg-card border-y border-gold">
        <div className="container-main">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Our Promise —</p>
            <blockquote className="text-2xl font-display leading-relaxed text-foreground md:text-3xl lg:text-4xl">
              "Every piece we create tells a story of 
              <span className="text-gradient-gold"> craftsmanship, innovation,</span> and an 
              unwavering commitment to excellence."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">— The Infiniox Team</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_60%_50%/0.05),transparent_70%)]" />
        <div className="container-main relative text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Get in touch with our design experts and discover pieces that reflect your unique style.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
            >
              Contact Us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
