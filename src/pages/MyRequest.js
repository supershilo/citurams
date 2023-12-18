
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import HomeFrame from "../components/HomeFrame";
import HomePage from "./HomePage";
import { CSSTransition } from "react-transition-group";
import RequestCard from "../components/RequestCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import axios from "axios";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  transition: "opacity 5s ease", // Apply transition to opacity
}));

const MyRequest = () => {
  const [ongoingRequestList, setOngoingRequestList] = useState([]);
  const [resolvedRequestList, setResolvedRequestList] = useState([]);
  const [value, setValue] = useState(0);
  const storedEmail = sessionStorage.getItem("userEmail");
  const [loggedID, setLoggedID] = useState(0);

  //fetch ongoing request from api
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/request/getAllOngoingRequest"
        );
        setOngoingRequestList(response.data);
      } catch (err) {
        if (err.response) {
          //not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchRequests();
  }, []);

  //fetch resolved request from api
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/request/getAllResolvedRequest"
        );
        setResolvedRequestList(response.data);
      } catch (err) {
        if (err.response) {
          //not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchRequests();
  }, []);

  //fetch userID by email
  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/getUserID/${storedEmail}`
        );
        setLoggedID(response.data);
      } catch (err) {
        if (err.response) {
          //not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchId();
  }, []);

  //filter ongoing request list
  const filteredOngoingRequestList = ongoingRequestList.filter(
    (request, index) => {
      return request.reqUserID === loggedID;
    }
  );

  //filter resolved request list
  const filterResolvedRequestList = resolvedRequestList.filter(
    (request, index) => {
      return request.reqUserID === loggedID;
    }
  );

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames="fade" // CSS class prefix for transition styles
    >
      <div>
        <HomeFrame />
        <div className="mt-24 ml-64">
          <div className="ml-16">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Ongoing Request" {...a11yProps(0)} />
                  <Tab label="Resolved Request" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {filteredOngoingRequestList.map((request, index) => {
                  return (
                    <RequestCard
                      key={index}
                      uname={request.userName}
                      building={request.building}
                      room={request.room}
                      equipment={request.equipment}
                      message={request.message}
                      status={request.status}
                      staff={request.staff}
                    />
                  );
                })}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {filterResolvedRequestList.map((request, index) => {
                  return (
                    <RequestCard
                      key={index}
                      uname={request.userName}
                      building={request.building}
                      room={request.room}
                      equipment={request.equipment}
                      message={request.message}
                      status={request.status}
                      staff={request.staff}
                    />
                  );
                })}
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MyRequest;
