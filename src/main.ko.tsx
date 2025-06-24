import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppKo from './AppKo';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppKo />
  </StrictMode>
); 