import { CalendarIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query, startAt, endAt } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

export function Search_Feed(pesquisa){

  const [posts, setPosts] = useState([]);
  useEffect ( () => onSnapshot (
  query(collection(db, "posts"), orderBy("text"), startAt("/.*["+pesquisa + "].*"), endAt("\uf8ff")),
    (snapshot) => {
      let filtrados = [];
      snapshot.docs.forEach(function(elem){
        let frase = elem['_document']["data"]["value"]["mapValue"]["fields"]["text"]["stringValue"]
        if (frase.toLowerCase().includes(pesquisa.toLowerCase())){
          filtrados.push(elem)
        }
      } )
      setPosts(filtrados);
    }
  ),
  []
  );

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-x1 text-pink-900 font-bold cursor-pointer">Eventos</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
              <CalendarIcon className="h-5 text-pink-900" />
            </div>
          </div>

          {/*<AnimatePresence>*/}
            {posts.map((post) => (
              <Post key={post.id} id={post.id} post={post} />

            ))}
          {/*<AnimatePresence/>*/}
        </div>
      );
}

export default function Feed() {
    {/*implementação do database para o feed */}
    const [posts, setPosts] = useState([]);
    useEffect ( () => onSnapshot (
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
            ),
                []
                );

    return (
            <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-x1 text-pink-900 font-bold cursor-pointer">Eventos</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <CalendarIcon className="h-5 text-pink-900" />
            </div>
        </div>

        {/*<AnimatePresence>*/}
        {posts.map((post) => (
                <Post key={post.id} id={post.id} post={post} />

                ))}
        {/*<AnimatePresence/>*/}
            </div>
            );
}