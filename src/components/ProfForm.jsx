import { Controller, useForm } from "react-hook-form";

const ProfForm = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmitProf = (profdatafilled) => {
    console.log(profdatafilled);
    const profData = JSON.parse(localStorage.getItem("prof")) || [];
    profData.push(profdatafilled);
    localStorage.setItem("prof", JSON.stringify(profData));
    alert("Updated");
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-center p-1 text-2xl font-bold">Lecturer Entry</h1>
      <form
        onSubmit={handleSubmit(onSubmitProf)}
        className="m-5 bg-gray-100 rounded-lg shadow-md p-5 flex flex-col  items-end justify-center w-full"
      >
        <label className="">
          Professor Name :
          <Controller
            name="ProfName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className="rounded-lg px-1 mx-1 ml-10 border h-8 border-slate-300"
                required
              />
            )}
          />
        </label>
        <br />
        <label>
          Subject :
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
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

export default ProfForm;
