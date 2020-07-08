import React from 'react'

const Tabel = (props) => {
    return (
        <div className="card mt-2 mx-2">
        <div className="card-header">
            <h1>Blog Sederhana</h1>
        </div>
        <div className="card-body">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.blogs.length > 0?(
                    props.blogs.map((blog,index) => (
                        <tr key={blog.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{blog.judul}</td>
                        <td width={600}>{blog.deskripsi}</td>
                        <td>
                            <button type="button" class="btn btn-primary mr-2" onClick={() => props.editPost(blog)}>Edit</button>
                            <button type="button" class="btn btn-danger" onClick={()=>props.hapusPost(blog.id)}>Hapus</button>
                        </td>
                    </tr>

                    ))
                ):
                <tr>
                    <td colSpan={3}>Data Tidak Ada</td>
                </tr>
                }

            </tbody>
        </table>
        </div>
    </div>


    )
}
export default Tabel;