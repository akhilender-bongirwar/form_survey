import React from 'react'
import { NavLink } from 'react-router-dom'

function FormPart4({formD,setFormD}) {
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormD(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <td>
                            <label htmlFor="">1.What are the key reasons which prevents you from even applying for a loan from Bank/FI</label>
                        </td>
                        <td style={{ width: "100%", display: "flex", flexDirection: "column" }} className='input_label_gapper' >
                            <div>
                                <label htmlFor='reason1' style={{ padding: "0.5em" }} >a.{"  "}Lack of awareness of bank processes requirements</label>
                                <input type="checkbox" id="reason1" name="Key_Reason_Preventing_loan" value="Lack of awareness of bank processes requirements" checked={formD.Key_Reason_Preventing_loan=="Lack of awareness of bank processes requirements"} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='reason2' style={{ padding: "0.5em" }} >b.{"  "}High Interest Rate </label>
                                <input type="checkbox" id="reason2" name="Key_Reason_Preventing_loan" value="High Interest Rate" checked={formD.Key_Reason_Preventing_loan=="High Interest Rate"} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor='reason3' style={{ padding: "0.5em" }} >c.{"  "}Longer Processing time </label>
                                <input type="checkbox" id="reason3" name="Key_Reason_Preventing_loan" value="Longer Processing time" checked={formD.Key_Reason_Preventing_loan=="Longer Processing time"} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='reason4' style={{ padding: "0.5em" }} >d.{"  "} Improper documentation </label>
                                <input type="checkbox" id="reason4" name="Key_Reason_Preventing_loan" value="Improper documentation" checked={formD.Key_Reason_Preventing_loan=="Improper documentation"} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='reason5' style={{ padding: "0.5em" }} >e.{"  "} No nearby bank branches  </label>
                                <input type="checkbox" id="reason5" name="Key_Reason_Preventing_loan" value="No nearby bank branches" checked={formD.Key_Reason_Preventing_loan=="No nearby bank branches"} onChange={handleChange}/>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <label htmlFor='reason6' style={{ padding: "0.5em" }} >f.{"  "} Others, Please specify ... </label>
                                <input type="text" id="reason6" name="Key_Reason_Preventing_loan" value={formD.Key_Reason_Preventing_loan} onChange={handleChange} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                2. What is major source of credit demand (Raw Material/ Salaries / Repair & maintenance / Long cash
                                cycle / Demand due to peak season/ duties and taxes/ Others ) . . . . . . .
                            </label>
                        </td>
                        <td colSpan={5}>
                            <input type='text' id='secQuestion' name='source_of_credit_form' onChange={handleChange} value={formD.source_of_credit_form}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>3.{"   "}If you applied and tried for a loan over the last 12 months, what was the outcome? </label>
                        </td>
                        <td colSpan={5} style={{ width: "100%", display: "flex", flexDirection: "column" }} className='input_label_gapper' >
                            <div>
                                <label htmlFor='outcome1' style={{ padding: "0.5em" }} >a.{"  "}Applied but the application got rejected </label>
                                <input type="radio" id="outcome1" name="applied_loan_outcome" value="Applied but the application got rejected" onChange={handleChange} checked={formD.applied_loan_outcome=="Applied but the application got rejected"} />
                            </div>
                            <div>
                                <label htmlFor='outcome2' style={{ padding: "0.5em" }} >b.{"  "}Applied and got the loan amount in full </label>
                                <input type="radio" id="outcome2" name="applied_loan_outcome" value="Applied and got the loan amount in full" onChange={handleChange} checked={formD.applied_loan_outcome=="Applied and got the loan amount in full"} />
                            </div>
                            <div>
                                <label htmlFor='outcome3' style={{ padding: "0.5em" }} >c.{"  "}Applied but only got partial loan amount </label>
                                <input type="radio" id="outcome3" name="applied_loan_outcome" value="Applied but only got partial loan amount" onChange={handleChange} checked={formD.applied_loan_outcome=="Applied but only got partial loan amount"} />
                            </div>
                            <div>
                                <label htmlFor='outcome4' style={{ padding: "0.5em" }} >d.{"  "}Applied but refused as interest rate offered was high </label>
                                <input type="radio" id="outcome4" name="applied_loan_outcome" value="Applied but refused as interest rate offered was high" onChange={handleChange} checked={formD.applied_loan_outcome=="Applied but refused as interest rate offered was high"} />
                            </div>
                            <div>
                                <label htmlFor='outcome5' style={{ padding: "0.5em" }} >e.{"  "} Loan approved after a significant delay  </label>
                                <input type="radio" id="outcome5" name="applied_loan_outcome" value="Loan approved after a significant delay" onChange={handleChange} checked={formD.applied_loan_outcome=="Loan approved after a significant delay"} />
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <label htmlFor='outcome6' style={{ padding: "0.5em" }} >f.{"  "} Others, Please specify ... </label>
                                <input type="text" id="outcome6" name="applied_loan_outcome" onChange={handleChange} value={formD.applied_loan_outcome} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                4. {"  "}If the loan was rejected, what was the reason offered for rejection?
                            </label>
                        </td>
                        <td className='form4_styling'>
                            <input type='text' id='fourthQuestion' name='reason_of_rejection' onChange={handleChange} value={formD.reason_of_rejection}/>
                        </td>
                    </tr>
                </thead>

            </table>
            <NavLink to="/3">Prev</NavLink>
        <NavLink to="/5">Next</NavLink>
        </>
    )
}

export default FormPart4