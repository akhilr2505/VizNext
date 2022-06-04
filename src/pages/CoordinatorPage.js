import React from 'react'

const CoordinatorPage = () => {
  return (
    <div>CoordinatorPage
      <form  className="w-75 mx-auto ">
            <div className="mb-3">
                <label htmlFor="name"> Name</label>
                <input type="text"  id="name" className="form-control" />
            </div>
           
            <div className="mb-3">
                <label htmlFor="contact">age</label>
                <input type="number" id="contact" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="pname">weight</label>
                <input type="number"  id="weight" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="pname">height</label>
                <input type="number"  id="height" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="pname">start_date</label>
                <input type="date"  id="date" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="pname">dosage</label>
                <input type="number"  id="dose" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="pname">amount</label>
                <input type="number"  id="amt" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="description">product description</label>
                <textarea  id="description" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="upload">upload spreedsheet</label>
                <input type="file" id="upload" className="form-control" />
            </div>
            <div className="mb-3">
                <button type="submit" className='btn btn-success'>Add Item</button>
            </div>
        </form>
    </div>
  )
}

export default CoordinatorPage;