import { useState, useEffect } from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";

// ── Reuse the same ThreeDButton from Menu ────────────────────────────────────
interface buttonProps {
  color: string;
  width: string;
  height: string;
  text: string;
  extraFeatures: string;
  cartIconExist: boolean;
  onClick: () => void;
}
interface Visibility {
  areItemsVisible: boolean;
  isCartVisible: boolean;
}

const ThreeDButton = (props: buttonProps) => {
  const heightNumber: number = parseInt(props.height.replace(/[^\d.]/g, ""));
  const shadowHeight: number = heightNumber * 0.5;
  return (
    <button
      onClick={props.onClick}
      className={`rounded-full ${props.color} ${props.width} ${props.height} flex items-center justify-center border-none
        hover:border-2 hover:border-black hover:shadow-none! hover:translate-y-2 ease-in transition-all cursor-pointer
        ${props.extraFeatures}`}
      style={{ boxShadow: `0px ${shadowHeight}px 0 0 black` }}
    >
      {props.cartIconExist && (
        <ShoppingCart size={25} color="white" className="mr-2" />
      )}
      {props.text}
    </button>
  );
};

// ── Floating badge chips ─────────────────────────────────────────────────────
const badges = ["🍪 Cookies", "🍫 Brownies", "🍰 Tiramisu", "🎂 Cakes"];

// ── Main Home ────────────────────────────────────────────────────────────────
function Home({ areItemsVisible, isCartVisible }: Visibility) {
  const [loaded, setLoaded] = useState(false);
  const [activeBadge, setActiveBadge] = useState(0);

  useEffect(() => {
    // stagger in
    const t = setTimeout(() => setLoaded(true), 50);
    // cycle badge highlight
    const interval = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % badges.length);
    }, 1800);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-amber-50 relative overflow-hidden ${areItemsVisible ? "blur-3xl" : ""}
              ${isCartVisible ? "blur-md" : "blur-0"}
`}
    >
      {/* ── Background decorative circles (mirror Menu's clip-path shapes) ── */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-300/40"
        style={{ clipPath: "circle(40%)" }}
      />
      <div
        className="absolute bottom-10 -left-24 w-[380px] h-[380px] bg-[#B5816E]/30"
        style={{ clipPath: "inset(15% 15% 15% 15%)" }}
      />
      <div
        className="absolute top-1/2 left-[55%] w-[200px] h-[200px] bg-orange-200/50 rounded-full"
        style={{ clipPath: "circle(40%)" }}
      />

      {/* ── Main layout ─────────────────────────────────────────────────── */}
      <div className="relative z-1 flex flex-col items-center justify-center min-h-screen px-8 gap-12 pt-24 pb-16">
        {/* ── Badge strip ─────────────────────────────────────────────── */}
        <div
          className="flex gap-3 flex-wrap justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {badges.map((b, i) => (
            <span
              key={b}
              className={`px-5 py-2 rounded-full font-semibold text-sm border-2 border-black transition-all duration-300
                ${
                  activeBadge === i
                    ? "bg-black text-amber-100 scale-110"
                    : "bg-white/70 text-white"
                }`}
              style={{
                boxShadow: activeBadge === i ? "0px 4px 0 0 black" : "none",
              }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* ── Hero text ────────────────────────────────────────────────── */}
        <div
          className="text-center max-w-4xl"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <p className="text-orange-300 tracking-[6px] font-semibold text-sm mb-4 uppercase">
            Handcrafted with love
          </p>
          <h1 className="font-['Playfair_Display'] text-7xl md:text-8xl font-bold leading-[1.1] ">
            Welcome to <br />
            <span className="italic text-orange-400">SweetTreat</span>
          </h1>
          <p className="mt-6 text-black/50 text-xl max-w-xl mx-auto leading-relaxed font-['Inter']">
            We bake with love, every single day. From brownies to cookies —
            order now and taste real home-made goodness.
          </p>
        </div>

        {/* ── CTA Buttons ──────────────────────────────────────────────── */}
        <div
          className="flex gap-6 flex-wrap justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          <ThreeDButton
            color="bg-orange-300"
            width="w-52"
            height="h-14"
            text="Best Sellers"
            extraFeatures="text-white font-bold text-lg"
            cartIconExist={false}
            onClick={() => {}}
          />
          <ThreeDButton
            color="bg-[#4D3228]"
            width="w-52"
            height="h-14"
            text="Our Story"
            extraFeatures="text-white font-bold text-lg"
            cartIconExist={false}
            onClick={() => {}}
          />
        </div>

        {/* ── Scroll hint ──────────────────────────────────────────────── */}
        <div
          className="flex flex-col items-center gap-2 text-white/30 text-sm"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 1s",
            animation: "bounce 2s infinite 1.5s",
          }}
        >
          <ArrowRight size={20} className="rotate-90" />
          <span>Scroll to explore</span>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}

export default Home;
