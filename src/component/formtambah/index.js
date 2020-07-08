import React, { useState } from 'react'

const FormTambah = (props) => {
    const isiBlog = {id:null,judul:'',deskripsi:''}
    const [blog,setBlog] = useState(isiBlog)

    const handleInputChange = (e)=>{
        const{name,value} = e.target
        setBlog({...blog,[name]:value})
    }
    return (
        <div className="card mt-2 mx-2">
            <div className="card-header">
                <h1>Tambah</h1>
            </div>
            <div className="card-body">
                <form onSubmit={(e)=>{
                    props.addData(blog)
                    e.preventDefault()
                    setBlog(isiBlog)
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
                    <button className="btn btn-primary">Tambah</button>
                </form>
            </div>
        </div>


    )
}
export default FormTambah;