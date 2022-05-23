import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1)
  const [order,setOrder] = useState("ASC")
  const [orderTitle,setOrderTitle] = useState('Sort by Descending Salary')

  const getData = async () => {
    try{
      setLoading(true);
      let res = await fetch(`https://json-server-mocker-masai.herokuapp.com/candidates?_sort=salary&_order=${order}&_page=${page}&_limit=5`);
      let dat = await res.json();
      setData(dat);
      setLoading(false);
      // console.log(dat)
    }
    catch (err) {
      alert("Something went wrong")
    }
    
  };

  useEffect(()=>{
    getData();
  },[page,order])

  const handlePrev = ()=> {
    if(page > 1)setPage(page-1)
  }

  const handleNext = ()=> {
    console.log("clicked")
    setPage(page+1)
  }

  const handleOrder = ()=> {
    if(order === "ASC")
    {
      setOrder("DESC")
      setOrderTitle('Sort by Ascending Salary')
      setPage(1)
    }
    else
    {
      setOrder("ASC")
      setOrderTitle('Sort by Descending Salary')
      setPage(1)
    } 
  }

  return (
    <div className="App"> 
      <div>
        {loading? <div id="loading-container">...Loading</div> : ""}
        <Button id="SORT_BUTTON" title={orderTitle} onClick={()=>handleOrder()}/>
        <Button title="PREV" id="PREV" onClick={()=>handlePrev()}/>
        <Button id="NEXT" title="NEXT" onClick={()=>handleNext()}/>
      </div>
      {data.map((item) => {
        return(
          <CandidateCard item={item}/>
        )
        
      })}
    </div>
  );
}
