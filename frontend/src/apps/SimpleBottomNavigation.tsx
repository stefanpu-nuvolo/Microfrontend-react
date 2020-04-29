import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import '@material-ui/i'
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// import mobiusMicrofrontendApp from '../../mobiusMicrofrontEndApp';
// import microfrontendContainer from '../../microfrontendContainer';

const useStyles = makeStyles({
  root: {
    // width: 500,
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: "1em",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        // microfrontendContainer.mountApp(mobiusMicrofrontendApp)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Back to Dashboard"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
