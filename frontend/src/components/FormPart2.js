import React, { useState } from "react";
import "./Table.css";
import { NavLink } from "react-router-dom";

const FormPart2 = ({ formD, setFormD }) => {
  function handleChange(event) {
    const { name, value, type, checked, className } = event.target;
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
    } else if (name === "applied_loan_outcome" || name == "Raw_Materials") {
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
    } else {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  }
  const [others, setothers] = useState(null);
  const [challenges, setchallenges] = useState(null);
  const [leverage, setleverage] = useState(null);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "rgb(240 235 248 / 77%)",
      }}
    >
      <div style={{ width: "95vw", backgroundColor: "rgb(240 235 248 / 77%)" }}>
        <table
          style={{
            width: "100%",
            overflowWrap: "break-word",
            backgroundColor: "rgb(240 235 248 / 77%)",
          }}
        >
          <thead>
            <th colSpan={6}>{"B. For Manufacturing"}</th>
          </thead>
          <tr>
            <td colSpan={1} style={{ textAlign: "center" }}>
              Raw Materials
            </td>
            <td
              colSpan={1}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ textAlign: "center", fontWeight: "bolder" }}>
                Source of Procurement
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap" }}
                className="grevience_redressal radio_wrapper"
              >
                <div className="d_flex_align_CONTENT_justify">
                  <label
                    htmlFor="raw1"
                    style={{ fontSize: "0.9rem", padding: "0.5em" }}
                  >
                    Direct
                  </label>
                  <input
                    type="radio"
                    checked={
                      formD.Raw_Materials.radio_button == "Direct" &&
                      formD.Raw_Materials.other == ""
                    }
                    id="raw1"
                    name="Raw_Materials"
                    value="Direct"
                    onChange={handleChange}
                  />
                </div>
                <div className="d_flex_align_CONTENT_justify">
                  <label
                    htmlFor="raw2"
                    style={{ fontSize: "0.9rem", padding: "0.5em" }}
                  >
                    Through Traders
                  </label>
                  <input
                    type="radio"
                    id="raw2"
                    name="Raw_Materials"
                    checked={
                      formD.Raw_Materials.radio_button == "Through Traders" &&
                      formD.Raw_Materials.other == ""
                    }
                    value="Through Traders"
                    onChange={handleChange}
                  />
                </div>
                <div className="d_flex_align_CONTENT_justify">
                  <label
                    htmlFor="raw3"
                    style={{ fontSize: "0.9rem", padding: "0.5em" }}
                  >
                    Online
                  </label>
                  <input
                    type="radio"
                    id="raw3"
                    checked={
                      formD.Raw_Materials.radio_button == "Online" &&
                      formD.Raw_Materials.other == ""
                    }
                    name="Raw_Materials"
                    value="Online"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="Raw_Materials"
                  onChange={handleChange}
                  value={formD.Raw_Materials.other}
                  placeholder="others(specify)"
                />
              </div>
              <tr>
                <div>
                  <tr>
                    <td colSpan={1}>
                      <span style={{ whiteSpace: "nowrap" }}>
                        Is Raw Material available easily?
                      </span>
                    </td>
                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material">Yes</label>
                          <input
                            type="radio"
                            name="if_Raw_Materials_available"
                            id="yes_material"
                            onClick={() => {
                              setchallenges("yes");
                            }}
                            value="YES"
                            onChange={handleChange}
                            checked={formD.if_Raw_Materials_available == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material">No</label>
                          <input
                            type="radio"
                            name="if_Raw_Materials_available"
                            id="no_material"
                            value="NO"
                            onClick={() => {
                              setchallenges(null);
                            }}
                            onChange={handleChange}
                            checked={formD.if_Raw_Materials_available == "NO"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {!challenges ? (
                    <tr>
                      <td colSpan={1}>
                        {/* style={{ whiteSpace: "nowrap" }} */}
                        If No, please mention difficulties / challenges
                      </td>
                      <td colSpan={6}>
                        <input
                          type="text"
                          id="difficulties"
                          onChange={handleChange}
                          value={formD.if_no_mention_difficulties}
                          name="if_no_mention_difficulties"
                          style={{
                            width: "100%",
                            border: "transparent",
                            borderBottom: "1px solid black",
                          }}
                        />
                      </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td colSpan={1}>
                      <span>
                        {/* style={{ whiteSpace: "nowrap" }} */}
                        Do you adopt any green technology in your production
                        cycle (waste management/ recycling/ etc)
                      </span>
                    </td>
                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material2">Yes</label>
                          <input
                            type="radio"
                            name="green_tech"
                            id="yes_material2"
                            value="YES"
                            onChange={handleChange}
                            checked={formD.green_tech == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material2">No</label>
                          <input
                            type="radio"
                            name="green_tech"
                            id="no_material2"
                            value="NO"
                            onChange={handleChange}
                            checked={formD.green_tech == "NO"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span>
                        {/* style={{ whiteSpace: "nowrap" }} */}
                        Does your production facility need any Environment
                        Clearance?
                      </span>
                    </td>
                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material3">Yes</label>
                          <input
                            type="radio"
                            name="environment_clearence"
                            id="yes_material3"
                            value="YES"
                            onChange={handleChange}
                            checked={formD.environment_clearence == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material3">No</label>
                          <input
                            type="radio"
                            name="environment_clearence"
                            id="no_material3"
                            value="NO"
                            onChange={handleChange}
                            checked={formD.environment_clearence == "NO"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span style={{ whiteSpace: "nowrap" }}>
                        Final Product sold to
                      </span>
                    </td>
                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div className="radio_wrapper">
                          <label htmlFor="locala">Trader / Agents </label>
                          <input
                            type="checkbox"
                            name="final_product_sold_to"
                            id="locala"
                            value="Trader / Agents"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="radio_wrapper">
                          <label htmlFor="Govtb">Wholesalers </label>
                          <input
                            type="checkbox"
                            id="Govtb"
                            name="final_product_sold_to"
                            value="Wholesalers "
                            onChange={handleChange}
                          />
                        </div>

                        <div className="radio_wrapper">
                          <label htmlFor="onlinec">Retailers</label>
                          <input
                            type="checkbox"
                            id="onlinec"
                            name="final_product_sold_to"
                            value="Retailers"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="radio_wrapper">
                          <label htmlFor="otherd">
                            Large Manufacturers/ Anchor units{" "}
                          </label>
                          <input
                            type="checkbox"
                            id="otherd"
                            name="final_product_sold_to"
                            value="Large Manufacturers/ Anchor units"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="radio_wrapper">
                          <label htmlFor="exporte">Exporters </label>
                          <input
                            type="checkbox"
                            id="exporte"
                            name="final_product_sold_to"
                            value="Exporters"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="radio_wrapper">
                          <div className="radio_wrapper">
                            <label htmlFor="localf">OEMs </label>
                            <input
                              type="checkbox"
                              name="final_product_sold_to"
                              id="localf"
                              value="Local Market"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="radio_wrapper">
                          <div className="radio_wrapper">
                            <label htmlFor="localg">End Users </label>
                            <input
                              type="checkbox"
                              name="final_product_sold_to"
                              id="localg"
                              value="Local Market"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="radio_wrapper">
                          <div className="radio_wrapper">
                            <label htmlFor="localh">Others </label>
                            <input
                              type="checkbox"
                              name="final_product_sold_to"
                              id="localh"
                              value="Local Market"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span style={{ whiteSpace: "nowrap" }}>
                        Markets you supply to
                      </span>
                    </td>
                    <td colSpan={6}>
                      <div className="radio_wrapper" id="ownership_pattern">
                        <div>
                          <label htmlFor="withinState">within State</label>
                          <input
                            type="checkbox"
                            id="withinState"
                            name="markets_supplied"
                            value="within_State"
                            checked={formD.markets_supplied.within_State}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="outState">outside State</label>
                          <input
                            type="checkbox"
                            id="outState"
                            name="markets_supplied"
                            checked={formD.markets_supplied.outside_State}
                            value="outside_State"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="outside_country">
                            outside country
                          </label>
                          <input
                            type="checkbox"
                            name="markets_supplied"
                            value="outside_country"
                            onChange={handleChange}
                            checked={formD.markets_supplied.outside_country}
                            id="outside_country"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span>
                        Are the products sold under any brand name? If yes,
                        provide the brand name.
                      </span>
                    </td>
                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material23">Yes</label>
                          <input
                            type="radio"
                            id="yes_material23"
                            onClick={() => setothers("yes")}
                            name="have_product_brand_name"
                            value="YES"
                            onChange={handleChange}
                            checked={formD.have_product_brand_name == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material23">No</label>
                          <input
                            type="radio"
                            name="have_product_brand_name"
                            id="no_material23"
                            value="NO"
                            onClick={() => setothers(null)}
                            onChange={handleChange}
                            checked={formD.have_product_brand_name == "NO"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {others ? (
                    <tr>
                      <td colSpan={1}>
                        <label htmlFor="brand">Brand_name</label>
                      </td>
                      <td colSpan={6}>
                        <input
                          type="text"
                          id="brand"
                          name="Brand_name"
                          onChange={handleChange}
                          value={formD.Brand_name}
                          style={{
                            borderBottom: "1px solid black",
                          }}
                        />
                      </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td>
                      <label>
                        What challenges are you facing in selling the product in
                        the market?
                      </label>
                    </td>
                    <td
                      colSpan={6}
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="input_label_gapper"
                    >
                      <div>
                        <label
                          style={{ padding: "0.5em" }}
                          htmlFor="advanceTech"
                        >
                          Advance technology
                        </label>
                        <input
                          type="checkbox"
                          name="challenges_while_selling"
                          value="advance technology"
                          id="advanceTech"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="quality" style={{ padding: "0.5em" }}>
                          Quality of product
                        </label>
                        <input
                          type="checkbox"
                          name="challenges_while_selling"
                          value="quality of product"
                          id="quality"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="marketComp"
                          style={{ padding: "0.5em" }}
                        >
                          Market Competition
                        </label>
                        <input
                          type="checkbox"
                          name="challenges_while_selling"
                          value="market competition"
                          id="marketComp"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="capital" style={{ padding: "0.5em" }}>
                          Capital
                        </label>
                        <input
                          type="checkbox"
                          name="challenges_while_selling"
                          value="capital"
                          id="capital"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="brandMarket"
                          style={{ padding: "0.5em" }}
                        >
                          Branding & Marketing
                        </label>
                        <input
                          type="checkbox"
                          name="challenges_while_selling"
                          value="branding and marketing"
                          id="brandMarket"
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <label htmlFor="other">Other (specify)</label>

                        <input
                          type="text"
                          id="other"
                          name="challenges_while_selling"
                          onChange={handleChange}
                          value={formD.challenges_while_selling}
                          style={{
                            width: "100%",
                            border: "transparent",
                            borderBottom: "1px solid black",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span>
                        Are you involved in marketing & branding of the product
                        ? If yes, please select the options you leverage for
                        sale of the product ?
                      </span>{" "}
                    </td>
                    <td
                      colSpan={6}
                      // style={{ display: "flex", alignItems: "center" }}
                    >
                      <div
                        className="radio_wrapper"
                        style={{ alignSelf: "center" }}
                      >
                        <div>
                          <label htmlFor="yesx_material2">Yes</label>
                          <input
                            type="radio"
                            name="involved_in_marketing"
                            id="yesx_material2"
                            value="YES"
                            onClick={() => {
                              setleverage("yes");
                            }}
                            onChange={handleChange}
                            checked={formD.involved_in_marketing == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="nox_material2">No</label>
                          <input
                            type="radio"
                            name="involved_in_marketing"
                            id="nox_material2"
                            onClick={() => {
                              setleverage(null);
                            }}
                            value="NO"
                            onChange={handleChange}
                            checked={formD.involved_in_marketing == "NO"}
                          />
                        </div>
                      </div>
                      {leverage ? (
                        <div>
                          <td
                            colSpan={6}
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                            className="input_label_gapper"
                          >
                            <div>
                              <label
                                htmlFor="exhibition"
                                style={{ padding: "0.5em" }}
                              >
                                Exhibitions
                              </label>
                              <input
                                type="checkbox"
                                id="exhibition"
                                name="options_you_leverage_for_sale"
                                value="exhibitions"
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="portal"
                                style={{ padding: "0.5em" }}
                              >
                                Portals
                              </label>
                              <input
                                type="checkbox"
                                id="portal"
                                name="options_you_leverage_for_sale"
                                value="portals"
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="website"
                                style={{ padding: "0.5em" }}
                              >
                                Websites{" "}
                              </label>
                              <input
                                type="checkbox"
                                id="website"
                                name="options_you_leverage_for_sale"
                                value="websites"
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="socMedia"
                                style={{ padding: "0.5em" }}
                              >
                                Social Media
                              </label>

                              <input
                                type="checkbox"
                                id="socMedia"
                                name="options_you_leverage_for_sale"
                                value="social media"
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="marketFacility"
                                style={{ padding: "0.5em" }}
                              >
                                Common marketing facility
                              </label>
                              <input
                                type="checkbox"
                                id="marketFacility"
                                name="options_you_leverage_for_sale"
                                value="Common marketing facility"
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label htmlFor="other">Other (specify)</label>

                              <input
                                type="text"
                                id="other"
                                name="challenges_while_selling"
                                onChange={handleChange}
                                value={formD.challenges_while_selling}
                                style={{
                                  width: "100%",
                                  border: "transparent",
                                  borderBottom: "1px solid black",
                                }}
                              />
                            </div>
                          </td>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span>Quality/Testing labs are easily available?</span>
                    </td>

                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material7">Yes</label>
                          <input
                            type="radio"
                            name="Quality_Testing_lab_available"
                            id="yes_material7"
                            value="YES"
                            onChange={handleChange}
                            checked={
                              formD.Quality_Testing_lab_available == "YES"
                            }
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material7">No</label>
                          <input
                            type="radio"
                            name="Quality_Testing_lab_available"
                            id="no_material7"
                            value="NO"
                            onChange={handleChange}
                            checked={
                              formD.Quality_Testing_lab_available == "NO"
                            }
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span>
                        {" "}
                        Is skilled labour and training facilities easily
                        available?
                      </span>
                    </td>

                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material120">Yes</label>
                          <input
                            type="radio"
                            name="labour_and_training"
                            id="yes_material120"
                            value="YES"
                            onChange={handleChange}
                            checked={formD.labour_and_training == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material120">No</label>
                          <input
                            type="radio"
                            name="labour_and_training"
                            id="no_material120"
                            value="NO"
                            onChange={handleChange}
                            checked={formD.labour_and_training == "NO"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      <span>Whether skilled labour is required?</span>
                    </td>

                    <td colSpan={6}>
                      <div className="radio_wrapper">
                        <div>
                          <label htmlFor="yes_material90">Yes</label>
                          <input
                            type="radio"
                            name="skilled_labour_is_required"
                            id="yes_material90"
                            value="YES"
                            onChange={handleChange}
                            checked={formD.skilled_labour_is_required == "YES"}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material90">No</label>
                          <input
                            type="radio"
                            name="skilled_labour_is_required"
                            id="no_material90"
                            value="NO"
                            onChange={handleChange}
                            checked={formD.skilled_labour_is_required == "NO"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </div>
              </tr>
            </td>
          </tr>
        </table>
        <table
          style={{
            width: "100%",
            overflowWrap: "break-word",
            backgroundColor: "rgb(240 235 248 / 77%)",
          }}
          className="grevience_redressal"
        >
          <thead>
            <th colSpan={6}>{" For Service Industry"}</th>
          </thead>
          <tr>
            <td colSpan={1} style={{ textAlign: "center" }}>
              Nature of Services Offered
            </td>
            <td colSpan={6}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan={1} style={{ textAlign: "center" }}>
              Challenges Faced
            </td>
            <td colSpan={6}>
              {" "}
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan={1} style={{ textAlign: "center" }}>
              In case you are availing support Govt. agencies / schemes what are
              the challenges faced with scheme
            </td>
            <td colSpan={6}>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan={1} style={{ textAlign: "center" }}>
              Support required
            </td>
            <td colSpan={6}>
              <input type="text" />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "1em" }}>
          <NavLink to="/" className="arrow_notation">
            Prev
          </NavLink>
          <NavLink to="/3" className="arrow_notation">
            Next
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FormPart2;
//  ☐  ☐
// ☐  ☐  ☐
// Capital
