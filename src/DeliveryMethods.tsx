import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface DeliveryMethodProps {
  name: string;
  animatedObjectUrl: string;
}

const DeliveryMethod = (props: DeliveryMethodProps) => {
  return (
    <div
      className={`border shadow-[10px_10px_0px_0px_black] bg-white/60 rounded-[20px] cursor-pointer 
                  flex flex-col hover:shadow-none transition-all ease-out duration-150 hover:translate-y-2.5 hover:translate-x-2.5 w-full
                  font-extrabold text-xl leading-[50px] lg:text-4xl lg:leading-[66px] 2xl:text-5xl 2xl:leading-[80px] items-center`}
    >
      <div className="h-[75%]">
        <DotLottieReact src={props.animatedObjectUrl} loop autoplay />
      </div>
      {props.name}
    </div>
  );
};

export const DeliveryMethods = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-primary">
      <div className="size-[60%] flex flex-col gap-y-10">
        <h1 className="font-extrabold text-[44px] leading-[50px] lg:text-[60px] lg:leading-[66px] 2xl:text-[75px] 2xl:leading-[90px]">
          Start An Order
        </h1>
        <div className="self-start flex-1 grid grid-cols-2 gap-x-10">
          <DeliveryMethod
            name="Delivery"
            animatedObjectUrl="/Mandelivery.lottie"
          />
          <DeliveryMethod name="Pickup" animatedObjectUrl="/shop.lottie" />
        </div>
      </div>
    </div>
  );
};
