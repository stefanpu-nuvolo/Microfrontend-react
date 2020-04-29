import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SimpleBottomNavigation from "./SimpleBottomNavigation";
import SimpleAppBar from "./SimpleAppBar";
import SimpleSideMenu from "./SimpleSideMenu";
import SimpleHome from "./SimpleHome";
import { Container } from "@material-ui/core";
import SimpleRadiology from "./SimpleRadiology";
import SimpleCheckedRooms from "./SimpleCheckedRooms";
import SimpleRoom from "./SimpleRoom";

function Routes() {
  return (
    <Switch>
      <Route path="/departments/:departmentName/rooms/:roomId">
        <SimpleRoom />
      </Route>
      <Route path="/departments/:departmentName/checkedRooms">
        <SimpleCheckedRooms />
      </Route>

      <Route path="/departments/radiology">
        <SimpleRadiology />
      </Route>

      <Route path="/">
        <SimpleHome />
      </Route>
    </Switch>
  );
}

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <BrowserRouter>
      <SimpleAppBar handleOpen={handleDrawerOpen} />
      <Container style={{ height: "60vh", overflowY: "scroll" }} maxWidth="sm">
        <Routes />
      </Container>
      <SimpleSideMenu handleClose={handleDrawerClose} isOpen={open} />
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}
