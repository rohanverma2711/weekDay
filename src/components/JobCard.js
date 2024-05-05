import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import ApplyButton from "./ApplyButton";
import ReferralButton from "./ReferralButton";
import Stack from "@mui/material/Stack";

const JobCard = ({ job }) => {


  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 360,
        maxHeight: 560,
        m: 2,
        fontFamily: "Poppins",
        textAlign: "left",
        borderRadius: 5,
        boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
        ":hover": {
          boxShadow: 5 , 
        },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px 10px 20px",
          gap: "1rem", 
        }}
      >
        <CardMedia
          style = {{
            height: "50px",
            width: "50px",
            maxWidth: "50px",
            maxHeight: "50px",
            objectFit: "contain",
        }}
          component="img"
          height="40"
          image={job.logoUrl}
          alt={job.companyName}
        />
        <div>
          <Typography
            variant="subtitle1"
            sx={{ color: "#898989", fontSize: "13px" }}
          >
            {job.companyName}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            {job.jobRole
              .split(" ")
              .map((word) =>
                word.length <= 3
                  ? word.toUpperCase()
                  : word.charAt(0).toUpperCase() + word.slice(1)
              )
              .join(" ")}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{ fontWeight: "bold", fontSize: "11px", paddingTop: "3px" }}
          >
            {job.location
              .split(" ")
              .map((word) =>
                word.length <= 3
                  ? word.toUpperCase()
                  : word.charAt(0).toUpperCase() + word.slice(1)
              )
              .join(" ")}
          </Typography>
        </div>
      </div>
      <CardContent sx={{ alignItems: "left", padding: "0px 20px 10px 20px" }}>
        <Typography variant="h6" sx={{ color: "#475465", fontSize: "14px" }}>
          {job.minJdSalary && job.maxJdSalary
            ? `Estimated Salary: ₹${job.minJdSalary} - ₹${job.maxJdSalary} LPA`
            : job.minJdSalary
            ? `Estimated Salary: ₹${job.minJdSalary} LPA`
            : `Estimated Salary: ₹${job.maxJdSalary} LPA`}
          {" ✅"}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#000000",
            padding: "5px 0 0 0",
            fontWeight: "normal",
            fontSize: "16px",
          }}
        >
          About Company:
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#000000",
            padding: "0 0 0 0",
            fontWeight: "bolder",
            fontSize: "14px",
          }}
        >
          About us
        </Typography>
        <div style={{ backdropFilter: "blur(10px)" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0,
              background: "-webkit-linear-gradient(#333, #eee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {job.jobDetailsFromCompany.length > 400
              ? job.jobDetailsFromCompany.slice(0, 400) + "..."
              : job.jobDetailsFromCompany}
          </Typography>
        </div>
        {job.jobDetailsFromCompany.length > 400 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small"  sx={{ padding: 0 }}>
              View job
            </Button>
          </div>
        )}
        <Typography variant="subtitle1" sx={{ color: "#898989" }}>
          Minimum Experience
        </Typography>
        <Typography variant="body2">
          {job.minExp !== null ? `${job.minExp} years` : "Not Specified"}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "20px", paddingTop: "0px" }}>
        <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
          <ApplyButton jdLink={job.jdLink} />
          <ReferralButton jdLink={job.jdLink} />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default JobCard;