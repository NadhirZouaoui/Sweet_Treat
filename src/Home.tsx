interface ButtonProps {
  value: string;
  url: string;
}

function Button({ value, url }: ButtonProps) {
  return (
    <a
      href={url}
      className="bg-pink-600 rounded-full w-45 h-14 text-white flex items-center justify-center font-semibold text-lg
      hover:bg-pink-800 hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      {value}
    </a>
  );
}
function Home() {
  return (
    <div
      className="m-0 
      min-h-screen
      bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_20%,rgba(255,255,255,0.6)_60%,rgba(255,171,224,0)_100%),url('/src/assets/homeBg.png')] 
      bg-center 
      bg-cover"
    >
      <div
        className="flex
          flex-col
          justify-around
          min-h-[90vh]
          ml-44
          w-xl"
      >
        <div></div>
        <div
          className="text-pink-600 tracking-[5px] font-semibold text-base"
          style={{ animation: "fadeInUp 0.8s ease-out forwards" }}
        >
          HANDCRAFTED WITH LOVE
        </div>
        <div className="-mt-10 w-2xl">
          <p
            className="font-['Playfair_Display'] md:text-8xl font-bold leading-[1.1] text-foreground text-[]"
            style={{
              animation: "fadeInUp 0.8s ease-out forwards",
              animationDelay: "200ms",
              opacity: 0,
            }}
          >
            welcome to <br />
            <span className="italic text-pink-600">SweetTreat </span> our jolly
            dolly land
          </p>
        </div>
        <div
          className="font-['Inter'] text-xl opacity-50"
          style={{
            animation: "fadeInUp 0.8s ease-out forwards",
            animationDelay: "400ms",
            opacity: 0,
          }}
        >
          We bake with love, every single day. From brownies cakes to sweet
          cookies. Order now and get the taste of a real home-made desert, a
          taste that you will never forget!
        </div>
        <div className="flex justify-around w-3/4">
          <Button value="best sellers" url="" />
          <Button value="our story" url="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
