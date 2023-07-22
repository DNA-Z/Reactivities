import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActicityDashboard from '../../features/activities/dashboard/ActivityDashboadr';

export function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
    }, [])

    function handleSelectedActivity(id: string) {
        setSelectedActivity(activities.find(x => x.id === id));
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleOpenForm(id?: string) {
        id ? handleSelectedActivity(id) : handleCancelSelectActivity;
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    return (

        <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <ActicityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectedActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleFormClose}
                />
            </Container>


        </>
    );
}
export default App;
