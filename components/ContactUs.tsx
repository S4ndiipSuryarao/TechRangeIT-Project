import React from 'react';
import MapPinIcon from './icons/MapPinIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import CheckIcon from './icons/CheckIcon';
import { useContactForm } from './hooks/useContactForm';
import clsx from 'clsx';

const ContactUs: React.FC = () => {
    const {
        formData,
        errors,
        isSubmitting,
        isSubmitted,
        handleChange,
        handleSubmit,
    } = useContactForm();

    return (
 <section className="py-20">
            <div className="container mx-auto px-6">
 {/* Existing Contact Section */}
 <div className="text-center mb-12">
 <h2 className="text-sm font-bold uppercase text-accent-teal mb-2 animate-child delay-1">
                Get In Touch
 </h2>
 <h3 className="text-3xl md:text-4xl font-bold text-white animate-child delay-2">
                Contact Us
 </h3>
            </div>

 <div className="flex flex-col lg:flex-row gap-12 bg-black/20 p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
 {/* Contact Info */}
 <div className="lg:w-1/3 animate-child delay-3">
 <h4 className="text-2xl font-bold text-white mb-4">Contact Information</h4>
 <p className="text-gray-300 mb-8">
                Have a project in mind or just want to say hello? We'd love to hear from you.
 </p>
 <div className="space-y-6">
 <div className="flex items-center gap-4">
 <PhoneIcon className="text-accent-teal" />
 <span className="text-gray-200">+1 (555) 123-4567</span>
 </div>
 <div className="flex items-center gap-4">
 <MailIcon className="text-accent-teal" />
 <span className="text-gray-200">contact@techrangeit.clone</span>
 </div>
 <div className="flex items-start gap-4">
 <MapPinIcon className="text-accent-teal mt-1" />
 <span className="text-gray-200">
 123 Innovation Drive, Tech City, 54321
 </span>
 </div>
 </div>
 </div>

 {/* Contact Form */}
 <div className="lg:w-2/3 animate-child delay-4">
            {isSubmitted ? (
 <div className="flex flex-col items-center justify-center text-center h-full bg-accent-teal/20 rounded-md p-8 transition-all duration-300">
 <CheckIcon />
 <h4 className="text-2xl font-bold text-white mt-4">Thank you!</h4>
 <p className="text-gray-300 mt-2">
                    Your message has been sent successfully. We'll get back to you shortly.
 </p>
 </div>
            ) : (
 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
 <div className="flex flex-col md:flex-row gap-6">
 <div className="w-full">
 <input
 type="text"
 name="name"
 placeholder="Your Name"
 value={formData.name}
 onChange={handleChange}
 className={clsx(
 'w-full bg-white/10 text-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal placeholder-gray-400 transition-shadow',
 errors.name ? 'border-red-500' : 'border-gray-600'
 )}
 />
                      {errors.name && (
 <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
 </div>
 <div className="w-full">
 <input
 type="email"
 name="email"
 placeholder="Your Email"
 value={formData.email}
 onChange={handleChange}
 className={clsx(
 'w-full bg-white/10 text-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal placeholder-gray-400 transition-shadow',
 errors.email ? 'border-red-500' : 'border-gray-600'
 )}
 />
                      {errors.email && (
 <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
 </div>
 </div>

 <div>
 <input
 type="text"
 name="subject"
 placeholder="Subject"
 value={formData.subject}
 onChange={handleChange}
 className="w-full bg-white/10 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal placeholder-gray-400 transition-shadow"
 />
 </div>

 <div>
 <textarea
 name="message"
 placeholder="Your Message"
 rows={5}
 value={formData.message}
 onChange={handleChange}
 className={clsx(
 'w-full bg-white/10 text-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal placeholder-gray-400 transition-shadow',
 errors.message ? 'border-red-500' : 'border-gray-600'
 )}
 ></textarea>
                      {errors.message && (
 <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
 </div>

 <button
 type="submit"
 disabled={isSubmitting}
 className="w-full bg-gradient-to-r from-accent-teal to-corporate-blue text-white font-bold py-3 px-6 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
 >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
 </button>
 </form>
            )}
 </div>
                    </div>
            </div>
        </section>
    );
};

export default ContactUs;
