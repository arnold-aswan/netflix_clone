import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="w-full">
      <img
        className=" sm:block absolute w-full h-full object-cover"
        src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
        alt="background image"
      />
      <div className="bg-black/65 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="h-screen">
          <div className="flex flex-col items-center justify-center gap-3 text-center mx-auto md:max-w-[620px] lg:max-w-[1000px] min-h-[60vh]">
            <h1 className="text-2xl md:text-4xl xl:text-6xl">
              Unlimited films, TV Programmes and more.
            </h1>
            <h2 className="text-[1rem] md:text-3xl lg:text-4xl">
              Watch anywhere. Cancel at any time.
            </h2>
            <h3 className="text-base md:text-xl lg:text-xl">
              Ready to watch? Enter your email address to create or restart your
              membership.
            </h3>

            <form className="flex flex-shrink min-w-[300px]">
              <input
                type="email"
                placeholder="enter email address"
                className="rounded-s-md text-black outline-none p-2 max-w-[190px] md:max-w-[550px]"
              />
              <Link to="/login">
                <button className="bg-netflixred font-bold p-2 md:py-3 md:px-4 rounded-e-md">
                  Get Started
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
