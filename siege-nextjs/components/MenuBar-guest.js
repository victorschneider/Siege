import MenuItems from "./MenuItems";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import ModalPost from "./ModalPost";

export default function MenuBarGuest() {
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
          <ModalPost/>
    </div>
  )
}
