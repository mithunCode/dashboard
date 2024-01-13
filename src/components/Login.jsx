import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { control } = useForm();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-center  text-2xl font-bold bg-black text-white  w-full p-5">
        Admin Login
      </h1>
      <form
        onSubmit={() => {
          navigate("/admin");
        }}
        className="m-5 bg-gray-100 rounded-lg shadow-md py-10 p-5 flex flex-col items-end justify-center "
      >
        <label className="">
          Email :
          <Controller
            name="Admin Email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="rounded-lg px-1 mx-1 ml-10 border h-8 border-slate-300"
                required
              />
            )}
          />
        </label>
        <br />
        <label>
          Password :
          <Controller
            name="Password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="rounded-lg px-1 mx-1 ml-10 border h-8 border-slate-300"
                required
              />
            )}
          />
        </label>
        <br /> <br />
        <button
          type="submit"
          className="bg-black text-white rounded-lg p-2 w-36 ml-[25%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
