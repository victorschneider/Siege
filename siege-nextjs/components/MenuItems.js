{/*Componentes do menu lateral*/}


export default function MenuItems({texto, Icon, active}) {
  return (
    <div className="hoverEffect flex items-center text-fuchsia-700 justify-center xl:justify-start text-lg space-x-3">
        <Icon className="h-7"/>
        
        {/*Deixa o elemento active bold e sconde a escrita dos itens no menu lateterak*/}
        <span className={`${active && "font-bold"} hidden xl:inline`}>{texto}</span> 
    </div>
  )
}
