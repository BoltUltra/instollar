import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ContactInfo = ({ contactPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20 bg-background">
      <div className="flex md:flex-row flex-col gap-8 md:justify-between">
        <div className="space-y-4 md:order-first order-last">
          {contactPage?.contactInfo.map((info) => (
            <div className="flex space-x-4">
              <Image
                src={urlFor(info.icon).url()}
                width={48}
                height={48}
                alt="contact icon"
                className=""
              />
              <div className="space-y-1">
                <h3 className="font-semibold text-xl">{info.header}</h3>
                <p>{info.text}</p>
                <p>{info.contactLink}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:mb-0 mb-10">
          <div>
            <h4 className="md:text-[44px] text-3xl mb-5">Send a Message</h4>
            <p>
              Fill out the form, and someone in our team will get back to you
              shortly.
            </p>
          </div>
          <form action="" className="grid md:grid-cols-2 mt-8 gap-8">
            <div className="flex flex-col space-y-2">
              <label htmlFor="fname">
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="lname">
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Second name"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="form-input"
                placeholder="you@company.com"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="phone">
                Phone number<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="+234 6 00 00 00 00"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="message">
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={10}
                className="form-input"
                placeholder="Leave us a message"
              ></textarea>
            </div>
            <div className="space-x-2 md:col-span-2">
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="message" className="">
                By checking this box, I agree to allow Instollar representatives
                to contact me.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
