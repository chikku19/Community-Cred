import React from "react";

const BountyCard = ({ title, description, bounty, index }) => {
  return (
    <div class="rounded-2xl bg-gradient-to-r from-[#FF00F4] to-[#FF7400] p-1 shadow-xl">
      <a class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div class="mt-2">
          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>

          <p class="mt-2 text-sm text-gray-500">{description}</p>
          <div className="flex justify-end mt-4">
            <label
              htmlFor={"modal" + index}
              className="btn btn-secondary "
              data-tip="participate"
            >
              {bounty} &nbsp; <i class="fa-solid fa-trophy"></i>
            </label>
          </div>
        </div>
      </a>
      <input type="checkbox" id={"modal" + index} className="modal-toggle" />
      <label htmlFor={"modal" + index} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            {title} &nbsp; <i class="fa-solid fa-trophy"></i>
          </h3>
          <p className="py-4">{description}</p>

          <div className="mt-2 mb-8">
            <strong>Location:</strong>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9048964764866!2d77.59257997605731!3d12.977934314737398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1673e7d0672f%3A0xc62ca5a6e943dfb8!2sCubbon%20Park!5e0!3m2!1sen!2sin!4v1684618580667!5m2!1sen!2sin"
              width="450"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button className="btn btn-secondary btn-block">Submit</button>
        </label>
      </label>
    </div>
  );
};

export default BountyCard;
