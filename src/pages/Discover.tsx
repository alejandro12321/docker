import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Discover: React.FC = () => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom>
          Discover Technologies
        </Typography>
      </motion.div>

      {/* Description Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="body1" sx={{ mb: 4 }}>
          Explore some of the cutting-edge tools we use in software development and deployment.
        </Typography>
      </motion.div>

      {/* Grid Animation */}
      <Grid container spacing={4}>
        {/* Docker Card */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Box>
              <Typography variant="h5" gutterBottom>
                Docker
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Docker is an open platform for developing, shipping, and running applications. It enables developers to package applications into containers—standardized units of software that include everything needed to run.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://www.docker.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Docker
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Jenkins Card */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Box>
              <Typography variant="h5" gutterBottom>
                Jenkins
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Jenkins is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying. It supports continuous integration and continuous delivery (CI/CD).
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://www.jenkins.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Jenkins
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Discover;
