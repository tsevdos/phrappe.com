import { FC } from "react";

const Promo: FC = () => (
  <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get in touch</h2>
      <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
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
          className="text-2xl font-bold text-pink-500 underline decoration-pink-500"
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
    </div>
  </div>
);

export default Promo;
