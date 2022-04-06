import { useState } from 'react';
import style from './Post.module.css'


export function Post({post, onClickDelete, showChekedMessage}) {
  const [checked, setChecked] = useState(false);
  const [textMessage, setTextMessage] =useState ('Выбран пост о ' + post.title)
  

  const changeCheckbox =()=>{    
		setChecked(!checked);
    showMessage()
	}

  const showMessage=()=>{
    if(checked){
        
      setTextMessage('Выбран пост о ' + post.title)
    }else{
      setTextMessage('')
    }
    showChekedMessage(textMessage)
  }
  
  const rootClasses =[style.post]
  if (checked){
    rootClasses.push(style.checkedPost)
  }

   return (
    <div key={post.id} className={rootClasses.join(' ')}>
        <input className={style.inputPost} type="checkbox" id={post.id} checked={checked} onChange={changeCheckbox} />      
        <div>
          <h3>{post.title}</h3>
          <p>{post.message}</p>
        </div>        
        <button className={style.btnRemove} id={post.id} onClick={()=>onClickDelete(post.id)}>Удалить</button>
    </div>  
  )
}



