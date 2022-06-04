import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
const ManagementMilestonesComponent = () =>
{
    const [ milestone, setMilestone ] = useState( "" );
    const [ milestoneDate, setMilestoneDate ] = useState( new Date() );
    const [ error, setError ] = useState( "" );
    const [ milestones, setMilestones ] = useState( [] )
    useEffect( () =>
    {
        console.log( milestones )
    }
        , [ milestones ] )
    const handleNewMilestone = async ( e ) =>
    {
        e.preventDefault();
        setMilestones( [ { "title": milestone, "date": milestoneDate }, ...milestones ] )
        console.log( milestones )
    };
    return (
        <div className="Milestones">
            <h2 className="mb-3">Add Milestone: </h2>
            <form onSubmit={ handleNewMilestone } className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Milestone Name"
                        onChange={ ( e ) => setMilestone( e.target.value ) }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="date"
                        placeholder="date"
                        onChange={ ( e ) => setMilestoneDate( e.target.value ) }
                    />
                </Form.Group>


                <Button variant="primary" type="Submit" className="signupButton">
                    Add Milestone
                </Button>

            </form>
            <h2>
                Milestones
            </h2>
            {
                milestones.map( val => { <p>{ val.title } on  { val.date } </p> } )
            }

            <FullCalendar
                plugins={ [ dayGridPlugin ] }
                initialView="dayGridMonth"
                events={ milestones }
            />
        </div>
    )

};

export default ManagementMilestonesComponent