import { FC } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "../lotties/coding.json";

const style = {
  width: 300,
  height: 300,
};

const Hero: FC = () => (
  <div className="bg-gray-800">
    <div className="container flex flex-col md:flex-row xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 ">
      <div className="hidden lg:block lg:basis-1/3">
        <Lottie animationData={animationData} loop={true} style={style} />
      </div>

      <div className="lg:basis-2/3 lg:w-full lg:pt-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Get in touch!</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-300 lg:w-3/4 xl:w-full mx-auto">
            Hi, I’m a software engineer from Athens 🇬🇷 and huge fan of full-stack{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-yellow-400 underline decoration-yellow-400"
            >
              JavaScript
            </a>{" "}
            (mostly{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-blue-500 underline decoration-blue-500"
            >
              TypeScript
            </a>{" "}
            nowadays),{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-cyan-400 underline decoration-cyan-400"
            >
              React
            </a>{" "}
            (and its ecosystem),{" "}
            <a
              href="https://jamstack.org/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-pink-500 underline decoration-pink-500"
            >
              Jamstack
            </a>{" "}
            and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Serverless_computing"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-fuchsia-500 underline decoration-fuchsia-500"
            >
              Serverless
            </a>
            . I&apos;m working full-time at{" "}
            <a
              href="https://www.orfium.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-blue-500 underline decoration-blue-500"
            >
              Orfium
            </a>{" "}
            and I&apos;m sharing my JavaScript and React knowledge at{" "}
            <a
              href="https://www.codehub.gr/codelearn/our-instructors/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-orange-500 underline decoration-orange-500"
            >
              Code.Hub
            </a>
            !
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 py-10">
            <Link
              href="/p/contact"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
            >
              <span>Say hello!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
