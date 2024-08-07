import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const GenresComponent = () => {
  const genres = useSelector(
    (state: RootState) => state.genres.genres?.sortedGenres
  );
  const wrapper =
    "bg-customBlue py-12 md:rounded-lg flex flex-col items-center gap-10";
  return (
    <div className={wrapper}>
      {genres && genres.length > 0 && (
        <div className="grid gap-5 w-[80%]">
          {genres.map((genre, index) => (
            <div className="flex gap-5 items-center" key={index}>
              <div className="text-end w-[20px]">
                <h1 className="text-customGray text-end font-bold">
                  {index + 1}
                </h1>
              </div>
              <div>
                <h1 className="text-sm uppercase">{genre[0]}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <Link
          to="/my-stats/genres"
          style={{
            display: `${
              location.pathname === "/my-stats/overview" ? "block" : "none"
            }`,
          }}
          className="text-customLightBlue text-md"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default GenresComponent;
