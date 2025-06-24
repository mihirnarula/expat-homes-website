import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppJa from './AppJa';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppJa />
  </StrictMode>
); 