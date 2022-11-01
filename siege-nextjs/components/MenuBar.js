import MenuItems from "./MenuItems";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import ModalPost from "./ModalPost";

export default function MenuBar() {
  const [open, setOpen] = useRecoilState(modalState)
    
  return (
    <div className="hidden sm:flex flex-col pt-2 xl:items-start fixed h-full xl:ml-24">
      {/*Logo*/}
      <div className="">
        <h1 className="text-3xl text-pink-900 font-['Iceberg']" >
          SIEGE
        </h1>
      </div>

        {/*Menu*/}
        <div className="mt-4 mb-2.5 xl:items-start flex-shrink-0">
          <MenuItems texto="Inicial" Icon={HomeIcon} active/>
          <MenuItems texto="Perfil" Icon={UserCircleIcon}/>
        </div>

         {/*Botão*/}          
         <button onClick={() => { 
          setOpen(!open); }} className="bg-pink-900 text-white rounded-full w-56 h-12 font-bold shadow-md hover:gray-800 text-lg hidden xl:inline">
           Criar Evento
          </button>

          <ModalPost/>

        {/*Usuário/Sair*/}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          <img
              src = "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="user-img"
              className="h-10 w-10 rounded-full xl:mr-2"
          />
          <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">Administrador</h4>
            <p className="text-gray-500">@abluble</p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}
