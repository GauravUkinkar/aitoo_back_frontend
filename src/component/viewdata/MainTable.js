import React, { useEffect, useState } from "react";
import "./maintable.scss";
import { Table, Button, Space } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const MainTable = () => {
  const [activeTab, setActiveTab] = useState("one");

  //-------------company name data----------------//
  const [name, setName] = useState("");
  const namedata = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyName/getall`
      );
      const nameSectionData = response.data.map((item, index) => ({
        id: item.id,
        key: index.sr_no,
        name: item.name,
        desc: item.desc,
      }));
      setName(nameSectionData);
    } catch (error) {
      console.log(error);
    }
  };

  //----------------Company Type DATA------------------//
  const [companytype, setCompanyType] = useState();
  const Company = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyType/getalldata`
      );
      const companyTypeData = response.data.map((item, index) => ({
        id: item.id,
        key: index.sr_no,
        name: item.name,
      }));
      setCompanyType(companyTypeData);
    } catch (error) {
      console.log(error);
    }
  };

  //---------Ad Purpose---------------//
  const [adpurpose, setAdPurpose] = useState();
  const AdPurpose = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/companyAd/getalldata`
      );
      const companyAdData = response.data.map((item, index) => ({
        id: item.id,
        key: index.sr_no,
        name: item.name,
      }));
      setAdPurpose(companyAdData);
    } catch (error) {
      console.log(error);
    }
  };

  //-----------Servicess----------------------//
  const [service, setService] = useState();
  const Service = async() =>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/company/getall`);
      const serviceData = response.data.map((item,index) => ({
        id:item.id,
        key:index.sr_no,
        name:item.name,
      }));
      setService(serviceData);
    } catch (error) {
      console.log(error)
    }
  }
  //--------------Service---------------//
  const columnService = [
    {
      title: "Sr. No",
      key: "srno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/?companyService=${record.id}`}>
            <EditOutlined />
          </Link>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => deleteService(record.id)}
            danger
          />
        </Space>
      ),
    },
  ];
//-------------Delete Service---------------//
const deleteService=async(id)=>{
  if (window.confirm("Are You sure you want to delete this item?")) {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/company/delete/${id}`)
  } catch (error) {
    console.log(error);
  }
}
}


//-----------------Target Audience----------------------//
const [target, setTarget] = useState();
const Target = async() =>{
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/companyAudience/getalldata`);
    const targetData = response.data.map((item, index)=>({
      id:item.id,
      key:index.sr_no,
      name:item.name,
    }));
    setTarget(targetData);
  } catch (error) {
    console.log(error);
  }
}

const TargetAudience = [
  {
    title: "Sr. No",
    key: "srno",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/?companyAudience=${record.id}`}>
          <EditOutlined />
        </Link>
        <Button
          icon={<DeleteOutlined />}
          onClick={() => deletetarget(record.id)}
          danger
        />
      </Space>
    ),
  },
];

const deletetarget = async(id) =>{
 
    if(window.confirm("Are You Sure You Want To Delete This Item?")){
      try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/companyAudience/delete/${id}`);
      } catch (error) {
        console.log(error);
      }
    
   
  }
}

//--------------------Country---------------------//
const [country, setCountry] = useState();
const Country = async() =>{
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/companyCountry/getall`);
const countryData = response.data.map((item,index)=>({
  id:item.id,
  key:index.sr_no,
  name:item.name,

}));
setCountry(countryData);
  } catch (error) {
    console.log(error);
  }
}
const countryColumn = [
  {
    title: "Sr. No",
    key: "srno",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/?companycountry=${record.id}`}>
          <EditOutlined />
        </Link>
        <Button
          icon={<DeleteOutlined />}
          onClick={() => deletecountry(record.id)}
          danger
        />
      </Space>
    ),
  },

];

const deletecountry = async(id) =>{
  if(window.confirm("Are you sure you want to delete this data?")){
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/companyCountry/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
}
}
//---------------Sector---------------------//
const [sector, setSector] = useState();
const Sector = async() =>{
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/sector/getall`);
    const sectorData = response.data.map((item,index)=>({
      id:item.id,
      key:index.sr_no,
      name:item.name,
    }));
    setSector(sectorData);
  } catch (error) {
    console.log(error);
  }
}

const sectorcolumn = [

  {
    title: "Sr. No",
    key: "srno",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/?companySector=${record.id}`}>
          <EditOutlined />
        </Link>
        <Button
          icon={<DeleteOutlined />}
          onClick={() => deleteSector(record.id)}
          danger
        />
      </Space>
    ),
  },
];


