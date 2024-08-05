import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneIcon from "@mui/icons-material/Phone";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import React from "react";

function ResetWithPhone() {
  return (
    <Grid>
      <TextField
        margin="normal"
        type="tel"
        required
        fullWidth
        id="phone"
        label="Phone number"
        name="phone"
        autoComplete="phone"
        autoFocus
      />
    </Grid>
  );
}

function ResetWithEmail() {
  return (
    <Grid sx={{ width: "100%" }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
    </Grid>
  );
}

function ResetPass() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleSubmit = () => {};

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <ResetWithEmail />;
      case 1:
        return <ResetWithPhone />;
      default:
        return null;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          background: "red",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <PsychologyAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box
          sx={{
            mt: 1,
            backgroundColor: "grey",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
          >
            <Tooltip title="Reset password using email address">
              <Tab icon={<PersonPinIcon />} aria-label="person" />
            </Tooltip>
            <Tooltip title="Reset password using mobile number">
              <Tab icon={<PhoneIcon />} aria-label="phone" />
            </Tooltip>
          </Tabs>
          <Grid>{renderTabContent()}</Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPass;
