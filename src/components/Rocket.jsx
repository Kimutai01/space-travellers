import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchedRockets } from "../redux/rocket/rocket";

const Rocket = () => {
  const dispatch = useDispatch()
  const allRockets = useSelector((state)=>state.rockets)
  useEffect(()=>{
    if(!allRockets.length)dispatch(fetchedRockets())
  },[dispatch])
  return (
    <div>
      {allRockets.map((rocket) => {
        <h2>{rocket.description}</h2>
      })}
    </div>
  );
};

export default Rocket;
