import { useState } from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.description.trim()) newErrors.description = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem('contactMessage', JSON.stringify(formData));
      alert("Message sent and saved to localStorage!");
      setFormData({ name: '', email: '', subject: '', description: '' });
      setErrors({});
    }
  };

  return (
    <div className="p-10" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 capitalize text-left">
        <div>
          <h3 className="text-primary-400 font-extrabold text-2xl">contact us</h3>
          <h2 className="text-4xl md:text-6xl font-extrabold p-4">say hello</h2>

          <div className="flex items-start gap-4 py-6 px-6">
            <TfiLocationPin className="text-white bg-primary-600 text-7xl p-4 rounded-full outline-3 outline-dotted outline-offset-4 outline-primary-400" />
            <div>
              <h2 className="text-2xl md:text-4xl capitalize">Address</h2>
              <span className="text-lg md:text-2xl font-extralight">Location KN9 ave, Kigali</span>
            </div>
          </div>

          <div className="flex items-start gap-4 py-6 px-6">
            <MdOutlineMail className="text-white bg-primary-600 text-7xl p-4 rounded-full outline-3 outline-dotted outline-offset-4 outline-primary-400"/>

            <div>
              <h2 className="text-2xl md:text-4xl capitalize">Email</h2>
              <span className="text-lg md:text-2xl font-extralight underline ">
                <a href="mailto:businesscafe@info.com">businesscafe@info.com</a>
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 py-6 px-6">
            <MdOutlinePhoneInTalk className="text-white bg-primary-600 text-7xl p-4 rounded-full outline-3 outline-dotted outline-offset-4 outline-primary-400" />
            <div>
              <h2 className="text-2xl md:text-4xl capitalize">Phone</h2>
              <span className="text-lg md:text-2xl font-extralight">+2507881383828</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div>
          <h3 className="text-primary-400 text-2xl">have a question?</h3>
          <h1 className="font-extrabold text-3xl md:text-4xl px-6 py-6">send a message</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border-2 rounded-md border-primary-400 placeholder:text-xl capitalize focus:outline-none text-xl p-2"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border-2 rounded-md border-primary-400 placeholder:text-xl capitalize focus:outline-none text-xl p-2"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border-2 rounded-md border-primary-400 placeholder:text-xl capitalize focus:outline-none text-xl p-2"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border-2 rounded-md border-primary-400 placeholder:text-xl capitalize focus:outline-none text-xl p-2"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <button
              type="submit"
              className="w-70 rounded-md bg-primary-400 text-white capitalize text-2xl font-extrabold py-4 mt-2"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
