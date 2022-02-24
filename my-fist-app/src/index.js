import React from 'react';
import ReactDOM from 'react-dom';


const nombre = "Emanuel";
const color = "blue";
const sesion = true;
const pais = "españa";

 const JSX = (
 <>
 {sesion === true ?
 <div>
   <h1 className='titulo' style={{color: color}}>Hola {nombre}</h1>
   <p>Que tengas buen dia</p>
   {pais &&<p>Tu eres de  {pais}</p>}
 </div>
 :
 <p> NO Has iniciado session</p>}
  </>
);

// const verificarSesion = (sesion) => {
//   if(sesion === true){
//     return JSX;
//   }else {
//     return <h1>no has iniciado sesion</h1>
//   }
// }


// ReactDOM.render(verificarSesion(sesion) ,
//   document.getElementById('root')
// );
ReactDOM.render( JSX,
  document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

