import { FC, ChangeEvent, useState } from "react";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const isValid = Boolean(name.trim()) && Boolean(email.trim()) && Boolean(message.trim());
  const updateForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  return (
    <form
      className="space-y-6"
      target="_blank"
      action="https://formsubmit.co/tsevdosjohn@gmail.com"
      method="POST"
    >
      <div className="space-y-1">
        <label htmlFor="name" className="font-medium">
          Name*
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={updateForm}
          className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="font-medium">
          Email*
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={updateForm}
          className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="font-medium">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={updateForm}
          className="block border border-gray-200 rounded placeholder-gray-400 px-5 py-3 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          rows={6}
        />
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
