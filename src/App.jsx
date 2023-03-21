import { Box } from '@mui/material';
import Header from './components/Header';
import ItemsList from './components/Items/ItemsList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box component='main' p={{ xs: 2, sm: 3, md: 4 }}>
      <Navbar />
      <Header />
      <ItemsList />
    </Box>
  );
}

export default App;
