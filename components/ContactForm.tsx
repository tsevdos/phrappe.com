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
    <form target="_blank" action="https://formsubmit.co/tsevdosjohn@gmail.com" method="POST">
      <div>
        <label>
          * Name: <input type="text" name="name" value={name} onChange={updateForm} />
        </label>
      </div>
      <div>
        <label>
          * Email: <input type="email" name="email" value={email} onChange={updateForm} />
        </label>
      </div>
      <div>
        <label>
          * Message: <textarea name="message" value={message} onChange={updateForm} />
        </label>
      </div>
      <div>
        <button type="submit" disabled={!isValid}>
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
