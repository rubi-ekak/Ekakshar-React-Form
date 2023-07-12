import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const CountryPhone = ({setinputphone}) => {
    const [state,setState]=useState("")
    console.log(state.phone)
    setinputphone(state.phone)
  return (
    <div>
    
<PhoneInput
  country={'us'}
  
  value={state.phone}
  onChange={phone =>setState({ phone })}
/> 
    </div>
  )
}

export default CountryPhone
