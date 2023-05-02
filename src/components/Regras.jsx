import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const Regras = ({open, setOpen}) => {


    const cancelButtonRef = useRef(null)
  
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-star my-2 items-center justify-center">
                        <div className="mx-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 font-bold text-center">
                            1
                        </div>
                        <div className="text-md text-gray-900 mx-2 divx-4 flex h-12 w-96 items-center justify-center bg-gray-300 text-center">
                            <p><span className='font-bold'>CHOISIR </span> une phrase</p>
                        </div>
                        <p className="text-md text-gray-900 mx-2 px-4 flex h-12 w-64 items-center justify-center border-dotted border-2 border-cinza text-center">
                            Moi, je veux le numéro 13.
                        </p>
                        <p className="text-md text-gray-900 mx-2 px-4 flex h-12 w-64 items-center justify-center bg-white text-center">

                        </p>
                    </div>
                    <div className="sm:flex sm:items-star my-2 items-center justify-center">
                        <div className="mx-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 font-bold text-center">
                            2
                        </div>
                        <div className="text-md text-gray-900 mx-2 px-4 flex h-16 w-96 items-center justify-center bg-gray-300 text-center">
                            <p><span className='font-bold'>LIRE</span> la phrase à haute-voix</p>
                        </div>
                        <p className="text-md text-gray-100 mx-2 px-4 flex h-16 w-64 items-center justify-center bg-cinza text-center">
                            Je m'interésse aux sciences de l'éducation.
                        </p>
                        <p className="text-md text-gray-100 mx-2 px-4 flex h-16 w-64 items-center justify-center bg-cinza text-center">
                            Je suis étudient(e) en Doctorat.
                        </p>
                    </div>
                    <div className="sm:flex sm:items-star my-2 items-center justify-center">
                        <div className="mx-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 font-bold text-center">
                            3
                        </div>
                        <div className="text-md text-gray-900 mx-2 divx-4 flex h-14 w-96 items-center justify-center bg-gray-300 text-center">
                            <p><span className='font-bold'>DIRE</span> si <span className='font-bold'>c&apos;est vrai</span> ou si <span className='font-bold'>c&apos;est faux</span></p>
                        </div>
                        <div className="text-md text-gray-900 mx-2 px-4 flex h-14 w-64 items-center justify-center border-dotted border-2 border-cinza text-center">
                            <p><span className='font-bold'>C&apos;est vrai ! </span> Je m'intéresse aux sciences de l'éducation.</p>
                        </div>
                        <div className="text-md text-gray-900 mx-2 px-4 flex h-14 w-64 items-center justify-center border-dotted border-2 border-cinza text-center">
                            <p><span className='font-bold'>C&apos;est faux ! </span> Je suis étudient(e) en Master.</p>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-star my-2 items-center justify-center">
                        <div className="mx-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 font-bold text-center">
                            4
                        </div>
                        <div className="text-md text-gray-900 mx-2 divx-4 flex h-20 w-96 items-center justify-center bg-gray-300 text-center">
                            <p><span className='font-bold'>PASSER</span> la question à un camarade</p>
                        </div>
                        <div className="text-md text-gray-900 mx-2 px-4 flex h-20 w-64 items-center justify-center border-dotted border-2 border-cinza text-center">
                            <p>Et vous, Pierre ? Êtes-vous intéressé par les sciences de l'éducation ?</p>
                        </div>
                        <div className="text-md text-gray-900 mx-2 px-4 flex h-20 w-64 items-center justify-center border-dotted border-2 border-cinza text-center">
                            <p>Et vous, Marie ? Êtes-vous étudiente en Doctorat ?</p>
                        </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Jogar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }

export default Regras;