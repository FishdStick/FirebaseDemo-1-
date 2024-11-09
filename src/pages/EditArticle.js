import { useNavigate, useParams } from "react-router-dom"
import {getDocs, collection, deleteDoc, doc, onSnapshot, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/config'
import { useEffect, useState, useRef} from 'react';

import './edit.css'
export function EditArticle() {
const { articleId } = useParams()
const navigate = useNavigate()

const newTitle = useRef(null);
const newAuthor = useRef(null);
const newDescription = useRef(null);

  console.log("id: " + articleId)

//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const ref = doc(db, 'articles', articleId);
//     getDocs(ref)
//       .then((snapshot)=>{        
//         setArticle(snapshot.data());
//       })

//   },[])  

  const editArticle = async (e) => {
    e.preventDefault()
    const docRef = doc(db, 'articles', articleId)
    const newDocData = {
        title: newTitle.current.value,
        author: newAuthor.current.value,
        description: newDescription.current.value
    }
      //loading = true
    await updateDoc(docRef, newDocData);

    navigate('/')

  }

  return (
    <div className="edit">
      <h2 className="page-title">Edit Article</h2>
      <form onSubmit={editArticle}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            // onChange={(e) => setTitle(e.target.value)}
            ref = {newTitle}
            // value={newTitle}
            required
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            // onChange={(e) => setAuthor(e.target.value)}
            ref = {newAuthor}
            // value={newAuthor}
            required
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea 
            // onChange={(e) => setDescription(e.target.value)}
            ref = {newDescription}
            // value={newDescription}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}


