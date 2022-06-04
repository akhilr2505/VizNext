import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar,Pie,Line } from 'react-chartjs-2';

import { db } from '../firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import './AdminPage.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  layout: {
    padding: {
      top: 5,
      left: 15,
      right: 15,
      bottom: 15
    },
    minHeight: 50,
    width: 40,
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Covishield',
      data: [20,23,56,100,24,88,66],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Covaxin',
      data: [80,53,16,70,66,45,11],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};





const AdminPage = () => {

  const [programs, setPrograms] = useState();
  const [allProjects, setAllProjects] = useState([]);
  const [currentProgram, setCurrentProgram] = useState();
  const programCollectionRef = collection(db, "program_metrics");
  const [fundIn, setFundIn] = useState([]);
  const [fundOut, setFundOut] = useState([]);
  
  useEffect(() => {
    const getPrograms = async () => {
    const data = await getDocs(programCollectionRef);
    let programIds = [];
    let allPrograms = [];
    data.docs.map((doc) => {
      const obj = doc.data();
      programIds[obj.name] = {
        "funds_in" : obj.funds_in,
        "funds_out": obj.funds_out
      }
      allPrograms.push(obj.name);
    });
    setAllProjects(allPrograms);
    console.log(programIds)
    setPrograms(programIds);

    }
    getPrograms();
  },[]);

  const [chartType, setChartType] = useState("Bar");
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September'].slice(0, fundIn.length);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Fund in',
        data: fundIn,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Funds Out',
        data: fundOut,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  }

  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'].slice(0, fundIn.length),
    datasets: [
      {
        labels,
        data: fundIn,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ].slice(0, fundIn.length),
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ].slice(0, fundIn.length),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='adminPage'>
      <div>
        <h1>Admin Dashboard</h1>
      </div>
      <div>{allProjects.length > 0 ?
        <Form.Select onChange={(e) => {setCurrentProgram(e.target.value)
         setFundIn(programs[e.target.value].funds_in);
          setFundOut(programs[e.target.value].funds_out)}}>
            {allProjects.map((p) => <option>{p}</option>)}
          {/* <option>education_foundation</option>
          <option>healthcare_foundation</option>
          <option>hunger_foundation</option> */}
        </Form.Select> :
        <h3>Loading...</h3>
        }
      </div>
      <div>
        <Form.Select onChange={(e) => setChartType(e.target.value)}>
          <option>Bar</option>
          <option>Pie</option>
          <option>Line</option>
        </Form.Select>
      </div>
      <div className='chartContainer'> 
        {chartType === "Bar" && <div style={{height:"60vh", width: "70vw",position:"relative", marginBottom:"1%", padding:"1%"}}>
          <Bar options={options} data={chartData} />
        </div>}

        {chartType === "Pie" &&  <div style={{height:"60vh", width: "70vw",position:"relative", marginBottom:"1%", padding:"1%"}}>
          <Pie data={data2} options={{maintainAspectRatio:false}}/>
        </div>}

        {chartType === "Line" && <div style={{height:"60vh", width: "70vw",position:"relative", marginBottom:"1%", padding:"1%"}}>
          <Line options={options} data={chartData} />;
        </div>}
      </div>
     
    </div>
  )
}

export default AdminPage