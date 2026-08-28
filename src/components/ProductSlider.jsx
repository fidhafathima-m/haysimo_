import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/site";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  const sliderRef = useRef(null);

  /*
   * Responsive number of visible products
   */
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  /*
   * Infinite carousel:
   * We add cloned items to the beginning/end.
   */
  const totalProducts = products.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  /*
   * Automatically move every 4 seconds
   */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /*
   * Reset position after reaching cloned slides.
   */
  useEffect(() => {
    if (currentIndex >= totalProducts) {
      const timeout = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }

        setCurrentIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = "transform 500ms ease";
            }
          });
        });
      }, 500);

      return () => clearTimeout(timeout);
    }

    if (currentIndex < 0) {
      const timeout = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }

        setCurrentIndex(totalProducts - 1);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = "transform 500ms ease";
            }
          });
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalProducts]);

  /*
   * Create clones for infinite scrolling.
   */
  const extendedProducts = [
    ...products.slice(-itemsPerView),
    ...products,
    ...products.slice(0, itemsPerView),
  ];

  /*
   * Start in the real products section.
   */
  const translateIndex = currentIndex + itemsPerView;

  return (
    <>
      {/* Header */}
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div className="max-w-xl">
          <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
            Explore Our Products
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
            The purity in every drop
          </h2>
        </div>

        <Link
          to="/products"
          className="group inline-flex items-center gap-2 text-horizon-600 font-semibold hover:text-horizon-700 transition-colors shrink-0"
        >
          View all products
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      {/* Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Previous */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous product"
          className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-11 h-11 rounded-full bg-white border border-horizon-100 shadow-card text-horizon-700 hover:bg-horizon-600 hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next product"
          className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-11 h-11 rounded-full bg-white border border-horizon-100 shadow-card text-horizon-700 hover:bg-horizon-600 hover:text-white transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden px-1">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${
                (translateIndex * 100) / itemsPerView
              }%)`,
            }}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="shrink-0 px-2 sm:px-3 flex"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <div className="w-full h-full">
                  <ProductCard product={product} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {products.map((_, index) => {
          const isActive =
            ((currentIndex % totalProducts) + totalProducts) % totalProducts ===
            index;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to product ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-7 bg-horizon-600"
                  : "w-2 bg-horizon-200 hover:bg-horizon-400"
              }`}
            />
          );
        })}
      </div>
    </>
  );
}
