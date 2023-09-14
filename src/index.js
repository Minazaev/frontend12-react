import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


reportWebVitals();

// return(
//     <div className='container p-4'>
//       <div>
//         <input type={'checkbox'} checked={check} onChange={checkChange}/>
//         <input placeholder='text' value={text} onChange={handlerChange}/>
//         <button onClick={handlerBtn}>add</button>
//       </div>
//       {
//         todos.map(item =>{
//           return(
//             <div>
//               {item.check}{item.text}
//             </div>
//           )
//         })
//       }
//     </div>