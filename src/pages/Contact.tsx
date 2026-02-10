import { useState, FormEvent } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: FiMapPin, title: "Our Office", lines: ["123 Innovation Street", "Tech Park, New Delhi, India 110001"] },
  { icon: FiPhone, title: "Phone", lines: ["+91 98765 43210", "+91 11 2345 6789"] },
  { icon: FiMail, title: "Email", lines: ["info@innovationpvt.com", "support@innovationpvt.com"] },
  { icon: FiClock, title: "Working Hours", lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM"] },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="hero-gradient section-padding">
        <div className="container-main text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl animate-fade-in">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Have a project in mind? Let's talk about how we can help your
            business grow.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                      {item.lines.map((line, li) => (
                        <p key={li} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 card-shadow lg:p-8">
                <h2 className="mb-6 text-2xl font-bold text-card-foreground">Send a Message</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Subject *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium text-foreground">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  <FiSend size={16} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
