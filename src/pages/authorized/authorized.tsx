import { Navigate, Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "@auth/sidebar"
import { Navbar } from "@auth/navbar"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { I_SidebarStore, useSideBarStore } from "@pages/authorized/sidebar/sidebarStore"
import { Container, Grid } from "@mui/material"

export function AuthRoutes() {
  const isAuth = true
  const location = useLocation()
  if (isAuth === undefined) <div> Loading page</div>
  return isAuth
    ? <AppLayout />
    : <Navigate to='/login' replace state={{ from: location }} />
}

export function AppLayout() {
  const isOpen = useSideBarStore((state: any) => state.isOpen)
  return (
    <Box display='flex' minHeight='100vh' minWidth={1200}>
      <Drawer variant="permanent" open={isOpen} sx={{ width: isOpen ? '250px' : '66px', overflow: 'hidden' }}>
        <Sidebar />
      </Drawer>
      <Box display='flex' flexDirection='column' flexGrow={1}>
        <Navbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box >
  )
}