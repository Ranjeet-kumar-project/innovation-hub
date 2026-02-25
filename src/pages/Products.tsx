import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiHeart, FiEye } from "react-icons/fi";

const categories = ["All", "Furniture", "Smart Watches", "Epoxy Art"];

const products = [
  { id: 1, name: "Milano Sofa", category: "Furniture", price: "₹45,999", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", badge: "Bestseller" },
  { id: 2, name: "Nordic Coffee Table", category: "Furniture", price: "₹18,999", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop", badge: null },
  { id: 3, name: "Artisan Dining Chair", category: "Furniture", price: "₹12,499", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop", badge: "New" },
  { id: 4, name: "Apex Pro X1", category: "Smart Watches", price: "₹24,999", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", badge: "Trending" },
  { id: 5, name: "Zenith Ultra", category: "Smart Watches", price: "₹32,999", image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=400&h=400&fit=crop", badge: null },
  { id: 6, name: "Pulse Fit Band", category: "Smart Watches", price: "₹8,999", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop", badge: "Sale" },
  { id: 7, name: "Ocean Wave Table", category: "Epoxy Art", price: "₹35,999", image: "https://images.unsplash.com/photo-1631631480669-535cc43f2327?w=400&h=400&fit=crop", badge: "Handmade" },
  { id: 8, name: "Galaxy River Board", category: "Epoxy Art", price: "₹28,999", image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f6523?w=400&h=400&fit=crop", badge: null },
  { id: 9, name: "Crystal Coaster Set", category: "Epoxy Art", price: "₹4,999", image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=400&fit=crop", badge: "Gift Idea" },
  { id: 10, name: "Lux Bookshelf", category: "Furniture", price: "₹22,999", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=400&fit=crop", badge: null },
  { id: 11, name: "Titan Chronos", category: "Smart Watches", price: "₹19,999", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop", badge: null },
  { id: 12, name: "Nebula Wall Art", category: "Epoxy Art", price: "₹15,999", image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop", badge: "Limited" },
];

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(40_60%_50%/0.06),transparent_60%)]" />
        <div className="container-main relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Our Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-foreground lg:text-6xl"
          >
            Premium Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-xl text-muted-foreground"
          >
            Browse our handpicked selection of luxury furniture, cutting-edge smart watches, and one-of-a-kind epoxy art pieces.
          </motion.p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-sm px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-gold text-muted-foreground hover:text-foreground hover:bg-gold-subtle"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-sm border border-gold bg-card"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/40" />
                    
                    {product.badge && (
                      <span className="absolute top-3 left-3 rounded-sm bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        {product.badge}
                      </span>
                    )}

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                      {[FiEye, FiHeart, FiShoppingBag].map((Icon, i) => (
                        <button
                          key={i}
                          className="rounded-sm border border-gold bg-card/90 p-2.5 text-foreground backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                          <Icon size={16} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-wider text-primary">{product.category}</p>
                    <h3 className="mt-1 text-base font-semibold text-foreground font-display">{product.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;
