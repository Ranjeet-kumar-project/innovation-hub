import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }),
};

const contactInfo = [
  { icon: FiMapPin, title: "Visit Us", lines: ["42 Artisan Boulevard", "Mumbai, India 400001"] },
  { icon: FiPhone, title: "Call Us", lines: ["+91 98765 43210", "+91 22 1234 5678"] },
  { icon: FiMail, title: "Email Us", lines: ["hello@infiniox.com", "support@infiniox.com"] },
  { icon: FiClock, title: "Working Hours", lines: ["Mon – Sat: 10 AM – 7 PM", "Sunday: By Appointment"] },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass = "w-full rounded-sm border border-gold bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-ring placeholder:text-muted-foreground";

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(40_60%_50%/0.06),transparent_60%)]" />
        <div className="container-main relative text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-4 text-4xl font-bold text-foreground lg:text-6xl">
            Let's Create Something <span className="text-gradient-gold">Beautiful</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto max-w-xl text-muted-foreground">
            Have a question about our products or want a custom piece? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-8 text-2xl font-bold text-foreground font-display">
                Contact Information
              </motion.h2>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold-subtle text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      {item.lines.map((line, li) => (
                        <p key={li} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-sm border border-gold bg-card p-6 card-shadow lg:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground font-display">Send a Message</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject *</label>
                    <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} placeholder="Custom Order" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about what you're looking for..." />
                </div>
                <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 sm:w-auto">
                  <FiSend size={14} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
