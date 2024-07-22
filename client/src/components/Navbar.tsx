import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const jwtToken = useSelector((state: RootState) => state.auth.jwtToken);

 
  return (
    <div className="py-6  flex justify-center items-center bg-customBlue">
      <div className="w-[90%]  xl:w-[1200px] flex justify-between items-center">
        <Link
          to="/"
          className="nav-title font-extrabold flex items-center  text-lg sm:text-xl h-full gap-1 cursor-pointer"
        >
          <div className="flex justify-center items-center h-full">
            {/* <svg
              viewBox="0 0 24 24"
              className="w-[30px] h-[30px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9.772 4.28c.56-.144 1.097.246 1.206.814.1.517-.263 1.004-.771 1.14A7 7 0 1 0 19 12.9c.009-.5.4-.945.895-1 .603-.067 1.112.371 1.106.977L21 13c0 .107-.002.213-.006.32a.898.898 0 0 1 0 .164l-.008.122a9 9 0 0 1-9.172 8.392A9 9 0 0 1 9.772 4.28z"
                  fill="#fff"
                ></path>
                <path
                  d="M15.93 13.753a4.001 4.001 0 1 1-6.758-3.581A4 4 0 0 1 12 9c.75 0 1.3.16 2 .53 0 0 .15.09.25.17-.1-.35-.228-1.296-.25-1.7a58.75 58.75 0 0 1-.025-2.035V2.96c0-.52.432-.94.965-.94.103 0 .206.016.305.048l4.572 1.689c.446.145.597.23.745.353.148.122.258.27.33.446.073.176.108.342.108.801v1.16c0 .518-.443.94-.975.94a.987.987 0 0 1-.305-.049l-1.379-.447-.151-.05c-.437-.14-.618-.2-.788-.26a5.697 5.697 0 0 1-.514-.207 3.53 3.53 0 0 1-.213-.107c-.098-.05-.237-.124-.521-.263L16 6l.011 7c0 .255-.028.507-.082.753h.001z"
                  fill="#fff"
                ></path>
              </g>
            </svg> */}
          </div>
          <h1 className="text-xl">groovify</h1>
        </Link>
        <div>
          {!jwtToken && (
            <button
              onClick={() =>
                (window.location.href = `${import.meta.env.VITE_URL}/login`)
              }
              type="button"
              className="hidden lg:block w-[180px] py-2 text-sm bg-customLightBlue font-bold rounded-full"
            >
              Sign in with Spotify
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
