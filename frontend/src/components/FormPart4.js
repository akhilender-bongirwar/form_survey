import React from "react";
import { NavLink } from "react-router-dom";

function FormPart4({ formD, setFormD }) {
    function handleChange(event) {
        const { name, value, type, checked,className } = event.target;
        if (name === "sell_produce_majorly") {
            if(type=="text"){
                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],other: value}
                    }
                  })
            }
            else{

                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],[value]:checked}
                    }
                  })
            }
        }
        else if(name==="service_industry"){
            if(type=="text"){
                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],other: value}
                    }
                  })
            }
            else{
                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],[value]:checked}
                    }
                  })
            }
        } 
        else if(name==="Aware_of_listed_scehmes"){
          if(className=="central"){
            setFormD((prevFormData) => {
              return {
                ...prevFormData,
                [name]: {...prevFormData[name],Central_Govt:{...prevFormData[name].Central_Govt,[value]:type === "checkbox" ? checked : value}}
              }
            })
          }
          else{
            setFormD((prevFormData) => {
              return {
                ...prevFormData,
                [name]: {...prevFormData[name],State_Govt:{...prevFormData[name].State_Govt,[value]:type === "checkbox" ? checked : value}}
              }
            })
          }
        }
        else if(name==="Scheme_Like_to_avail"){
          if(className=="central"){
            setFormD((prevFormData) => {
              return {
                ...prevFormData,
                [name]: {...prevFormData[name],Central_Govt:{...prevFormData[name].Central_Govt,[value]:type === "checkbox" ? checked : value}}
              }
            })
          }
          else{
            setFormD((prevFormData) => {
              return {
                ...prevFormData,
                [name]: {...prevFormData[name],State_Govt:{...prevFormData[name].State_Govt,[value]:type === "checkbox" ? checked : value}}
              }
            })
          }
        }
        else if (name === "Key_Reason_Preventing_loan") {
            if(type=="text"){
                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],other: value}
                    }
                  })
            }
            else{

                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],[value]:checked}
                    }
                  })
            }
        }
        else if (name === "applied_loan_outcome") {
            if(type=="radio"){
                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],radio_button: value,other:""}
                    }
                  })
            }
            else{
                setFormD((prevFormData) => {
                    return {
                      ...prevFormData,
                      [name]: {...prevFormData[name],other:value}
                    }
                  })
            }
        }
        else {
          setFormD((prevFormData) => {
            return {
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value,
            };
          });
        }
      }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(240 235 248 / 77%)",
      }}
    >
      <div>
        <table style={{ width: "95vw" }}>
          <thead>
            <tr>
              <td>
                <label htmlFor="">
                  1.What are the key reasons which prevents you from even
                  applying for a loan from Bank/FI
                </label>
              </td>
              <td
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="input_label_gapper"
              >
                <div>
                  <label htmlFor="reason1" style={{ padding: "0.5em" }}>
                    a.{"  "}Lack of awareness of bank processes requirements
                  </label>
                  <input
                    type="checkbox"
                    id="reason1"
                    name="Key_Reason_Preventing_loan"
                    value="Lack_of_awareness_of_bank_processes_requirements"
                    checked={
                      formD.Key_Reason_Preventing_loan.Lack_of_awareness_of_bank_processes_requirements    
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="reason2" style={{ padding: "0.5em" }}>
                    b.{"  "}High Interest Rate{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="reason2"
                    name="Key_Reason_Preventing_loan"
                    value="High_Interest_Rate"
                    checked={
                      formD.Key_Reason_Preventing_loan.High_Interest_Rate
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="reason3" style={{ padding: "0.5em" }}>
                    c.{"  "}Longer Processing time{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="reason3"
                    name="Key_Reason_Preventing_loan"
                    value="Longer_Processing_time"
                    checked={
                      formD.Key_Reason_Preventing_loan.Longer_Processing_time
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="reason4" style={{ padding: "0.5em" }}>
                    d.{"  "} Improper documentation{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="reason4"
                    name="Key_Reason_Preventing_loan"
                    value="Improper_documentation"
                    checked={
                      formD.Key_Reason_Preventing_loan.Improper_documentation
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="reason5" style={{ padding: "0.5em" }}>
                    e.{"  "} No nearby bank branches{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="reason5"
                    name="Key_Reason_Preventing_loan"
                    value="No_nearby_bank_branches"
                    checked={
                      formD.Key_Reason_Preventing_loan.No_nearby_bank_branches
                    }
                    onChange={handleChange}
                  />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <label htmlFor="reason6" style={{ padding: "0.5em" }}>
                    f.{"  "} Others, Please specify ...{" "}
                  </label>
                  <input
                    type="text"
                    id="reason6"
                    name="Key_Reason_Preventing_loan"
                    value={formD.Key_Reason_Preventing_loan.other}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  2. What is major source of credit demand (Raw Material/
                  Salaries / Repair & maintenance / Long cash cycle / Demand due
                  to peak season/ duties and taxes/ Others ) . . . . . . .
                </label>
              </td>
              <td colSpan={5}>
                <input
                  type="text"
                  id="secQuestion"
                  name="source_of_credit_form"
                  onChange={handleChange}
                  value={formD.source_of_credit_form}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  3.{"   "}If you applied and tried for a loan over the last 12
                  months, what was the outcome?{" "}
                </label>
              </td>
              <td
                colSpan={5}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="input_label_gapper"
              >
                <div>
                  <label htmlFor="outcome1" style={{ padding: "0.5em" }}>
                    a.{"  "}Applied but the application got rejected{" "}
                  </label>
                  <input
                    type="radio"
                    id="outcome1"
                    name="applied_loan_outcome"
                    value="Applied but the application got rejected"
                    onChange={handleChange}
                    checked={
                      formD.applied_loan_outcome.radio_button ==
                      "Applied but the application got rejected" &&
                      formD.applied_loan_outcome.other==""
                    }
                  />
                </div>
                <div>
                  <label htmlFor="outcome2" style={{ padding: "0.5em" }}>
                    b.{"  "}Applied and got the loan amount in full{" "}
                  </label>
                  <input
                    type="radio"
                    id="outcome2"
                    name="applied_loan_outcome"
                    value="Applied and got the loan amount in full"
                    onChange={handleChange}
                    checked={
                      formD.applied_loan_outcome.radio_button ==
                      "Applied and got the loan amount in full" &&
                      formD.applied_loan_outcome.other==""
                    }
                  />
                </div>
                <div>
                  <label htmlFor="outcome3" style={{ padding: "0.5em" }}>
                    c.{"  "}Applied but only got partial loan amount{" "}
                  </label>
                  <input
                    type="radio"
                    id="outcome3"
                    name="applied_loan_outcome"
                    value="Applied but only got partial loan amount"
                    onChange={handleChange}
                    checked={
                      formD.applied_loan_outcome.radio_button ==
                      "Applied but only got partial loan amount" &&
                      formD.applied_loan_outcome.other==""
                    }
                  />
                </div>
                <div>
                  <label htmlFor="outcome4" style={{ padding: "0.5em" }}>
                    d.{"  "}Applied but refused as interest rate offered was
                    high{" "}
                  </label>
                  <input
                    type="radio"
                    id="outcome4"
                    name="applied_loan_outcome"
                    value="Applied but refused as interest rate offered was high"
                    onChange={handleChange}
                    checked={
                      formD.applied_loan_outcome.radio_button ==
                      "Applied but refused as interest rate offered was high" &&
                      formD.applied_loan_outcome.other==""
                    }
                  />
                </div>
                <div>
                  <label htmlFor="outcome5" style={{ padding: "0.5em" }}>
                    e.{"  "} Loan approved after a significant delay{" "}
                  </label>
                  <input
                    type="radio"
                    id="outcome5"
                    name="applied_loan_outcome"
                    value="Loan approved after a significant delay"
                    onChange={handleChange}
                    checked={
                      formD.applied_loan_outcome.radio_button ==
                      "Loan approved after a significant delay" &&
                      formD.applied_loan_outcome.other==""
                    }
                  />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <label htmlFor="outcome6" style={{ padding: "0.5em" }}>
                    f.{"  "} Others, Please specify ...{" "}
                  </label>
                  <input
                    type="text"
                    id="outcome6"
                    name="applied_loan_outcome"
                    onChange={handleChange}
                    value={formD.applied_loan_outcome.other}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  4. {"  "}If the loan was rejected, what was the reason offered
                  for rejection?
                </label>
              </td>
              <td className="form4_styling">
                <input
                  type="text"
                  id="fourthQuestion"
                  name="reason_of_rejection"
                  onChange={handleChange}
                  value={formD.reason_of_rejection}
                />
              </td>
            </tr>
          </thead>
        </table>
        <div style={{ display: "flex",justifyContent:"space-between",width:"97%",padding:"10px" }}>
          <NavLink to="/3" className="arrow_notation">
            Prev
          </NavLink>
          <NavLink to="/5" className="arrow_notation">
            Next
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FormPart4;
