import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';




const Index=()=> {
  return (
    <div> 
      <App/>
    </div>
  );
};
ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>
,document.getElementById('root')
);

export default Index;

reportWebVitals(console.log);
