import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-gray-950 px-20 space-x-20 flex">
      <div className="w-1/3">
        <h3 className="font-bold text-3xl text-gray-300 text-start">
          Hot and cheesy, fast and breezy, Our pizza's here to make you smile!
        </h3>
      </div>
      <div className="w-2/3 space-x-14 flex">
        <div className="text-sm space-y-3">
          <h5 className="font-bold text-orange-500">FIND US</h5>
          <p className="font-normal text-gray-400">
            No. 58, Ward No. 18,
            <br />
            Shrinagar, Siwan, Siwan,
            <br />
            Bihar, PIN - 841226
          </p>
        </div>
        <div className="text-sm space-y-3">
          <h5 className="font-bold text-orange-500">WORKING HOURS</h5>
          <p className="font-normal text-gray-400">
            MONDAY - SATURDAY
            <br />
            10:00 AM - 10:00 PM
          </p>
          <p className="font-normal text-gray-400">
            SUNDAY
            <br />
            10:00 AM - 02:00 PM
          </p>
        </div>
        <div className="text-sm space-y-3">
          <h5 className="font-bold text-orange-500">LOCATE US</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0895098593196!2d84.33983597441488!3d26.22628098925428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ff2a2a48750f%3A0xa89bec0265913b38!2sFreelancer%20Full%20Stack%20Web%20Developer%20%7C%20Sandeep%20Kumar!5e0!3m2!1sen!2sin!4v1699374561540!5m2!1sen!2sin"
            width="320"
            height="180"
            title="Sandeep Kumar"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl shadow"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
