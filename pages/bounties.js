import React from "react";
import styles from "../styles/Home.module.css";
import BountyCard from "../components/BountyCard";

const bounty_items = [
  {
    title: "Community Cleanup Initiative",
    description:
      "Reward individuals who organize and lead community cleanup events, fostering a cleaner and more sustainable local environment.",
    bounty: 100,
  },

  {
    title: "Supporting Small Businesses",
    description:
      "Recognize community members who frequently shop at local businesses, boosting the local economy and supporting entrepreneurship.",
    bounty: 230,
  },
  {
    title: "Volunteer Spotlight",
    description:
      "Highlight exceptional volunteers making a difference in the community, rewarding their dedication and inspiring others to get involved.",
    bounty: 300,
  },
  {
    title: "Promoting Arts and Culture",
    description:
      "Acknowledge individuals organizing events or initiatives that promote local art, culture, and heritage, nurturing a vibrant community.",
    bounty: 150,
  },
  {
    title: "Sustainable Innovations",
    description:
      "Reward innovative ideas or projects focused on sustainability, encouraging environmentally friendly practices within the community.",
    bounty: 200,
  },
  {
    title: "Community Wellness Advocacy",
    description:
      "Recognize individuals who actively promote wellness and healthy living in the community, inspiring others to prioritize their well-being.",
    bounty: 250,
  },
  {
    title: "Education Outreach Program",
    description:
      "Reward community members conducting educational workshops or programs, empowering others through knowledge and skills development.",
    bounty: 100,
  },
  {
    title: "Community Garden Project",
    description:
      "Recognize individuals creating and maintaining community gardens, fostering a sense of shared responsibility and sustainable food production.",
    bounty: 190,
  },
  {
    title: "Digital Inclusion Initiative",
    description:
      "Reward projects or efforts aimed at bridging the digital divide within the community, ensuring equal access to technology and digital resources.",
    bounty: 920,
  },
  {
    title: "Social Impact Documentary",
    description:
      "Support individuals creating impactful documentaries that shed light on local social issues, inspiring positive change and community action.",
    bounty: 500,
  },
];

const bounties = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="flex flex-col gap-[50px]">
          {bounty_items.map((bounty_item, index) => (
            <BountyCard
              title={bounty_item.title}
              description={bounty_item.description}
              bounty={bounty_item.bounty}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default bounties;
