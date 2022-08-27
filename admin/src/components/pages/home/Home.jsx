import Chart from "../../charts/Chart"
import "./home.scss"
import WidgetSm from "../../widgetSm/WidgetSm"
import { WidgetLg } from "../../widgetLg/WidgetLg"
import axios from "../../../axios";
import { useEffect, useMemo, useState } from 'react';

const Home = () => {
    const month = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"], []);
    const [userStats, setUserStats] = useState([]);
    const getStats = async()=>{
      try{
          const res = await axios.get("/users/stats",{
             headers: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzllYmExYTc2YjU4MGM2MTFmYTAzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY3MzY0MH0.O5A3VxV4aJz82gmCplVNQu6bNJxgpJSa31lakCgUbUA"
            }
          });
          const statsList = await res.data.data.sort((a, b)=>{
              return a._id - b._id
          })
          await statsList.map((item)=> setUserStats((prev)=>[
            ...prev,
            {name: month[item._id - 1], "New User": item.total}
          ]))
          console.log(userStats)
      }catch(e){
        console.log(e)
      }
    }
    useEffect(() => {
      getStats()
    }, [])
  
    return (
        <div className='home'>
            {/* <FeaturedInfo/> */}
            <Chart title="User Analytics" data={userStats} dataKey="New User"/>
            <div className="container">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
