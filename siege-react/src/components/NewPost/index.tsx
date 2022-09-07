import React from 'react'
import {AddPhotoAlternate} from 'styled-icons/material-outlined';
import { useState, useRef } from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from "../../firebase";

import {
    Container,
    Body,
    Content,
    Texto,
    Bottom,
    ButtonPost,
    Icon,
  } from './styles';

const Input = ({open} : any) =>  {
    if(!open) return null;
    const [input, setInput] = useState("");
    const fileRef = useRef(null);
    const postar = async()=>{
        const docRef = await addDoc(collection(db, "posts"),{
            text: input,
            timestamp: serverTimestamp(),
        });

        setInput("");
    };

    if(!open) return null;

    {/*const addImgPost = ({e} : any) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            console.log(readerEvent.target?.result);
        }
    };*/}
    
    
    return (  
        <Container >
            <Body>
                <Content >
                    <Texto>
                        <textarea rows={2} placeholder="Criar um evento" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    </Texto>
                    
                    <Bottom>
                        <Icon> {/*onClick={()=> fileRef?.current?.click()}**/}
                            <AddPhotoAlternate height={25} width={25} />
                            {/*<input type="file" hidden ref={fileRef} onClick={addImgPost}/>*/}
                        </Icon>
                        <ButtonPost onClick={postar} disabled={!input.trim()}>
                            <span>Postar</span>
                        </ButtonPost>
                    </Bottom>
                </Content>
            </Body>
        </Container>

    );
};

export default Input;


