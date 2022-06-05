import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import
{
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
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import { Bar, Pie, Line } from 'react-chartjs-2';

import { db } from '../firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import './AdminPage.css'
import "gantt-task-react/dist/index.css";


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

const months = []
const funds_rec = []
const funds_use = []
const impacts = []
const usersCollectionRef = collection(db, "ngo_metrics");
console.log(months.length)

export const options_chart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  title: {
      display: true,
      text: 'Funds Recieved and Utilized monthly',
    },
  //maintainAspectRatio: false,
  scales:{
    y:{
      stepSize: 10000,
    }
  }
};

export const opt = {
  //maintainAspectRatio: false,
}

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

const labels = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Covishield',
      data: [ 20, 23, 56, 100, 24, 88, 66 ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Covaxin',
      data: [ 80, 53, 16, 70, 66, 45, 11 ],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



export const data2 = {
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
  datasets: [
    {
      labels,
      data: [ 12, 19, 3, 5, 2, 3 ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

//Bar Graph
export const val = {
  labels: months,
  datasets: [
    {
      label: 'Funds Received',
      data: funds_rec,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Funds Utilized',
      data: funds_use,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

//Line Chart
export const value = {
  labels:months,
  datasets: [
    {
      label: 'Funds Received',
      data: funds_rec,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Funds Utilized',
      data: funds_use,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

//Pie Chart
export const data4 = {
  labels: months,
  datasets: [
    {
      label: 'Funds Received',
      data: funds_rec,
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      borderWidth: 1,
    },
  ],
  
};


export const data5 = {
  labels: months,
  datasets: [
    {
      label: 'Funds Utilized',
      data: funds_use,
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      borderWidth: 1,
    },
  ],
  
};


export const data6 = {
  labels: months,
  datasets: [
    {
      label: '# of People Impacted',
      data: impacts,
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      borderWidth: 1,
    },
  ],
  
};




const AdminPage = () =>
{
  const[x1, setx1] = useState([])

    useEffect(()=>{
        const getx1 = async()=>{
            const data = await getDocs(usersCollectionRef);
            setx1(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))  
        };
        getx1();
      },[]);

      {x1.map((val)=>{
        months.push(val.month);
        funds_rec.push(val.funds_received);
        funds_use.push(val.funds_used);
        impacts.push(val.people_impacted);
        return;
    })}

  
  const [ programMetrics, setProgramMetrics ] = useState();
  const [ finalChartData, setFinalChartData ] = useState();
  const ganttTasks = [
    {
      "start": new Date( "2022-06-04T00:00:00.000Z" ),
      "end": new Date( "2022-06-11T00:00:00.000Z" ),
      "name": "Vaccinate 1000",
      "id": "Task 1",
      "styles": {
        "progressColor": "#ffbb54",
        "progressSelectedColor": "#ff9e0d"
      }
    },

    {
      "start": new Date( "2022-06-11T00:00:00.000Z" ),
      "end": new Date( "2022-06-18T00:00:00.000Z" ),
      "name": "Vaccinate 5000",
      "id": "Task 2",
      "styles": {
        "progressColor": "#ffbb54",
        "progressSelectedColor": "#ff9e0d"
      }
    },
    {
      "start": new Date( "2022-06-18T00:00:00.000Z" ),
      "end": new Date( "2022-06-25T00:00:00.000Z" ),
      "name": "Vaccinate 20000",
      "id": "Task 3",
      "styles": {
        "progressColor": "#ffbb54",
        "progressSelectedColor": "#ff9e0d"
      }
    },

  ]

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
      <div className='Pie-Chart'>
              <Pie options={opt} data={data1} />
              <Pie options={opt} data={data2} />
              <Pie options={opt} data={data3} />
          </div>

          <div className='Graph'>
              <Bar options={options} data={val}/>
              <Line options={options} data={value}/>
          </div>
      <div>{allProjects.length > 0 ?
        <Form.Select onChange={(e) => {setCurrentProgram(e.target.value)
         setFundIn(programs[e.target.value].funds_in);
          setFundOut(programs[e.target.value].funds_out)}}>
            {allProjects.map((p) => <option>{p}</option>)}
        </Form.Select> :
        <h3>Loading...</h3>
        }
      </div>
      <div>
        <Form.Select onChange={ ( e ) => setChartType( e.target.value ) }>
          <option>Bar</option>
          <option>Pie</option>
          <option>Line</option>
        </Form.Select>
      </div>
      <div className='chartContainer'>
        { chartType === "Bar" && <div style={ { height: "60vh", width: "70vw", position: "relative", marginBottom: "1%", padding: "1%" } }>
          <Bar options={ options } data={ chartData } />
        </div> }

        { chartType === "Pie" && <div style={ { height: "60vh", width: "70vw", position: "relative", marginBottom: "1%", padding: "1%" } }>
          <Pie data={ data2 } options={ { maintainAspectRatio: false } } />
        </div> }

        { chartType === "Line" && <div style={ { height: "60vh", width: "70vw", position: "relative", marginBottom: "1%", padding: "1%" } }>
          <Line options={ options } data={ chartData } />;
        </div> }
      </div>
      <div>
        <h1> Milestone Timeline </h1>
      </div>
      <div className='ganttChart'>
        <Gantt tasks={ ganttTasks } />
      </div>


    </div>
  )
}

export default AdminPage