import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "../../components/image/image.component";
import { BodyText } from "../../components/text/body-text.component";
import { DisplayText } from "../../components/text/display-text.component";
import { HeadingText } from "../../components/text/heading-text.component";
import { SubHeading } from "../../components/text/subheading.component";
import { constructRoutes } from "../../utilities/string.utilities";

export const Artwork = ({ art, nextItem, prevItem }) => {
  const [isDimmed, setIsDimmed] = useState(false);

  const toggleDim = () => setIsDimmed(!isDimmed);

  return (
    <>
      <section className="flex flex-col justify-between lg:flex-row lg:gap-6 py-10 px-10 mt-6 md:mt-10 lg:mt-[100px]">
        <div className="relative lg:w-1/2">
          <Image
            path={`${process.env.PUBLIC_URL}${art.images.hero.large}`}
            className="w-[400px] md:w-[490px]"
            altName={art.name}
          />
          <div
            onClick={toggleDim}
            className="group py-3.5 px-4 w-[152px] cursor-pointer bg-black/75 hover:bg-white/25 flex gap-3.5 absolute top-4 left-4 md:bottom-4 md:top-auto lg:bottom-8"
          >
            <Image
              path={`${process.env.PUBLIC_URL}/assets/shared/icon-view-image.svg`}
              className="w-3 h-3"
              altName="View Image Icon"
            />
            <SubHeading size="small" otherStyles="text-white">
              VIEW IMAGE
            </SubHeading>
          </div>
          <div className="bg-white absolute px-6 py-4 md:px-16 md:pt-0 bottom-0 md:top-0 md:left-[222px] md:bottom-auto md:pr-1 md:w-[455px] lg:w-[445px] lg:left-96">
            <HeadingText size="medium" otherStyles="text-left mb-6 md:text-[51px]">
              {art.name}
            </HeadingText>
            <SubHeading size="large">{art.artist.name}</SubHeading>
          </div>
          <Image
            altName={art.artist.name}
            path={`${process.env.PUBLIC_URL}${art.artist.image}`}
            className="absolute md:right-8 md:top-1/3 lg:left-[31.875rem] lg:top-[87.5%] w-16 md:w-auto"
          />
        </div>
        <div className="flex flex-col md:w-[90%] lg:w-1/2 z-10 self-center">
          <DisplayText otherStyles="text-right lg:text-[200px] lg:text-left lg:py-[10%] lg:-mb-14">
            {art.year}
          </DisplayText>
          <BodyText otherStyles="text-[#7d7d7d] text-justify lg:w-1/2">
            {art.description}
          </BodyText>
          <a
            href={art.source}
            rel="noreferrer"
            target="_blank"
            className="text-[#7d7d7d] underline mt-20 hover:text-black"
          >
            Go To Source
          </a>
        </div>
      </section>
      <footer className="w-full border-t border-t-[#e5e5e5] py-6 px-6 mt-[123px] flex items-center justify-between">
        <div>
          <p className="text-black text-[14px] leading-[17.36px] mb-2">{art.name}</p>
          <p className="text-black text-[10px] leading-[12px]">{art.artist.name}</p>
        </div>
        <div className="flex w-[10%] justify-center gap-9">
          <Link to={prevItem ? `../${constructRoutes(prevItem.name)}` : "/"}>
            <Image
              path={`${process.env.PUBLIC_URL}/assets/shared/icon-back-button.svg`}
              altName="Previous"
            />
          </Link>
          <Link to={nextItem ? `../${constructRoutes(nextItem.name)}` : "/"}>
            <Image
              path={`${process.env.PUBLIC_URL}/assets/shared/icon-next-button.svg`}
              altName="Next"
            />
          </Link>
        </div>
      </footer>
      {isDimmed && (
        <div className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black/80">
          <div className="flex flex-col gap-6 px-4">
            <div onClick={toggleDim} className="self-end">
              <SubHeading size="large" otherStyles="cursor-pointer">
                Close
              </SubHeading>
            </div>
            <Image
              altName={art.name}
              path={`${process.env.PUBLIC_URL}${art.images.gallery}`}
            />
          </div>
        </div>
      )}
    </>
  );
};
