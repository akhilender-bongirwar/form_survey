import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
    console.log(event);
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
    <div>
      <table
        className="firstTable"
        style={{ margin: "auto", fontSize: "small", marginTop: "10px" }}
        onClick={() => document.getElementById("District_code").focus()}
      >
        <thead>
          <th colspan={3}>District code</th>
        </thead>
        <tbody>
          <th colspan={3}>Code Description</th>
          <tr style={{ display: "table-row" }}>
            <th>1</th>
            <th>HA</th>
            <th>Hardoi</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>2</th>
            <th>LA</th>
            <th>Lakhimpur Kheri</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>3</th>
            <th>LU</th>
            <th>Lucknow</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>4</th>
            <th>RA</th>
            <th>Raebareli</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>5</th>
            <th>SI</th>
            <th>Sitapur</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>6</th>
            <th>UN</th>
            <th>Unnao</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>7</th>
            <th>AY</th>
            <th>Ayodhya</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>8</th>
            <th>AN</th>
            <th>Ambedkar Nagar</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>9</th>
            <th>BA</th>
            <th>Barabanki</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>10</th>
            <th>SU</th>
            <th>Sultanpur</th>
          </tr>
          <tr style={{ display: "table-row" }}>
            <th>11</th>
            <th>AM</th>
            <th>Ayodhya</th>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "min-content",
          margin: "auto",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            District
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="District_code"
            name="District_Code"
            required="true"
            // value={age}
            onChange={handleChange}
            value={formD.District_Code}
            autoWidth
            label="District"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="HA">Hardoi</MenuItem>
            <MenuItem value="LA">Lakhimpur Kheri</MenuItem>
            <MenuItem value="LU">Lucknow</MenuItem>
            <MenuItem value="RA">Raebareli</MenuItem>
            <MenuItem value="SI">Sitapur</MenuItem>
            <MenuItem value="UN">Unnao</MenuItem>
            <MenuItem value="AY">Ayodhya</MenuItem>
            <MenuItem value="AN">Ambedkar Nagar</MenuItem>
            <MenuItem value="BA">Barabanki</MenuItem>
            <MenuItem value="SU">Sultanpur</MenuItem>
            <MenuItem value="AM">Amethi</MenuItem>
          </Select>
        </FormControl>

        <label htmlFor="submission_date">Date</label>
        <input
          required="true"
          onChange={handleChange}
          value={formD.submission_date}
          style={{
            fontFamily: "calibri",
            fontSize: "medium",
            height: "45px",
            padding: "10px",
            width: "auto",
            marginTop: "5px",
          }}
          type="date"
          id="submission_date"
          name="submission_date"
        />
      </div>
      <div
        className="buttoncontainer"
        style={{
          fontSize: "large",
          marginRight: "15px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <NavLink to="/1" className="arrow_notation" onClick={validate}>
          Next
        </NavLink>
      </div>
    </div>
  );
};
export default First;
