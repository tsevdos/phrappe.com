import { FC } from "react";
import Lottie from "react-lottie";
import Link from "next/link";
import animationData from "../lotties/coding.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero: FC = () => (
  <div className="bg-gray-800">
    <div className="container flex flex-col md:flex-row xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 ">
      <div className="hidden lg:block lg:basis-1/3">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>

      <div className="lg:basis-2/3 lg:w-full lg:pt-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Get in touch!</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-400 lg:w-3/4 xl:w-full mx-auto">
            Hi, I’m a software engineer from Athens 🇬🇷 and huge fan of everything{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-indigo-600 underline decoration-indigo-600"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://jamstack.org/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-pink-500 underline decoration-pink-600"
            >
              Jamstack
            </a>{" "}
            and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Serverless_computing"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-fuchsia-600 underline decoration-fuchsia-600"
            >
              Serverless
            </a>
            . I&apos;m working full-time at{" "}
            <a
              href="https://www.epignosishq.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-blue-600 underline decoration-blue-600"
            >
              Epignosis
            </a>{" "}
            and I&apos;m sharing my JavaScript and React knowledge at{" "}
            <a
              href="https://www.codehub.gr/codelearn/our-instructors/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-orange-600 underline decoration-orange-600"
            >
              Code.Hub
            </a>
            !
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 py-10">
            <Link href="/p/contact">
              <a className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                <span>Say hello!</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
