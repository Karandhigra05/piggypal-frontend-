import { useEffect, useState } from 'react';
import { Router, Route } from 'wouter';
import KidDashboard from './components/KidDashboard';
import ParentDashboard from './components/ParentDashboard';

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Backend not responding"));
  }, []);

  return (
    <Router>
      <Route path="/" component={() => <h1 className="text-xl p-4">Welcome to PiggyPal</h1>} />
      <Route path="/kid" component={KidDashboard} />
      <Route path="/parent" component={ParentDashboard} />
      <Route path="/api" component={() => <p className="p-4">{message}</p>} />
    </Router>
  );
}