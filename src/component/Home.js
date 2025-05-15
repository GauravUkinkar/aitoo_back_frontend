import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const [company, setCompany] = useState({
    name: "",
    desc: "",
  });

  const [paramId] = useSearchParams();
  const idParams = paramId.get("companyname");
  const idParamss = paramId.get("companytype");
  const idParamsAd = paramId.get("companyad");
  const idParamsservice = paramId.get("companyService");
  const idParamscompany = paramId.get("companyAudience");
  const idParamscountry = paramId.get("companycountry");
  const idParamssector = paramId.get("companySector");

  //-------------Company Name and Description ----------------//
  const companyName = async (idParams) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyName/getDatabyId/${idParams}`
      );

      console.log(response);
      setCompany({
        name: response.data.data?.name || "",
        desc: response.data.data?.desc || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idParams) {
      companyName(idParams);
    }
  }, [idParams]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParams) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/companyName/update/${idParams}`,
          company
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/companyName/addcompname`,
          company
        );
      }
      toast.success("Data Added Successfully");
      setCompany({
        name: "",
        desc: "",
      });
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  //-------------------------Company Type ------------------//

  const [companytype, setCompanyType] = useState({
    name: "",
  });
  const CompanyType = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyType/getDatabyId/${idParamss}`
      );
      console.log(response, "type ");
      setCompanyType({
        name: response.data?.name || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idParamss) {
      CompanyType(idParamss);
    }
  }, [idParamss]);

  const handleType = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParamss) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/companyType/update/${idParamss}`,
          companytype
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/companyType/addcompanytype`,
          companytype
        );
      }
      setCompanyType({
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //----------Company Ad Purpose ---------------------//
  const [adpurpose, setAdPurpose] = useState({
    name: "",
  });
  const AdPurpose = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyad/getDatabyId/${idParamsAd}`
      );
      console.log(response, "GET AD PURPOSE");
      setAdPurpose({
        name: response.data?.name || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idParamsAd) {
      AdPurpose(idParamsAd);
    }
  }, [idParamsAd]);

  const handleAdPurpose = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParamsAd) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/companyAd/update/${idParamsAd}`,
          adpurpose
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/companyAd/companyad`,
          adpurpose
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  //--------Company Service-----------------//
  const [service, setService] = useState({
    name: "",
  });
  const Service = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/company/getById/${idParamsservice}`
      );
      setService({
        name: response.data.data?.name || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idParamsservice) {
      Service(idParamsservice);
    }
  }, [idParamsservice]);

  const handleService = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParamsservice) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/company/update/${idParamsservice}`,
          service
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/company/add`,
          service
        );
      }
      setService({
        name: "",
      });
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
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyAudience/getDatabyId/${idParamscompany}`
      );
      setTarget({
        name: response.data?.name || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idParamscompany) {
      Target(idParamscompany);
    }
  }, [idParamscompany]);

  const handleTarget = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParamscompany) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/companyAudience/update/${idParamscompany}`,
          target
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/companyAudience/addaudience`,
          target
        );
      }
      setTarget({
        name: "",
      });
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
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyCountry/getById/${idParamscountry}`
      );
      console.log(response, "GEt by id data ");
      setCountry({
        name: response.data?.name || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idParamscountry) {
      Country(idParamscountry);
    }
  }, [idParamscountry]);

  const handleCountry = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParamscountry) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/companyCountry/update/${idParamscountry}`,
          country
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/companyCountry/companycountry`,
          country
        );
      }
      setCountry({
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //-----------Sector Form---------------//
  const [sector, setSector] = useState({
    name: "",
  });
  const Sector = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/sector/getById/${idParamssector}`
      );
      setSector({
        name: response.data?.name || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idParamssector) {
      Sector(idParamssector);
    }
  }, [idParamssector]);

  const handleSector = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (idParamssector) {
        response = await axios.put(
          `${process.env.REACT_APP_API_URL}/sector/update/${idParamssector}`,
          sector
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/sector/add`,
          sector
        );
      }
      setSector({
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="home-parent parent">
        <div className="home-cont container">
          <div className="view-data">
            <Link to="/viewall">View All</Link>
          </div>

          <div className="form-parent">
            {/* //---------------Company Name Form---------------// */}
            <form className="main" onSubmit={onHandleSubmit}>
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
            <form className="main" onSubmit={handleType}>
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
            <form className="main" onSubmit={handleAdPurpose}>
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
            <form className="main" onSubmit={handleService}>
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
            <form className="main" onSubmit={handleTarget}>
              <div className="form-group">
                <input
                  type="text"
                  value={target.name}
                  onChange={(e) =>
                    setTarget({ ...target, name: e.target.value })
                  }
                  placeholder="Enter Target Audience"
                  id=""
                />
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>

            {/* //-------------------------Country Form -------------------// */}
            <form className="main" onSubmit={handleCountry}>
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
            <form className="main" onSubmit={handleSector}>
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
      </div>
    </>
  );
};

export default Home;
