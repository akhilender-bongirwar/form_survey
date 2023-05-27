import React from 'react'
import './Table.css'
function FormPart6() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{fontWeight:"bold",fontSize:"1.2em"}}>
    Do you face any challenge while getting payments from buyer? <br/>
    If Yes, What are the challenges you are facing to receive payment from buyers for supplying materials?
            </div>
            <div>
                <input type='text' id='question' name='face_challenge_from_buyer' placeholder='. . . . . . . . . . . . . . . . . . . . . . . . . . . . .' style={{ width: "60%",border:"transparent" }}/>
            </div>
    <div>
        <h2 style={{background:"grey",margin:"0.5em"}}>Questionnaire For Exporters</h2>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
        <table className=''>
            <thead >
                <tr>
                    <th>Area</th>
                    <th>Currently owned</th>
                    <th>To be required</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Certifications</td>
                    <td>
                        <input type='text' id='owned' name='' style={{ width: "50%", border: "transparent"}} />
                    </td>
                    <td>
                        <input type='text' id='required' name='' style={{ width: "50%", border: "transparent"}} />
                    </td>
                </tr>
                <tr>
                    <td>Infrastructure</td>
                    <td>
                        <input type='text' id='owned' name='' style={{ width: "50%", border: "transparent"}} />
                    </td>
                    <td>
                        <input type='text' id='required' name='' style={{ width: "50%", border: "transparent"}} />
                    </td>
                </tr>
                <tr>
                <td>Laboratory</td>
                    <td>
                        <input type='text' id='owned' name='' style={{ width: "50%", border: "transparent"}} />
                    </td>
                    <td>
                        <input type='text' id='required' name='' style={{ width: "50%", border: "transparent"}} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default FormPart6