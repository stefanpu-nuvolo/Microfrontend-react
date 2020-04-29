import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // minWidth: 275
      // width: '40px'
      padding: theme.spacing(2)
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      // marginBottom: 12
    }
  })
);

export interface IRoom {
  name: string;
  responsiblePerson: string;
}

interface IProps {
  depOptions: {
    name: string,
    checkedRooms: IRoom[],
    totalRooms: number
  };
}

export default function SimpleCard(props: IProps) {
  const classes = useStyles();

  let checkedRoomsLink = {
    pathname: `/departments/${props.depOptions.name}/checkedRooms`,
    state: { rooms: props.depOptions.checkedRooms }
  };

  return (
    <Card className={classes.root}>
      {/* <CardHeader>

      </CardHeader> */}
      <CardContent>
        <Link to="departments/radiology">
          <h3> {props.depOptions.name}</h3>
        </Link>

        <Link to={checkedRoomsLink}>
          <div>Checked Rooms: {props.depOptions.checkedRooms.length}</div>
        </Link>
        <div>Total Rooms: {props.depOptions.totalRooms}</div>
      </CardContent>
    </Card>
  );
}
