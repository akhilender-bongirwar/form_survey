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

    const srcProcurement = document.querySelectorAll(".source");
    const srcProcurement1 = document.querySelector(".source");
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
    srcProcurement.forEach((el) => {
      if (el.type == "radio") {
        if (el.checked) {
          srcChk = true;
        }
      } else if (el.type == "text") {
        console.log(el);
        if (el.value != "") {
          srcChk1 = true;
        }
      }
    });

    const err1 = form.querySelector(`input[type="checkbox"].a`);
    const err2 = form.querySelector(`input[type="checkbox"].b`);
    if (expand) {
      if (!challengesChk && !challengesChk1) {
        toast.error("Choose any one of the option or fill the text-field");
        challFacing1.setCustomValidity(
          "Choose any one of the option or fill the text-field"
        );
        challFacing1.reportValidity();
      } else {
        challFacing1.setCustomValidity("");
      }

      if (!srcChk && !srcChk1) {
        toast.error("Choose any one of the option or fill the text-field");
        srcProcurement1.setCustomValidity(
          "Choose any one of the option or fill the text-field"
        );
        srcProcurement1.reportValidity();
      } else {
        srcProcurement1.setCustomValidity("");
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
      (!marketingChk || !marketingChk1) &&
      (!srcChk || !srcChk1)
    ) {
      e.preventDefault();
    } else {
      navigate("/3");
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
      name === "options_you_leverage_for_sale"
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
        <div style={{ width: "75vw" }}>
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
                      <thead>
                        <th colSpan={6}>{t("B. For Manufacturing")}</th>
                      </thead>
                      <tr>
                        <td colSpan={1} style={{ textAlign: "center" }}>
                          {t("Raw Materials")}
                        </td>
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
                              textAlign: "center",
                              fontWeight: "bolder",
                            }}
                          >
                            {t("Source of Procurement")}
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
                                {t("Direct")}
                              </label>
                              <input
                                type="radio"
                                checked={
                                  formD.Raw_Materials.radio_button ==
                                    "Direct" && formD.Raw_Materials.other == ""
                                }
                                id="raw1"
                                name="Raw_Materials"
                                value="Direct"
                                className="source"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="d_flex_align_CONTENT_justify">
                              <label
                                htmlFor="raw2"
                                style={{ fontSize: "0.9rem", padding: "0.5em" }}
                              >
                                {t("Through Traders")}
                              </label>
                              <input
                                type="radio"
                                id="raw2"
                                name="Raw_Materials"
                                className="source"
                                checked={
                                  formD.Raw_Materials.radio_button ==
                                    "Through Traders" &&
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
                                {t("Online")}
                              </label>
                              <input
                                type="radio"
                                id="raw3"
                                className="source"
                                checked={
                                  formD.Raw_Materials.radio_button ==
                                    "Online" && formD.Raw_Materials.other == ""
                                }
                                name="Raw_Materials"
                                value="Online"
                                onChange={handleChange}
                              />
                              <div>
                                <input
                                  type="text"
                                  name="Raw_Materials"
                                  className="source"
                                  onChange={handleChange}
                                  value={formD.Raw_Materials.other}
                                  placeholder={t("others")}
                                />
                              </div>
                            </div>
                          </div>
                          <tr>
                            <div>
                              <tr>
                                <td colSpan={1}>
                                  <span>
                                    {t("Is Raw Material available easily")}?
                                  </span>
                                </td>
                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                                  <td colSpan={1}>
                                    {/* style={{ whiteSpace: "nowrap" }} */}
                                    {t(
                                      "If No, please mention difficulties / challenges"
                                    )}
                                  </td>
                                  <td colSpan={6}>
                                    <input
                                      type="text"
                                      id="difficulties"
                                      onChange={handleChange}
                                      value={formD.if_no_mention_difficulties}
                                      name="if_no_mention_difficulties"
                                      required="required"
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
                                    {t(
                                      "Do you adopt any green technology in your production cycle (waste management/ recycling/ etc)"
                                    )}
                                  </span>
                                </td>
                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                                    {t(
                                      "Does your production facility need any Environment Clearance"
                                    )}
                                    ?
                                  </span>
                                </td>
                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                                        onChange={handleChange}
                                        checked={
                                          formD.environment_clearence == "NO"
                                        }
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <span>{t("Final Product sold to")}</span>
                                </td>
                                <td colSpan={6}>
                                  <div className="radio_wrapper">
                                    <div className="radio_wrapper">
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

                                    <div className="radio_wrapper">
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

                                    <div className="radio_wrapper">
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

                                    <div className="radio_wrapper">
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
                                    <div className="radio_wrapper">
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
                                    <div className="radio_wrapper">
                                      <div className="radio_wrapper">
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
                                    </div>
                                    <div className="radio_wrapper">
                                      <div className="radio_wrapper">
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
                                            formD.final_product_sold_to
                                              .End_Users
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="radio_wrapper">
                                      <div className="radio_wrapper">
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
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={1}>
                                  <span>{t("Markets you supply to")}</span>
                                </td>
                                <td colSpan={6}>
                                  <div
                                    className="radio_wrapper"
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
                                  <span>
                                    {t(
                                      "Are the products sold under any brand name? If yes,provide the brand name"
                                    )}
                                    .
                                  </span>
                                </td>
                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                                <td>
                                  <label>
                                    {t(
                                      "What challenges are you facing in selling the product in the market"
                                    )}
                                    ?
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

                                    <input
                                      type="text"
                                      id="other"
                                      name="challenges_while_selling"
                                      className="facingChal"
                                      onChange={handleChange}
                                      value={
                                        formD.challenges_while_selling.other
                                      }
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
                                    {t(
                                      "Are you involved in marketing & branding of the product ? If yes, please select the options you leverage for sale of the product"
                                    )}{" "}
                                    ?
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
                                        <div>
                                          <label htmlFor="other">
                                            {t("Other (specify)")}
                                          </label>

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
                                  <span>
                                    {t(
                                      "Quality/Testing labs are easily available"
                                    )}
                                    ?
                                  </span>
                                </td>

                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                                  <span>
                                    {" "}
                                    {t(
                                      "Is skilled labour and training facilities easily available"
                                    )}
                                    ?
                                  </span>
                                </td>

                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                                  <span>
                                    {t("Whether skilled labour is required")}?
                                  </span>
                                </td>

                                <td colSpan={6}>
                                  <div className="radio_wrapper">
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
                      <thead>
                        <th colSpan={6}>{t("For Service Industry")}</th>
                      </thead>
                      <tr>
                        <td colSpan={1} style={{ textAlign: "center" }}>
                          {t("Nature of Services Offered")}
                        </td>
                        <td colSpan={6}>
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
                          <input
                            type="text"
                            name="Nature_of_Services_Offered_b"
                            onChange={handleChange}
                            value={
                              formD.Nature_of_Services_Offered
                                .Nature_of_Services_Offered_b
                            }
                          />
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
                      <tr>
                        <td colSpan={1} style={{ textAlign: "center" }}>
                          {t("Challenges Faced")}
                        </td>
                        <td colSpan={6}>
                          {" "}
                          <input
                            type="text"
                            name="Challenges_faced_a"
                            onChange={handleChange}
                            value={formD.Challenges_faced.Challenges_faced_a}
                          />
                          <input
                            type="text"
                            name="Challenges_faced_b"
                            onChange={handleChange}
                            value={formD.Challenges_faced.Challenges_faced_b}
                          />
                          <input
                            type="text"
                            name="Challenges_faced_c"
                            onChange={handleChange}
                            value={formD.Challenges_faced.Challenges_faced_c}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={1} style={{ textAlign: "center" }}>
                          {t(
                            "In case you are availing support Govt. agencies / schemes what are the challenges faced with scheme"
                          )}
                        </td>
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
                        <td colSpan={1} style={{ textAlign: "center" }}>
                          {t("Support required")}
                        </td>
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
            <NavLink to="/1" className="arrow_notation">
              {t("Prev")}
            </NavLink>
            {expand || expand2 ? (
              <NavLink to="/3" className="arrow_notation" onClick={validate}>
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
//  ☐  ☐
// ☐  ☐  ☐
// Capital
