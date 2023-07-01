import React, { useEffect } from "react";
import { useState } from "react";
import "./Form.css";
import { useRef } from "react";
import Selectbutton from "./Selectbutton";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// import emailjs from "@emailjs/browser";

let result;

const initialValues = {
  name: "",
  email: "",
  phone_number: "",
  address: "",
  address2: "",
  city: "",
  other: "",
  product_name: "",
  height: "",
  breadth: "",
  Length: "",
  material: "",
  color: "",
  image: "",
};

const Form = () => {
  const [SelectedValue, setSelectedValue] = useState([]);
  const [formData, updateFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  console.log(SelectedValue)
  // const [selectButtonValue,setSelectButtonValue]=useState()
  const navigate = useNavigate();
  //  for using formik form state handle
  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  // useFormik({
  //   initialValues: initialValues,
  //   validationSchema: signUpSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //     // console.log("form has been");

  //     emailjs
  //     .sendForm(
  //       "service_6kj0ayi",
  //       // "template_v8ez0gu",
  //       // for second template
  //       "template_sq703vw",
  //       // form.current,
  //       "UvFS_1Jfn87g68pEB"
  //     )
  //     .then(
  //       (result) => {

  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   },
  // });
console.log(SelectedValue)
  





  const handleChange = (e) => {
    // this is use  for store form data using spread opetrator with target the event
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  this is use for submit the form data also use for  for errors
  const handlesubmit = (e) => {
    e.preventDefault();
    //  this is use for call an fiunction and store value after checking for validation regarding output
    setFormErrors(validate(formData));
    // boolean value for check form validation error have or not
    setisSubmit(true);
    // e.target.reset()
  };

  const validate = (values) => {
    const errors = {};
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
    if (!values.phone_number) {
      errors.phone_number = "user phone number  is required";
    } else if (
      values.phone_number.length > 10 ||
      values.phone_number.length < 10
    ) {
      errors.phone_number = "phone number should have 10 digit";
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
    // if (!values.other) {
    //   errors.other = "other description  is required";
    // }
    if (values.material === "Select Material") {
      errors.material = "material  is required";
    }
    if (values.color === "Select colour") {
      errors.color = "material colour  is required";
    }
    if (values.image === "") {
      errors.image = "material image  is required";
    }
    return errors;
  };
  // console.log(Object.keys);
  // on base condition form submitted
  useEffect(() => {
    console.log(Object.keys(formErrors));
    // console.log(formErrors.length)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
      navigate("/success");
     
    }
  }, [formErrors]);
  // if (formData.name.length < 2 && formData.name!== "") {
  //   setFormErrors(!formErrors);
  //   console.log("name must have more than one character");

  // }

  // else {
  //   console.log("this is correct");
  // }
  console.log(SelectedValue);
    if (SelectedValue.length === 0) {
      result=null;
    } else {
      SelectedValue &&
        SelectedValue.map((ele, key) => {
          if (ele.value === "Other") {
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
                    // value={values.other}
                    // onChange={handleChange}
                  ></textarea>
                  {/* <label for="floatingTextarea2">
                Write descripsion for other services
              </label> */}

                  {/* <div class="col-12 submit-button">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div> */}

                  <p className="form-errors error-font-size">
                    {formErrors.other}
                  </p>
                </div>
              </div>
            );
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
                    // value={values.product_name}
                    // onChange={handleChange}
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
                      {/* <div className="col-6">
                    <div class="input-group ">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <label>Length</label>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="length"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="length"
                        value={formData.length}
                       
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                      </div>
                    </div>
                  </div> */}
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
                            // value={values.breadth}
                            // onChange={handleChange}
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
                            // value={values.breadth}
                            // onChange={handleChange}
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
                            // value={values.height}
                            // onChange={handleChange}
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
                        // value={values.material}
                        // onChange={handleChange}
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
                        // value={values.colour}
                        // onChange={handleChange}
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

                  {/* <div className="col-md-6 justify-content-between ">
              <label for="inputName" class="form-label">
                Dimension
              </label>
              <div className="row gap-4">
                <div className="col-6">
                  <div class="input-group ">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <label>Length</label>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="length"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">cm</span>
                    </div>
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
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Breadth"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">cm</span>
                    </div>
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
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="height"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
                </div>
                {/* <div class="col-12 submit-button">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div> */}
              </div>
            );
            // console.log("many option");
          }

          // if (SelectedValue === " ") {
          //   console.log("has cleared");
          // } else {
          //   console.log("clear");
          // }
        });
    
    // const handleSubmit = () => {
    //   if(!errors){
    //     console.log("form has been submitted");
    //   }

    };

    return (
      <div className="d-flex align-items-center justify-content-center mt-4 ">
        <div
          className="bg-light form-padding rounded-2 form-shadow"
          style={{ width: "75%" }}
        >
          <div>
            <h4 className="text-center">Contact form</h4>
          </div>
          <form class="row g-3" onSubmit={handlesubmit}>
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
                // value={values.name}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />

              {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
              {/* {formErrors ? (
              <p className="form-error">Please enter more than one character</p>
            ) : null} */}
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
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
              <p className="form-error error-font-size">{formErrors.email}</p>
              {/* {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null} */}
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
                // value={values.address}
                // onChange={handleChange}
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
                // value={values.address2}
                // onChange={handleChange}
              />
              <p className="form-error error-font-size">
                {formErrors.address2}
              </p>
            </div>
            <div class="col-md-6">
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
                // value={values.city}
                // onChange={handleChange}
              />
              <p className="form-error error-font-size">{formErrors.city}</p>
            </div>

            <div class="col-md-6">
              <label for="inputZip" class="form-label">
                Contact Number
              </label>
              <input
                type="text"
                name="phone_number"
                class="form-control"
                id="inputZip"
                value={formData.phone_number}
                onChange={handleChange}
                // value={values.phone_number}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
              <p className="form-error error-font-size">
                {formErrors.phone_number}
              </p>
              {/* {errors.phone_number && touched.phone_number ? (
              <p className="form-error">{errors.phone_number}</p>
            ) : null} */}
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">
                Services
              </label>
              <Selectbutton   setSelectedValue={setSelectedValue}/>
            </div>
            {result}
            {/* <div className="row">
            <div class="col-md-6">
              <label for="inputName" class="form-label">
                Product Name
              </label>
              <input type="text" class="form-control" id="inputName" />
            </div>
            <div class="col-md-6">
              <label for="inputName" class="form-label">
                Material
              </label>
              <div>
                <select
                  class="form-select"
                  aria-label="Disabled select example"
                >
                  <option selected>Select Material</option>
                  <option value="1">ABS(colour-black)</option>
                  <option value="1">ABS(colour-white)</option>
                  <option value="2">PETG(colour-Red)</option>
                  <option value="2">PETG(colour-Black)</option>
                  <option value="2">PETG(colour-White)</option>
                  <option value="2">PETG(colour-Grey)</option>
                  <option value="2">PETG(colour-Blue)</option>
                  <option value="3">TPU(colour-white)</option>
                  <option value="3">TPU(colour-Black)</option>
                  <option value="3">PLA(colour-Black)</option>
                  <option value="3">PLA(colour-white)</option>
                  <option value="3">PLA(colour-Orange)</option>
                  <option value="3">PLA(colour-Green)</option>
                  <option value="3">PLA(colour-Brown)</option>
                  <option value="3">PLA(colour-Blue)</option>
                </select>
              </div>
            </div>

            <div className="col-md-6 justify-content-between d-flex mt-4">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <label>Dimension</label>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="width×height"
                />
                <div class="input-group-append">
                  <span class="input-group-text">inch/cm/mm</span>
                </div>
              </div>
            </div>
          </div> */}
            {/* <div className="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">
              Write descripsion for other services
            </label>
          </div> */}

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
                Referece URL for Product Image
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
              {/* <p className="form-error">{formErrors.phone_number}</p> */}
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

export default Form;
