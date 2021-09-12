import { FC, ChangeEvent, useState } from "react";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const updateForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  return (
    <form action="https://api.staticforms.xyz/submit" method="post">
      <input type="hidden" name="accessKey" value="9273204f-e90e-4b4a-b560-e0d00b26dfd4" />
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
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
