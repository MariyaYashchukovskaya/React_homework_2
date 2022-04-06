import React from "react";
import { useState } from "react";
import { Posts } from "./components/Posts/Posts";
import { Form } from "./components/Form/Form";
import { Select } from "./components/Select/Select";
import { Modal } from "./components/Modal/Modal"


import './App.css';
import { MyButton } from "./components/UI/MyButton";

function App() {   
  const [posts, setPosts]=useState([])
  const [selectedPost, setSelectedPost] =useState('')
  const [isModalActive, setIsModalActive] =useState(false)
  const [checkedMessage, setСheckedMessage] =useState('')

  const addPost = (post) =>{
    setPosts([...posts, post])
    setIsModalActive(false)
  }

  const onClickDelete=(id)=>{
    let array=posts.filter((post) => post.id !== id)
    setPosts(array);   
  }

  const onChangeSelect=(sortValue)=>{
        setSelectedPost(sortValue)
        let newPosts=[...posts].sort((a,b)=>a[sortValue].localeCompare(b[sortValue]))
        setPosts(newPosts)
  }

    const showChekedMessage=(message)=>{  
    setСheckedMessage(message)  
  }

  return (
    <div className="App">
      <div className="container">      
        <div className="formCreate">
          <h1>Нажмите на кнопку, чтобы создать пост</h1>
          <MyButton onClick={()=>setIsModalActive(true)}>Создать пост</MyButton>
          
          <div className="sortPost">
            <p>Сортируйте свои посты:</p>
            <div>
            <Select defaultValue="Сортировать по"
                    options={[
                    {value: "title", name: "По названию"},
                    {value: "message", name: "По описанию"}
                    ]}
                    value={selectedPost}
                    onChangeSelect={onChangeSelect}
            />
            </div>                        
          </div>              
        </div>

        <div className="checkedMessage">{checkedMessage}</div> 
        
        <Modal visible={isModalActive} setVisible={setIsModalActive}>
        <Form addPost={addPost}/>
        </Modal>
        
      
        {posts.length !==0
        ?<Posts posts={posts} onClickDelete={onClickDelete} showChekedMessage={showChekedMessage}/>
        :<h2>Список пуст</h2>
        }        
       </div>            
    </div>
  );
}

export default App;
