import { Button } from '../components';
import { useState } from 'react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000); // Hide alert after 3 seconds
    }
  };

  return (
    <section className="font-inter py-12">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          Contact Us
        </p>
        <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          Get in Touch
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-lg">
          Have a feature suggestion, bug report, or question?
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between gap-6 mt-16 w-5/6 mx-auto px-4"
      >
        <input
          className="h-12 px-4 py-2 w-full bg-gray-100 outline-none border-none text-[#333333] rounded-md placeholder:text-[#999999] transition-all"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          className="h-12 px-4 py-2 w-full bg-gray-100 outline-none border-none text-[#333333] rounded-md placeholder:text-[#999999] transition-all"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
        <textarea
          className="h-32 px-4 py-2 w-full bg-gray-100 outline-none border-none text-[#333333] rounded-md placeholder:text-[#999999] resize-y transition-all"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          required
        />
        <div className="w-full">
          <Button
            animated
            className="w-full rounded-md border-none text-white font-semibold"
            size="md"
            type="submit"
          >
            Send Message
          </Button>
        </div>

        {submitted && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg animate-fade-in">
            Thanks! We will be in touch soon.
          </div>
        )}
      </form>
    </section>
  );
};
