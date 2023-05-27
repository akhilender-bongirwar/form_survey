import React from "react";

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
                <input type="radio" id="SC" name="direct" />
              </div>
              <div>
                <label
                  htmlFor="ST"
                  style={{ fontWeight: "500", lineHeight: "2em" }}
                >
                  Through Traders
                </label>
                <input type="radio" id="ST" name="Through_Traders" />
              </div>
              <div>
                <label
                  htmlFor="OBC"
                  style={{ fontWeight: "500", lineHeight: "2em" }}
                >
                  Online
                </label>
                <input type="radio" id="OBC" name="Online" />
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
                  name="Others"
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
                    name="yes"
                    value="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div style={{ marginRight: "2em" }}>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="yes"
                    value="no"
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
                  id="General"
                  name="Others"
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
                        name="yes"
                        value="yes"
                        style={{ margin: "0.5%" }}
                      />
                    </div>
                    <div style={{ marginRight: "2em" }}>
                      <label htmlFor="no" style={{ fontWeight: "500" }}>
                        No
                      </label>
                      <input
                        type="radio"
                        name="yes"
                        value="no"
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
                    name="yes"
                    value="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div style={{ marginRight: "2em" }}>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="yes"
                    value="no"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                      <label htmlFor="proprietary">Traders/Agents </label>
                      <input
                        type="radio"
                        id="proprietary"
                        name="ownership"
                        value="proprietary"
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
                        name="yes"
                        value="yes"
                        style={{ margin: "0.5%" }}
                      />
                    </div>
                    <div style={{ marginRight: "2em" }}>
                      <label htmlFor="no" style={{ fontWeight: "500" }}>
                        No
                      </label>
                      <input
                        type="radio"
                        name="yes"
                        value="no"
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
                    <label htmlFor="others">
                      <h3>Brand_name</h3>
                    </label>
                    <input
                      type="text"
                      id="others"
                      name="sell"
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
                            type="radio"
                            name="yes"
                            value="yes"
                            style={{ margin: "0.5%" }}
                          />
                          <label htmlFor="yes" style={{ fontWeight: "500" }}>
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
                            type="radio"
                            name="yes"
                            value="yes"
                            style={{ margin: "0.5%" }}
                          />
                          <label htmlFor="yes" style={{ fontWeight: "500" }}>
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
                            type="radio"
                            name="yes"
                            value="yes"
                            style={{ margin: "0.5%" }}
                          />
                          <label htmlFor="yes" style={{ fontWeight: "500" }}>
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
                            type="radio"
                            name="yes"
                            value="yes"
                            style={{ margin: "0.5%" }}
                          />
                          <label htmlFor="yes" style={{ fontWeight: "500" }}>
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
                            type="radio"
                            name="yes"
                            value="yes"
                            style={{ margin: "0.5%" }}
                          />
                          <label htmlFor="yes" style={{ fontWeight: "500" }}>
                            Branding & Marketing
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",

                            // flexWrap: "wrap",
                          }}
                        >
                          <label htmlFor="yes" style={{ fontWeight: "500" }}>
                            Other (specify)
                          </label>

                          <input
                            type="text"
                            id="yes"
                            name="Others"
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
                              name="yes"
                              value="yes"
                              style={{ margin: "0.5%" }}
                            />
                          </div>
                          <div style={{ marginRight: "2em" }}>
                            <label htmlFor="no" style={{ fontWeight: "500" }}>
                              No
                            </label>
                            <input
                              type="radio"
                              name="yes"
                              value="no"
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
                              <label htmlFor="proprietary">Exhibitions</label>
                              <input
                                type="radio"
                                id="proprietary"
                                name="ownership"
                                value="proprietary"
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
                              <label htmlFor="private">Portals</label>
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
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="LLP">Websites </label>
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
                            style={{
                              borderRight: "2px solid black",
                              display: "flex",
                              flexBasis: "content",
                            }}
                          >
                            <div>
                              <label htmlFor="public limited">
                                Social Media
                              </label>
                              <input
                                type="radio"
                                id="public limited"
                                name="ownership"
                                value="Public Limited"
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
                              <label htmlFor="public limited">
                                Common marketing facility
                              </label>
                              <input
                                type="radio"
                                id="public limited"
                                name="ownership"
                                value="Public Limited"
                                style={{ margin: "1%" }}
                              />
                            </div>
                            Others (specify):
                          </div>
                        </div>
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
