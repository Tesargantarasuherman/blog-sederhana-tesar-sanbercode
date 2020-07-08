import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabel from './component/tabel';
import FormTambah from './component/formtambah';
import FormEdit from './component/formedit';
import { useEffect } from 'react';
import Axios from 'axios';

const App =()=> {
  const isiBlog = [
    { id: 1, judul: 'Laravel', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore excepturi cupiditate ea nesciunt officiis minus fuga, in odit repudiandae delectus odio eius incidunt at harum enim! Doloremque, omnis ipsam' },
    { id: 2, judul: 'React', deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quaerat' },
    { id: 3, judul: 'Phyton', deskripsi: 'Lorem ipsum dolor sit amet' },
  ]
  const[blogs,setBlog]=useState(isiBlog)
  const [editing, setEditing] = useState(false)
  const isiFormEdit = { id: null, judul: '', deskripsi: '' }
  const [isiUpdateBlog, setIsiUpdateBlog] = useState(isiFormEdit)

  const addData=(blog)=>{
    blog.id = blogs.length + 1
    setBlog([...blogs, blog])
  }

  const hapusPost = (id)=>{
    Axios.delete(`http://localhost:3004/posts/${id}`).then((res)=>{
      setBlog(blogs) 
          console.log(res.data)
    })
    setBlog(blogs.filter(blog=>blog.id !== id))
  }
  const editPost = (blog) => {
    setEditing(true)
    setIsiUpdateBlog({ id: blog.id, judul: blog.judul, deskripsi: blog.deskripsi })
  }
  const updateBlog = (id, updatedBlog) => {
    setEditing(false)
    setBlog(blogs.map(blog => (blog.id === id ? updatedBlog : blog)))
  }
  // Axios
  useEffect(() => {
    setBlog(isiBlog)
  })
  return (
    <div className="row">
      <div className="col-md-6">
        {
          editing ?(
            <FormEdit setEditing={setEditing}
            isiUpdateBlog={isiUpdateBlog}
            updateBlog={updateBlog}
            />
            ) :(
              <FormTambah addData={addData} />
              )
        }
      </div>
      <div className="col-md-6">
        <Tabel blogs={blogs} hapusPost={hapusPost} editPost={editPost} />
      </div>
    </div>
  );
}

export default App;
