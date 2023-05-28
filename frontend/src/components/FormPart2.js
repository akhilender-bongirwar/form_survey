import React from "react";
import "./Table.css";

const FormPart2 = () => {
  return (
    <div style={{ width: "70vw", margin: "auto" }}>
      <>
        <div style={{}}>
          <h2
            style={{
              // marginLeft: "0.8em",
              padding: "2%",
              border: "0.15em solid black",
            }}
          >
            For Manufacturing
          </h2>
          <div style={{ display: "flex", flexBasis: "Content" }}>
            <h3
              style={{
                flexBasis: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Raw Materials
            </h3>
            <div>
              <h3
                style={{
                  border: "0.15em solid black",
                  padding: "1%",
                  wordBreak: "break-word",
                }}
              >
                Source of Procurement
              </h3>
              <div style={{}}>
                <label
                  htmlFor="direct"
                  style={{
                    fontWeight: "500",
                    marginRight: "1%",
                    lineHeight: "2em",
                  }}
                >
                  direct
                </label>
                <input
                  type="radio"
                  id="direct"
                  value="direct"
                  name="Raw_Materials"
                />
              </div>
              <div>
                <label
                  htmlFor="trader"
                  style={{ fontWeight: "500", lineHeight: "2em" }}
                >
                  Through Traders
                </label>
                <input
                  type="radio"
                  id="trader"
                  value="Through Traders"
                  name="Raw_Materials"
                />
              </div>
              <div>
                <label
                  htmlFor="online"
                  style={{ fontWeight: "500", lineHeight: "2em" }}
                >
                  Online
                </label>
                <input
                  type="radio"
                  id="online"
                  value="Online"
                  name="Raw_Materials"
                />
              </div>
              <div>
                <label
                  htmlFor="General"
                  style={{ fontWeight: "500", lineHeight: "2em" }}
                >
                  Others Please Specify
                </label>

                <input
                  type="text"
                  id="General"
                  name="Raw_Materials"
                  style={{ width: "70%", border: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Is Raw Material Available Easily
              </h3>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="yes"
                    name="if_Raw_Materials_available"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div style={{ marginRight: "2em" }}>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="if_Raw_Materials_available"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>If No, please mention difficulties / challenges</h3>
              <u>
                <input
                  type="text"
                  id="difficulties"
                  name="if_no_mention_difficulties"
                  style={{
                    width: "70%",
                    border: "transparent",
                    borderBottom: "1px solid black",
                  }}
                />
              </u>
            </div>
            <div style={{ display: "flex", marginTop: "2em" }}>
              <div>
                <h3>
                  Do you adopt any green technology in your production cycle
                  (waste management/ recycling/ etc)
                </h3>
              </div>
              <div>
                <>
                  <div className="checkboxes" style={{}}>
                    <div>
                      <label htmlFor="yes" style={{ fontWeight: "500" }}>
                        Yes
                      </label>
                      <input
                        type="radio"
                        name="green_tech"
                        id="yes"
                        value="YES"
                        style={{ margin: "0.5%" }}
                      />
                    </div>
                    <div style={{ marginRight: "2em" }}>
                      <label htmlFor="no" style={{ fontWeight: "500" }}>
                        No
                      </label>
                      <input
                        type="radio"
                        name="green_tech"
                        value="NO"
                        id="no"
                        style={{ margin: "0.5%" }}
                      />
                    </div>
                  </div>
                </>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3>
                  Does your production facility need any Environment Clearance?
                </h3>
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="yes"
                    name="environment_clearence"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div style={{ marginRight: "2em" }}>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="environment_clearence"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>Final Product sold to</h3>
              </div>
              <div>
                <div className="div-style" style={{ borderTop: 0 }}>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo1">Traders/Agents </label>
                      <input
                        type="checkbox"
                        id="soldTo1"
                        name="final_product_sold_to"
                        value="Traders/Agents"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo2">Wholesalers </label>
                      <input
                        type="checkbox"
                        id="soldTo2"
                        name="final_product_sold_to"
                        value="wholesalers "
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo3">Retailers </label>
                      <input
                        type="checkbox"
                        id="soldTo3"
                        name="final_product_sold_to"
                        value="retailers"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo4">
                        Large Manufacturers/ Anchor units{" "}
                      </label>
                      <input
                        type="checkbox"
                        id="soldTo4"
                        name="final_product_sold_to"
                        value="large manufacturers/ anchor units"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo5">Exporters </label>
                      <input
                        type="checkbox"
                        id="soldTo5"
                        name="final_product_sold_to"
                        value="exporters"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo6">OEMs </label>
                      <input
                        type="checkbox"
                        id="soldTo6"
                        name="final_product_sold_to"
                        value="oems"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo7">End User </label>
                      <input
                        type="checkbox"
                        id="soldTo7"
                        name="final_product_sold_to"
                        value="end user"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="soldTo8">Others </label>
                      <input
                        type="checkbox"
                        id="soldTo8"
                        name="final_product_sold_to"
                        value="others"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <h3>Markets you supply to</h3>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="withinState">Within State </label>
                      <input
                        type="checkbox"
                        id="withinState"
                        name="markets_supplied"
                        value="within state"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="outState">Outside State</label>
                      <input
                        type="checkbox"
                        id="outState"
                        name="markets_supplied"
                        value="outside state "
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                  <div
                    className="checkboxes"
                    style={{
                      borderRight: "2px solid black",
                      display: "flex",
                      flexBasis: "content",
                    }}
                  >
                    <div>
                      <label htmlFor="outCountry">Outside Country </label>
                      <input
                        type="checkbox"
                        id="outCountry"
                        name="markets_supplied"
                        value="outside country"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <h3>
                      Are the products sold under any brand name? If yes,
                      provide the brand name
                    </h3>
                  </div>
                  <div className="checkboxes">
                    <div>
                      <label htmlFor="yes" style={{ fontWeight: "500" }}>
                        Yes
                      </label>
                      <input
                        type="radio"
                        name="have_product_brand_name"
                        value="YES"
                        style={{ margin: "0.5%" }}
                      />
                    </div>
                    <div style={{ marginRight: "2em" }}>
                      <label htmlFor="no" style={{ fontWeight: "500" }}>
                        No
                      </label>
                      <input
                        type="radio"
                        name="have_product_brand_name"
                        value="NO"
                        id="no"
                        style={{ margin: "0.5%" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <label htmlFor="brand">
                      <h3>Brand_name</h3>
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="Brand_name"
                      style={{
                        display: "flex",
                        flexBasis: "content",
                        border: "transparent",
                        borderBottom: "1px solid black",
                        marginRight: "3%",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div>
                      <h3>
                        What challenges do you face / hear while selling your
                        products
                      </h3>
                    </div>
                    <div>
                      <div
                        className="checkboxes"
                        style={{ display: "flex", flexWrap: "wrap" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                            // flexWrap: "wrap",
                          }}
                        >
                          <input
                            type="checkbox"
                            name="challenges_while_selling"
                            value="advance technology"
                            style={{ margin: "0.5%" }}
                            id="advanceTech"
                          />
                          <label
                            htmlFor="advanceTech"
                            style={{ fontWeight: "500" }}
                          >
                            Advance technology
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                            // flexWrap: "wrap",
                          }}
                        >
                          <input
                            type="checkbox"
                            name="challenges_while_selling"
                            value="quality of product"
                            style={{ margin: "0.5%" }}
                            id="quality"
                          />
                          <label
                            htmlFor="quality"
                            style={{ fontWeight: "500" }}
                          >
                            Quality of product
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                            // flexWrap: "wrap",
                          }}
                        >
                          <input
                            type="checkbox"
                            name="challenges_while_selling"
                            value="market competition"
                            id="marketComp"
                            style={{ margin: "0.5%" }}
                          />
                          <label
                            htmlFor="marketComp"
                            style={{ fontWeight: "500" }}
                          >
                            Market Competition
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                            // flexWrap: "wrap",
                          }}
                        >
                          <input
                            type="checkbox"
                            name="challenges_while_selling"
                            value="capital"
                            id="capital"
                            style={{ margin: "0.5%" }}
                          />
                          <label
                            htmlFor="capital"
                            style={{ fontWeight: "500" }}
                          >
                            Capital
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                            // flexWrap: "wrap",
                          }}
                        >
                          <input
                            type="checkbox"
                            name="challenges_while_selling"
                            value="branding and marketing"
                            id="brandMarket"
                            style={{ margin: "0.5%" }}
                          />
                          <label
                            htmlFor="brandMarket"
                            style={{ fontWeight: "500" }}
                          >
                            Branding & Marketing
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",

                            // flexWrap: "wrap",
                          }}
                        >
                          <label htmlFor="other" style={{ fontWeight: "500" }}>
                            Other (specify)
                          </label>

                          <input
                            type="text"
                            id="other"
                            name="challenges_while_selling"
                            style={{
                              width: "70%",
                              border: "transparent",
                              borderBottom: "1px solid black",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div style={{ flexBasis: "70%" }}>
                        <h3>
                          Are you involved in marketing & branding of the
                          product ? If yes, please select the options you
                          leverage for sale of the product ?
                        </h3>
                      </div>
                      <div>
                        <div className="checkboxes">
                          <div>
                            <label htmlFor="yes" style={{ fontWeight: "500" }}>
                              Yes
                            </label>
                            <input
                              type="radio"
                              name="involved_in_marketing"
                              value="YES"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                          <div style={{ marginRight: "2em" }}>
                            <label htmlFor="no" style={{ fontWeight: "500" }}>
                              No
                            </label>
                            <input
                              type="radio"
                              name="involved_in_marketing"
                              value="NO"
                              id="no"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="div-style" style={{ borderTop: 0 }}>
                          <div
                            className="checkboxes"
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="exhibition">Exhibitions</label>
                              <input
                                type="checkbox"
                                id="exhibition"
                                name="options_you_leverage_for_sale"
                                value="exhibitions"
                                style={{ display: "flex", flexWrap: "wrap" }}
                              />
                            </div>
                          </div>

                          <div
                            className="checkboxes"
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="portal">Portals</label>
                              <input
                                type="checkbox"
                                id="portal"
                                name="options_you_leverage_for_sale"
                                value="portals"
                                style={{ margin: "1%" }}
                              />
                            </div>
                          </div>
                          <div
                            className="checkboxes"
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="website">Websites </label>
                              <input
                                type="checkbox"
                                id="website"
                                name="options_you_leverage_for_sale"
                                value="websites"
                                style={{ margin: "1%" }}
                              />
                            </div>
                          </div>
                          <div
                            className="checkboxes"
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="socMedia">Social Media</label>
                              <input
                                type="checkbox"
                                id="socMedia"
                                name="options_you_leverage_for_sale"
                                value="social media"
                                style={{ margin: "1%" }}
                              />
                            </div>
                          </div>
                          <div
                            className="checkboxes"
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="marketFacility">
                                Common marketing facility
                              </label>
                              <input
                                type="checkbox"
                                id="marketFacility"
                                name="options_you_leverage_for_sale"
                                value="Common marketing facility"
                                style={{ margin: "1%" }}
                              />
                            </div>
                            <div>
                              <label htmlFor="others">Others (specify):</label>
                              <input
                                type="text"
                                id="others"
                                name="options_you_leverage_for_sale"
                                style={{ border: "transparent", width: "50%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="div-style" style={{ borderTop: 0 }}>
                        <label className="inner-div-tag">
                          Quality/Testing labs are easily <br />
                          available?
                        </label>
                        <div className="checkboxes">
                          <div>
                            <label style={{ fontWeight: "500" }}>Yes</label>
                            <input
                              type="radio"
                              name="Quality_Testing_lab_available"
                              value="YES"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                          <div>
                            <label style={{ fontWeight: "500" }}>No</label>
                            <input
                              type="radio"
                              name="Quality_Testing_lab_available"
                              value="NO"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="div-style" style={{ borderTop: 0 }}>
                        <label className="inner-div-tag">
                          Is skilled labour and training
                          <br />
                          facilities easily available?{" "}
                        </label>
                        <div
                          className="checkboxes"
                          style={{
                            borderRight: "2px solid black",
                            borderRight: 0,
                          }}
                        >
                          <div>
                            <label htmlFor="yes" style={{ fontWeight: "500" }}>
                              Yes
                            </label>
                            <input
                              type="radio"
                              id="yes"
                              name="labour_and_training"
                              value="YES"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                          <div>
                            <label htmlFor="no" style={{ fontWeight: "500" }}>
                              No
                            </label>
                            <input
                              type="radio"
                              id="no"
                              name="labour_and_training"
                              value="NO"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="div-style" style={{ borderTop: 0 }}>
                        <label className="inner-div-tag">
                          Whether skilled <br />
                          labour is required?
                        </label>
                        <div className="checkboxes">
                          <div>
                            <label htmlFor="yes" style={{ fontWeight: "500" }}>
                              Yes
                            </label>
                            <input
                              type="radio"
                              id="yes"
                              name="skilled_labour_is_required"
                              value="YES"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                          <div>
                            <label htmlFor="no" style={{ fontWeight: "500" }}>
                              No
                            </label>
                            <input
                              type="radio"
                              id="no"
                              name="skilled_labour_is_required"
                              value="NO"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ border: "1px solid black" }}>
                        <h2>For Service Industry</h2>
                        <div style={{ display: "flex", flexBasis: "content" }}>
                          <div>
                            <h3>Nature of Services Offered</h3>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Nature_of_Services_Offered"
                              style={{ border: "transparent" }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Nature_of_Services_Offered"
                              style={{ border: "transparent" }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Nature_of_Services_Offered"
                              style={{ border: "transparent" }}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex", flexBasis: "content" }}>
                          <div>
                            <h3>Challenges Faced</h3>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Challenges_faced"
                              style={{ border: "transparent" }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Challenges_faced"
                              style={{ border: "transparent" }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Challenges_faced"
                              style={{ border: "transparent" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexBasis: "content" }}>
                        <div>
                          <h3>
                            In case you are availing support
                            <br />
                            Govt. agencies / schemes what
                            <br />
                            are the challenges faced with
                            <br />
                            scheme
                          </h3>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="Govt_Scheme_Challenges"
                            style={{ border: "transparent" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexBasis: "content" }}>
                      <div>
                        <h3>Support required</h3>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="Support_required"
                          style={{ border: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default FormPart2;
//  ☐  ☐
// ☐  ☐  ☐
// Capital
