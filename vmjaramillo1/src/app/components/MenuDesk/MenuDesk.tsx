import { Link } from "react-scroll";
import homeInfo from "app/data/containers/home.json";

const MenuDesk = (props) => {
  const { menuItems } = homeInfo.menu;

  return (
    <div className={props?.className}>
      {menuItems.map(({ id, name, linkTo }) => {
        return (
          <Link
            key={id}
            activeClass="!text-primary-500"
            className="body2 mx-xs font-semibold text-white"
            to={linkTo}
            spy
            smooth
            duration={600}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuDesk;
