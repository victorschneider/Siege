import { useRecoilState } from "recoil";
import {modalState} from "../atom/modalAtom"
import Modal from "react-modal";
import Input from "./NewPost";
import { XIcon } from "@heroicons/react/outline";

export default function ModalPost() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {open && (
        <Modal isOpen={open} onRequestClose = {()=> setOpen(false)} className="max-w-lg w-[50%] h-[250px] absolute top-24 left-[50%] translate-x-[50%] bg-white border-2 border-gray-400 rounded-xl shadow-md">
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect w-10 h-10 flex items-center justify-center"
              >
                <XIcon className="h-[23px] text-gray-700 p-0" />
              </div>
           </div>
           <Input/>
         </div>
          
        </Modal>
      )}
    </div>
  )
}
