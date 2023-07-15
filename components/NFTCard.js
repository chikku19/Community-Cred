import React, { useState } from "react";

const NFTCard = ({ image, title, description }) => {
  const [isClaimed, setIsClaimed] = useState(false);
  return (
    <div class="rounded-2xl bg-gradient-to-r from-[#FF00F4] to-[#FF7400] p-1 shadow-xl">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl ">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end mt-8">
            <button
              onClick={() => setIsClaimed(true)}
              className={"btn btn-secondary" + (isClaimed ? " loading" : "")}
            >
              {!isClaimed ? " Claim" : "Claiming"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
