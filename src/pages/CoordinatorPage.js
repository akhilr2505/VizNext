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
                <label htmlFor="Address">Address</label>
                <textarea  id="Address" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="contact">Mobile Number</label>
                <input type="number" id="contact" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="pname">Product Name</label>
                <input type="text"  id="pname" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="description">product description</label>
                <textarea  id="description" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="upload">upload item image</label>
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