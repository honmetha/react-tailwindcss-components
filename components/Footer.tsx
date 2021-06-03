import { useState } from "react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2 onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
        Click here to expand
      </h2>
      <ul
        className={
          isExpanded
            ? "max-h-0 transition-all duration-300 ease-in overflow-hidden max-h-96"
            : "max-h-0 transition-all duration-300 ease-in-out overflow-hidden"
        }
      >
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ul>
    </div>
  );
};

export default Footer;
