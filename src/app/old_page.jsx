'use client'
import options from '../components/options.json'
//import  Ops  from "../components/Ops"
import React, { useEffect, useState } from "react";

function Home() {
  const [ infos, setInfos ] = useState(options);
  const [ show, setShow ] = useState([]);
  
  useEffect(() => {
    setInfos([])
    for (let i = 1; i == options.length; i++) {
      show.map((e)=>{
        if(e.id == i) {setInfos([...infos,options[i+1].mensagem])}
      })
      setInfos([...infos,{i}])
      console.log(infos);
    }
  }, [show]);
  
  // async function statusClick (index) {
  //   setShow(prevState => ({
  //     activeIndices: {
  //       ...prevState.activeIndices,
  //       [index]: !prevState.activeIndices[index],
  //     },
  //   }));
  //   console.log(show)
  // };

  async function infoCompleted(id) {
    console.log(id);
    setShow([...show,id])
  }
  return (
    <main className="items-center justify-between p-10">
      <h1 className='text-center text-lg'>c'est vrai? c'est faux!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-white">
        {/* {options.map((option) => (
          <button key={option.id} onClick={()=>{infoCompleted(option.id)}} className="flex-1 p-5 shadow-md rounded-lg bg-black">
            {option.ativo ? option.mensagem : option.id}
          </button>
        ))} */}
          {/* <Ops options={infos} setInfos={setInfos}/> */}
          {infos.map((info,index) => {
            return (
              <button key={index} onClick={()=>{infoCompleted(index)}} className="flex-1 p-5 shadow-md rounded-lg bg-black">
                {info}
              </button>
            )
          })}
      </div>
    </main>
  )
}

// export async function getStaticProps() {
//   //const [ infos, setInfos ] = useState(options);
//   return {
//     props: {
//       infos,
//     },
//     revalidate: 10,
//   }
// }

export default Home