import { Link } from "react-router-dom";
import { Image } from "../image/image.component";
import { constructRoutes } from "../../utilities/string.utilities";
import { HeadingText } from "../text/heading-text.component";
import { SubHeading } from "../text/subheading.component";

export const MainThumb = ({ name, imageURL, text, artist }) => (
  <Link to={`/${constructRoutes(name)}`}>
    <div className="relative group">
      <Image
        className="w-full h-full"
        path={process.env.PUBLIC_URL + imageURL}
        altName={name}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.85] group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-0 z-10 p-8">
        <HeadingText size="medium" otherStyles="text-white">{text}</HeadingText>
        <SubHeading size="small" otherStyles="text-white">{artist}</SubHeading>
      </div>
    </div>
  </Link>
);
