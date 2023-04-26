
function Ops({ options, setInfos }) {
  async function infoCompleted(id) {
    //console.log(id);
    options.map(item => {if(item.id == id) {item.ativo = !item.ativo;console.log(id,item.ativo,item.mensagem);console.log(options)}});
    return options
  }
    return (
      <>
        {options.map((option) => (
          <button key={option.id} onClick={()=>{infoCompleted(option.id)}} className="flex-1 p-5 shadow-md rounded-lg bg-black">
            {option.ativo ? option.mensagem : option.id}
          </button>
        ))}
      </>
    )
  }
  
  export default Ops