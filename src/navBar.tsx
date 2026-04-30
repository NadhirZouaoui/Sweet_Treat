import "./assets/fonts/Comfortaa-Regular.ttf";
function navBar() {
  return (
    <div
      className="mt-5 
      z-10
      rounded-4xl 
      w-1/3 justify-self-center
      basis-8 
      shadow-[0px_0px_30px_rgba(227,228,237,0.37)] 
      border-2 border-solid border-[rgba(255,255,255,0.4)] 
      bg-white/30 
      backdrop-blur-[30px]
      fixed"
    >
      <ul className="flex justify-around p-6 font-comfortaa text-lg">
        <li>
          <a href="">menu</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
        <li>
          <a href="">reviews</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default navBar;
