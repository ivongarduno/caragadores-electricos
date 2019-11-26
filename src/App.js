import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notificaciones from './views/Notificaciones';
import Alexa from './views/Alexa';
import Mapa from './views/Mapa';
import Navigation from './components/Navigation';
import Historial from './views/Historial';
import Historial1 from './views/Historial1';
import Historial2 from './views/Historial2';
import Historial3 from './views/Historial3';
import TypePlugs from './views/TypePlugs';
import LectorQr from './views/LectorQr'



function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <div className="nav">
      <Navigation></Navigation>
      </div>
      <div className="container p-1 padre">
        <Route exact path="/"  component={Mapa}/>
        <Route path="/Notificaciones" component={Notificaciones}/>
        <Route path="/Alexa" component={Alexa}/>
        <Route path="/Historial" component={Historial}/>
        <Route path="/Historial1" component={Historial1}/>
        <Route path="/Historial2" component={Historial2}/>
        <Route path="/Historial3" component={Historial3}/>
        <Route path="/Cargadores" component={TypePlugs} />
        <Route path="/Qr" component={LectorQr} />
        
      </div>
    </Router>
  )
}

export default App;
