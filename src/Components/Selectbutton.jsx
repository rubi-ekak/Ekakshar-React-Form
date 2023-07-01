import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "3D design", value: "3D design" },
  { label: "Product design", value: "Product design" },
  { label: "3D Printing", value: "3D Printing" },
  { label: "Small scale Manufacturing", value: "Small scale Manufacturing" },
  { label: "Other", value: "Other" },
];

const Selectbutton = ({setSelectedValue}) => {
  const [selected, setSelected] = useState([]);
  // useEffect(()=>{
   
  //   ;
  // },[setSelected])
const  handleSelect=(e)=>{
 setSelected(e)

}
setSelectedValue(selected)
 console.log(selected)

  return (
    <div>
      {/* <h1>Select Fruits</h1> */}
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        selected={false}
        onChange={handleSelect}
        labelledBy="Select"
        // className="position-fixed flex-1"
      />
    </div>
  );
};

export default Selectbutton;