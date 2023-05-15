import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import axios from "axios";
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import ComponentSkeleton from '../components/skeleton/ComponentSkeleton';
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
  const [consist208, setConsist208] = useState([]);
  const [consist270, setConsist270] = useState([]);
  const [consist291, setConsist291] = useState([]);
  const [consist348, setConsist348] = useState([]);
  const [consist384, setConsist384] = useState([]);
  const [consist391, setConsist391] = useState([]);
  const [consist162, setConsist162] = useState([]);
  const [consist276, setConsist276] = useState([]);
  const [consist333, setConsist333] = useState([]);
  const [consist292, setConsist292] = useState([]);
  const [consistData, setConsistData] = useState([]);


  const [loading145, setloading145] = useState(true);
  const [loading421, setloading421] = useState(true);
  const [loading208, setloading208] = useState(true);
  const [loading270, setloading270] = useState(true);
  const [loading291, setloading291] = useState(true);
  const [loading348, setloading348] = useState(true);
  const [loading384, setloading384] = useState(true);
  const [loading391, setloading391] = useState(true);
  const [loading162, setloading162] = useState(true);
  const [loading276, setloading276] = useState(true);
  const [loading333, setloading333] = useState(true);
  const [loading292, setloading292] = useState(true);
  const [loadingData, setloadingData] = useState(true);
  
/*
  useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=145&consistenciaCorte=270'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist208(res.data.result);
          setloading208(false);
      });
}, []);


console.log('--------teste-------');   
*/

useEffect(() => {
  axios
    .get('https://localhost:44378/consulta-consistencias-paradas'
    ,{headers:{ "Access-Control-Allow-Origin": "*" }})
    .then((res) => {
        console.log(res.data.result[0]); 
        console.log(res.data.result);
        setConsistData(res.data.result);
        setloadingData(false);
    });
}, []);

console.log('--------teste2-------');   

/*
  useEffect(  () => {
    const fetchData = async () => {
      const data = await axios.get('https://localhost:44378/consulta-consistencia-parada?consistencia=145&consistenciaCorte=270'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist145(res.data.result[0]);
          setloading145(false);

          setConsist421(res.data.result[1]);
          setloading421(false);
      });
    }         
    fetchData();
}, []);


useEffect(  () => {
  const fetchData = async () => {
    const data = await axios.get('https://localhost:44378/consulta-consistencia-parada?consistencia=208&consistenciaCorte=270'
    ,{headers:{ "Access-Control-Allow-Origin": "*" }})
    .then((res) => {
        console.log(res);
        setConsist421(res.data.result);
        setConsist421(false);
    });
  }         
  fetchData();
}, []);


useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=421&consistenciaCorte=270'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist421(res.data.result);
          setloading421(false);
      });
}, []);


useEffect(() => {
  axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=208&consistenciaCorte=270'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist208(res.data.result);
          setloading208(false);
        });
      }, []);

useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=270&consistenciaCorte=270'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist270(res.data.result);
          setloading270(false);
        });
      }, []);

useEffect(() => {
  axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=291&consistenciaCorte=421'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist291(res.data.result);
          setloading291(false);
        });
      }, []);

useEffect(() => {
   axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=348&consistenciaCorte=208'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist348(res.data.result);
          setloading348(false);
        });
      }, []);

useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=384&consistenciaCorte=291'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist384(res.data.result);
          setloading384(false);
        });
      }, []);

useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=391&consistenciaCorte=291'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist391(res.data.result);
          setloading391(false);
        });
      }, []);

useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=162&consistenciaCorte=162'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist162(res.data.result);
          setloading162(false);
        });
      }, []);

useEffect(() => {
    axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=276&consistenciaCorte=276'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist276(res.data.result);
          setloading276(false);
        });
      }, []);

useEffect(() => {
     axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=333&consistenciaCorte=333'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist333(res.data.result);
          setloading333(false);
        });
      }, []);

useEffect(() => {
     axios
      .get('https://localhost:44378/consulta-consistencia-parada?consistencia=292&consistenciaCorte=292'
      ,{headers:{ "Access-Control-Allow-Origin": "*" }})
      .then((res) => {
          console.log(res);
          setConsist292(res.data.result);
          setloading292(false);
        });
      }, []);
*/
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
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 

              <AppWidgetSummary title="Consistência 145" total={consistData[0].quantidade} tempo={`${consistData[0].tempoParada} Min`}  
              color= {consistData[0].quantidade < 50 ? "success" : (consistData[0].quantidade >= 50 && consistData[0].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 162" total={consistData[1].quantidade} tempo={`${consistData[1].tempoParada} Min`}  
            color= {consistData[1].quantidade < 50 ? "success" : (consistData[1].quantidade >= 50 && consistData[1].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 176" total={consistData[2].quantidade} tempo={`${consistData[2].tempoParada} Min`}  
            color= {consistData[2].quantidade < 50 ? "success" : (consistData[2].quantidade >= 50 && consistData[2].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 208" total={consistData[3].quantidade} tempo={`${consistData[3].tempoParada} Min`}  
            color= {consistData[3].quantidade < 50 ? "success" : (consistData[3].quantidade >= 50 && consistData[3].quantidade <= 100 ? "warning" : "error")}  />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 270" total={consistData[4].quantidade} tempo={`${consistData[4].tempoParada} Min`}  
            color= {consistData[4].quantidade < 50 ? "success" : (consistData[4].quantidade >= 50 && consistData[4].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 291" total={consistData[5].quantidade} tempo={`${consistData[5].tempoParada} Min`}  
            color= {consistData[5].quantidade < 50 ? "success" : (consistData[5].quantidade >= 50 && consistData[5].quantidade <= 100 ? "warning" : "error")}  />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 292" total={consistData[6].quantidade} tempo={`${consistData[6].tempoParada} Min`}  
            color= {consistData[6].quantidade < 50 ? "success" : (consistData[6].quantidade >= 50 && consistData[6].quantidade <= 100 ? "warning" : "error")}  />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 348" total={consistData[7].quantidade} tempo={`${consistData[7].tempoParada} Min`}  
            color= {consistData[7].quantidade < 50 ? "success" : (consistData[7].quantidade >= 50 && consistData[7].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 333" total={consistData[8].quantidade} tempo={`${consistData[8].tempoParada} Min`}  
            color= {consistData[8].quantidade < 50 ? "success" : (consistData[8].quantidade >= 50 && consistData[8].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 384" total={consistData[9].quantidade} tempo={`${consistData[9].tempoParada} Min`}  
            color= {consistData[9].quantidade < 50 ? "success" : (consistData[9].quantidade >= 50 && consistData[9].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>
          

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 391" total={consistData[10].quantidade} tempo={`${consistData[10].tempoParada} Min`}  
            color= {consistData[10].quantidade < 50 ? "success" : (consistData[10].quantidade >= 50 && consistData[10].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>

          <Grid item xs={8} sm={4} md={2}>
          <div className='skeleton-container'>
            {loadingData && <ComponentSkeleton />}
            {!loadingData && 
            <AppWidgetSummary title="Consistência 421" total={consistData[11].quantidade} tempo={`${consistData[11].tempoParada} Min`}  
            color= {consistData[11].quantidade < 50 ? "success" : (consistData[11].quantidade >= 50 && consistData[11].quantidade <= 100 ? "warning" : "error")} />
          }</div>
          </Grid>
                                       

{/* 
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
              */}
        </Grid>
      </Container>
    </>
  );
}
