import { Link, Outlet, useMatch } from "react-router-dom";
import { LinkText } from "../text/link-text.component";
import { data } from "../../data/data";
import { constructRoutes } from "../../utilities/string.utilities";

export const Header = () => {
  const isHome = useMatch("/");
  const linkPath = isHome ? `/${constructRoutes(data[0].name)}` : "/";
  const linkText = isHome ? "Start SlideShow" : "Stop SlideShow";
  return (
    <div>
      <header className="flex items-center justify-between px-10 pt-10 border-b border-b-med-grey pb-9">
        <Link to="/" className="w-2/6">
          <img src={`${process.env.PUBLIC_URL}/assets/shared/logo.svg`} alt="logo" />
        </Link>
        <Link to={linkPath}>
          <LinkText size="large">{linkText}</LinkText>
        </Link>
      </header>
      <Outlet />
    </div>
  );
};
