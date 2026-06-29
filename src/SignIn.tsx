import snoopyBg from "./assets/snoopy.png";
import ThreeDButton from "./ThreeDButton";
const SignInCard = () => {
  return (
    <div
      className="sm:h-[500px] sm:w-11/12 md:w-[400px] md:h-[550px] lg:w-[500px] lg:h-[650px] 
      bg-[#FFF8EE] rounded-2xl flex flex-col items-center py-15 px-7 gap-y-10 justify-self-end z-2"
    >
      <h1 className="font-extrabold sm:text-3xl md:text-4xl lg:text-5xl text-[#2B1208]">
        Sign In
      </h1>
      <p className="text-[#2B1208] text-center text-xs md:text-sm lg:text-base border-b border-white/40 w-full pb-10">
        fill in your info and your dessert will be ready
      </p>
      <input
        type="text"
        placeholder="First & Last Name"
        className="w-full py-4 border rounded-lg text-[#2B1208] placeholder-[#2B1208]/60"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full py-4 border rounded-lg text-[#2B1208] placeholder-[#2B1208]/60"
      />
      <ThreeDButton
        color="bg-secondary"
        width="w-full"
        height="h-18"
        text="Submit"
        extraFeatures="text-white text-3xl font-bold  mt-auto"
        cartIconExist={false}
        onClick={() => {}}
      />
    </div>
  );
};

const SignInPage = () => {
  return (
    <div className="bg-primary h-screen grid grid-cols-2 gap-40 items-center z-2">
      <SignInCard />
      <img
        src={snoopyBg}
        alt="snoopyBg"
        className="relative z-1 right-1/3 sm:scale-0 md:scale-200 lg:scale-100"
      />
    </div>
  );
};

export default SignInPage;
