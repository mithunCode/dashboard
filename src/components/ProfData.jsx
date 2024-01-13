import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const ProfData = () => {
  const [profData, setProfData] = useState([]);
  const [studData, setStudData] = useState([]);
  useEffect(() => {
    setProfData(JSON.parse(localStorage.getItem("prof")) || []);
    setStudData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  const totalPassC = studData.filter((student) => student.marksC > 35).length;
  const totalFailC = studData.filter((student) => student.marksC < 35).length;
  const totalPassPython = studData.filter(
    (student) => student.marksPython > 35
  ).length;
  const totalFailPython = studData.filter(
    (student) => student.marksPython < 35
  ).length;
  const totalPassJavaScript = studData.filter(
    (student) => student.marksJavaScript > 35
  ).length;
  const totalFailJavaScript = studData.filter(
    (student) => student.marksJavaScript < 35
  ).length;

  const totalRes = [
    [totalPassC, totalFailC],
    [totalPassJavaScript, totalFailJavaScript],
    [totalPassPython, totalFailPython],
  ];

  const newProfData = profData.map((prof, i) => ({
    ...prof,
    totalM: totalRes[i],
  }));
  const chartData = {
    labels: ["C", "Js", "Python"],
    datasets: [
      {
        data: [totalPassC, totalPassJavaScript, totalFailPython],
        backgroundColor: ["#36A2EB", "#FF6384", "#36B"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },
  };

  return (
    <>
      <h1 className="p-5 font-bold text-3xl ">PROFESSOR DATA</h1>
      {profData.length > 0 ? (
        <div className="p-10 flex ">
          <div>
            <table className="table-fixed ">
              <thead>
                <tr className="p-1">
                  <th className="px-5">Name</th>
                  <th className="px-5">Subject</th>
                  <th className="px-5">Number of Students Passed</th>
                  <th className="px-5">Number of Students Failed</th>
                </tr>
              </thead>
              <tbody>
                {profData?.map((prof, i) => {
                  return (
                    <tr key={prof.ProfName}>
                      <td className="px-5">{newProfData[i]?.ProfName}</td>
                      <td className="px-5">{newProfData[i]?.subject}</td>
                      <td className="px-5">{newProfData[i]?.totalM[0]}</td>
                      <td className="px-5">{newProfData[i]?.totalM[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {profData && (
            <div className={`w-96  p-3 rounded-full`}>
              <Doughnut data={chartData} options={options} />{" "}
            </div>
          )}
        </div>
      ) : (
        <div className="p-5">No Data Found . Admin yet to upload</div>
      )}
    </>
  );
};

export default ProfData;
