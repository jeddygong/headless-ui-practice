import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Tooltip from './Tooltip.tsx'
// import TooltipCss from './TooltipCss.tsx'
// import TooltipCssInJS from './TooltipCssInJS.tsx'
import './index.css'
import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tooltip />
  </React.StrictMode>,
)
