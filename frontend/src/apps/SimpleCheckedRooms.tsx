import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CardContent, Card, CardHeader, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function SimpleCheckedRooms() {
  const { departmentName } = useParams();
  let location: any = useLocation();

  function Rooms() {
    return (
      <React.Fragment>
        {location.state.rooms.map((r: any, i: number) => {
          return (
            <Card style={{ margin: '1em' }} key={i}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <Link
                      to={{
                        pathname: `/departments/${departmentName}/rooms/${r.id}`,
                        state: r
                      }}
                    >
                      <ArrowForwardIcon />
                    </Link>
                  </IconButton>
                }
                title={r.name}
              />
              <CardContent>
                <div>Responsible Person: {r.responsiblePerson}</div>
              </CardContent>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h1>Simple Checked Rooms in {departmentName}</h1>
      <Rooms />
    </React.Fragment>
  );
}
