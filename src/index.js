import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { RecoilRoot } from 'recoil';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <App />
//     </RecoilRoot>
//   </React.StrictMode>
// );
