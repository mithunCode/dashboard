import ProfForm from "../components/ProfForm";
import StudentForm from "../components/StudentForm";

const Admin = () => {
  return (
    <>
      <h1 className="text-xl bg-black text-white shadow-lg p-5 text-center font-extrabold">
        Admin DashBoard
      </h1>{" "}
      <div className="flex flex-row gap-36 justify-center mt-2 w-full items-start">
        <StudentForm />
        <ProfForm />
      </div>
    </>
  );
};

export default Admin;
