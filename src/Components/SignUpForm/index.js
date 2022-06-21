import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";

import { useSelector } from "react-redux";
import StepLabel from "@mui/material/StepLabel";
import PersonalInformation from "./PersonalInformation";
import IdVerification from "./IdVerification";
import Success from "./Success";
import { Grid, Paper } from "@mui/material";

const labels = ["Personal Information", "ID Verification"];
const StepForm = () => {
  const { signup } = useSelector((state) => state);
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    id_type: "",
    issuing_country: "",
    passport_number: "",
    expiry: "",
    id_number: "",
  });
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <PersonalInformation data={data} setData={setData} />;
      case 1:
        return <IdVerification data={data} setData={setData} />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <>
      {signup === labels.length ? (
        <Success />
      ) : (
        <>
          <Grid
            item
            container
            justifyContent={"center"}
            alignItems="center"
            style={{ marginBottom: "1vh" }}
          >
            <Paper
              className="fade-in-slow"
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "3px",
                width: "45vw",
                padding: "1em 4em",
              }}
              elevation={6}
              style={{
                backgroundColor: "rgb(250, 250, 250, 0.5)",
                border: "1px solid rgb(250, 250, 250, 0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Stepper activeStep={signup}>
                {labels.map((label) => (
                  <Step key={label}>
                    <StepLabel> {label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Grid>

          {handleSteps(signup)}
        </>
      )}
    </>
  );
};

export default StepForm;
