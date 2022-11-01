import { PhotographIcon } from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { XIcon } from "@heroicons/react/solid";

/*Criar novo post*/
export default function Input() {
    
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);
    
    {/*Enviar o post pro database*/}
    const sendPost = async () => {

        {/*efeito de carregando*/}
        if (loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, "posts"), {
            id: '2',
            text: input,
            timestamp: serverTimestamp(),

        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        {/*pega a URL da img e devolve como img*/}
        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
              const downloadURL = await getDownloadURL(imageRef);

              {/*atualiza o database e adc a pasta da img*/}
              await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL,
              });
            });
          }


        setInput("");
        setSelectedFile(null);
        setLoading(false);
    };

    {/*Adicionar img no post, finalmente funcional*/}
    const addImageToPost = (e) => {

        {/*criar url pra img*/}
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);        
        };
    }; 

  return (
    <div className="flex  border-b border-gray-200 p-3 space-x-3">
        <img className="h-11 w-11 rounded-full mr-4"
            src="https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
            alt="img-profile"
        />
       
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-600 tracking-wide min-h-[50px] text-gray-700"
                rows="2"
                placeholder="Publique um novo evento"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>

            {/*exibir a imagem antes de postar*/}
            {selectedFile && (
                <div className="relative">
                    <XIcon 
                    onClick={() => setSelectedFile(null)}
                    className="w-5 h-7 text-black absolute cursor-pointer shadow-md border-white m-1 rounded-full"
                    />
                    <img src={selectedFile} className={`${loading && "animate-pulse"}`} />
                </div>
            )}


            <div className="flex items-center justify-between pt-2.5">
                {!loading && (
                    <>
                        <div className="flex"> 
                            <div onClick={() => filePickerRef.current.click()}>
                            <PhotographIcon className="h-10 w-10 text-fuchsia-700 hoverEffect p-2 text hover:purple-800" />
                            <input 
                                type="file" 
                                hidden 
                                ref={filePickerRef} 
                                onChange={addImageToPost}
                            />
                            </div>
                        </div>

                        {/*disabled = !input.trim() -> não envia espaços em branco para o database*/}
                        <button onClick={sendPost} disabled={!input.trim()} className="bg-pink-900 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:purple-800 disabled:opacity-50">
                            Postar
                        </button>
                    </>

                )}

            </div>
        </div>
    </div>

  )

}
