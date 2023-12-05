import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const [about, setAbout] = useState([]);

  const fetchAbout = () => {
    axios
      .get('https://randys-portfolio-api-d36hj.ondigitalocean.app/about', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setAbout(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <div id='about'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant='h2'
              align='center'
              fontWeight={700}
              marginTop='-30px'
              data-aos='fade-up'
              gutterBottom
            >
              About
            </Typography>
            <Typography
              variant='h5'
              color={theme.palette.text.secondary}
              align='center'
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              I am a software developer with a background in manufacturing and customer service. At 29, I decided I wanted to change careers. After some soul-searching and countless hours of research, I found that software development was the choice for me due to the problem-solving nature that I was familiar with from my past work experience. <br></br>Excited to get started right away, I signed myself up for an associates degree for computer science program at a local community college. Almost 2 semesters in, I found Nashville Software School and applied. I graduated NSS with a certificate in full-stack software development almost a year later, in September of 2023. It was a roller coaster ride, but an amazing experience. I found my passion for software development and met some amazing people. <br></br>In my free time you might find me reading a book, in the gym, playing guitar, or working on a side project. I am actively seeking software development/engineering related roles. <br></br>If you or someone you know are looking needs someone with my skills near the Nashville, TN or Huntsville, AL areas, or looking for someone to work remote, lets connect!
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {about.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  display='block'
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    component={Card}
                    padding={4}
                    borderRadius={2}
                    width={1}
                    height={1}
                    data-aos='fade-up'
                    data-aos-delay={i * 100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                    variant='outlined'
                  >
                    <Box display='flex' flexDirection='column'>
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        marginBottom={2}
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.common.white}
                      >
                        <Icon>{item.icon}</Icon>
                      </Box>
                      <Typography
                        variant='h6'
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color={theme.palette.text.secondary}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};


export default About;
