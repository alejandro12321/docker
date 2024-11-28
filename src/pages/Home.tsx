import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import img_redes from '../../public/redes.svg';
import img_docker from '../../public/docker_img.svg';
import img_jenkins from '../../public/jenkins.svg';

const Home: React.FC = () => {
  const imageSize = 400;

  return (
    <Box sx={{ p: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Our Networking and CI/CD App!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          This is a basic app designed to showcase the power of modern technologies
          like Networking, Docker, and Jenkins. Explore the different sections to
          understand how they help in streamlining software development and deployment.
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              src={img_redes}
              alt="Networking"
              style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Networking: Connecting systems for efficient data communication.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              src={img_docker}
              alt="Docker"
              style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Docker: Containerization for consistent environments across machines.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <img
              src={img_jenkins}
              alt="Jenkins"
              style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Jenkins: Automating CI/CD pipelines for faster deployment cycles.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{ textAlign: 'center', marginTop: '40px' }}
      >
        <Button
          variant="contained"
          color="primary"
          href="/discover"
          sx={{ padding: '10px 20px' }}
        >
          Learn More About These Technologies
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
