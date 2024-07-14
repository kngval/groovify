import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

const Popularity = () => {
  const tracks = useSelector((state: RootState) => state.tracks.tracks?.items);
  const [popularity, setPopularity] = useState({
    obscure: 0,
    average: 0,
    popular: 0,
  });
  useEffect(() => {
    if (tracks) {
      const newPopularity = {
        obscure: 0,
        average: 0,
        popular: 0,
      };
      tracks?.forEach((track) => {
        if (track.popularity <= 45) {
          newPopularity.obscure += 1;
        } else if (track.popularity <= 60) {
          newPopularity.average += 1;
        } else {
          newPopularity.popular += 1;
        }
      });

      setPopularity(newPopularity);
    }
  }, [tracks]);

  useEffect(() => {
    console.log("Popularity :", popularity);
  }, [popularity]);

  return (
    <div className="bg-customBlue px-6 py-6 w-full md:rounded-md">
      <div className="font-extrabold text-xl mb-5 ">By Popularity</div>
      <div>
        <div className="flex  items-center gap-2">
          <span className="text-sm w-[70px] lg:w-[100px] font-semibold whitespace-nowrap ">
            Obscure
          </span>
          <div className=" h-[10px] w-full">
            <div
              style={{
                width: `${
                  popularity.obscure > popularity.average &&
                  popularity.obscure > popularity.popular
                    ? "100%"
                    : `${
                        (popularity.obscure /
                          popularity.average /
                          popularity.popular) *
                        100
                      }%`
                }`,
              }}
              className="bg-customLightBlue rounded-full h-full"
            ></div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex  items-center gap-2">
          <span className="text-sm  w-[70px] lg:w-[100px] font-semibold whitespace-nowrap">
            Average
          </span>

          <div className=" h-[10px] w-full">
            <div
              style={{
                width: `${
                  popularity.average > popularity.obscure &&
                  popularity.average > popularity.popular
                    ? "100%"
                    : `${popularity.average}%`
                }`,
              }}
              className="bg-customLightBlue rounded-full h-full"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center ">
          <span className="text-sm w-[70px] lg:w-[100px] font-semibold whitespace-nowrap">
            Popular
          </span>
          <div className=" h-[10px] w-full">
            <div
              style={{
                width: `${
                  popularity.popular > popularity.obscure &&
                  popularity.popular > popularity.average
                    ? "100%"
                    : `${
                        (popularity.popular /
                          popularity.obscure /
                          popularity.average) *
                        100
                      }%`
                }`,
              }}
              className="bg-customLightBlue rounded-full h-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularity;