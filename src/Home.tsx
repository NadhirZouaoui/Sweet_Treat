function Home() {
  return (
    <div
      className="m-0 
      min-h-screen
      bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_20%,rgba(255,255,255,0.6)_60%,rgba(255,171,224,0)_100%),url('/src/assets/homeBg.png')] 
      bg-fixed 
      bg-center 
      bg-cover"
    >
      <div
        className="flex
          flex-col
          justify-around
          min-h-screen
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
        <div></div>
      </div>
    </div>
  );
}

export default Home;
