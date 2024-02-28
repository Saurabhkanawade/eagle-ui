import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Signin/Signin.css";
import Logo from "../../Assets/eaglelogo.jpg";
import BackgroundVideo from "../../Assets/video/background_eagle.mp4";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log("handle the on submit function");
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

  return (
    <Stack className="full-screen-container">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "330px",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="User Name"
            name="username"
            type="text"
            value={username}
            onChange={handleUsername}
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
                  edge="end"
                  sx={{ cursor: "pointer" }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }}
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
              }}
            >
              <Grid className="SignUpIcon" item xs>
                <i className="fa-brands fa-google fa-xl"></i>
              </Grid>
              <Grid className="SignUpIcon" item xs>
                <i className="fa-brands fa-facebook fa-xl"></i>
              </Grid>
              <Grid className="SignUpIcon" item xs>
                <i className="fa-brands fa-twitter fa-xl"></i>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

export default Login;
