import { Link } from 'react-router-dom';
import {getDocs, collection, deleteDoc, doc, onSnapshot, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/config';
import { useEffect,useState } from 'react';
import { EditArticle } from './EditArticle';
import DeleteIcon from '../assets/delete.svg';
import EditIcon from '../assets/edit_icon.svg';
import { useNavigate, useParams } from "react-router-dom";


// styles
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const ref = collection(db, 'articles');

    onSnapshot(ref, (snapshot)=>{
        console.log(snapshot);
        let results = []
         snapshot.docs.forEach(doc => {
           results.push({id: doc.id, ...doc.data()});
         });
        setArticles(results);
      })

    getDocs(ref)
      .then((snapshot)=>{
        let results = []
        console.log(snapshot)
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        setArticles(results);
      })    
  },[])

  
  const handleDelete = async (id) => {
    const ref = doc(db, 'articles', id)
      //loading = true
    deleteDoc(ref).then(
        //loading false;
    );
  }
  
  return (
    <div className="home">
      <h2>Articles</h2>      
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read More...</Link>
          <img 
            className="icon"
            onClick={() => handleDelete(article.id)}
            src={DeleteIcon} alt="Delete Icon" 
          />
          <img 
            className="icon"
            onClick={() => navigate(`/articles/edit/${article.id}`)}
            src={EditIcon} alt="Edit Icon" 
          />
        </div>
      ))}
    </div>
  )
}
