import React from 'react'
import './Table.css'
function FormPart3() {
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "90vh",
            overflowY: "scroll",
          }}
        >
        <div
            style={{
              border: "0.2em solid black",
              width: "71vw",
              flexWrap: "wrap",
              overflowWrap: "break-word",
              borderBottom:"0",
            }}
          >
        <div className="div-style" style={{ borderTop: 0 }}>
            <label className="inner-div-tag" >Are you aware about<br/>the current
            government <br/>programs benefitting<br/>
            MSMEs </label>
              <div className="checkboxes">
                <div>
                  <label htmlFor="YES" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="aware_of_govt_policy"
                    id="YES"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="NO" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="aware_of_govt_policy"
                    value="NO"
                    id="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <div className="inner-div-tag" >Which program benefits are you<br/>availing currently from the state?
            <br/>Please describe the key benefits<br/>
            and challenges related to the<br/>
            program </div>
            <div>
                <label style={{fontSize:"0.85em"}}>Name of the Program:</label>
                <div style={{display:"flex"}}>
                <label htmlFor='Anything'>1.</label>
                <input type='text' id='Anything' style={{ width: "50%", border: "transparent" }}/>
                <label htmlFor='Anything1'>2.</label>
                <input type='text' style={{ width: "50%", border: "transparent" }}/>
                </div>
                <div style={{display:"flex"}}>
                <label htmlFor='benefits' style={{fontSize:"0.85em"}}>Nature of assistance/Benefits:</label>
                <input type='text' id='benefits' name='Policy_benifitted' style={{ width: "50%", border: "transparent" }} />
                </div>
                <div style={{display:"flex"}}>
                    <label htmlFor='challenges' style={{fontSize:"0.85em"}}>Challenges:</label>
                    <input type='text' id='challenges' name='Challenges_faced_policy_related' style={{ width: "50%", border: "transparent" }} />
                </div>
            </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <div className="inner-div-tag" >What are your expectations from<br/>the State / Central Government
            <br/>(related to infra/training/finance/<br/>
            etc)</div>
            <div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex"}}>
                <label htmlFor='expect1'>a.</label>
                <input type='text' id='expect1' name='expectation_from_govt1' style={{ width: "50%", border: "transparent" }}/>
                </div>
                <div style={{display:"flex"}}>
                <label htmlFor='expect2'>b.</label>
                <input type='text' id='expect2' name='expectation_from_govt2' style={{ width: "50%", border: "transparent" }}/>
                </div>
            </div>
            </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <div className="inner-div-tag" >Are you aware of any of the listed<br/>Schemes</div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>
                    <div style={{fontWeight:"bold"}}><u>Central Government:</u></div>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div>
                    <input type='checkbox' id='op1' name='Aware_of_listed_scehmes' value="ZED" />
                    <label htmlFor='op1' style={{fontSize:"0.9rem",padding:"0.5em"}} >ZED</label></div>
                    <div>
                    <input type='checkbox' id='op2' name='Aware_of_listed_scehmes' value="LEAN" />
                    <label htmlFor='op2' style={{fontSize:"0.9rem",padding:"0.5em"}} >LEAN</label></div>
                    <div>
                    <input type='checkbox' id='op3' name='Aware_of_listed_scehmes' value="TREDs" />
                    <label htmlFor='op3' style={{fontSize:"0.9rem",padding:"0.5em"}} >TREDs</label></div>
                    <div>
                    <input type='checkbox' id='op4' name='Aware_of_listed_scehmes' value="Design_scheme" />
                    <label htmlFor='op4' style={{fontSize:"0.9rem",padding:"0.5em"}} >Design scheme</label></div>
                    <div>
                    <input type='checkbox' id='op5' name='Aware_of_listed_scehmes' value="Digital_Scheme" />
                    <label htmlFor='op5' style={{fontSize:"0.9rem",padding:"0.5em"}} >Digital Scheme</label></div>
                    <div>
                    <input type='checkbox' id='op6' name='Aware_of_listed_scehmes' value="IPR_scheme" />
                    <label htmlFor='op6' style={{fontSize:"0.9rem",padding:"0.5em"}} >IPR scheme</label></div>
                    <div>
                    <input type='checkbox' id='op7' name='Aware_of_listed_scehmes' value="Samadhan" />
                    <label htmlFor='op7' style={{fontSize:"0.9rem",padding:"0.5em"}} >Samadhan</label>
                    </div>
                    <div>
                    <input type='checkbox' id='op8' name='Aware_of_listed_scehmes' value="CGTMSE" />
                    <label htmlFor='op8' style={{fontSize:"0.9rem",padding:"0.5em"}} >CGTMSE</label> 
                    </div>
                    <div>
                    <input type='checkbox' id='op9' name='Aware_of_listed_scehmes' value="MSME Champions" />
                    <label htmlFor='op9' style={{fontSize:"0.9rem",padding:"0.5em"}} >MSME Champions</label> 
                    </div>
                    </div>
                    <div style={{fontWeight:"bold"}}><u>State Government:</u></div>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div>
                    <input type='checkbox' id='opt1' name='Aware_of_listed_scehmes' value="ODOP" />
                    <label htmlFor='opt1' style={{fontSize:"0.9rem",padding:"0.5em"}} >ODOP</label></div>
                    <div>
                    <input type='checkbox' id='opt2' name='Aware_of_listed_scehmes' value="UP MSME Promotion Policy" />
                    <label htmlFor='opt2' style={{fontSize:"0.9rem",padding:"0.5em"}} >UP MSME Promotion Policy</label></div>
                    <div>
                    <input type='checkbox' id='opt3' name='Aware_of_listed_scehmes' value="Technical upgradation" />
                    <label htmlFor='opt3' style={{fontSize:"0.9rem",padding:"0.5em"}} >Technical upgradation</label></div>
                    <div>
                    <input type='checkbox' id='opt4' name='Aware_of_listed_scehmes' value="UP Chief Minister Youth Self Employment Scheme" />
                    <label htmlFor='opt4' style={{fontSize:"0.9rem",padding:"0.5em"}} >UP Chief Minister Youth Self Employment Scheme</label></div>
                    <div>
                    <input type='checkbox' id='opt5' name='Aware_of_listed_scehmes' value="UP Startup Policy 2020" />
                    <label htmlFor='opt5' style={{fontSize:"0.9rem",padding:"0.5em"}} >UP Startup Policy 2020</label></div>
                    <div>
                    <input type='checkbox' id='opt6' name='Aware_of_listed_scehmes' value="Others" />
                    <label htmlFor='opt6' style={{fontSize:"0.9rem",padding:"0.5em"}} >Others</label></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <label className="inner-div-tag" htmlFor='remark' >Remarks (Specify if MSMEs are<br/>onboarded on any of the above<br/>on any of the above
            schemes)</label>
            <input type='text' id='remark' name='Remarks' style={{ width: "50%", border: "transparent" }}/>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <div className="inner-div-tag" >Which scheme would you like to<br/>avail?</div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>
                    <div style={{fontWeight:"bold"}}><u>Central Government:</u></div>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div>
                    <input type='checkbox' id='op1' name='Scheme_Like_to_avail' value="ZED" />
                    <label htmlFor='op1' style={{fontSize:"0.9rem",padding:"0.5em"}} >ZED</label></div>
                    <div>
                    <input type='checkbox' id='op2' name='Scheme_Like_to_avail' value="LEAN" />
                    <label htmlFor='op2' style={{fontSize:"0.9rem",padding:"0.5em"}} >LEAN</label></div>
                    <div>
                    <input type='checkbox' id='op3' name='Scheme_Like_to_avail' value="TREDs" />
                    <label htmlFor='op3' style={{fontSize:"0.9rem",padding:"0.5em"}} >TREDs</label></div>
                    <div>
                    <input type='checkbox' id='op4' name='Scheme_Like_to_avail' value="Design_scheme" />
                    <label htmlFor='op4' style={{fontSize:"0.9rem",padding:"0.5em"}} >Design scheme</label></div>
                    <div>
                    <input type='checkbox' id='op5' name='Scheme_Like_to_avail' value="Digital_Scheme" />
                    <label htmlFor='op5' style={{fontSize:"0.9rem",padding:"0.5em"}} >Digital Scheme</label></div>
                    <div>
                    <input type='checkbox' id='op6' name='Scheme_Like_to_avail' value="IPR_scheme" />
                    <label htmlFor='op6' style={{fontSize:"0.9rem",padding:"0.5em"}} >IPR scheme</label></div>
                    <div>
                    <input type='checkbox' id='op7' name='Scheme_Like_to_avail' value="Samadhan" />
                    <label htmlFor='op7' style={{fontSize:"0.9rem",padding:"0.5em"}} >Samadhan</label>
                    </div>
                    <div>
                    <input type='checkbox' id='op8' name='Scheme_Like_to_avail' value="CGTMSE" />
                    <label htmlFor='op8' style={{fontSize:"0.9rem",padding:"0.5em"}} >CGTMSE</label> 
                    </div>
                    <div>
                    <input type='checkbox' id='op9' name='Scheme_Like_to_avail' value="MSME Champions" />
                    <label htmlFor='op9' style={{fontSize:"0.9rem",padding:"0.5em"}} >MSME Champions</label> 
                    </div>
                    </div>
                    <div style={{fontWeight:"bold"}}><u>State Government:</u></div>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div>
                    <input type='checkbox' id='opt1' name='Scheme_Like_to_avail' value="ODOP" />
                    <label htmlFor='opt1' style={{fontSize:"0.9rem",padding:"0.5em"}} >ODOP</label></div>
                    <div>
                    <input type='checkbox' id='opt2' name='Scheme_Like_to_avail' value="UP MSME Promotion Policy" />
                    <label htmlFor='opt2' style={{fontSize:"0.9rem",padding:"0.5em"}} >UP MSME Promotion Policy</label></div>
                    <div>
                    <input type='checkbox' id='opt3' name='Scheme_Like_to_avail' value="Technical upgradation" />
                    <label htmlFor='opt3' style={{fontSize:"0.9rem",padding:"0.5em"}} >Technical upgradation</label></div>
                    <div>
                    <input type='checkbox' id='opt4' name='Scheme_Like_to_avail' value="UP Chief Minister Youth Self Employment Scheme" />
                    <label htmlFor='opt4' style={{fontSize:"0.9rem",padding:"0.5em"}} >UP Chief Minister Youth Self Employment Scheme</label></div>
                    <div>
                    <input type='checkbox' id='opt5' name='Scheme_Like_to_avail' value="UP Startup Policy 2020" />
                    <label htmlFor='opt5' style={{fontSize:"0.9rem",padding:"0.5em"}} >UP Startup Policy 2020</label></div>
                    <div>
                    <input type='checkbox' id='opt6' name='Scheme_Like_to_avail' value="Others" />
                    <label htmlFor='opt6' style={{fontSize:"0.9rem",padding:"0.5em"}} >Others</label></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <label className="inner-div-tag" htmlFor='availedByMe' >What are the schemes under<br/>which you are availing benefits<br/>from Govt?<br/>
            (Both State and Central Govt <br/>separately)</label>
            <input type='text' id='availedByMe' name='scheme_availed_by_you' style={{ width: "50%", border: "transparent" }}/>
            </div>
          </div>
        </div>
  )
}

export default FormPart3