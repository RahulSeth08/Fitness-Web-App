import hero from "../../assets/hero.jpg";
import ShimmerButton from "../magicui/shimmer-button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const toSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center pt-16 mb-16 backdrop-blur-lg" // Added mb-16
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Fitness background"
          loading="lazy"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4 leading-tight tracking-wide">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="text-xl mb-8 leading-relaxed tracking-wide">
          Join us and achieve your health goals
        </p>
        <div className="flex justify-center">
          <ShimmerButton
            shimmerColor="#ffffff"
            shimmerSize="0.05em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="rgba(0, 0, 1)"
            className="text-white"
            onClick={toSignUp}
          >
            Start Your Journey
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};












// import hero from "../../assets/hero.jpg";
// import ShimmerButton from "../magicui/shimmer-button";
// import { useNavigate } from "react-router-dom";

// export const Hero = () => {
//   const navigate = useNavigate();

//   const toSignUp = () => {
//     navigate("/auth/signup");
//   };

//   return (
//     <section
//       id="hero"
//       className="relative h-screen flex items-center justify-center pt-16 backdrop-blur-lg"
//     >
//       <div className="absolute inset-0 z-0">
//         <img
//           src={hero}
//           alt="Fitness background"
//           loading="lazy"
//           className="w-full h-full object-cover opacity-25"
//         />
//       </div>
//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-6xl font-bold mb-4 leading-tight tracking-wide">
//           Transform Your Body, Transform Your Life
//         </h1>
//         <p className="text-xl mb-8 leading-relaxed tracking-wide">
//           Join us and achieve your health goals
//         </p>
//         <div className="flex justify-center">
//           <ShimmerButton
//             shimmerColor="#ffffff"
//             shimmerSize="0.05em"
//             shimmerDuration="3s"
//             borderRadius="100px"
//             background="rgba(0, 0, 1)"
//             className="text-white"
//             onClick={toSignUp}
//           >
//             Start Your Journey
//           </ShimmerButton>
//         </div>
//       </div>
//     </section>
//   );
// };