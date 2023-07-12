// not link  backend in this file

import React, { useEffect } from "react";
import { useState } from "react";
import "./Form.css";
import { useRef } from "react";
import Selectbutton from "./Selectbutton";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";



import emailjs from "@emailjs/browser";
import CountryPhone from "./CountryPhone";
let optionresult=0
let result;

const initialValues = {
  name: "",
  email: "",
  phone_number:"",
  address: "",
  address2: "",
  city: "",
  pincode:"",
  other: "",
  service_name:"",
  product_name: "",
  height: "",
  breadth: "",
  Length: "",
  material: "",
  color: "",
  image: "",
};
 const Arr=[];
const Form2 = () => {
  const [SelectedValue, setSelectedValue] = useState([]);
  const [formData, updateFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [otherService, setOtherService] = useState(false);
  const [inputphone, setinputphone]=useState()
  const form = useRef();

  console.log(SelectedValue);
  // const [selectButtonValue,setSelectButtonValue]=useState()
  const navigate = useNavigate();

  console.log(SelectedValue);

  const handleChange = (e) => {
    // this is use  for store form data using spread opetrator with target the event
    updateFormData({ ...formData, [e.target.name]: e.target.value });
    formData.phone_number=inputphone;

  };

  //  this is use for submit the form data also use for  for errors
  const handlesubmit = (e) => {
    e.preventDefault();
    //  this is use for call an function and store value after checking for validation regarding output

    setFormErrors(validate(formData));
    // boolean value for check form validation error have or not
    console.log("Form Data Last Step ",formData)
    
    setisSubmit(true);

    
    // e.target.reset()
  };




  const validate = (values) => {
    const errors = {};
   const pattern = /^[6,7,8,9][0-9]{0,9}$/;
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "username is required";
    } else if (values.name.length < 2) {
      errors.name = "name must have more than one character";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      console.log(regex.test(values.email));
      errors.email = "enter valid email";
    }
    if (!values.address) {
      errors.address = "user address is required";
    }
    if (!values.address2) {
      errors.address2 = "user address2  is required";
    }
    if(!values.pincode){
      errors.pincode = "pincode  is required";
    }
    if (!values.phone_number) {
      errors.phone_number = "user phone number  is required";
    } else if (
      values.phone_number.length > 10 ||
      values.phone_number.length < 10
    ) {
      errors.phone_number = "phone number should have 10 digit";
    }
    else if(!pattern.test(values.phone_number)){
           errors.phone_number="phone number should start with 6,7,8,9 digits" 
    }
    if (!values.city) {
      errors.city = "city name   is required";
    }
    if (!values.product_name) {
      errors.product_name = "product name required";
    }
    if (!values.Length) {
      errors.Length = "length   is required";
    }
    if (!values.breadth) {
      errors.breadth = "breadth is required";
    }
    if (!values.height) {
      errors.height = "height  is required";
    }
    if (!values.other) {
      errors.other = "other description  is required";
    }
    if (values.material === "Select Material") {
      errors.material = "material  is required";
    }
    if (values.color === "Select colour") {
      errors.color = "material colour  is required";
    }
    // if (values.image === "") {
    //   errors.image = "material image  is required";
    // }
    return errors;
  };

  
  console.log(Object.keys);
  // on base condition form submitted
  console.log(formErrors.length);
  useEffect(() => {
    console.log(Object.keys(formErrors));
    // console.log(formErrors.length)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
      emailjs.sendForm(
        "service_6kj0ayi",
        // "template_v8ez0gu",
        // for second template
        "template_cx0gmth",
        form.current,
        "UvFS_1Jfn87g68pEB"
      )
      .then(
        (result) => {

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }

      )
      console.log("form submitted");
      optionresult=0
      navigate("/success");
    } else {
      if (
        formData.other !== "" &&
        Object.keys(formErrors).includes(
          "product_name",
          "height",
          "breadth",
          "Length"
        )
      ) {
        console.log(formData);
        console.log("form submitted");
        emailjs.sendForm(
          "service_6kj0ayi",
          // "template_v8ez0gu",
          // for second template
          "template_cx0gmth",
          form.current,
          "UvFS_1Jfn87g68pEB"
        )
        .then(
          (result) => {

            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }

        )
        

        navigate("/success");
      } else if (
        Object.keys(formErrors).includes("other") &&
        formData.product_name !== "" &&
        formData.height !== "" &&
        formData.breadth !== "" &&
        formData.Length !== "" &&
        isSubmit
      ) {
        console.log(formData);
        emailjs.sendForm(
          "service_6kj0ayi",
          // "template_v8ez0gu",
          // for second template
          "template_cx0gmth",
          form.current,
          "UvFS_1Jfn87g68pEB"
        )
        .then(
          (result) => {

            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }

        )
        navigate("/success");
      } else {
        console.log("not submitted");
      }
    }
  }, [formErrors]);

  console.log(formData.other);
  console.log(SelectedValue);
  console.log(otherService);

  if (SelectedValue.length === 0) {
    result = null;
  } else {
    SelectedValue &&
      SelectedValue.map((ele, key) => {
        if (ele.value === "Other") {
          console.log('Form Data 2nd Step',formData)
          result = (
            <div key={ele.id}>
              <label for="inputName" class="form-label">
                For other
              </label>
              <div className="form-floating">
                <textarea
                  class="form-control"
                  name="other"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  value={formData.other}
                  onChange={handleChange}
                ></textarea>

                <p className="form-errors error-font-size">
                  {formErrors.other}
                </p>
              </div>
            </div>
          );
            if (optionresult === 0){
              optionresult=ele.value;
              console.log('ELement Value',ele.value)
            }            
          
        } else {
          result = (
            <div className="row mt-4" key={ele.id}>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="product_name"
                  class="form-control"
                  id="inputName"
                  value={formData.product_name}
                  onChange={handleChange}
                />
                <p className="form-error error-font-size">
                  {formErrors.product_name}
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 justify-content-between ">
                  <label for="inputName" class="form-label">
                    Dimension
                  </label>
                  <div className="row gap-4 ">
                    <div className="col-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <label>length</label>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="Length"
                          class="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          placeholder="Length"
                          value={formData.Length}
                          onChange={handleChange}
                        />

                        <div class="input-group-append">
                          <span class="input-group-text">cm</span>
                        </div>
                        <p className="form-error error-font-size">
                          {formErrors.Length}
                        </p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <label>Breadth</label>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="breadth"
                          class="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          placeholder="Breadth"
                          value={formData.breadth}
                          onChange={handleChange}
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">cm</span>
                        </div>
                        <p className="form-error error-font-size">
                          {formErrors.breadth}
                        </p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <label>height</label>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="height"
                          class="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          placeholder="height"
                          value={formData.height}
                          onChange={handleChange}
                        />

                        <div class="input-group-append">
                          <span class="input-group-text">cm</span>
                        </div>
                        <p className="form-error error-font-size">
                          {formErrors.height}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="inputName" class="form-label">
                    Material
                  </label>
                  <div>
                    <select
                      class="form-select"
                      name="material"
                      aria-label="Disabled select example"
                      value={formData.material}
                      onChange={handleChange}
                    >
                      <option selected>Select Material</option>
                      <option value="ABS">ABS</option>
                      <option value="PETG">PETG</option>
                      <option value="TPU">TPU</option>
                      <option value="PLA">PLA</option>
                    </select>
                  </div>
                  <p className="form-error error-font-size">
                    {formErrors.material}
                  </p>
                </div>
                <div class="col-md-3">
                  <label for="inputName" class="form-label">
                    Colour
                  </label>
                  <div>
                    <select
                      class="form-select"
                      name="color"
                      aria-label="Disabled select example"
                      value={formData.color}
                      onChange={handleChange}
                    >
                      <option selected>Select colour</option>
                      <option value="black">black</option>
                      <option value="white">white</option>
                      <option value="Red">Red</option>

                      <option value="Grey">Grey</option>
                      <option value="Blue">Blue</option>

                      <option value="Orange">Orange</option>
                      <option value="Green">Green</option>
                      <option value="Brown">Brown</option>
                    </select>
                  </div>
                  <p className="form-error error-font-size">
                    {formErrors.color}
                  </p>
                </div>
              </div>
            </div>
          );
          
          if (optionresult === 0){
            optionresult=ele.value;
            console.log('ELement Value',ele.value)
          }   
        }
        
      }
      
      );
  }

  

  return (
    <div className="d-flex align-items-center justify-content-center mt-4 ">
      <div
        className="bg-light form-padding rounded-2 form-shadow"
        style={{ width: "75%" }}
      >
        <div>
          <h4 className="text-center">Contact form</h4>
        </div>
        <form  ref={form} class="row g-3" onSubmit={handlesubmit} >
          <div class="col-md-6">
            <label for="inputName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              class="form-control"
              id="inputPassword4"
              value={formData.name}
              onChange={handleChange}
            />

            <p className="form-error error-font-size">{formErrors.name}</p>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              class="form-control"
              id="inputEmail4"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="form-error error-font-size">{formErrors.email}</p>
          </div>

          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
            />
            <p className="form-error error-font-size">{formErrors.address}</p>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={formData.address2}
              onChange={handleChange}
            />
            <p className="form-error error-font-size">{formErrors.address2}</p>
          </div>
          <div class="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  class="form-control"
                  id="inputCity"
                  value={formData.city}
                  onChange={handleChange}
                />
                <p className="form-error error-font-size">{formErrors.city}</p>
              </div>
              <div className="col-md-6">
                <label for="inputCity" class="form-label">
                  Pincode
                </label>
                <input
                  type="number"
                  name="pincode"
                  class="form-control"
                  id="inputpinCode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                <p className="form-error error-font-size">{formErrors.pincode}</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">

            
            <label for="inputZip" class="form-label">
              Contact Number
            </label>

            <CountryPhone setinputphone={setinputphone}/>
            {/* <input
              type="text"
              name="phone_number"
              class="form-control"
              id="inputZip"
              value={formData.phone_number}
              onChange={handleChange}
            />
            <p className="form-error error-font-size">
              {formErrors.phone_number}
            </p> */}
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Services
            </label>

            <Selectbutton setSelectedValue={setSelectedValue} />
          </div>
          {result}

          <div class="mt-4">
            <label for="inputState" class="form-label">
              Prototype Image
            </label>
            <input
              type="file"
              name="image"
              class="form-control"
              aria-label="file example"
              placeholder="for prototype"
              value={formData.image}
              onChange={handleChange}
            />

            <div class="invalid-feedback">
              Example invalid form file feedback
            </div>
            <p className="form-errors error-font-size">{formErrors.image}</p>
          </div>
          <div>
            <label for="basic-url" class="form-label">
              Reference URL for Product Image
            </label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">
                https://example.com/
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div class="col-12 submit-button ">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form2;
