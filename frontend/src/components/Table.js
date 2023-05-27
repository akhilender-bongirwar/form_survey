import React from "react";
import "./Table.css";
import Input from "./Input";
import { Form } from "react-router-dom";
export async function action({ request }) {
  const formData = await request.formData();
  return null;
}

function Table() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>DRAFT SURVEY FORM</h1>
      <Form method="post" action>
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
              width: "70vw",
              flexWrap: "wrap",
              overflowWrap: "break-word",
              borderBottom: "0",
            }}
          >
            <h2 style={{ marginLeft: "0.8em", padding: "2%" }}>
              A. MSME Specific Questionairre
            </h2>
            <div className="div-style">
              <label htmlFor="enterprise" className="inner-div-tag">
                Enterprise name
              </label>
              <input
                type="text"
                id="enterprise"
                name="enterprise"
                style={{ width: "70%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="entrepreneur"
                className="inner-div-tag">
                Entrepreneur name
              </label>
              <input
                type="text"
                id="enterprise"
                name="entrepreneur"
                style={{ width: "75%", border: "transparent" }} />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                <span>Sex:</span>
                <div style={{ display: "flex",padding:"0.5vw"}}>
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    style={{ margin: "0.5%" }}
                  />
                  M
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    style={{ margin: "0.5%" }}
                  />
                  F
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2%"}}>
                <div
                  style={{
                    fontWeight: "bold",
                    marginRight: "0.1%",
                    alignSelf: "center",
                  }}
                >
                  Category
                </div>
                <div>
                <label htmlFor="SC" style={{fontWeight:"500"}}>SC</label>
                <input type="radio" id="SC" name="category" value="SC" />
                </div>
                <div>
                <label htmlFor="ST" style={{fontWeight:"500"}}>ST</label>
                <input type="radio" id="ST" name="category" value="ST" />
                </div>
                <div>
                <label htmlFor="OBC" style={{fontWeight:"500"}}>SC</label>
                <input type="radio" id="OBC" name="category" value="OBC" />
                </div>
                <div>
                <label htmlFor="General" style={{fontWeight:"500"}}>SC</label>
                <input type="radio" id="General" name="category" value="General" />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="address" className="inner-div-tag">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                style={{ width: "70%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="address" className="inner-div-tag" >
                Website:{" "}
              </label>
              <input
                type="text"
                id="website"
                name="website"
                style={{ width: "70%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Is your firm registerd?{" "}
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{fontWeight:"500"}}>Yes</label>
                  <input
                    type="radio"
                    name="web"
                    value="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{fontWeight:"500"}}>No</label>
                  <input
                    type="radio"
                    name="web"
                    value="no"
                    id="no"
                    style={{ margin: "0.5%" }}/>
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <label className="inner-div-tag" >
                Do you have Udhyog Aadhar / Udyam Registration{" "}
              </label>
              <div className="checkboxes">
                <div>
                  <label htmlFor="yes" style={{fontWeight:"500"}}>Yes</label>
                  <input
                    type="radio"
                    name="aadhar"
                    value="yes"
                    style={{ margin: "0.5%" }}/>
                </div>
                <div>
                  <label htmlFor="no"  style={{fontWeight:"500"}}>No</label>
                  <input
                    type="radio"
                    name="aadhar"
                    value="no"
                    id="no"
                    style={{ margin: "0.5%" }}/>
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="uae" className="inner-div-tag">
                UAM /UEM Number:
              </label>
              <input
                type="text"
                id="uae"
                style={{
                  display:"flex",
                  flexBasis:"content",
                  border: "transparent",
                  borderRight: "2px solid black",
                }}
              />
              <label
                htmlFor="year" className="inner-div-tag">
                Year of Establishment
              </label>
              <input
                type="number"
                id="year"
                name="year"
                style={{ width: "25%", border: "transparent"}}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
              Type of Business
              </label>
              <div>
                <label htmlFor="manufacturing" style={{fontWeight:"500"}}>Manufacturing</label>
                <input type="radio" id="manufacturing" name="business" value="Manufacturing" style={{ margin: "0.5%" }} />
                </div>
                <div>
                <label htmlFor="Service" style={{fontWeight:"500"}}>Service</label>
                <input type="radio" id="Service" name="business" value="Service" style={{ margin: "0.5%" }} />
                </div>
                <div>
                <label htmlFor="Trading" style={{fontWeight:"500"}}>Trading</label>
                <input type="radio" id="Trading" name="business" value="Trading" style={{ margin: "0.5%" }} />
                </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
            <label htmlFor="year" className="inner-div-tag">Whether operations are seasonal in nature? 
             <br/> In case seasonal operations, <br/> no. of months of operations in a year
              </label>
              <input
                type="text"
                id="year"
                style={{ width: "25%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                Ownership Pattern:
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", display:"flex", flexBasis:"content"}}>
                <div>
                <label htmlFor="proprietary">Proprietary</label>
                <input
                  type="radio"
                  id="proprietary"
                  name="ownership"
                  value="proprietary"
                  style={{display:"flex", flexWrap:"wrap"}}
                />
                </div>
              </div>
              <div className="inner-div-tag">
                Partnership If Yes, <br />% ownership of female . . . . .
              </div>
              <div className="checkboxes"  style={{ borderRight: "2px solid black", display:"flex", flexBasis:"content"}}>
                <div>
                  <label htmlFor="private">Private Limited</label>
                  <input
                    type="radio"
                    id="private"
                    name="ownership"
                    value="private Limited"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", display:"flex", flexBasis:"content"}}
              >
                <div>
                  <label htmlFor="LLP">LLP</label>
                  <input
                    type="radio"
                    id="LLP"
                    name="ownership"
                    value="LLP"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", display:"flex", flexBasis:"content"}}
              >
                <div>
                  <label htmlFor="public limited">Public Limited</label>
                  <input
                    type="radio"
                    id="public limited"
                    name="ownership"
                    value="Public Limited"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div className="checkboxes"  style={{display:"flex", flexBasis:"content"}}>
                <div>
                  <label htmlFor="Nolegal">No Legal Entity</label>
                  <input type="radio"
                    id="Nolegal"
                    name="ownership"
                    value="No Legal Entity"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
            </div>

            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                Are you a part of any Cluster?{" "}
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="cluster"
                    value="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no">No</label>
                  <input
                    type="radio"
                    name="cluster"
                    value="no"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <label
                htmlFor="units"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "25%",
                  borderRight: "2px solid black",
                }}
              >
                If Yes, which one? How many units are there{" "}
              </label>
              <input
                type="text"
                id="units"
                name="units"
                placeholder="If No, Why?"
                style={{ width: "30%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                Do you use computer software for accounting or managing
                finances?
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="yes"
                    value="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no">No</label>
                  <input
                    type="radio"
                    name="yes"
                    value="no"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <label
                htmlFor="units"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "25%",
                  borderRight: "2px solid black",
                }}
              >
                What are the top 3 products you offer?{" "}
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="text"
                  id="units"
                  name="units"
                  placeholder="1. "
                  style={{ width: "80%%", border: "transparent" }}
                />
                <input
                  type="text"
                  id="units"
                  name="units"
                  placeholder="2. "
                  style={{ width: "80%", border: "transparent" }}
                />
                <input
                  type="text"
                  id="units"
                  name="units"
                  placeholder="3. "
                  style={{ width: "80%", border: "transparent" }}
                />
              </div>
            </div>
            <div className="overflow-div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="address"
                style={{
                  marginRight: "1% 1.5%",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                Where all do you sell your produce / products majorly?
                <strong> Please tick (✓) all the relevant options </strong>{" "}
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="local">Local Market/ trader</label>
                  <input
                    type="radio"
                    name="other"
                    value="local"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3.5%" }}
              >
                <div>
                  <label htmlFor="Govt">Government (State/Central)</label>
                  <input
                    type="radio"
                    name="other"
                    value="Govt"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="online">Online Platform</label>
                  <input
                    type="radio"
                    name="other"
                    value="online"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="other">Other states in India </label>
                  <input
                    type="radio"
                    name="other"
                    value="other"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="export">Export outside India</label>
                  <input
                    type="radio"
                    name="other"
                    value="export"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div className="checkboxes" style={{ width: "3%" }}>
                <div>
                  <label htmlFor="export">Other please specify</label>
                  <input
                    type="radio"
                    name="other"
                    value="export"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="address"
                style={{
                  marginRight: "1% 1.5%",
                  width: "20%",
                  fontWeight: "bold",
                  borderRight: "2px solid black",
                }}
              >
                In case of Service Industry, your services are offered to{" "}
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="local">Local Market/ trader</label>
                  <input
                    type="radio"
                    name="service"
                    value="local"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3.5%" }}
              >
                <div>
                  <label htmlFor="Govt">Government (State/Central)</label>
                  <input
                    type="radio"
                    name="service"
                    value="Govt"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="online">Online Platform</label>
                  <input
                    type="radio"
                    name="service"
                    value="online"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="other">Other states in India </label>
                  <input
                    type="radio"
                    name="service"
                    value="other"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black", width: "3%" }}
              >
                <div>
                  <label htmlFor="export">Export outside India</label>
                  <input
                    type="radio"
                    name="service"
                    value="export"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div className="checkboxes" style={{ width: "3%" }}>
                <div>
                  <label htmlFor="export">Other please specify</label>
                  <input
                    type="radio"
                    name="service"
                    value="export"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                No. of Employees (or %){" "}
              </label>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Full time: </label>
                  <input
                    type="text"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
                <div>
                  <label htmlFor="time">Part time: </label>
                  <input
                    type="text"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              {/* <div style={{display:"flex",padding:"1%",flexDirection:"column",borderRight:"2px solid black"}}>
                <div>
                <label htmlFor="time">Full time: </label>
                <input type="text" id="time" placeholder="" style={{width:"50%",border:"transparent"}} />
                </div>
                <div>
                <label htmlFor="time">Part time: </label>
                <input type="text" id="time" placeholder="" style={{width:"50%",border:"transparent"}} />
                </div>
            </div> 
            <div style={{display:"flex",padding:"1%",flexDirection:"column",borderRight:"2px solid black"}}>
                <div>
                <label htmlFor="time">Full time: </label>
                <input type="text" id="time" placeholder="" style={{width:"50%",border:"transparent"}} />
                </div>
                <div>
                <label htmlFor="time">Part time: </label>
                <input type="text" id="time" placeholder="" style={{width:"50%",border:"transparent"}} />
                </div>
            </div>  */}
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Table;
