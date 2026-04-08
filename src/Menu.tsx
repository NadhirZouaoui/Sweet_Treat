import image from "./assets/cookieCat.png";
function Menu() {
  return (
    <div
      className="min-h-screen
      bg-amber-100 
      bg-center 
      bg-cover
      flex
      items-center
      justify-center"
    >
      <div className="rotate-180 hover:bg-black hover:text-white transition-all duration-150 ease-in cursor-pointer pb-2 bg-white size-25 flex items-center justify-center rounded-full text-3xl">
        →
      </div>
      <div className="flex flex-col w-1/2 justify-center items-center h-[85vh] mt-20">
        <div className="text-3xl text-amber-600 tracking-widest">
          pick the category
        </div>
        <img
          src={image}
          alt="Image"
          className="cursor-pointer block hover:-translate-y-4 transition-all ease-in duration-150"
          style={{ clipPath: "circle(31%)" }}
        ></img>
      </div>
      <div className="bg-white hover:bg-black hover:text-white transition-all duration-150 ease-in  cursor-pointer pb-2 size-25 flex items-center justify-center rounded-full text-3xl">
        →
      </div>
    </div>
  );
}

export default Menu;
