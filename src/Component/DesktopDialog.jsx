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
import { useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as CloseIcon } from "./svg/close.svg";
import { ReactComponent as NasaIcon } from "./svg/nasa1.svg";
import { ReactComponent as WikiIcon } from "./svg/wiki.svg";
import { ReactComponent as YoutubeIcon } from "./svg/youtube.svg";

const DesktopDialog = ({ openDialog, closeDialog }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loginFlowStatus = searchParams.get("loginFlowStatus");
  return (
    <Dialog
      fullWidth
      className="dialog-border-radius-mui"
      maxWidth="sm"
      open={openDialog}
      aria-labelledby="remove-cart-item"
    >
      <Box sx={{ padding: "25px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img
              src="http://www.collectspace.com/images/news-052620b-lg.jpg"
              alt="SpaceXLogo"
              className="spacex-badge"
            />
            <Box sx={{ marginLeft: "1.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "600" }}
                >
                  CRS-1
                </Typography>
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "600", marginLeft: "1rem" }}
                >
                  Success
                </Typography>
              </Box>
              <Box>
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "600" }}
                >
                  Falcon 9
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <NasaIcon width="1rem" height="1rem" />
                <WikiIcon width="1rem" height="1rem" />
                <YoutubeIcon width="1rem" height="1rem" />
              </Box>
            </Box>
          </Box>
          <CloseIcon width="1rem" height="1rem" />
        </Box>
        <Box>
          <Typography
            component="span"
            color="inherit"
            sx={{ fontWeight: "600" }}
          >
            CRS-1 successful, but the secondary payload was inserted into
            abnormally low orbit and lost due to Falcon 9 boost stage engine
            failure, ISS visiting vehicle safety rules, and the primary payload
            owner's contractual right to decline a second ignition of the second
            stage under some condition.
          </Typography>
          <Typography
            component="span"
            color="inherit"
            sx={{ fontWeight: "600" }}
          >
            Wikipedia
          </Typography>
        </Box>
        <Box sx={{ marginTop: "2rem" }}>
          <Box sx={{padding: "1rem 0px", borderBottom: "1px solid #cdcdcd"}}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }}
            >
              <Typography
                component="div"
                color="inherit"
                sx={{ fontWeight: "600", gridColumn: "span 4 / span 4" }}
              >
                Flight Number
              </Typography>
              <Typography
                component="div"
                color="inherit"
                sx={{ fontWeight: "600", gridColumn: "span 8 / span 8" }}
              >
                9
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DesktopDialog;
