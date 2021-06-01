import { footerLinks } from "./footerLinks";

const NavigationBar = () => (
  <header className="bg-gray-200 w-full h-16">
    <ul className="flex items-center justify-between h-full">
      {footerLinks.map((item) => (
        <li>
          <span>{item.header}</span>
          <span className="animated-arrow">
            <span></span>
            <span></span>
          </span>
        </li>
      ))}
    </ul>
  </header>
);

export default NavigationBar;
