import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

export function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
            .then(response => {
                console.log(response);
                setActivities(response.data);
            })
    }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, React!
          </p>
          <ul>
              {activities.map((activity: any) => (
                  <li key={activity.id}>
                      {activity.title}
                  </li>
                  ))}
          </ul>
    </div>
  );
}
export default App;
