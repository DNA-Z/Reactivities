import React from 'react';
import { Button, ButtonGroup, Card, Icon } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';


interface Props {
    activity: Activity;
}

export default function ActivityDetail({ activity }: Props) {
    return (
        <Card fluid
            image={`/assets/categoryImages/${activity.category}.jpg`}
                header={activity.title}
            meta={activity.date}
            description={activity.description}
            extra=<Button.Group widths='2'>
                <Button basic color='blue' content='Edit' />
                <Button basic color='grey' content='Cancel' />
            </Button.Group>
        />
    )
}