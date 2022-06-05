import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react'
import './ManagementMilestonesComponent.css'
import dayGridPlugin from '@fullcalendar/daygrid'
import { db } from "../firebase"
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore"
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const ManagementMilestonesComponent = ( programName ) =>
{
    const [ milestone, setMilestone ] = useState( "" );
    const [ milestoneDate, setMilestoneDate ] = useState( new Date() );
    const [ error, setError ] = useState( "" );
    const [ milestones, setMilestones ] = useState( [] )
    // const [ ganttTasks, setGanttTasks ] = useState( [] )
    // useEffect( () =>
    // {
    //     let tasks = []
    //     milestones.forEach( ( item, index ) =>
    //     {
    //         var start = new Date( item.date )
    //         var t = start.getDate() - 7;
    //         start = start.setDate( t )
    //         start = new Date( start )
    //         tasks = [ ...tasks, { start: index === 0 ? start : new Date( milestones[ index - 1 ].date ) < new Date( item.date ) ? new Date( milestones[ index - 1 ].date ) : start, end: new Date( item.date ), name: item.title, id: "Task " + ( index + 1 ), styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' } } ]
    //     } );
    //     console.log( tasks )
    //     setGanttTasks( tasks )
    //     console.log( ganttTasks )
    // }
    //     , [ milestones ] )
    const handleNewMilestone = async ( e ) =>
    {
        e.preventDefault();
        setMilestones( [ { "title": milestone, "date": milestoneDate }, ...milestones ] )
        console.log( milestones )
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault()
        try
        {
            setDoc( doc( db, "program_templates", programName.props, "categories", "milestones" ), {
                milestones
            } )
            console.log( programName.props )

        } catch ( err )
        {
            console.log( err )
        }
    }

    return (
        <div className="Milestones">

            <form onSubmit={ handleNewMilestone } className="form">
                <div className='milestoneFields'>
                    <label className="milestoneFieldsLabel">Enter Milestone: </label>
                    <Form.Group className="milestoneField" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Milestone Name"
                            onChange={ ( e ) => setMilestone( e.target.value ) }
                        />
                    </Form.Group>

                    <Form.Group className="milestoneField" controlId="formBasicPassword">
                        <Form.Control
                            type="date"
                            placeholder="date"
                            onChange={ ( e ) => setMilestoneDate( e.target.value ) }
                        />
                    </Form.Group>
                </div>



                <Button variant="primary" type="Submit" className="signupButton milestoneButton">
                    Add Milestone
                </Button>

            </form>
            {/* <h2>
                Gantt Chart
            </h2> */}
            {/* {
                ganttTasks.length > 0 ?
                    <Gantt tasks={ ganttTasks } /> : <p>Please add a milestone.</p>
            } */}
            <h2>
                Milestones Calendar
            </h2>
            {/* {
                milestones.map( ( val ) => { <p>{ val.title } on  { val.date } </p> } )
            } */}

            <div className="Calendar">


                <FullCalendar
                    plugins={ [ dayGridPlugin ] }
                    initialView="dayGridMonth"
                    events={ milestones }
                />
            </div>

            <Button variant="primary" className="signupButton submitMilestone" onClick={ handleSubmit }>
                Submit Milestones
            </Button>
        </div>
    )

};

export default ManagementMilestonesComponent