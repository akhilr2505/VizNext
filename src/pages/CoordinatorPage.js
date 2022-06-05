import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import { db } from "../firebase"
import { collection, getDocs, addDoc, setDoc, doc, getDocFromCache } from "firebase/firestore"
import { async } from "@firebase/util";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router";
import "./CoordinatorPage.css"

const CoordinatorPage = () =>
{
    const [ formFields, setformFields ] = useState( [] )
    const [ programDetails, setProgramDetails ] = useState( [] )
    const [ count, setCount ] = useState( 0 )
    const navigate = useNavigate();
    const handleNewEntry = ( e ) =>
    {
        e.preventDefault()
        var val = document.forms[ "indicator-form" ].getElementsByTagName( "input" );
        alert( "Data saved successfully!" )
        navigate( "/home" );
        //console.log( val )
    }
    useEffect( () =>
    {

        const fetchForms = async () =>
        {
            if ( programDetails.length > 0 )
            {
                setCount( count + 1 )
            }
            if ( count > 2 )
            {
                return
            }
            const formCollectionRef = collection( db, "program_templates/New Program/categories" );
            //const data = await 
            getDocs( formCollectionRef ).then( val =>
            {
                setProgramDetails( val.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) ) );
                console.log( programDetails )
            } )

        }
        // fetchForms()
        fetchForms().then( programDetails.forEach( ( value ) =>
        {
            if ( programDetails.length > 0 )
            {
                console.log( value )
                if ( value.id === "form_fields" )
                {
                    setformFields( value.formFields );
                    console.log( "Form Fields: ", formFields?.formFields )
                }
            }
        } ) )
    }
        , [ programDetails ] )


    return (
        <div className="coordinatorPage">
        <h1 className="pageTitle">Coordinator Page</h1>
            <form className="w-75 mx-auto " name="indicator-form" onSubmit={ handleNewEntry } >
                {
                    formFields.map( ( value ) =>
                    {
                        return (
                            < div className="fieldBox" >
                                <label className='cooLabel' htmlFor={ value.name }> { value.name }</label>
                                <input type={ value.type == "Integer" ? "Number" : "Text" } id={ value.name } name={ value.name } className="form-control cooInput" required />
                            </div>
                        )
                    } )
                }
                < div className="mb-3" >
                    <label className="cooLabel" htmlFor="Comment">Comment</label>
                    <input type="text" id="comment" name="comment" className="form-control cooComment" required />
                </div>
                < div className="mb-3" >
                    {/* <label htmlFor="submit">Submit</label> */ }
                    <Button variant="primary" type="Submit" className="submitButton">
                        Submit
                    </Button>
                </div>


                
            </form >
        </div >
    )
}

export default CoordinatorPage