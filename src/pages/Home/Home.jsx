// import React from 'react'
// import './home.css'
// import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
// import Chart from '../../components/chart/Chart'
// import {UserData} from "../../dummyData"
// import WidgetLg from '../../components/widgetLg/WidgetLg'
// import WidgetSm from '../../components/widgetSm/WidgetSm'
// export default function Home() {
//   return (
//     <div className='home'>
//       <FeaturedInfo/>
//       <Chart data={UserData} title="User Analytics" grid datakey="Active User"/>
//     <div className="homeWidgets">
//       <WidgetSm/>
//       <WidgetLg/>

//     </div>
//     </div>
//   )
// }

import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { UserData } from "../../dummyData";
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={UserData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
