import React, { useState } from 'react'
const FormEdit = (props) => {
    const [blog, setBlog] = useState(props.isiUpdateBlog)

    const handleInputChange = event => {
        const { name, value } = event.target

        setBlog({ ...blog, [name]: value })
    }

    return (
        <div className="card mt-2 mx-2">
        <div className="card-header">
            <h1>Edit</h1>
        </div>
        <div className="card-body">
            <form  onSubmit={event => {
                event.preventDefault()
                props.updateBlog(blog.id, blog)
            }}>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label"> Judul</label>
                    <div className="col-sm-10">
                        <input type="text" name="judul" value={blog.judul} className="form-control" id="staticEmail" placeholder="masukkan judul" onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Deskripsi</label>
                    <div className="col-sm-10">
                        <input type="text" name="deskripsi" value={blog.deskripsi} className="form-control" id="inputPassword" placeholder="masukkan deskripsi" onChange={handleInputChange}/>
                    </div>
                </div>
                <button type="submit"className="btn btn-primary mr-2">Update</button>
                <button type="submit"onClick={()=>props.setEditing(false)} className="btn btn-danger">Cancel</button>
            </form>
        </div>
    </div>
    )
}
export default FormEdit;