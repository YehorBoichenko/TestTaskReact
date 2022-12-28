import { useState, useEffect } from "react";
import Description from "./Description";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function Images() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";

    axios
      .get(
        `${apiRoot}/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=${count}`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      });
  };

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="container mx-auto px-5 2xl:px-0">
          <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
            Recommended Images For You
          </h1>

          {!images ? (
            <div>
              <h1>Loading...</h1>
            </div>
          ) : (
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
              {images.map((image) => (
                <Description key={image.id} {...image} />
              ))}
            </section>
          )}
        </div>
      </InfiniteScroll>
    </>
  );
}
