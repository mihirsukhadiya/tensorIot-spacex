import {
  Box,
  Button,
  Dialog,
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
import React, { useEffect, useState } from "react";
import { ReactComponent as LogoMain } from "./svg/logo.svg";
import { ReactComponent as FilterIcon } from "./svg/filter-icon.svg";
import { ReactComponent as DownArrow } from "./svg/down-arrow.svg";
import { ReactComponent as CalenderIcon } from "./svg/calender-icon.svg";
import DesktopDialog from "./DesktopDialog";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";

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

const filterMenuOption = [
  "All Launches",
  "Upcoming Launches",
  "Successful Launches",
  "Failed Launches",
  "Zero Options",
];
const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [currentDataPage, setCurrentDataPage] = useState(1);
  const [allLaunchData, setAllLaunchData] = useState([]);
  const [tableViewData, setTableViewData] = useState([]);
  const [selectedModalValues, setSelectedModalValues] = useState({});
  const [totalDataPage, setTotalDataPage] = useState(1);
  const filterStatus = searchParams.get("selectedFilter");
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    filterStatus ? filterStatus : "All Launches"
  );

  const perPageLimit = 12;
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
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
  const optionsForDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "UTC",
  };
  useEffect(() => {
    getSpaceXData();
    setSearchParams({
      selectedFilter: filterStatus ? filterStatus : "All Launches",
    });
  }, []);

  const getSpaceXData = async () => {
    setLoadingState(true);
    await fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.length > 0) {
          setAllLaunchData(data);
          setTotalDataPage(Math.ceil(Number(data?.length) / perPageLimit));
        }
        setUsers(data);
      });
    setLoadingState(false);
  };

  useEffect(() => {
    if (allLaunchData && allLaunchData?.length > 0) {
      displayItems(currentDataPage, allLaunchData);
    }
  }, [currentDataPage, allLaunchData]);

  useEffect(() => {
    setLoadingState(true);
    if (filterStatus && allLaunchData) {
      if (filterStatus === "Upcoming Launches") {
        let allDataFilter = allLaunchData?.filter(
          (data, index) => data?.upcoming === true
        );
        setTotalDataPage(
          Math.ceil(Number(allDataFilter?.length) / perPageLimit)
        );
        if (
          currentDataPage >
          Math.ceil(Number(allDataFilter?.length) / perPageLimit)
        ) {
          displayItems(1, allDataFilter);
        } else {
          displayItems(currentDataPage, allDataFilter);
        }
      }
      if (filterStatus === "Successful Launches") {
        let allDataFilter = allLaunchData?.filter(
          (data, index) => data?.launch_success === true
        );
        setTotalDataPage(
          Math.ceil(Number(allDataFilter?.length) / perPageLimit)
        );
        if (
          currentDataPage >
          Math.ceil(Number(allDataFilter?.length) / perPageLimit)
        ) {
          displayItems(1, allDataFilter);
        } else {
          displayItems(currentDataPage, allDataFilter);
        }
      }
      if (filterStatus === "Failed Launches") {
        let allDataFilter = allLaunchData?.filter(
          (data, index) => data?.launch_success === false
        );
        setTotalDataPage(
          Math.ceil(Number(allDataFilter?.length) / perPageLimit)
        );
        if (
          currentDataPage >
          Math.ceil(Number(allDataFilter?.length) / perPageLimit)
        ) {
          displayItems(1, allDataFilter);
        } else {
          displayItems(currentDataPage, allDataFilter);
        }
      }
      if (filterStatus === "All Launches") {
        setTotalDataPage(
          Math.ceil(Number(allLaunchData?.length) / perPageLimit)
        );
        displayItems(currentDataPage, allLaunchData);
      }
      if (filterStatus === "Zero Options") {
        setTotalDataPage(0);
        displayItems(currentDataPage, []);
      }
    }
    setLoadingState(false);
  }, [filterStatus, allLaunchData, currentDataPage]);
  const handleChangePage = (event, page) => {
    setCurrentDataPage(page);
  };
  function displayItems(pageNumber, items) {
    const startIndex = (pageNumber - 1) * perPageLimit;
    const endIndex = startIndex + perPageLimit;
    const itemsToShow = items.slice(startIndex, endIndex);
    setTableViewData(itemsToShow);
  }
  const handleSelectFilter = (data) => {
    setSelectedFilterOption(data);
    setSearchParams({ selectedFilter: data });
    setAnchorEl2(null);
  };
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
          padding: "0.3rem 1rem",
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
    <div>
      <DesktopDialog
        openDialog={openDialog}
        closeDialog={() => setOpenDialog(false)}
        selectedModalValues={selectedModalValues}
      />
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
                cursor: "pointer",
              }}
            >
              <FilterIcon width="1rem" height="1rem" />
              <span style={{ margin: "0px 5px 0px 10px" }}>
                {selectedFilterOption}
              </span>
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
              {filterMenuOption.map((data, index) => {
                return (
                  <MenuItem
                    value={data}
                    key={index}
                    selected={data === selectedFilterOption}
                    onClick={() => handleSelectFilter(data)}
                  >
                    {data}
                  </MenuItem>
                );
              })}
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
          {tableViewData && tableViewData?.length > 0 ? (
            <TableBody>
              {tableViewData &&
                tableViewData?.map((data, index) => {
                  return (
                    <TableRow
                      onClick={() => {
                        setOpenDialog(true);
                        setSelectedModalValues(data);
                      }}
                      sx={{ cursor: "pointer" }}
                      key={index}
                    >
                      <TableCell
                        sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
                      >
                        <Typography
                          component="div"
                          color="inherit"
                          sx={{ fontWeight: "500" }}
                        >
                          {data?.flight_number}
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
                          {new Intl.DateTimeFormat(
                            "en-GB",
                            optionsForDate
                          ).format(new Date(data?.launch_date_utc))}
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
                          {data?.launch_site?.site_name}
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
                          {data?.mission_name}
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
                          {data?.rocket?.second_stage?.payloads[0]?.orbit}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{ padding: "1.2rem 1.5rem", borderBottom: "none" }}
                      >
                        {getLaucnhStateChip(
                          data?.launch_success,
                          data?.upcoming
                        )}
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
                  );
                })}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow sx={{ textAlign: "center" }}>
                <TableCell colSpan="7">
                  <Typography
                    component="div"
                    color="inherit"
                    sx={{
                      fontWeight: "500",
                      padding: "3rem 0rem 20rem",
                      textAlign: "center",
                      columnSpan: "7",
                    }}
                  >
                    {loadingState ? (
                      <Loader />
                    ) : (
                      "No Result Found for the specified filter"
                    )}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Pagination
            count={totalDataPage}
            variant="outlined"
            page={currentDataPage}
            shape="rounded"
            defaultPage={1}
            onChange={handleChangePage}
          />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
