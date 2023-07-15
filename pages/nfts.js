import React from "react";
import NFTCard from "../components/NFTCard";

const nftRewards = [
  {
    title: "Community Champion",
    description: "Actively involved in community events and initiatives.",
  },
  {
    title: "Local Business Advocate",
    description: "Supporter of local businesses, driving economic growth.",
  },
  {
    title: "Sustainable Steward",
    description: "Committed to eco-conscious practices and sustainability.",
  },
  {
    title: "Creative Contributor",
    description: "Inspiring artistic contributions to the community.",
  },
  {
    title: "Volunteer Virtuoso",
    description: "Dedication to volunteer work and helping others.",
  },
  {
    title: "Event Enthusiast",
    description: "Active participant in community events and gatherings.",
  },
];

const nfts = () => {
  return (
    <div className="p-8 pt-12">
      <div className="grid grid-cols-3 gap-6">
        {nftRewards.map((nftReward, index) => (
          <NFTCard
            image={`/image${index + 1}.svg`}
            title={nftReward.title}
            description={nftReward.description}
          />
        ))}
      </div>
    </div>
  );
};

export default nfts;
