import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

const posts = [
  {
    title: "The Future of Web Development in 2026",
    excerpt: "Explore the latest trends shaping the future of web development, from AI-powered tools to edge computing.",
    author: "Rahul Sharma",
    date: "Feb 5, 2026",
    category: "Development",
  },
  {
    title: "How SEO Can Transform Your Business Growth",
    excerpt: "Learn how strategic SEO implementation can dramatically increase your online visibility and revenue.",
    author: "Sneha Gupta",
    date: "Jan 28, 2026",
    category: "Marketing",
  },
  {
    title: "Building Scalable Mobile Applications",
    excerpt: "A comprehensive guide to building mobile apps that can handle millions of users without breaking.",
    author: "Amit Kumar",
    date: "Jan 20, 2026",
    category: "Development",
  },
  {
    title: "Digital Marketing Strategies for Startups",
    excerpt: "Cost-effective digital marketing strategies that help startups compete with established brands.",
    author: "Sneha Gupta",
    date: "Jan 12, 2026",
    category: "Marketing",
  },
  {
    title: "Why Your Business Needs a Cloud Strategy",
    excerpt: "Discover the benefits of cloud computing and how to create a cloud strategy for your organization.",
    author: "Priya Patel",
    date: "Jan 5, 2026",
    category: "Cloud",
  },
  {
    title: "UI/UX Design Principles That Convert",
    excerpt: "Design principles and best practices that turn visitors into loyal customers through better UX.",
    author: "Amit Kumar",
    date: "Dec 28, 2025",
    category: "Design",
  },
];

const Blog = () => {
  return (
    <>
      <section className="hero-gradient section-padding">
        <div className="container-main text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl animate-fade-in">Our Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Insights, tips, and industry updates from our team of experts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-xl border border-border bg-card transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="h-48 rounded-t-xl hero-gradient flex items-center justify-center">
                  <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><FiUser size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1"><FiCalendar size={12} /> {post.date}</span>
                  </div>
                  <h3 className="mb-2 font-sans text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline">
                    Read More <FiArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
