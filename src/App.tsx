import { ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { RouterProvider } from "react-router";
import routes from "./routes";
import mainTheme from "./themes/main-theme";
import { LoginPage } from "./pages/loginPage";

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={mainTheme}>
        {/* <RouterProvider router={routes} /> */}
        <LoginPage />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
