import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Alejandro Duarte', avatar: '/path-to-avatar1.jpg' },
  { name: 'Noelia Sandoval', avatar: '/path-to-avatar2.jpg' },
  { name: 'Kendall Tenorio', avatar: '/path-to-avatar3.jpg' },
];

const About: React.FC = () => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom>
          About Our Team
        </Typography>
      </motion.div>

      {/* Description Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="body1" sx={{ mb: 4 }}>
          We are Computer Engineering students from ITCR College, participating in a Networking Class project.
        </Typography>
      </motion.div>

      {/* Team Members Grid Animation */}
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
