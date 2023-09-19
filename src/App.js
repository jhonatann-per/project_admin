import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/routesAdm";
import history from "./services/history";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {
  return (
    <div>
        <Router history={history}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Router>

    </div>
  );
}

export default App;
