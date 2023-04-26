'use client'
import options from '../components/options.json'
import  Ops  from "../components/Ops"
import React, { useEffect, useState } from "react";

function Home() {
  const [ infos, setInfos ] = useState(options);
  const [ finishedInfos, setFinishedInfos ] = useState([]);
  //const [show, setShow] = useState(false)
  
  // useEffect(()=>{
  //   setInfos(infos)
  // },[infos])
  // async function infoCompleted(id) {
  //   console.log(id)
  //   // setInfos(infos.filter(item=> item.id !== id));

  //   // const infoCompleted = infos.filter(item => item.id == id);
  //   // let newFinishedInfos = finishedInfos;
  //   infos.map(item => {if(item.id == id) {item.ativo = !item.ativo;console.log(id,item.ativo);console.log(infos);setInfos(infos)}})
  //   //infos.map(item => {if(item.id == id) {item.ativo ? item.ativo = false : item.ativo = true}})
  // }

  return (
    <main className="items-center justify-between p-10">
      <h1 className='text-center text-lg'>c'est vrai? c'est faux!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-white">

          <Ops options={infos} setInfos={setInfos}/>

      </div>
    </main>
  )
}

export async function getStaticProps() {
  //const [ infos, setInfos ] = useState(options);
  return {
    props: {
      infos,
    },
    revalidate: 10,
  }
}

export default Home