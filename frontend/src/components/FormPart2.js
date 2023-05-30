import React from "react";
import "./Table.css";

const FormPart2 = () => {
  return (
    <>
      <>
        <table style={{ width: "100%", overflowWrap: "break-word" }}>
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
                    type="checkbox"
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
                    type="checkbox"
                    id="raw2"
                    name="Raw_Materials"
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
                    type="checkbox"
                    id="raw3"
                    name="Raw_Materials"
                    value="Online"
                    onChange={handleChange}
                  />
                </div>
                <div className="d_flex_align_CONTENT_justify">
                  <label
                    htmlFor="raw4"
                    style={{ fontSize: "0.9rem", padding: "0.5em" }}
                  >
                    others(specify)
                  </label>
                  <input type="checkbox" id="raw4" name="asdf" value="others" onChange={handleChange} />
                </div>
              </div>
              <div>
                <input type="text" name="Raw_Materials" autoFocus onChange={handleChange}/>
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
                            value="male"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material">No</label>
                          <input
                            type="radio"
                            name="if_Raw_Materials_available"
                            id="no_material"
                            value="female"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>
                      {/* style={{ whiteSpace: "nowrap" }} */}
                      If No, please mention difficulties / challenges
                    </td>
                    <td colSpan={6}>
                      <input
                        type="text"
                        id="difficulties"
                        name="if_no_mention_difficulties"
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          border: "transparent",
                          borderBottom: "1px solid black",
                        }}
                      />
                    </td>
                  </tr>
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
                          <label htmlFor="local">Trader / Agents </label>
                          <input
                            type="checkbox"
                            name="service_industry"
                            id="local"
                            value="Local Market"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="radio_wrapper">
                          <label htmlFor="Govt">Wholesalers </label>
                          <input
                            type="checkbox"
                            id="Govt"
                            name="service_industry"
                            value="Government"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="radio_wrapper">
                          <label htmlFor="online">Retailers</label>
                          <input
                            type="checkbox"
                            id="online"
                            name="service_industry"
                            value="online"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="radio_wrapper">
                          <label htmlFor="other">
                            Large Manufacturers/ Anchor units{" "}
                          </label>
                          <input
                            type="checkbox"
                            id="other"
                            name="service_industry"
                            value="Other states"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="radio_wrapper">
                          <label htmlFor="export">Exporters </label>
                          <input
                            type="checkbox"
                            id="export"
                            name="service_industry"
                            value="export outside"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="radio_wrapper">
                          <div className="radio_wrapper">
                            <label htmlFor="local">OEMs </label>
                            <input
                              type="checkbox"
                              name="service_industry"
                              id="local"
                              value="Local Market"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="radio_wrapper">
                          <div className="radio_wrapper">
                            <label htmlFor="local">End Users </label>
                            <input
                              type="checkbox"
                              name="service_industry"
                              id="local"
                              value="Local Market"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="radio_wrapper">
                          <div className="radio_wrapper">
                            <label htmlFor="local">Others </label>
                            <input
                              type="checkbox"
                              name="service_industry"
                              id="local"
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
                          <label htmlFor="proprietary">within State</label>
                          <input
                            type="radio"
                            id="withinState"
                            name="markets_supplied"
                            value="within State"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="partnership">outside State</label>
                          <input
                            type="radio"
                            id="outState"
                            name="markets_supplied"
                            value="outside State"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="private">outside country</label>
                          <input
                            type="radio"
                            name="markets_supplied"
                            value="outside country"
                            onChange={handleChange}
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
                          <label htmlFor="yes_material2">Yes</label>
                          <input
                            type="radio"
                            id="yes_material2"
                            name="have_product_brand_name"
                            value="YES"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material2">No</label>
                          <input
                            type="radio"
                            name="have_product_brand_name"
                            id="no_material2"
                            value="NO"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
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
                        style={{
                          borderBottom: "1px solid black",
                        }}
                      />
                    </td>
                  </tr>
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
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="nox_material2">No</label>
                          <input
                            type="radio"
                            name="involved_in_marketing"
                            id="nox_material2"
                            value="NO"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
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
                              style={{
                                width: "100%",
                                border: "transparent",
                                borderBottom: "1px solid black",
                              }}
                            />
                          </div>
                        </td>
                      </div>
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
                            id="yes_material2"
                            value="YES"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material7">No</label>
                          <input
                            type="radio"
                            name="Quality_Testing_lab_available"
                            id="no_material2"
                            value="NO"
                            onChange={handleChange}
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
                          <label htmlFor="yes_material7">Yes</label>
                          <input
                            type="radio"
                            name="labour_and training"
                            id="yes_material2"
                            value="YES"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material7">No</label>
                          <input
                            type="radio"
                            name="labour_and training"
                            id="no_material2"
                            value="NO"
                            onChange={handleChange}
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
                          <label htmlFor="yes_material10">Yes</label>
                          <input
                            type="radio"
                            name="skilled_labour_is_required"
                            id="yes_material0"
                            value="YES"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="no_material10">No</label>
                          <input
                            type="radio"
                            name="skilled_labour_is_required"
                            id="no_material0"
                            value="NO"
                            onChange={handleChange}
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
      </>
    </>
  );
};

export default FormPart2;
//  ☐  ☐
// ☐  ☐  ☐
// Capital
