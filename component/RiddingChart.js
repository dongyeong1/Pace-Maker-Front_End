import React ,{useState}from 'react'
import { Card } from 'antd';
import RunningChart from './RunningChart';
import BikeChart from './BikeChart'
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { FaRunning } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import { Affix, Button } from 'antd';
import dynamic from "next/dynamic";



const { TabPane } = Tabs;

import LoginForm from './LoginForm';

const { Meta } = Card;
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const bar = {
  // 바 그래프 더미데이터
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["월", "화", "수", "목", "금", "토", "일"],
    },
    grid: { show: false },
  },
  series: [
    {
      name: "라이딩 km",
      data: [30, 40, 45, 50, 49, 60, 90],
    },
  ],
};

const tabList = [
    {
      key: 'tab1',
      tab: <MdDirectionsBike size={28}/>,
    },
    {
      key: 'tab2',
      tab: <FaRunning  size={28}/>,
    },
    
  ];

  const contentList = {
    tab1: <p>이번주거리:20km<BikeChart />총거리:150km</p>,
    tab2: <p>이번주거리:20km<RunningChart/>총거리:150km</p>,
   
  };


function MyNote() {
    const [top, setTop] = useState(100);

   


    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  
    const onTab1Change = key => {
      setActiveTabKey1(key);
    };
 

  return (
    <div >
        
   
  <Card style={{width:350,height:260,borderRadius:30}}
  >
                  <h1>라이딩 주간일지</h1>
                  <div>
                    
                      <Chart
                        options={bar.options}
                        series={bar.series}
                        type="bar"
                        // width="480px"
                        height="200px"
                        width='300px'
                       
                        
                      />
                   
                  </div>
                </Card>
  
  
    </div>
  )
}

export default MyNote