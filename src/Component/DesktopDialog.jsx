import {
  Box,
  Dialog,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as CloseIcon } from "./svg/close.svg";
import { ReactComponent as NasaIcon } from "./svg/nasa1.svg";
import { ReactComponent as WikiIcon } from "./svg/wiki.svg";
import { ReactComponent as YoutubeIcon } from "./svg/youtube.svg";

const DesktopDialog = ({ openDialog, closeDialog, selectedModalValues }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const optionsForDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "UTC",
  };
  const loginFlowStatus = searchParams.get("loginFlowStatus");
  const getLaucnhStateChip = (launchStatus, upComing) => {
    return (
      <Typography
        component="span"
        sx={{
          fontWeight: "600",
          borderRadius: "15px",
          backgroundColor:
            upComing === true
              ? "#FEF3C7"
              : launchStatus === true
              ? "#DEF7EC"
              : "#FDE2E1",
          color:
            upComing === true
              ? "#92400F"
              : launchStatus === true
              ? "#03543F"
              : "#981B1C",
          padding: "0.15rem 0.5rem",
          marginLeft: "1rem",
        }}
      >
        {upComing === true
          ? "Upcoming"
          : launchStatus === true
          ? "Success"
          : "Failed"}
      </Typography>
    );
  };
  return (
    <Dialog
      fullWidth
      className="dialog-border-radius-mui"
      maxWidth="sm"
      open={openDialog}
      aria-labelledby="remove-cart-item"
    >
      <Box sx={{ padding: "25px 40px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img
              src={
                selectedModalValues?.links?.mission_patch ||
                "http://www.collectspace.com/images/news-052620b-lg.jpg"
              }
              alt="SpaceXLogo"
              className="spacex-badge"
            />
            <Box sx={{ marginLeft: "1.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "600", fontSize: "1.2rem" }}
                >
                  {selectedModalValues?.mission_name}
                </Typography>
                {getLaucnhStateChip(
                  selectedModalValues?.launch_success,
                  selectedModalValues?.upcoming
                )}
              </Box>
              <Box>
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "400" }}
                >
                  {selectedModalValues?.rocket?.rocket_name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <NasaIcon width="1rem" height="1rem" />
                <WikiIcon width="1rem" height="1rem" />
                <YoutubeIcon width="1rem" height="1rem" />
              </Box>
            </Box>
          </Box>
          <CloseIcon
            onClick={closeDialog}
            style={{ cursor: "pointer" }}
            width="1rem"
            height="1rem"
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Typography
            component="span"
            color="inherit"
            sx={{ fontWeight: "400" }}
          >
            {selectedModalValues?.details}.{" "}
          </Typography>
          <Link to={selectedModalValues?.links?.wikipedia} target="_blank">
            <Typography
              component="span"
              color="inherit"
              sx={{ fontWeight: "400", textDecoration: "none" }}
            >
              {" "}
              Wikipedia
            </Typography>
          </Link>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Flight Number
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.flight_number}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Mission Name
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.mission_name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Rocket Type
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.rocket?.rocket_type}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Rocket Name
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.rocket?.rocket_name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Manufacturer
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {
                  selectedModalValues?.rocket?.second_stage?.payloads[0]
                    ?.manufacturer
                }
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Nationality{" "}
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {
                  selectedModalValues?.rocket?.second_stage?.payloads[0]
                    ?.nationality
                }
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Launch Date{" "}
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.launch_date_utc &&
                  new Intl.DateTimeFormat("en-GB", optionsForDate).format(
                    new Date(selectedModalValues?.launch_date_utc)
                  )}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Pavload Tvpe{" "}
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {
                  selectedModalValues?.rocket?.second_stage?.payloads[0]
                    ?.payload_type
                }
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                Orbit{" "}
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.rocket?.second_stage?.payloads[0]?.orbit}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem 0px", borderBottom: "1px solid #cdcdcd" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 4 / span 4" }}
              >
                launch Site{" "}
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ gridColumn: "span 8 / span 8" }}
              >
                {selectedModalValues?.launch_site?.site_name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DesktopDialog;
