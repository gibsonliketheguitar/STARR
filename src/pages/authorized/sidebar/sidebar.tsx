import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { useSideBarStore } from ".";
import { useUserStore } from "@pages/store/userStore";

export function Sidebar() {
  const navigate = useNavigate();
  const handleToggleSidebar = useSideBarStore((state: any) => state.toggleSideBar);
  const isOpen = useSideBarStore((state: any) => state.isOpen);
  const logout = useUserStore((state: any) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5, 1.5),
    justifyContent: "flex-start",
  }));

  const SHARED_DASHBOARD = [{ title: "shared", icon: SpeedOutlinedIcon, path: "" }];

  const SIDEBAR = [
    { title: "session", icon: SubscriptionsOutlinedIcon, path: "/session" },
    { title: "events", icon: CalendarMonthOutlinedIcon, path: "/event" },
    {
      title: "scheduler",
      icon: EditCalendarOutlinedIcon,
      path: "",
      children: [
        { title: "report log", icon: DescriptionOutlinedIcon, path: "/report-log" },
        { title: "schedule task", icon: AccessTimeOutlinedIcon, path: "/scheduler" },
      ],
    },
    { title: "logout", icon: ExitToAppOutlinedIcon, path: "", handleOnClick: handleLogout },
  ];

  return (
    <Box sx={{ width: isOpen ? "250px" : "66px", overflow: "hidden" }}>
      <DrawerHeader>
        <IconButton onClick={handleToggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ color: "white" }} />
      <List>
        {SHARED_DASHBOARD.map(({ title, icon, path }) => (
          <ListItem key={title} disablePadding sx={{ display: "block" }} onClick={() => navigate(path)}>
            <ListItemButton
              sx={{
                display: "flex",
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}>
                {React.createElement(icon)}
              </ListItemIcon>
              <ListItemText primary={title} sx={{ opacity: 0, color: "red" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SIDEBAR.map(({ title, icon, path, handleOnClick }) => (
          <ListItem key={title} disablePadding sx={{ display: "block" }} onClick={() => navigate(path)}>
            <ListItemButton
              onClick={handleOnClick}
              sx={{
                display: "flex",
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}>
                {React.createElement(icon, { sx: { color: "black" } })}
              </ListItemIcon>
              <ListItemText primary={title} sx={{ opacity: isOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
