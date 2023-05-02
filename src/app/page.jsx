'use client'
import options from '../components/options.json'
import Regras from "../components/Regras"
import React, { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true)
  const [ show1, setShow1 ] = useState(false);
  const [ show2, setShow2 ] = useState(false);
  const [ show3, setShow3 ] = useState(false);
  const [ show4, setShow4 ] = useState(false);
  const [ show5, setShow5 ] = useState(false);
  const [ show6, setShow6 ] = useState(false);
  const [ show7, setShow7 ] = useState(false);
  const [ show8, setShow8 ] = useState(false);
  const [ show9, setShow9 ] = useState(false);
  const [ show10, setShow10 ] = useState(false);
  const [ show11, setShow11 ] = useState(false);
  const [ show12, setShow12 ] = useState(false);
  const [ show13, setShow13 ] = useState(false);
  const [ show14, setShow14 ] = useState(false);
  const [ show15, setShow15 ] = useState(false);
  const [ show16, setShow16 ] = useState(false);
  const [ show17, setShow17 ] = useState(false);
  const [ show18, setShow18 ] = useState(false);

  return (
    <main className="items-center justify-between p-5 bg-black">
        <div className='inline-flex w-full'>
            <div className='w-full'> </div>
            <button
                type="button"
                className="self-end rounded-md bg-white mx-5 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setOpen(true)}
            >
                Regras
            </button>
        </div>
        <h1 className='text-center text-xl text-creme p-5 font-bold w-full'>c&apos;est vrai? c&apos;est faux!</h1>
        <Regras open={open} setOpen={setOpen} />
        <div className="items-center justify-between p-5 bg-black">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-creme">
                <button key={1} onClick={()=>{setShow1(!show1)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show1 ? options[0].mensagem : 1}
                </button>
                <button key={2} onClick={()=>{setShow2(!show2)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show2 ? options[1].mensagem : 2}
                </button>
                <button key={3} onClick={()=>{setShow3(!show3)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show3 ? options[2].mensagem : 3}
                </button>
                <button key={4} onClick={()=>{setShow4(!show4)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show4 ? options[3].mensagem : 4}
                </button>
                <button key={5} onClick={()=>{setShow5(!show5)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show5 ? options[4].mensagem : 5}
                </button>
                <button key={6} onClick={()=>{setShow6(!show6)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show6 ? options[5].mensagem : 6}
                </button>
                <button key={7} onClick={()=>{setShow7(!show7)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show7 ? options[6].mensagem : 7}
                </button>
                <button key={8} onClick={()=>{setShow8(!show8)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show8 ? options[7].mensagem : 8}
                </button>
                <button key={9} onClick={()=>{setShow9(!show9)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show9 ? options[8].mensagem : 9}
                </button>
                <button key={10} onClick={()=>{setShow10(!show10)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show10 ? options[9].mensagem : 10}
                </button>
                <button key={11} onClick={()=>{setShow11(!show11)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show11 ? options[10].mensagem : 11}
                </button>
                <button key={12} onClick={()=>{setShow12(!show12)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show12 ? options[11].mensagem : 12}
                </button>
                <button key={13} onClick={()=>{setShow13(!show13)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show13 ? options[12].mensagem : 13}
                </button>
                <button key={14} onClick={()=>{setShow14(!show14)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show14 ? options[13].mensagem : 14}
                </button>
                <button key={15} onClick={()=>{setShow15(!show15)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show15 ? options[14].mensagem : 15}
                </button>
                <button key={16} onClick={()=>{setShow16(!show16)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show16 ? options[15].mensagem : 16}
                </button>
                <button key={17} onClick={()=>{setShow17(!show17)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show17 ? options[16].mensagem : 17}
                </button>
                <button key={18} onClick={()=>{setShow18(!show18)}} className="flex-1 p-5 shadow-md rounded-lg bg-cinza text-creme">
                    {show18 ? options[17].mensagem : 18}
                </button>
            </div>
        </div>
    </main>
  )
}