import React from "react";
import CommunityCard from "../components/CommunityCard";

// Array of mock forum entries
const forumData = [
  {
    title: "How can we organize a successful community cleanup event?",
    description:
      "We are planning a community cleanup event and would love some tips and suggestions on how to make it a successful and impactful event.",
    comments: 12,
    author: "Samantha Johnson",
    image: "https://source.unsplash.com/featured/?avatar",
    solved: true,
  },
  {
    title: "What are some creative ways to promote local art exhibitions?",
    description:
      "We have upcoming art exhibitions in our community and we need innovative ideas to promote them effectively. Any suggestions?",
    comments: 7,
    author: "John Doe",
    image: "https://source.unsplash.com/featured/?profile",
    solved: false,
  },
  {
    title: "Looking for recommendations on local book clubs.",
    description:
      "I'm an avid reader and I would like to join a book club in my area. Any recommendations for local book clubs with engaging discussions?",
    comments: 4,
    author: "Emily Smith",
    image: "https://source.unsplash.com/featured/?portrait",
    solved: true,
  },
  {
    title: "How to engage more volunteers in community service projects?",
    description:
      "We have several ongoing community service projects, but we're struggling to attract volunteers. Any suggestions on how to increase engagement?",
    comments: 10,
    author: "Robert Thompson",
    image: "https://source.unsplash.com/featured/?person",
    solved: false,
  },
  {
    title: "Ideas for organizing a community art festival?",
    description:
      "We're planning an art festival to celebrate local artists. Looking for ideas on activities, performances, and logistics to make it a memorable event.",
    comments: 8,
    author: "Sophia Rodriguez",
    image: "https://source.unsplash.com/featured/?face",
    solved: false,
  },
  {
    title: "Recommendations for local hiking trails with scenic views?",
    description:
      "I enjoy hiking and exploring nature. Any recommendations for local hiking trails that offer breathtaking scenic views?",
    comments: 6,
    author: "David Lee",
    image: "https://source.unsplash.com/featured/?model",
    solved: true,
  },
  {
    title: "Tips for starting a community garden?",
    description:
      "I'm interested in starting a community garden in our neighborhood. Looking for tips on finding a suitable location and getting started.",
    comments: 9,
    author: "Mark Johnson",
    image: "https://source.unsplash.com/featured/?people",
    solved: true,
  },
  {
    title: "Seeking advice on organizing a neighborhood watch program.",
    description:
      "We want to establish a neighborhood watch program to enhance safety. Any advice on getting started and ensuring community participation?",
    comments: 5,
    author: "Emma Wilson",
    image: "https://source.unsplash.com/featured/?girl",
    solved: false,
  },
  {
    title: "Looking for local volunteering opportunities during weekends.",
    description:
      "I have free time on weekends and would like to give back to the community. Any suggestions for local volunteering opportunities?",
    comments: 3,
    author: "Daniel Brown",
    image: "https://source.unsplash.com/featured/?man",
    solved: true,
  },
  {
    title: "Advice on organizing a community sports tournament?",
    description:
      "We want to organize a sports tournament to promote physical activity. Seeking advice on logistics, team registration, and ensuring fair play.",
    comments: 11,
    author: "Olivia Davis",
    image: "https://source.unsplash.com/featured/?woman",
    solved: false,
  },
];

console.log(forumData);

const community = () => {
  return (
    <div className="p-8 pt-12">
      <div className="grid grid-cols-2 gap-8">
        {forumData.map((forumEntry, index) => (
          <CommunityCard
            title={forumEntry.title}
            description={forumEntry.description}
            author={forumEntry.author}
            comments={forumEntry.comments}
            image={forumEntry.image}
            solved={forumEntry.solved}
          />
        ))}
      </div>
    </div>
  );
};

export default community;
