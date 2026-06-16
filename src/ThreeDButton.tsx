import { ShoppingCart } from "lucide-react";

interface buttonProps {
  color: string;
  width: string;
  height: string;
  text: string;
  extraFeatures: string;
  cartIconExist: boolean;
  onClick: () => void;
}
const ThreeDButton = (props: buttonProps) => {
  const heightNumber: number = parseInt(props.height.replace(/[^\d.]/g, ""));
  const shadowHeight: number = heightNumber * 0.5;
  return (
    <button
      onClick={props.onClick}
      className={` rounded-full ${props.color}  ${props.width} ${props.height} flex items-center justify-center border-none
                hover:border-2 hover:border-black hover:shadow-none! hover:translate-y-2 ease-in transition-all cursor-pointer
                ${props.extraFeatures}`}
      style={{
        boxShadow: `0px ${shadowHeight}px 0 0 black`,
      }}
    >
      {props.cartIconExist && (
        <ShoppingCart size={25} color="white" className="mr-2" />
      )}
      {props.text}
    </button>
  );
};

export default ThreeDButton;
