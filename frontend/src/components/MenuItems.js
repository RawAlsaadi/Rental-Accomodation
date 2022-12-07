
const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
        <a href={items.url}>{items.title}</a>
    </li>
  );
};

export default MenuItems;