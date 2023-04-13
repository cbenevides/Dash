import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import axios from "axios";
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [consist145, setConsist145] = useState([]);
  const [consist421, setConsist421] = useState([]);

  useEffect(() => {
    axios
        .get('https://localhost:63080/consulta-consistencia-parada?consistencia=145&consistenciaCorte=270'
        ,{headers:{ "Access-Control-Allow-Origin": "*" }})
        .then((res) => {
            console.log(res);
            setConsist145(res.data.result);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}, []);


useEffect(() => {
  axios
      .get('https://localhost:63080/consulta-consistencia-parada?consistencia=421&consistenciaCorte=270'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist421(res.data.result);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
}, []);


  return (
    <>
      <Helmet>
        <title> Dashboard | PN </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Monitoramento de Consistências
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 145" total={consist145.quantidade} tempo={`${consist145.tempoParada} Min`}  
            color= {consist145.quantidade < 50 ? "success" : (consist145.quantidade >= 50 && consist145.quantidade <= 100 ? "warning" : "error")} />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 421" total={consist421.quantidade} tempo={`${consist421.tempoParada} Min`} color="warning"  />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 208" total={10} color="success" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 270" total={234} color="error" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 291" total={1250} color="error" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 348" total={100} color="warning"  />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 384" total={70} color="warning" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 391" total={10} color="success" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 162" total={5} color="success" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 276" total={34} color="success" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 333" total={1200} color="error" />
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
            <AppWidgetSummary title="Consistência 292" total={2100} color="error" />
          </Grid>

          <Grid item xs={24} md={12} lg={16}>
            <AppConversionRates
              title="Consistências"
              subheader="Consistências Negadas"
              chartData={[
                { label: '145', value: 25 },
                { label: '421', value: 50 },
                { label: '208', value: 10 },
                { label: '270', value: 234 },
                { label: '291', value: 1250 },
                { label: '348', value: 100 },
                { label: '391', value: 10 },
                { label: '162', value: 5 },
                { label: '276', value: 34 },
                { label: '333', value: 1200 },
                { label: '292', value: 2100 },
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Consistência por data"
              subheader="(+43%) ultima semana"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
