import React from 'react'
import { useState } from "react";
import { MyButton } from "../UI/MyButton";
import { MyInput } from "../UI/MyInput";

export function Form({addPost}) {
    const [title,setTitle] = useState('')
    const [message,setMessage] = useState('')
    const [validationErrorTitle,setValidationErrorTitle]=useState('true')
    const [validationErrorMessage,setValidationErrorMessage]=useState('true')
    

    const onSubmitPost =(event)=>{
        event.preventDefault()
        if (validationErrorTitle==='true' 
        && validationErrorMessage ==='true'
        && title!==''
        &&message!==''){
    
          const post={
            id: Date.now(),
            title:title,
            message:message
          }
        
          addPost(post)
          setTitle('')  
          setMessage('')
        }     
        
      }

    const onChangeTitle =(event)=>{  
        const { value } =event.target
        if (value.length>=6 || value.length===0 ){      
          setValidationErrorTitle('false')      
        }else if (value.length<6){
          setValidationErrorTitle('true')     
        }
        setTitle(value)  
      }
    
      const onChangeMessage =(event)=>{  
        const { value } =event.target
        if (value.length>=16 || value.length===0){      
          setValidationErrorMessage('false')      
        }else if (value.length<16){
          setValidationErrorMessage('true')  
        }
        setMessage(value)
      }

  return (
    <form>
    <h2>Создайте свой пост</h2>
    <label htmlFor="title">Заголовок поста</label>
    <MyInput type="text"   
    id="title"            
    placeholder="Введите заголовок поста"
    value= { title }
    onChange={ onChangeTitle }/>
    <span className={validationErrorTitle}>Колл-во символов от 1 до 5.</span>

    <label htmlFor="message">Cообщение</label>
    <MyInput type="text"
    id="message"        
    placeholder="Введите сообщение"
    value= { message }
    onChange={ onChangeMessage }/>
    <span className={validationErrorMessage}>Колл-во символов от 1 до 15.</span>

    <MyButton onClick={ onSubmitPost } type="submit">Добавить</MyButton>
  </form>  
  )
}