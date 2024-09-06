import { MainThumb } from "./MainThumb.component";

export const HomeContent = ({ artwork }) => {
  return (
    <main className="py-10">
      <section className="hidden lg:grid lg:grid-cols-4 lg:gap-10 px-6">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="flex flex-col gap-10">
            {artwork.slice(col * 4, col * 4 + 4).map((art, index) => (
              <MainThumb
                key={index}
                name={art.name}
                imageURL={art.images.gallery}
                text={art.name}
                artist={art.artist.name}
              />
            ))}
          </div>
        ))}
      </section>
      <section className="hidden md:grid md:grid-cols-2 md:gap-10 lg:hidden px-6">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-10">
            {artwork.slice(col * 7, col * 7 + 7).map((art, index) => (
              <MainThumb
                key={index}
                name={art.name}
                imageURL={art.images.gallery}
                text={art.name}
                artist={art.artist.name}
              />
            ))}
          </div>
        ))}
      </section>
      <section className="grid grid-cols-1 md:hidden lg:hidden px-6 gap-10">
        {artwork.map((art, index) => (
          <MainThumb
            key={index}
            name={art.name}
            imageURL={art.images.gallery}
            text={art.name}
            artist={art.artist.name}
          />
        ))}
      </section>
    </main>
  );
};
