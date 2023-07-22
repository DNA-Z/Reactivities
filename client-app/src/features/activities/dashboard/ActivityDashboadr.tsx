import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetail from '../details/Activity.Details';
import ActivityForm from '../forms/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

export default function ActicityDashboard({ activities, selectedActivity, selectActivity,
    cancelSelectActivity, openForm, closeForm }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&
                    <ActivityDetail
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    />}
                <ActivityForm/>
            </Grid.Column>
        </Grid>
        )
}