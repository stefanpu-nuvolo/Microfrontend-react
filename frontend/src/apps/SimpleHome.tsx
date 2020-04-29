import React from 'react';

import SimpleDepartmentCard from './SimpleDepartmentCard';
import { Grid } from '@material-ui/core';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: theme.palette.text.secondary
//     },
//     department: {
//       padding: theme.spacing(2)
//     }
//   })
// );

const departmentsInfo = [
  {
    name: 'Radiology',
    checkedRooms: [
      { name: 'Non-invasive', responsiblePerson: 'Bill Shwartz', id: 1 },
      { name: 'Invasive', responsiblePerson: 'George Shwartz', id: 2 }
    ],
    totalRooms: 4
  },
  {
    name: 'Intensive Care',
    checkedRooms: [],
    totalRooms: 3
  },
  {
    name: 'Cardiology',
    checkedRooms: [{ name: 'Main', responsiblePerson: 'Bill Kill', id: 2 }],
    totalRooms: 2
  }
];

function Departments() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      {departmentsInfo.map((d, i) => {
        return (
          <Grid key={i} item xs={6}>
            <SimpleDepartmentCard depOptions={d} />
          </Grid>
        );
      })}
    </React.Fragment>
  );
}

export default function SimpleHome() {
  return (
    <Grid container spacing={3}>
      <Departments />
    </Grid>
  );
}
