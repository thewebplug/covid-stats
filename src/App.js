import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCovidData } from './redux/action';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function App() {

  const { covid } = useSelector((state) => ({ ...state }))
  const dispatch = useDispatch()
  const [states, setStates] = useState([])
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(getCovidData())
  }, [])

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [covid])


  const getData = () => {
    setStates(covid?.data?.states)
    setStats(covid?.data)
  }


  return (
    <div className="App">
      {loading ? <img src="200.gif" /> : (
        <>
          <div className="tabs">
            <Grid container className="tabs">
              <Grid item lg={2} md={2} sm={2} xs={12} className="tab">
                <h4>Total Confirmed Cases</h4>
                <h3>{stats?.totalConfirmedCases}</h3>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={12} className="tab">
                <h4>Total Active Cases</h4>
                <h3>{stats?.totalActiveCases}</h3>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={12} className="tab">
                <h4>Total Samples Tested</h4>
                <h3>{stats?.totalSamplesTested}</h3>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={12} className="tab">
                <h4>Total Discharged</h4>
                <h3>{stats?.discharged}</h3>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={12} className="tab">
                <h4>Total Deaths</h4>
                <h3>{stats?.death}</h3>
              </Grid>
            </Grid>
          </div>
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><h3>States</h3></TableCell>
                  <TableCell><h3>Confirmed Cases</h3></TableCell>
                  <TableCell><h3>Cases on Admission</h3></TableCell>
                  <TableCell><h3>Death</h3></TableCell>
                  <TableCell><h3>Discharged</h3></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {states?.map((state) => (
                  <TableRow
                    key={state._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      {state?.state}
                    </TableCell>
                    <TableCell>{state?.confirmedCases}</TableCell>
                    <TableCell>{state?.casesOnAdmission}</TableCell>
                    <TableCell>{state?.death}</TableCell>
                    <TableCell>{state?.discharged}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )
      }

    </div >
  );
}

export default App;
