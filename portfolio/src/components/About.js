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
              align='left'
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              I am a software developer with a background in manufacturing and customer service.
              <br></br>
              <br></br>
              At the age of 29, I embarked on a career change. After soul-searching and extensive research, I discovered the problem-solving nature of software development—a quality familiar from my previous work experiences.
              <br></br>
              <br></br>
              Eager to dive into this new path, I enrolled in a computer science major at a local community college. About two semesters in, I came across Nashville Software School and decided to apply. In September 2023, I graduated from NSS with a certificate in full-stack software development. It was a challenging yet incredibly rewarding experience, where I not only found my passion for software development but also connected with amazing people.
              <br></br>
              <br></br>
              Beyond coding, you'll likely find me being a dad, reading a book, hitting the gym, playing guitar, or exploring the outdoors.
              <br></br>
              <br></br>
              I am actively seeking software development/engineering roles in the Nashville, TN, or Huntsville, AL areas, and open to remote opportunities. If you or someone you know is in need of skills like mine, let's connect!

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
