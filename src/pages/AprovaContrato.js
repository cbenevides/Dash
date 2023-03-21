import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, TextField, Stack, FormControl } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));



export default function Page404() {
  const navigate = useNavigate();

const navigateToContacts = () => {
  navigate('/dashboard/contratos');
};

  return (
    <>
      <Helmet>
        <title> +IBMS </title>
      </Helmet>

      <Container>
          <div>
           <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3} mt={3}>
            <Typography variant="h4" gutterBottom style={{marginLeft: '20px'}}>
              Aprovar Contrato
            </Typography>
          </Stack>
          </div>
        
          <div>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
              <toolbar>
                <fieldset style={{marginLeft: '20px'}}>
                  <legend>Master deal</legend>
                    <TextField id="station" label="Station" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="mdcode" label="MD Code"  sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="MasterdealName" label="Master deal Name" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="distributor" label="Distributor" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="currency" label="Currency Code" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="budget" label="Total Budget" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="status" label="Approval Status" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="masterdealtype" label="Master Deal Type" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="agreement" label="Agreement Typee" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="startdate" label="MD Start Date" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="enddate" label="MD End Date" sx={{mr: 1, mb:1, width: 265}} />
                </fieldset>
              </toolbar>
            </Stack>
          </div>

          <div>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
              <toolbar>
                <fieldset style={{marginLeft: '20px'}}>
                  <legend> Deal </legend>
                    <TextField id="dealcode" label="Deal Code" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="dealname" label="Deal Name"  sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="dealtype" label="Deal Type" sx={{mr: 1, mb:1, width: 265}} />
                    <TextField id="licensedates " label="Deal License Dates " sx={{mr: 1, mb:1, width: 275}} />
                </fieldset>
              </toolbar>
            </Stack>
          </div>

          <div>
            <Button to="/" size="large" variant="contained" 
            style={{marginLeft: '20px'}}
            onClick={navigateToContacts} >
              Aprovar
            </Button>
          </div>
      </Container>
    </>
  );
}
