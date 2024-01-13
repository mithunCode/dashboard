import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const StudentData = () => {
  const [studData, setStudData] = useState([]);

  useEffect(() => {
    setStudData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  const totalperc = studData.map((student) => student.perc);
  const pass = totalperc.filter((marks) => marks > 35).length;
  const fail = totalperc.filter((marks) => marks < 35).length;

  const chartData = {
    labels: ["Pass", "Fail"],
    datasets: [
      {
        data: [pass, fail],
        backgroundColor: ["green", "red"],
      },
    ],
  };
  const options = {
    tooltips: {
      enabled: true,
      mode: "single",
    },
  };

  return (
    <>
      <h1 className="p-5 font-bold text-3xl ">STUDENT DATA</h1>
      {studData.length > 0 ? (
        <div className="p-10 flex ">
          <div>
            <table className="table-fixed ">
              <thead>
                <tr className="p-1">
                  <th className="px-5">Roll Number</th>
                  <th className="px-5">Name</th>
                  <th className="px-5">C</th>
                  <th className="px-5">Python</th>
                  <th className="px-5">JavaScript</th>
                  <th className="px-5 text-green-600">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {studData?.map((student, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-5">{student.rollNo}</td>
                      <td className="px-5">{student.name}</td>
                      <td className="px-5">{student.marksC}</td>
                      <td className="px-5">{student.marksPython}</td>
                      <td className="px-5">{student.marksJavaScript}</td>
                      <td
                        className={`px-5 ${
                          student.perc > 35 ? "text-green-500" : "text-red-500"
                        } `}
                      >
                        {student.perc}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {studData && (
            <div className={`w-96  p-3 rounded-full`}>
              <Doughnut data={chartData} options={options} />
            </div>
          )}
        </div>
      ) : (
        <div className="p-5">No Data Found . Admin yet to upload</div>
      )}
    </>
  );
};

export default StudentData;
