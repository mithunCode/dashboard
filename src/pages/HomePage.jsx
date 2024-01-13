import { Link } from "react-router-dom";
import StudentData from "../components/StudentData";
import ProfData from "../components/ProfData";

const HomePage = () => {
  return (
    <>
      <div className="text-xl bg-black text-white shadow-lg p-5 flex flex-row justify-between  items-center font-extrabold">
        <h1>DashBoard</h1>
        <Link
          className="bg-white rounded-lg text-lg text-black p-1 font-normal"
          to={"/login"}
        >
          Admin Login
        </Link>
      </div>
      <div className="">
        <StudentData />
        <ProfData />
      </div>
    </>
  );
};

export default HomePage;
