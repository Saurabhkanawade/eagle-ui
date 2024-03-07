import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "../Signin/Signin.css";

const primaryUrl = "https://saurabhkanawade.github.io/My-Portpolio";

const handleClickOnUrl = () => {
  window.open(primaryUrl, "_blank");
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <span
        color="inherit"
        style={{ color: "blue", cursor: "pointer" }}
        onClick={handleClickOnUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Saurabh Kanawade
      </span>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?cars)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="User Name"
                name="username"
                type="text"
                value={username}
                onChange={handleUsername}
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                id="password"
                label="Password"
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={handleTogglePasswordVisibility}
                      sx={{ cursor: "pointer" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  ),
                }}
                autoComplete="password"
                autoFocus
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ color: "#9a9a9b" }}
                    value="remember"
                    color="primary"
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "14px", color: "#9a9a9b" }}
                  >
                    Remember me
                  </Typography>
                }
              />
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    to="/forgot-password"
                    variant="body2"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{
                    display: "flex",
                    alignItems: "end",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    to="/signup"
                    variant="body2"
                    style={{ textDecoration: "none" }}
                  >
                    {"Register"}
                  </Link>
                </Grid>
                <Grid
                  container
                  sx={{
                    marginTop: 6,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Grid className="SignUpIcon" item xs={2}>
                    <i className="fa-brands fa-google fa-xl"></i>
                  </Grid>
                  <Grid className="SignUpIcon" item xs={2}>
                    <i className="fa-brands fa-facebook fa-xl"></i>
                  </Grid>
                  <Grid className="SignUpIcon" item xs={2}>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                  </Grid>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 7 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
