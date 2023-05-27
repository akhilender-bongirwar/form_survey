import React from 'react'

function FormPart4() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{fontWeight:"bold",fontSize:"1.2em"}}>1.{"   "}What are the key reasons which prevents you from even applying for a loan from Bank/FI</div>
            <div>
                <input type="checkbox" id="reason1" name="Key_Reason_Preventing_loan" value="Lack of awareness of bank processes requirements" />
                <label htmlFor='reason1' style={{padding:"0.5em"}} >a.{"  "}Lack of awareness of bank processes requirements</label>
            </div>
            <div>
                <input type="checkbox" id="reason2" name="Key_Reason_Preventing_loan" value="High Interest Rate " />
                <label htmlFor='reason2' style={{padding:"0.5em"}} >b.{"  "}High Interest Rate </label>
            </div>
            <div>
                <input type="checkbox" id="reason3" name="Key_Reason_Preventing_loan" value="Longer Processing time " />
                <label htmlFor='reason3' style={{padding:"0.5em"}} >c.{"  "}Longer Processing time </label>
            </div>
            <div>
                <input type="checkbox" id="reason4" name="Key_Reason_Preventing_loan" value="Improper documentation " />
                <label htmlFor='reason4' style={{padding:"0.5em"}} >d.{"  "} Improper documentation </label>
            </div>
            <div>
                <input type="checkbox" id="reason5" name="Key_Reason_Preventing_loan" value="No nearby bank branches " />
                <label htmlFor='reason5' style={{padding:"0.5em"}} >e.{"  "} No nearby bank branches  </label>
            </div>
            <div>
                <label htmlFor='reason6' style={{padding:"0.5em"}} >f.{"  "} Others, Please specify ... </label>
                <input type="text" id="reason6" name="Key_Reason_Preventing_loan" style={{ width: "50%", border: "transparent" }} />
            </div>
            <div style={{fontWeight:"bold",fontSize:"1.2em"}}>
            2. {"  "}What is major source of credit demand (Raw Material/ Salaries / Repair & maintenance / Long cash <br/>
            cycle / Demand due to peak season/ duties and taxes/ Others ) . . . . . . .
            </div>
            <div>
                <input type='text' id='secQuestion' name='source_of_credit_form' placeholder='. . . . . . . . . . . . . . .' style={{ width: "60%",border:"transparent" }}/>
            </div>
            <div style={{fontWeight:"bold",fontSize:"1.2em"}}>3.{"   "}If you applied and tried for a loan over the last 12 months, what was the outcome? </div>
            <div>
                <input type="radio" id="outcome1" name="applied_loan_outcome" value="Applied but the application got rejected" />
                <label htmlFor='outcome1' style={{padding:"0.5em"}} >a.{"  "}Applied but the application got rejected </label>
            </div>
            <div>
                <input type="radio" id="outcome2" name="applied_loan_outcome" value="Applied and got the loan amount in full" />
                <label htmlFor='outcome2' style={{padding:"0.5em"}} >b.{"  "}Applied and got the loan amount in full </label>
            </div>
            <div>
                <input type="radio" id="outcome3" name="applied_loan_outcome" value="Applied but only got partial loan amount " />
                <label htmlFor='outcome3' style={{padding:"0.5em"}} >c.{"  "}Applied but only got partial loan amount </label>
            </div>
            <div>
                <input type="radio" id="outcome4" name="applied_loan_outcome" value="Applied but refused as interest rate offered was high " />
                <label htmlFor='outcome4' style={{padding:"0.5em"}} >d.{"  "}Applied but refused as interest rate offered was high </label>
            </div>
            <div>
                <input type="radio" id="outcome5" name="applied_loan_outcome" value="Loan approved after a significant delay  " />
                <label htmlFor='outcome5' style={{padding:"0.5em"}} >e.{"  "} Loan approved after a significant delay  </label>
            </div>
            <div>
                <label htmlFor='outcome6' style={{padding:"0.5em"}} >f.{"  "} Others, Please specify ... </label>
                <input type="text" id="outcome6" name="applied_loan_outcome" style={{ width: "50%", border: "transparent" }} />
            </div>
            <div style={{fontWeight:"bold",fontSize:"1.2em"}}>
            4. {"  "}If the loan was rejected, what was the reason offered for rejection?
            </div>
            <div>
              <input type='text' id='fourthQuestion' name='reason_of_rejection' placeholder='. . . . . . . . . . . . . . .' style={{ width: "60%",border:"transparent" }}/>
            </div>
        </div>
    </div>
  )
}

export default FormPart4