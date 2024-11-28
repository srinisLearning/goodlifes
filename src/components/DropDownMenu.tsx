
import { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = ({ items}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = (index:any) => {
    if (activeItem === index) {
      setActiveItem(null);
      setIsOpen(false);
    } else {
      setActiveItem(index);
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setActiveItem(null);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        {items.map((item:any, index:any) => (
          <li key={index} className="dropdown-item">
            <span onClick={() => toggleMenu(index)}>{item.label}</span>
            {
            activeItem === index && isOpen && (
              <ul className="submenu">
                {item.submenu.map((subItem:any, subIndex:any) => (
                  <li key={subIndex}>
                    <Link href={subItem.url}>
                      <a onClick={closeMenu}>{subItem.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;