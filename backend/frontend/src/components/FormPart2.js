import React, { useState } from "react";
import "./Table.css";
import { NavLink, useNavigate } from "react-router-dom";
import { t } from "i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToastContainer, toast } from "react-toastify";

const FormPart2 = ({
  formD,
  setFormD,
  expand,
  setexpand,
  expand2,
  setexpand2,
}) => {
  const navigate = useNavigate();
  const validate = (e) => {
    e.preventDefault();
    const challFacing = document.querySelectorAll(".facingChal");
    const challFacing1 = document.querySelector(".facingChal");
    var challengesChk = false;
    var challengesChk1 = false;

    const marketing = document.querySelectorAll(".branding");
    const marketing1 = document.querySelector(".branding");
    var marketingChk = false;
    var marketingChk1 = false;

    const srcProcurement = document.querySelectorAll(".src");
    const srcProcurement1 = document.querySelector(".src");
    var srcChk = false;
    var srcChk1 = false;

    const form = document.getElementById("formy");

    const checkboxes1 = form.querySelectorAll(`input[type="checkbox"].a`);
    const checkboxes2 = form.querySelectorAll(`input[type="checkbox"].b`);
    var checked1 = false;
    var checked2 = false;

    checkboxes1.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked1 = true;
      }
    });
    checkboxes2.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked2 = true;
      }
    });

    srcProcurement.forEach((el)=>{
      if(el.type == "checkbox"){
        if(el.checked){
          srcChk=true;
        }
      }
      else if(el.type == "text"){
        if(el.value!=""){
          srcChk1=true;
        }
      }
    })


    challFacing.forEach((el) => {
      if (el.type == "checkbox") {
        if (el.checked) {
          challengesChk = true;
        }
      } else if (el.type == "text") {
        console.log(el);
        if (el.value != "") {
          challengesChk1 = true;
        }
      }
    });

    marketing.forEach((el) => {
      if (el.type == "checkbox") {
        if (el.checked) {
          marketingChk = true;
        }
      } else if (el.type == "text") {
        console.log(el);
        if (el.value != "") {
          marketingChk1 = true;
        }
      }
    });

    const err1 = form.querySelector(`input[type="checkbox"].a`);
    const err2 = form.querySelector(`input[type="checkbox"].b`);
    if (expand) {
      if(!srcChk && !srcChk1){
        toast.error("Choose any one of the option or fill the text-field");
        srcProcurement1.setCustomValidity(
          "Choose any one of the option or fill the text-field"
        );
        srcProcurement1.reportValidity();
      }else{
        srcProcurement1.setCustomValidity("");
      }

      if (!challengesChk && !challengesChk1) {
        toast.error("Choose any one of the option or fill the text-field");
        challFacing1.setCustomValidity(
          "Choose any one of the option or fill the text-field"
        );
        challFacing1.reportValidity();
      } else {
        challFacing1.setCustomValidity("");
      }
      if (leverage) {
        if (!marketingChk && !marketingChk1) {
          toast.error("Choose any one of the option or fill the text-field");
          marketing1.setCustomValidity(
            "Choose any one of the option or fill the text-field"
          );
          marketing1.reportValidity();
        } else {
          marketing1.setCustomValidity("");
        }
      }

      if (!checked1) {
        toast.error("fill the required field");
        err1.setCustomValidity("select any one option");
      } else {
        err1.setCustomValidity("");
      }
      if (!checked2) {
        toast.error("fill the required field");
        err2.setCustomValidity("select any one option");
      } else {
        err2.setCustomValidity("");
      }
    }

    const isV = document.getElementById("formy").reportValidity();
    if (
      !isV &&
      (!challengesChk || !challengesChk1) &&
      (!marketingChk || !marketingChk1) && (!srcChk || !srcChk1)
    ) {
      e.preventDefault();
    } else {
      navigate("/eform/3");
    }
  };
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
    }
    //markets supplied by akj
    else if (name === "markets_supplied") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: {
            ...prevFormData[name],
            [value]: checked,
          },
        };
      });
    } else if (
      name === "challenges_while_selling" ||
      name === "options_you_leverage_for_sale" ||
      name=== "Raw_Materials"
    ) {
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
            [name]: {
              ...prevFormData[name],
              [value]: checked,
            },
          };
        });
      }
    } else if (
      name === "Nature_of_Services_Offered_a" ||
      name === "Nature_of_Services_Offered_b" ||
      name === "Nature_of_Services_Offered_c"
    ) {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          Nature_of_Services_Offered: {
            ...prevFormData.Nature_of_Services_Offered,
            [name]: value,
          },
        };
      });
    } else if (
      name === "Challenges_faced_a" ||
      name === "Challenges_faced_b" ||
      name === "Challenges_faced_c"
    ) {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          Challenges_faced: {
            ...prevFormData.Challenges_faced,
            [name]: value,
          },
        };
      });
    } else if (name === "Govt_Scheme_Challenges") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    } else if (name === "Support_required") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    } else if (name === "final_product_sold_to") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: {
            ...prevFormData[name],
            [value]: checked,
          },
        };
      });
    }
    ///
    else if (name === "Aware_of_listed_scehmes") {
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
  const [a211, setA211] = useState(null);
  const [a212, setA212] = useState(null);
  const [challenges, setchallenges] = useState(null);
  const [leverage, setleverage] = useState(null);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          //backgroundColor: "rgb(240 235 248 / 77%)",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Supply Chain</h1>
          <div style={{ marginTop: "7vw" }}>
            <Accordion
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setexpand(!expand);
              }}
              expanded={expand}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{t("For manufacturing Industry")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {expand ? (
                    <table
                      style={{
                        width: "100%",
                        overflowWrap: "break-word",
                        // backgroundColor: "rgb(240 235 248 / 77%)",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <tr>
                        <h1 style={{ margin: "10px 0" }}>
                          {t("Raw Materials")}
                        </h1>
                        <td
                          colSpan={1}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "bolder",
                              margin: "10px 0",
                            }}
                          >
                            {t("Source of Procurement")}
                          </div>
                          <td>
                            <td
                              style={{ display: "flex", flexWrap: "wrap" }}
                              className="grevience_redressal radio_wrapper wrapup"
                            >
                              <td className="d_flex_align_CONTENT_justify">
                                <label
                                  htmlFor="raw1"
                                  style={{
                                    fontSize: "0.9rem",
                                    padding: "0.5em",
                                  }}
                                >
                                  {t("Direct")}
                                </label>
                                <input
                                  type="checkbox"
                                  checked={
                                    formD.Raw_Materials.Direct
                                  }
                                  id="raw1"
                                  name="Raw_Materials"
                                  className="src"
                                  value="Direct"
                                  onChange={handleChange}
                                />
                              </td>
                              <td className="d_flex_align_CONTENT_justify">
                                <label
                                  htmlFor="raw2"
                                  style={{
                                    fontSize: "0.9rem",
                                    padding: "0.5em",
                                  }}
                                >
                                  {t("Through Traders")}
                                </label>
                                <input
                                  type="checkbox"
                                  id="raw2"
                                  className="src"
                                  name="Raw_Materials"
                                  checked={
                                    formD.Raw_Materials.Through_Traders
                                  }
                                  value="Through_Traders"
                                  onChange={handleChange}
                                />
                              </td>
                              <td className="d_flex_align_CONTENT_justify">
                                <label
                                  htmlFor="raw3"
                                  style={{
                                    fontSize: "0.9rem",
                                    padding: "0.5em",
                                  }}
                                >
                                  {t("Online")}
                                </label>
                                <input
                                  type="checkbox"
                                  id="raw3"
                                  className="src"
                                  checked={
                                    formD.Raw_Materials.Online
                                  }
                                  name="Raw_Materials"
                                  value="Online"
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="Raw_Materials"
                                  className="src"
                                  onChange={handleChange}
                                  value={formD.Raw_Materials.other}
                                  placeholder={t("others")}
                                />
                              </td>
                            </td>
                          </td>
                          <tr>
                            <div>
                              <tr>
                                <h1
                                  style={{
                                    fontWeight: "bolder",
                                    margin: "20px 0",
                                  }}
                                >
                                  {t("Is Raw Material available easily")}?
                                </h1>
                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="if_Raw_Materials_available"
                                        required="required"
                                        id="yes_material"
                                        onClick={() => {
                                          setchallenges(null);
                                        }}
                                        value="YES"
                                        onChange={handleChange}
                                        checked={
                                          formD.if_Raw_Materials_available ==
                                          "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="if_Raw_Materials_available"
                                        required="required"
                                        id="no_material"
                                        value="NO"
                                        onClick={() => {
                                          setchallenges("no");
                                        }}
                                        onChange={handleChange}
                                        checked={
                                          formD.if_Raw_Materials_available ==
                                          "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {challenges ? (
                                <tr>
                                  <h1
                                    style={{
                                      fontWeight: "bolder",
                                      margin: "20px 0",
                                    }}
                                  >
                                    {t(
                                      "If No, please mention difficulties / challenges"
                                    )}
                                    ?
                                  </h1>
                                  <td colSpan={6}>
                                    <input
                                      type="text"
                                      id="difficulties"
                                      onChange={handleChange}
                                      value={formD.if_no_mention_difficulties}
                                      name="if_no_mention_difficulties"
                                      required="required"
                                    />
                                  </td>
                                </tr>
                              ) : null}
                              <tr>
                                <h1
                                  style={{
                                    fontWeight: "bolder",
                                    margin: "20px 0",
                                  }}
                                >
                                  {t(
                                    "Do you adopt any green technology in your production cycle (waste management/ recycling/ etc)"
                                  )}
                                  ?
                                </h1>
                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material2">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="green_tech"
                                        id="yes_material2"
                                        required="required"
                                        value="YES"
                                        onClick={() => setA211("show211")}
                                        onChange={handleChange}
                                        checked={formD.green_tech == "YES"}
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material2">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="green_tech"
                                        id="no_material2"
                                        required="required"
                                        value="NO"
                                        onClick={() => setA211(null)}
                                        onChange={handleChange}
                                        checked={formD.green_tech == "NO"}
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {a211 != "show211" ? (
                                ""
                              ) : (
                                <tr>
                                  <td className="heading" colSpan={1}>
                                    <label htmlFor="adopted_green_tech">
                                      {t(
                                        "If Yes, Mention green technology adopted"
                                      )}{" "}
                                    </label>
                                  </td>
                                  <td colSpan={6}>
                                    <input
                                      style={{
                                        minWidth: "20px",
                                        marginBottom: "12px",
                                      }}
                                      type="text"
                                      id="adopted_green_tech"
                                      name="adopted_green_tech"
                                      onChange={handleChange}
                                      required="required"
                                      value={formD.adopted_green_tech}
                                    />
                                  </td>
                                </tr>
                              )}
                              <tr>
                                <h1
                                  style={{
                                    fontWeight: "bolder",
                                    margin: "20px 0",
                                  }}
                                >
                                  {t(
                                    "Does your production facility need any Environment Clearance"
                                  )}
                                  ?
                                </h1>
                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material3">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="environment_clearence"
                                        id="yes_material3"
                                        required="required"
                                        value="YES"
                                        onClick={() => setA212("show212")}
                                        onChange={handleChange}
                                        checked={
                                          formD.environment_clearence == "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material3">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="environment_clearence"
                                        id="no_material3"
                                        required="required"
                                        value="NO"
                                        onClick={() => setA212(null)}
                                        onChange={handleChange}
                                        checked={
                                          formD.environment_clearence == "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {a212 != "show212" ? (
                                ""
                              ) : (
                                <tr>
                                  <td className="heading" colSpan={1}>
                                    <label htmlFor="required_environment_clearence">
                                      {t(
                                        "If Yes, Mention Clearance required"
                                      )}{" "}
                                    </label>
                                  </td>
                                  <td colSpan={6}>
                                    <input
                                      style={{
                                        minWidth: "20px",
                                        marginBottom: "12px",
                                      }}
                                      type="text"
                                      id="required_environment_clearence"
                                      name="required_environment_clearence"
                                      onChange={handleChange}
                                      required="required"
                                      value={formD.required_environment_clearence}
                                    />
                                  </td>
                                </tr>
                              )}
                              <tr>
                                <td colSpan={1}>
                                  <h1>{t("Final Product sold to")}</h1>
                                </td>
                                <td>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="locala">
                                        {t("Trader / Agents")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="final_product_sold_to"
                                        className="a"
                                        id="locala"
                                        value="Trader_Agents"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to
                                            .Trader_Agents
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="Govtb">
                                        {t("Wholesalers")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        id="Govtb"
                                        name="final_product_sold_to"
                                        className="a"
                                        value="Wholesalers"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to
                                            .Wholesalers
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="onlinec">
                                        {t("Retailers")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        id="onlinec"
                                        name="final_product_sold_to"
                                        value="Retailers"
                                        className="a"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to.Retailers
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="otherd">
                                        {t("Large Manufacturers/ Anchor units")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        id="otherd"
                                        name="final_product_sold_to"
                                        value="Large_Manufacturers_Anchor_units"
                                        className="a"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to
                                            .Large_Manufacturers_Anchor_units
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="exporte">
                                        {t("Exporters")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        id="exporte"
                                        name="final_product_sold_to"
                                        className="a"
                                        value="Exporters"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to.Exporters
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="localf">
                                        {t("OEMs")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="final_product_sold_to"
                                        className="a"
                                        id="localf"
                                        value="OEMs"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to.OEMs
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="localg">
                                        {t("End Users")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="final_product_sold_to"
                                        id="localg"
                                        value="End_Users"
                                        className="a"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to.End_Users
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="localh">
                                        {t("Others")}{" "}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="final_product_sold_to"
                                        id="localh"
                                        value="Others"
                                        className="a"
                                        onChange={handleChange}
                                        checked={
                                          formD.final_product_sold_to.Others
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <h1>{t("Markets you supply to")}</h1>
                                </td>
                                <td colSpan={6}>
                                  <div
                                    className="radio_wrapper wrapup"
                                    id="ownership_pattern"
                                  >
                                    <div>
                                      <label htmlFor="withinState">
                                        {t("within State")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        id="withinState"
                                        name="markets_supplied"
                                        value="within_State"
                                        className="b"
                                        checked={
                                          formD.markets_supplied.within_State
                                        }
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="outState">
                                        {t("outside State")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        id="outState"
                                        name="markets_supplied"
                                        checked={
                                          formD.markets_supplied.outside_State
                                        }
                                        value="outside_State"
                                        className="b"
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="outside_country">
                                        {t("outside country")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="markets_supplied"
                                        value="outside_country"
                                        className="b"
                                        onChange={handleChange}
                                        checked={
                                          formD.markets_supplied.outside_country
                                        }
                                        id="outside_country"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <h1>
                                    {t(
                                      "Are the products sold under any brand name? If yes,provide the brand name"
                                    )}
                                    .
                                  </h1>
                                </td>
                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material23">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        id="yes_material23"
                                        onClick={() => setothers("yes")}
                                        name="have_product_brand_name"
                                        required="required"
                                        value="YES"
                                        onChange={handleChange}
                                        checked={
                                          formD.have_product_brand_name == "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material23">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="have_product_brand_name"
                                        id="no_material23"
                                        value="NO"
                                        required="required"
                                        onClick={() => setothers(null)}
                                        onChange={handleChange}
                                        checked={
                                          formD.have_product_brand_name == "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {others ? (
                                <tr>
                                  <td colSpan={1}>
                                    <label htmlFor="brand">
                                      {t("Brand_name")}
                                    </label>
                                  </td>
                                  <td colSpan={6}>
                                    <input
                                      type="text"
                                      id="brand"
                                      name="Brand_name"
                                      required="required"
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
                                <h1 style={{ margin: "10px 0" }}>
                                  {t(
                                    "What challenges do you face/hear while selling your products"
                                  )}
                                </h1>
                                <td colSpan={6}>
                                  <input
                                    type="text"
                                    name="challenges_face_hear"
                                    onChange={handleChange}
                                    value={formD.challenges_face_hear}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label>
                                    <h1>
                                      {t(
                                        "What challenges are you facing in selling the product in the market"
                                      )}
                                      ?
                                    </h1>
                                  </label>
                                </td>
                                <div>
                                  <td
                                    colSpan={6}
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                    className="input_label_gapper radio_wrapper wrapup"
                                  >
                                    <div>
                                      <label
                                        style={{ padding: "0.5em" }}
                                        htmlFor="advanceTech"
                                      >
                                        {t("Advance technology")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="challenges_while_selling"
                                        value="advance_technology"
                                        className="facingChal"
                                        checked={
                                          formD.challenges_while_selling
                                            .advance_technology
                                        }
                                        id="advanceTech"
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="quality"
                                        style={{ padding: "0.5em" }}
                                      >
                                        {t("Quality of product")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="challenges_while_selling"
                                        value="quality_of_product"
                                        className="facingChal"
                                        id="quality"
                                        checked={
                                          formD.challenges_while_selling
                                            .quality_of_product
                                        }
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="marketComp"
                                        style={{ padding: "0.5em" }}
                                      >
                                        {t("Market Competition")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="challenges_while_selling"
                                        value="market_competition"
                                        className="facingChal"
                                        id="marketComp"
                                        onChange={handleChange}
                                        checked={
                                          formD.challenges_while_selling
                                            .market_competition
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="capital"
                                        style={{ padding: "0.5em" }}
                                      >
                                        {t("Capital")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="challenges_while_selling"
                                        value="capital"
                                        id="capital"
                                        className="facingChal"
                                        onChange={handleChange}
                                        checked={
                                          formD.challenges_while_selling.capital
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="brandMarket"
                                        style={{ padding: "0.5em" }}
                                      >
                                        {t("Branding & Marketing")}
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="challenges_while_selling"
                                        value="branding_and_marketing"
                                        id="brandMarket"
                                        className="facingChal"
                                        onChange={handleChange}
                                        checked={
                                          formD.challenges_while_selling
                                            .branding_and_marketing
                                        }
                                      />
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <label htmlFor="other">
                                        {t("Other (specify)")}
                                      </label>
                                      <td>
                                        <input
                                          type="text"
                                          id="other"
                                          name="challenges_while_selling"
                                          className="facingChal"
                                          onChange={handleChange}
                                          value={
                                            formD.challenges_while_selling.other
                                          }
                                        />
                                      </td>
                                    </div>
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <h1>
                                    {t(
                                      "Are you involved in marketing & branding of the product ? If yes, please select the options you leverage for sale of the product"
                                    )}{" "}
                                    ?
                                  </h1>{" "}
                                </td>
                                <td
                                  colSpan={6}
                                  // style={{ display: "flex", alignItems: "center" }}
                                >
                                  <div
                                    className="radio_wrapper wrapup"
                                    style={{ alignSelf: "center" }}
                                  >
                                    <div>
                                      <label htmlFor="yesx_material2">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="involved_in_marketing"
                                        id="yesx_material2"
                                        value="YES"
                                        required="required"
                                        onClick={() => {
                                          setleverage("yes");
                                        }}
                                        onChange={handleChange}
                                        checked={
                                          formD.involved_in_marketing == "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="nox_material2">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="involved_in_marketing"
                                        id="nox_material2"
                                        required="required"
                                        onClick={() => {
                                          setleverage(null);
                                          // clearfields();
                                        }}
                                        value="NO"
                                        onChange={handleChange}
                                        checked={
                                          formD.involved_in_marketing == "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                  {leverage ? (
                                    <div>
                                      <td
                                        style={{
                                          width: "100%",
                                          display: "flex",
                                          flexDirection: "column",
                                        }}
                                      >
                                        <td
                                          colSpan={6}
                                          className="input_label_gapper wrapup"
                                        >
                                          <div>
                                            <label
                                              htmlFor="exhibition"
                                              style={{ padding: "0.5em" }}
                                            >
                                              {t("Exhibitions")}
                                            </label>
                                            <input
                                              type="checkbox"
                                              id="exhibition"
                                              name="options_you_leverage_for_sale"
                                              className="branding"
                                              value="exhibitions"
                                              onChange={handleChange}
                                              checked={
                                                formD
                                                  .options_you_leverage_for_sale
                                                  .exhibitions
                                              }
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="portal"
                                              style={{ padding: "0.5em" }}
                                            >
                                              {t("Portals")}
                                            </label>
                                            <input
                                              type="checkbox"
                                              id="portal"
                                              name="options_you_leverage_for_sale"
                                              className="branding"
                                              value="portals"
                                              onChange={handleChange}
                                              checked={
                                                formD
                                                  .options_you_leverage_for_sale
                                                  .portals
                                              }
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="website"
                                              style={{ padding: "0.5em" }}
                                            >
                                              {t("Websites")}{" "}
                                            </label>
                                            <input
                                              type="checkbox"
                                              id="website"
                                              name="options_you_leverage_for_sale"
                                              className="branding"
                                              value="websites"
                                              onChange={handleChange}
                                              checked={
                                                formD
                                                  .options_you_leverage_for_sale
                                                  .websites
                                              }
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="socMedia"
                                              style={{ padding: "0.5em" }}
                                            >
                                              {t("Social Media")}
                                            </label>
                                            <input
                                              type="checkbox"
                                              id="socMedia"
                                              name="options_you_leverage_for_sale"
                                              className="branding"
                                              value="social_media"
                                              onChange={handleChange}
                                              checked={
                                                formD
                                                  .options_you_leverage_for_sale
                                                  .social_media
                                              }
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="marketFacility"
                                              style={{ padding: "0.5em" }}
                                            >
                                              {t("Common marketing facility")}
                                            </label>
                                            <input
                                              type="checkbox"
                                              id="marketFacility"
                                              name="options_you_leverage_for_sale"
                                              value="Common_marketing_facility"
                                              className="branding"
                                              onChange={handleChange}
                                              checked={
                                                formD
                                                  .options_you_leverage_for_sale
                                                  .Common_marketing_facility
                                              }
                                            />
                                          </div>
                                          <tr>
                                            <td>
                                              <label htmlFor="other">
                                                {t("Other (specify)")}
                                              </label>
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                id="other"
                                                name="options_you_leverage_for_sale"
                                                className="branding"
                                                onChange={handleChange}
                                                value={
                                                  formD
                                                    .options_you_leverage_for_sale
                                                    .other
                                                }
                                              />
                                            </td>
                                          </tr>
                                        </td>
                                      </td>
                                    </div>
                                  ) : null}
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <h1>
                                    {t(
                                      "Quality/Testing labs are easily available"
                                    )}
                                    ?
                                  </h1>
                                </td>

                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material7">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="Quality_Testing_lab_available"
                                        id="yes_material7"
                                        value="YES"
                                        required="required"
                                        onChange={handleChange}
                                        checked={
                                          formD.Quality_Testing_lab_available ==
                                          "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material7">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="Quality_Testing_lab_available"
                                        id="no_material7"
                                        value="NO"
                                        required="required"
                                        onChange={handleChange}
                                        checked={
                                          formD.Quality_Testing_lab_available ==
                                          "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <h1>
                                    {" "}
                                    {t(
                                      "Is skilled labour and training facilities easily available"
                                    )}
                                    ?
                                  </h1>
                                </td>

                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material120">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="labour_and_training"
                                        id="yes_material120"
                                        value="YES"
                                        required="required"
                                        onChange={handleChange}
                                        checked={
                                          formD.labour_and_training == "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material120">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="labour_and_training"
                                        id="no_material120"
                                        value="NO"
                                        required="required"
                                        onChange={handleChange}
                                        checked={
                                          formD.labour_and_training == "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <h1>
                                    {t("Whether skilled labour is required")}?
                                  </h1>
                                </td>

                                <td colSpan={6}>
                                  <div className="radio_wrapper wrapup">
                                    <div>
                                      <label htmlFor="yes_material90">
                                        {t("YES")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="skilled_labour_is_required"
                                        id="yes_material90"
                                        value="YES"
                                        required="required"
                                        onChange={handleChange}
                                        checked={
                                          formD.skilled_labour_is_required ==
                                          "YES"
                                        }
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="no_material90">
                                        {t("NO")}
                                      </label>
                                      <input
                                        type="radio"
                                        name="skilled_labour_is_required"
                                        id="no_material90"
                                        value="NO"
                                        required="required"
                                        onChange={handleChange}
                                        checked={
                                          formD.skilled_labour_is_required ==
                                          "NO"
                                        }
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
                  ) : null}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <ToastContainer />
          <div style={{ marginTop: "2vw" }}>
            <Accordion
              expanded={expand2}
              onClick={(e) => {
                e.preventDefault();

                setexpand2(!expand2);
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{t("For Service Industry")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {expand2 ? (
                    <table
                      style={{
                        width: "100%",
                        overflowWrap: "break-word",
                        // backgroundColor: "rgb(240 235 248 / 77%)",
                      }}
                      className="grevience_redressal"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <tr>
                        <h1 style={{ margin: "10px 0" }}>
                          {t("Nature of Services Offered")}
                        </h1>
                        <tr colSpan={6}>
                          <td>
                            <input
                              type="text"
                              name="Nature_of_Services_Offered_a"
                              required="required"
                              onChange={handleChange}
                              value={
                                formD.Nature_of_Services_Offered
                                  .Nature_of_Services_Offered_a
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="Nature_of_Services_Offered_b"
                              onChange={handleChange}
                              value={
                                formD.Nature_of_Services_Offered
                                  .Nature_of_Services_Offered_b
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="Nature_of_Services_Offered_c"
                              onChange={handleChange}
                              value={
                                formD.Nature_of_Services_Offered
                                  .Nature_of_Services_Offered_c
                              }
                            />
                          </td>
                        </tr>
                      </tr>
                      <tr>
                        <h1 style={{ margin: "10px 0" }}>
                          {t("Challenges Faced")}
                        </h1>
                        <tr colSpan={6}>
                          {" "}
                          <td>
                            <input
                              type="text"
                              name="Challenges_faced_a"
                              onChange={handleChange}
                              value={formD.Challenges_faced.Challenges_faced_a}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="Challenges_faced_b"
                              onChange={handleChange}
                              value={formD.Challenges_faced.Challenges_faced_b}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="Challenges_faced_c"
                              onChange={handleChange}
                              value={formD.Challenges_faced.Challenges_faced_c}
                            />
                          </td>
                        </tr>
                      </tr>
                      <tr>
                        <h1 style={{ margin: "10px 0" }}>
                          {t(
                            "In case you are availing support Govt. agencies / schemes what are the challenges faced with scheme"
                          )}
                        </h1>
                        <td colSpan={6}>
                          <input
                            type="text"
                            name="Govt_Scheme_Challenges"
                            onChange={handleChange}
                            value={formD.Govt_Scheme_Challenges}
                          />
                        </td>
                      </tr>
                      <tr>
                        <h1 style={{ margin: "10px 0" }}>
                          {t("Support required")}
                        </h1>
                        <td colSpan={6}>
                          <input
                            type="text"
                            name="Support_required"
                            onChange={handleChange}
                            value={formD.Support_required}
                          />
                        </td>
                      </tr>
                    </table>
                  ) : null}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 15px",
              fontSize: "large",
            }}
          >
            <NavLink to="/eForm/1" className="arrow_notation">
              {t("Prev")}
            </NavLink>
            {expand || expand2 ? (
              <NavLink to="/eForm/3" className="arrow_notation" onClick={validate}>
                {t("Next")}
              </NavLink>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPart2;
