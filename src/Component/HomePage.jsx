import {
  Box,
  Button,
  Menu,
  MenuItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as LogoMain } from "./svg/logo.svg";
import { ReactComponent as FilterIcon } from "./svg/filter-icon.svg";
import { ReactComponent as DownArrow } from "./svg/down-arrow.svg";
import { ReactComponent as CalenderIcon } from "./svg/calender-icon.svg";

const spacexTableHeader = [
  "No.",
  "Launched (UTC)",
  "Location",
  "Mission",
  "Orbit",
  "Launch Status",
  "Rocket",
];

const spacexTableData = [
  "No.",
  "Launched (UTC)",
  "Location",
  "Mission",
  "Orbit",
  "Launch Status",
  "Rocket",
];

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <div>
      <Box
        sx={{
          padding: "20px 0",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        <LogoMain className="spacex-logo" />
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "2rem",
          overflow: "hidden",
          overflowX: "auto",
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <Typography
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CalenderIcon width="1rem" height="1rem" />
              <span style={{ margin: "0px 5px 0px 10px" }}>Last 6 Months</span>
              <DownArrow width="1rem" height="1rem" />
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Typography
              id="basic-button-right"
              aria-controls={open2 ? "basic-menu-right" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FilterIcon width="1rem" height="1rem" />
              <span style={{ margin: "0px 5px 0px 10px" }}>All Launches</span>
              <DownArrow width="1rem" height="1rem" />
            </Typography>
            <Menu
              id="basic-menu-right"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button-right",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Table
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            borderRadius: "5px",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#F4F5F7",
              }}
            >
              {spacexTableHeader?.map((data, index) => {
                return (
                  <TableCell key={index} sx={{ padding: "0.75rem 1.5rem" }}>
                    <Typography
                      component="div"
                      color="inherit"
                      sx={{ fontWeight: "600" }}
                    >
                      {data}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  01
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  24 March 2006 at 22:30
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Atoll
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Falcon
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  LEO
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Failed
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Falcon 9
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  01
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  24 March 2006 at 22:30
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Atoll
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Falcon
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  LEO
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Failed
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
              >
                <Typography
                  component="div"
                  color="inherit"
                  sx={{ fontWeight: "500" }}
                >
                  Falcon 9
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
