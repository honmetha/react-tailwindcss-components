import { useState } from "react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2 onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
        Click here to expand
      </h2>
      <ul
        className={isExpanded ? "footer-list footer-expanded" : "footer-list"}
      >
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ul>
    </div>
  );
};

export default Footer;
