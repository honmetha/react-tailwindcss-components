import { footerLinks } from "./footerLinks";

const NavigationBar = () => (
  <header className="bg-gray-200 w-full h-16">
    <ul className="flex items-center justify-between h-full">
      {footerLinks.map((item) => (
        <li className="mega-menu relative">
          <span>{item.header}</span>
          <span className="animated-arrow">
            <span></span>
            <span></span>
          </span>
          <ul className="absolute top-11 -left-4 dropdown_menu dropdown_menu-2">
            {item.subMenu.map((menu, index) => (
              <li
                className={`hidden opacity-0 bg-gray-200 dropdown_item-${
                  index + 1
                }`}
              >
                {menu.label}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </header>
);

export default NavigationBar;
