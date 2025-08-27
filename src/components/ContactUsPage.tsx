import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactUsPageProps {
  onBack: () => void;
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({ onBack }) => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
  const { elementRef: heroTitleRef, isVisible: heroTitleVisible } = useScrollAnimation();
  const { elementRef: namePhoneRef, isVisible: namePhoneVisible } = useScrollAnimation();
  const { elementRef: lookingForRef, isVisible: lookingForVisible } = useScrollAnimation();
  const { elementRef: propertyTypeRef, isVisible: propertyTypeVisible } = useScrollAnimation();
  const { elementRef: bedroomsRef, isVisible: bedroomsVisible } = useScrollAnimation();
  const { elementRef: messageRef, isVisible: messageVisible } = useScrollAnimation();
  const { elementRef: submitButtonRef, isVisible: submitButtonVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    lookingFor: '',
    otherLookingFor: '',
    propertyType: '',
    bedrooms: 'Studio',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the data to send
    const submitData = {
      ...formData,
      // If "Other" is selected, use the otherLookingFor value
      lookingFor: formData.lookingFor === 'Other (please specify)' 
        ? formData.otherLookingFor 
        : formData.lookingFor
    };
    
    console.log('Form submitted with data:', submitData);
    
    // Handle form submission - redirect to contact page for now
    window.location.href = 'https://tridentluxury.com/contact-us/';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/banner3.jpg" 
            alt="Contact Us - Trident Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            ref={heroTitleRef}
            className={`text-2xl sm:text-5xl font-bold mb-8 leading-tight archivo-black scroll-animate ${heroTitleVisible ? 'animate' : ''}`}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information Header */}
            <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 archivo-black">
                Contact Information
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto cmu-serif">
                Feel free to reach out to us with any questions or inquiries. Our team is available to assist you with all your real estate needs.
              </p>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className={`bg-[#dbdfa9] rounded-3xl p-12 shadow-xl scroll-animate ${formVisible ? 'animate' : ''}`} style={{ backgroundColor: '#7a8a6a' }}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Phone Row */}
                <div ref={namePhoneRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 scroll-animate ${namePhoneVisible ? 'animate' : ''}`}>
                  <div>
                    <label htmlFor="fullName" className="block text-lg font-semibold text-white mb-3 cmu-serif">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-black placeholder-gray-500 cmu-serif"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-lg font-semibold text-white mb-3 cmu-serif">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-black placeholder-gray-500 cmu-serif"
                      placeholder="Your Contact Number"
                    />
                  </div>
                </div>

                {/* Looking For Section */}
                <div ref={lookingForRef} className={`scroll-animate ${lookingForVisible ? 'animate' : ''}`}>
                  <label className="block text-lg font-semibold text-white mb-4 cmu-serif">
                    Are you looking to:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['Buy', 'Rent', 'Sell', 'Invest', 'Other (please specify)'].map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="lookingFor"
                          value={option}
                          checked={formData.lookingFor === option}
                          onChange={handleChange}
                          className="w-5 h-5 text-black border-2 border-gray-300 focus:ring-black focus:ring-2"
                        />
                        <span className="text-white cmu-serif">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  {/* Other Text Field - Only show when "Other (please specify)" is selected */}
                  {formData.lookingFor === 'Other (please specify)' && (
                    <div className="mt-4">
                      <label htmlFor="otherLookingFor" className="block text-lg font-semibold text-white mb-3 cmu-serif">
                        Please specify:
                      </label>
                      <input
                        type="text"
                        id="otherLookingFor"
                        name="otherLookingFor"
                        value={formData.otherLookingFor}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-black placeholder-gray-500 cmu-serif"
                        placeholder="Please specify what you're looking for..."
                      />
                    </div>
                  )}
                </div>

                {/* Property Type Section */}
                <div ref={propertyTypeRef} className={`scroll-animate ${propertyTypeVisible ? 'animate' : ''}`}>
                  <label className="block text-lg font-semibold text-white mb-4 cmu-serif">
                    What type of property are you interested in?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['Apartment', 'Villa', 'Townhouse', 'Commercial', 'Off-plan'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value={type}
                          checked={formData.propertyType === type}
                          onChange={handleChange}
                          className="w-5 h-5 text-black border-2 border-gray-300 focus:ring-black focus:ring-2"
                        />
                        <span className="text-white cmu-serif">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bedrooms Dropdown */}
                <div ref={bedroomsRef} className={`scroll-animate ${bedroomsVisible ? 'animate' : ''}`}>
                  <label htmlFor="bedrooms" className="block text-lg font-semibold text-white mb-3 cmu-serif">
                    Preferred number of bedrooms:
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-black cmu-serif"
                  >
                    <option value="Studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div ref={messageRef} className={`scroll-animate ${messageVisible ? 'animate' : ''}`}>
                  <label htmlFor="message" className="block text-lg font-semibold text-white mb-3 cmu-serif">
                    What's on your mind?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-black placeholder-gray-500 cmu-serif resize-none"
                    placeholder="Your Message or Question..."
                  />
                </div>

                {/* Submit Button */}
                <div ref={submitButtonRef} className={`text-center pt-6 scroll-animate ${submitButtonVisible ? 'animate' : ''}`}>
                  <button
                    type="submit"
                    className="bg-[#899878] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;


