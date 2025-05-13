import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
const Home = () => {
  const [company, setCompany] = useState({
    name: "",
    desc: "",
  });

  //-------------First Form----------------//
  const companyName = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/companyName/addcompname",
        company
      );
      console.log(
        response,
        "sldfkkljfdskljfdsdfsjkljkldsfjksdfklkljdsfjkldfskjl"
      );
    } catch (error) {
      console.log(error);
    }
  };

  //-------------------------second form------------------//
  const [companytype, setCompanyType] = useState({
    name: "",
  });
  const CompanyType = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/companyType/addcompanytype",
        companytype
      );
      console.log(response, "Company Type Data Added");
    } catch (error) {
      console.log(error);
    }
  };

  //----------Third Form ---------------------//
  const [adpurpose, setAdPurpose] = useState({
    name: "",
  });
  const AdPupose = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/companyAd/companyad",
        adpurpose
      );
      console.log(response, "Add Purpose Data");
    } catch (error) {
      console.log(error);
    }
  };

  //--------Forth Form -----------------//
  const [service, setService] = useState({
    name: "",
  });
  const Service = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/company/company",
        service
      );
      console.log(response, "Add Service Data");
    } catch (error) {
      console.log(error);
    }
  };

  //----------------Target Audience Form----------------------//
  const [target, setTarget] = useState({
    name: "",
  });
  const Target = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/companyAudience/addaudience",
        target
      );
      console.log(response, "Target Audience");
    } catch (error) {
      console.log(error);
    }
  };

  //------------------Country Form-----------------//
  const [country, setCountry] = useState({
    name: "",
  });
  const Country = async (e) => {
    try {
    //   const response = await axios.post(
    //     "http://localhost:8000/companyCountry/companycountry",
    //     country
    //   );
    const response = await axios.post(`${e.preventdefault.REACT_API_URL}/companyCountry/companycountry`, country)
      console.log(response, "Country data");
    } catch (error) {
      console.log(error);
    }
  };

  //-----------Sector Form---------------//
  const [sector, setSector] = useState({
    name: "",
  });
  const Sector = async (e) => {
    try {
    const response = await axios.post(`${e.preventdefault.REACT_API_URL}/sector/companysector`, sector)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="home-parent parent">
        <div className="home-cont container">
          {/* //---------------Company Name Form---------------// */}
          <form className="main" onSubmit={companyName}>
            <div className="form-group">
              <input
                type="text"
                name=""
                placeholder="Enter Company Name"
                value={company.name}
                onChange={(e) =>
                  setCompany({
                    ...company,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                value={company.desc}
                onChange={(e) => {
                  setCompany({
                    ...company,
                    desc: e.target.value,
                  });
                }}
                cols="30"
                rows="3"
                placeholder="Enter Your Description"
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>

          {/* //-------------------------Company Type Form -------------------// */}
          <form className="main" onSubmit={CompanyType}>
            <div className="form-group">
              <input
                type="text"
                name=""
                value={companytype.name}
                onChange={(e) =>
                  setCompanyType({ ...companytype, name: e.target.value })
                }
                placeholder="Enter Company Type"
                id=""
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>

          {/* //-------------------------Company Ad Purpose Form -------------------// */}
          <form className="main" onSubmit={AdPupose}>
            <div className="form-group">
              <input
                type="text"
                value={adpurpose.name}
                onChange={(e) =>
                  setAdPurpose({
                    ...adpurpose,
                    name: e.target.value,
                  })
                }
                placeholder="Enter Ad Purpose"
                id=""
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>

          {/* //-------------------------Service Form -------------------// */}
          <form className="main" onSubmit={Service}>
            <div className="form-group">
              <input
                type="text"
                value={service.name}
                onChange={(e) =>
                  setService({ ...service, name: e.target.value })
                }
                placeholder="Enter Service"
                id=""
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>

          {/* //-------------------------Target Audience Form  -------------------// */}
          <form className="main" onSubmit={Target}>
            <div className="form-group">
              <input
                type="text"
                value={target.name}
                onChange={(e) => setTarget({ ...target, name: e.target.value })}
                placeholder="Enter Target Audience"
                id=""
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>

          {/* //-------------------------Country Form -------------------// */}
          <form className="main" onSubmit={Country}>
            <div className="form-group">
              <input
                type="text"
                value={country.name}
                onChange={(e) =>
                  setCountry({
                    ...country,
                    name: e.target.value,
                  })
                }
                placeholder="Enter Country"
                id=""
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          {/* //-------------------------Sector Form -------------------// */}
          <form className="main" onSubmit={Sector}>
            <div className="form-group">
              <input
                type="text"
                value={sector.name}
                onChange={(e) =>
                  setSector({
                    ...sector,
                    name: e.target.value,
                  })
                }
                placeholder="Enter Sector"
                id=""
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
