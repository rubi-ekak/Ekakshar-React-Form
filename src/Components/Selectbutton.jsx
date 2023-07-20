import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "3D design", value: "3D design",name:"3D design" },
  { label: "Product design", value: "Product design",name:"Product design" },
  { label: "3D Printing", value: "3D Printing",name:"3D Printing" },
  { label: "Small scale Manufacturing", value: "Small scale Manufacturing",name:"Small scale Manufacturing" },
  { label: "Other", value: "Other",name:"Other" },
  
];

const arr = [];
const Selectbutton = ({ setSelectedValue }) => {
  const [selected, setSelected] = useState([]);
  // useEffect(()=>{

  //   ;
  // },[setSelected])
  const handleSelect = (e) => {
    setSelected(e);
  };
  setSelectedValue(selected);
  if (selected.length >= 1) {
    selected.map((ele) => {
      console.log(ele.value);
      if (!arr.includes(ele.value)) {
        arr.push(ele.value);
      } else {
        console.log("not array");
      }
    });
  }
  else{
    console.log("no select services")
  }
  console.log("array", arr);
  //  selected.map((e)=>{
  //     console.log(e)
  //  })
 
  return (
    <div>
      {/* <h1>Select Fruits</h1> */}
      <pre>{JSON.stringify(selected)}</pre>
     
      <MultiSelect
      name={selected}
        options={options}
        isObject={false}
        value={selected}
        selected={false}
        onChange={handleSelect}
        // labelledBy="Select"
        hasSelectAll={false}
        displayValue="value"
        // className="position-fixed flex-1"
      />
    </div>
  );
};

export default Selectbutton;
