import { Box } from '@mui/material';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../pages/About';
import Discover from '../pages/Discover';
import { NotFound } from '../pages/NotFound';

const Layout = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%'}}>
        <Navbar /> 
        <Box
            component="main"
            sx={{
                flexGrow: 1, 
                overflow: 'auto',
            }}
            >
            <Outlet />
        </Box>
        <Footer />
    </Box>
);

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="discover" element={<Discover />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);