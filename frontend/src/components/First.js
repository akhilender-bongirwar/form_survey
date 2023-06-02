import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const First = ({ formD, setFormD }) => {
  const navigate = useNavigate();
  const validate = (e) => {
    const isV = document.getElementById("formy").reportValidity();
    if (!isV) {
      e.preventDefault();
    } else {
      navigate("/1");
    }
  };
  function handleChange(event) {
    let { name, value, type, checked, className, id } = event.target;
    if (type == "number") {
      value = parseInt(value);
    }
    if (name === "sell_produce_majorly") {
      if (type == "text") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], [value]: checked },
          };
        });
      }
    } else if (name === "service_industry") {
      if (type == "text") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], [value]: checked },
          };
        });
      }
    } else if (name === "Aware_of_listed_scehmes") {
      if (className == "central") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              Central_Govt: {
                ...prevFormData[name].Central_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              State_Govt: {
                ...prevFormData[name].State_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      }
    } else if (name === "Scheme_Like_to_avail") {
      if (className == "central") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              Central_Govt: {
                ...prevFormData[name].Central_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              State_Govt: {
                ...prevFormData[name].State_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      }
    } else if (name === "Key_Reason_Preventing_loan") {
      if (type == "text") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], [value]: checked },
          };
        });
      }
    } else if (name === "applied_loan_outcome") {
      if (type == "radio") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], radio_button: value, other: "" },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      }
    } else if (className == "Requirement_of_Soft_Interventions") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (className == "Laboratory") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (className == "Certifications") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (className == "Infrastructure") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (name == "TOP_THREE_PRODUCTS") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: { ...prevFormData[name], [id]: value },
        };
      });
    } else {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  }
  return (
    <>
      <label htmlFor="District_code">
        <p>District code</p>
        <p>Code Description</p>
        <ul>
          <li>
            <b>HA</b>-Hardoi
          </li>
          <li>
            <b>LA</b>-Lakhimpur Kheri
          </li>
          <li>
            <b>LU</b>-Lucknow
          </li>
          <li>
            <b>RA</b>-Raebareli
          </li>
          <li>
            <b>SI</b>-Sitapur
          </li>
          <li>
            <b>UN</b>-Unnao
          </li>
          <li>
            <b>AY</b>-Ayodhya
          </li>
          <li>
            <b>AN</b>-Ambedkar Nagar
          </li>
          <li>
            <b>BA</b>-Barabanki
          </li>
          <li>
            <b>SU</b>-Sultanpur
          </li>
          <li>
            <b>AM</b>-Amethi
          </li>
        </ul>
      </label>
      <select name="District_code" id="District_code">
        <option value="HA">Hardoi</option>
        <option value="LA">Lakhimpur Kheri</option>
        <option value="LU">Lucknow</option>
        <option value="RA">Raebareli</option>
        <option value="SI">Sitapur</option>
        <option value="UN">Unnao</option>
        <option value="AY">Ayodhya</option>
        <option value="AN">Ambedkar Nagar</option>
        <option value="BA">Barabanki</option>
        <option value="SU">Sultanpur</option>
        <option value="AM">Amethi</option>
      </select>
      <label htmlFor="submission_date">Date</label>
      <input type="date" id="submission_date" name="submission_date" />
      <div style={{ marginTop: "1em" }}>
        <NavLink to="/1" className="arrow_notation" onClick={validate}>
          Next
        </NavLink>
      </div>
    </>
  );
};
export default First;
