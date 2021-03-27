import React, { useState } from "react";
import "./_categoriesbar.scss";

const keywords = [
  "All",
  "React",
  "Live",
  "MKBHD",
  "Graph QL",
  "Tanmay Bhat",
  "Context API",
  "Comedy",
  "Standups",
  "Cricket",
  "Music",
  "Flutter",
  "Jonathon Morisson",
  "Brian Design",
  "Web Series",
  "TV Series Trailers",
  "Recently Uploaded"
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value)
  }

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span onClick={() => handleClick(value)} key={i}
        className={activeElement === value ? "active" : ""}>
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;