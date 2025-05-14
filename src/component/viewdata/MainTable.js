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
  const AdPurpose = async() =>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/companyAd/getalldata`);
      const companyAdData = response.data.map((item, index)=>({
        id:item.id,
        key:index.sr_no,
        name:item.name,
      }));
      setAdPurpose(companyAdData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    namedata();
    Company();
    AdPurpose();
  }, []);

  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     desc: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     desc: "10 Downing Street",
  //   },
  // ];

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
  const columnadPurpose =[
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
  const deletedataad = async(id) =>{
    if (window.confirm("Are You sure you want to delete this item?")) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/companyAd/delete/${id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
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
              dataSource={companytype}
              columns={columnstype}
              pagination={{ pageSize: 4 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainTable;
