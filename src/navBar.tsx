import "./assets/fonts/Comfortaa-Regular.ttf";
import ThreeDButton from "./ThreeDButton";
interface visibilityProps {
  toggleCart: () => void;
}

function navBar({ toggleCart }: visibilityProps) {
  return (
    <div
      className="flex fixed z-2 w-full border-b border-[rgba(255,255,255,0.3)]
      bg-primary 
      justify-between
      h-20"
    >
      <button className="w-35">logo</button>
      <div className=" w-1/3">
        <ul className="flex justify-around p-6 gap-x-3 font-comfortaa text-lg">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">reviews</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
      <div className="m-4">
        <ThreeDButton
          color="bg-secondary"
          width="w-35"
          height="h-12"
          text="Cart"
          extraFeatures="text-white font-bold"
          cartIconExist
          onClick={toggleCart}
        />
      </div>
    </div>
  );
}

export default navBar;
