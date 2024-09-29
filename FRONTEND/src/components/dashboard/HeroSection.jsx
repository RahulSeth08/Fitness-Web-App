
export function HeroSection() {
    return (
      <div className="flex flex-col justify-center space-y-4 text-center bg-gray-900 p-[10vh] rounded-xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Welcome to FitGuys Web
          </h1>
          <p className=" max-w-[800px] text-xl font-light tracking-tighter sm:text-xl xl:text-2xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mx-auto">
            Track your workouts, manage your nutrition, and achieve your fitness
            goals with our comprehensive suite of tools and services.
          </p>
        </div>
      </div>
    );
  }