const deleteSector = async(id) =>{
if(window.confirm("Are you sure you want to delete this data.")){
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/sector/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
}
}














  const columns = [
    {
      title: "Sr. No",
      key: "srno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/?companyname=${record.id}`}>
            <EditOutlined />
          </Link>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => deletedata(record.id)}
            danger
          />
        </Space>
      ),
    },
  ];
  //------------Delete Functionality------------------//
  const deletedata = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/companyName/delete/${id}`
        );
        toast.success("Data Deleted Successfully");
        namedata();
      } catch (error) {
        console.log(error);
      }
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const columnstype = [
    {
      title: "Sr. No",
      key: "srno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/?companytype=${record.id}`}>
            <EditOutlined />
          </Link>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => deletedatatype(record.id)}
            danger
          />
        </Space>
      ),
    },
  ];
  //--------------Delete type data -----------------//
  const deletedatatype = async (id) => {
    if (window.confirm("Are You sure you want to delete this item?")) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/companyType/delete/${id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  //--------------Add Purpose---------------//
  const columnadPurpose = [
    {
      title: "Sr. No",
      key: "srno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/?companyad=${record.id}`}>
            <EditOutlined />
          </Link>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => deletedataad(record.id)}
            danger
          />
        </Space>
      ),
    },
  ];

  //----------------delete ad--------------//
  const deletedataad = async (id) => {
    if (window.confirm("Are You sure you want to delete this item?")) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/companyAd/delete/${id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    namedata();
    Company();
    AdPurpose();
    Service();
    Target();
    Country();
    Sector();
  }, []);
  return (
    <div className="header-tab-parent parent">
      <div className="header-tab-cont container">
        <div className="list">
          <p
            onClick={() => setActiveTab("one")}
            className={activeTab === "one" ? "active-tab" : ""}
          >
            Company Name
          </p>
          <p
            onClick={() => setActiveTab("two")}
            className={activeTab === "two" ? "active-tab" : ""}
          >
            Company Type
          </p>
          <p
            onClick={() => setActiveTab("three")}
            className={activeTab === "three" ? "active-tab" : ""}
          >
            Ad Purpose
          </p>

          <p
            onClick={() => setActiveTab("four")}
            className={activeTab === "four" ? "active-tab" : ""}
          >
            Services
          </p>
          <p
            onClick={() => setActiveTab("five")}
            className={activeTab === "five" ? "active-tab" : ""}
          >
            Target Audience
          </p>
          <p
            onClick={() => setActiveTab("six")}
            className={activeTab === "six" ? "active-tab" : ""}
          >
            Country
          </p>
          <p
            onClick={() => setActiveTab("seven")}
            className={activeTab === "seven" ? "active-tab" : ""}
          >
            Sector
          </p>
        </div>

        {/* //------------------Company Name Table -------------------// */}
        <div className="data-table">
          {activeTab === "one" && (
            <Table
              dataSource={name}
              columns={columns}
              pagination={{ pageSize: 4 }}
            />
          )}
          {activeTab === "two" && (
            <Table
              dataSource={companytype}
              columns={columnstype}
              pagination={{ pageSize: 4 }}
            />
          )}
          {activeTab === "three" && (
            <Table
              dataSource={adpurpose}
              columns={columnadPurpose}
              pagination={{ pageSize: 4 }}
            />
          )}
          {activeTab === "four" && (
            <Table
              dataSource={service}
              columns={columnService}
              pagination={{ pageSize: 10 }}
            />
          )}
          {activeTab === "five" && (
            <Table
              dataSource={target}
              columns={TargetAudience}
              pagination={{ pageSize: 10 }}
            />
          )}
           {activeTab === "six" && (
            <Table
              dataSource={country}
              columns={countryColumn}
              pagination={{ pageSize: 10 }}
            />
          )}
           {activeTab === "seven" && (
            <Table
              dataSource={sector}
              columns={sectorcolumn}
              pagination={{ pageSize: 10 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainTable;
