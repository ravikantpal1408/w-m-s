import { Box, FormGroup, Grid, TextField } from "@mui/material";
import * as React from "react";
import PageContainers from "../../containers/PageContainers";

const PlantRegistration: React.FC = () => {
  return (
    <PageContainers
      title="Plant Registration"
      breadcrumbs={[{ title: "Registration", path: "/" }, { title: "New" }]}
    >
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log("Form submitted");
        }}
        noValidate
        autoComplete="off"
        onReset={(e) => {
          e.preventDefault();
          // Handle form reset logic here
          console.log("Form reset");
        }}
        sx={{ width: "100%" }}
      >
        <FormGroup>
          <Grid container spacing={2} sx={{ mb: 2, width: "100%" }}>
            <Grid size={{ xs: 6, sm: 3 }} sx={{ display: "flex" }}>
              <TextField
                id="plant-name"
                label="Plant Name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }} sx={{ display: "flex" }}>
              <TextField
                id="plant-location"
                label="Plant Loaction"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }} sx={{ display: "flex" }}>
              <TextField
                id="plant-Type"
                label="Plant Type"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </FormGroup>
      </Box>
    </PageContainers>
  );
};

export default PlantRegistration;
