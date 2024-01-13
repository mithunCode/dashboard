import { useForm, Controller } from "react-hook-form";

const StudentForm = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmitStudent = (data) => {
    console.log(data.marksC);
    let perc = Math.floor(
      (+data.marksC + +data.marksPython + +data.marksJavaScript) / 3
    );
    let res = perc > 35 ? "pass" : "fail";
    data = { ...data, perc, res };
    console.log(data);
    const studentsData = JSON.parse(localStorage.getItem("students")) || [];
    studentsData.push(data);
    localStorage.setItem("students", JSON.stringify(studentsData));
    alert("Updated");
    reset();
  };

  return (
    <>
      <div className="flex justify-center items-start gap-10">
        <div className="w-full">
          <h1 className="text-center p-1 text-2xl font-bold">Student Entry</h1>
          <form
            onSubmit={handleSubmit(onSubmitStudent)}
            className="p-2 m-5 bg-gray-100 shadow-md rounded-lg p-5 flex flex-col  items-end justify-center w-full"
          >
            <label className="flex justify-center items-center ">
              Student Name :
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="rounded-lg px-1 mx-1  ml-10  border h-8 border-slate-300"
                    required
                  />
                )}
              />
            </label>
            <br />
            <label className="flex justify-center items-center ">
              Roll Number:
              <Controller
                name="rollNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="rounded-lg px-1 mx-1 ml-10  border h-8 border-slate-300"
                    required
                  />
                )}
              />
            </label>
            <br />
            <label className="flex justify-center items-center ">
              Marks in C:
              <Controller
                name="marksC"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="rounded-lg px-1 mx-1 ml-10  border h-8 border-slate-300"
                    required
                  />
                )}
              />
            </label>
            <br />
            <label className="flex justify-center items-center">
              Marks in Python:
              <Controller
                name="marksPython"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="rounded-lg px-1 mx-1 ml-10  border h-8 border-slate-300"
                    required
                  />
                )}
              />
            </label>
            <br />
            <label>
              Marks in JavaScript:
              <Controller
                name="marksJavaScript"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
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
      </div>
    </>
  );
};

export default StudentForm;
