import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import { db } from "../firebase"
import { collection, getDocs, addDoc, setDoc, doc, getDocFromCache } from "firebase/firestore"
import { async } from "@firebase/util";
import userEvent from "@testing-library/user-event";


const CoordinatorPage = () =>
{
    const [ formFields, setformFields ] = useState( [] )
    const [ programDetails, setProgramDetails ] = useState( [] )
    const [ count, setCount ] = useState( 0 )

    const handleNewEntry = ( e ) =>
    {
        e.preventDefault()
        var val = document.forms[ "indicator-form" ].getElementsByTagName( "input" );
        console.log( val )
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
            const formCollectionRef = collection( db, "program_templates/Teaching Foundation/categories" );
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
        <div>Coordinator Page
            <form className="w-75 mx-auto " name="indicator-form" onSubmit={ handleNewEntry } >
                {
                    formFields.map( ( value ) =>
                    {
                        return (
                            < div className="mb-3" >
                                <label htmlFor={ value.name }> { value.name }</label>
                                <input type={ value.type == "Integer" ? "Number" : "Text" } id={ value.name } name={ value.name } className="form-control" required />
                            </div>
                        )
                    } )
                }



                {/* <div className="mb-3">
                    <label htmlFor="name"> Name</label>
                    <input type="text" id="name" className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="contact">age</label>
                    <input type="number" id="contact" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pname">weight</label>
                    <input type="number" id="weight" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="pname">height</label>
                    <input type="number" id="height" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="pname">start_date</label>
                    <input type="date" id="date" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="pname">dosage</label>
                    <input type="number" id="dose" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="pname">amount</label>
                    <input type="number" id="amt" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">product description</label>
                    <textarea id="description" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="upload">upload spreedsheet</label>
                    <input type="file" id="upload" className="form-control" />
                </div>
                <div className="mb-3">
                    <button type="submit" className='btn btn-success'>Add Item</button>
                </div> */}
            </form >
        </div >
    )
}

export default CoordinatorPage