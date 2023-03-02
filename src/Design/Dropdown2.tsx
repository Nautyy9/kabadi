import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {BiChevronDown} from 'react-icons/bi'


type CheckClass = {
  className: string
}

export default function Dropdown2() {
  return (
    
      <Menu as="div" className="relative block text-left">
        <div>
          <Menu.Button className="inline-flex transition duration-300 w-full justify-center rounded-md  text-md font-medium   hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Service
            <BiChevronDown
              className="ml-2 mt-1 -mr-1 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" absolute top-0  -left-9 sm+:-left-12 lg:left-[50%]  lg:translate-x-[-35%]  mt-11 lg:mt-16  border-sun-dark border-y-2 lg:border-2  lg:shadow-sm shadow-sun-dark w-screen lg:w-[800px] lg-md:w-[1000px]  service-break:h-[300px]   lg:rounded-md text-sun-light bg-sun-light  ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 service-break:flex justify-around m-5">
              <div className="flex flex-col">
                <Menu.Item>
                  {() => (
                    <button
                    className={`border-b-2 border-[#19a419] text-lg text-[#19a419] group flex w-full items-center  px-2 py-2 `}
                    >
                      For Individuals
                    </button>
                  )}
                </Menu.Item>
                <div className="  flex sm:flex-col items-center justify-center gap-y-2  mt-5 ">
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        Scrap COl
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                </div>

              </div>
              <div className="flex flex-col">
                <Menu.Item>
                  {() => (
                    <button
                    className={`border-b-2 border-[#19a419] text-lg text-[#19a419] group flex w-full items-center  px-2 py-2 `}
                    >
                      For Individuals
                    </button>
                  )}
                </Menu.Item>
                <div className="flex flex-wrap  justify-between mr-10 service-break:justify-start service-break:mx-0 service-break:gap-x-3">
                  <div className="flex xxs+:flex-col items-center justify-center gap-y-2  mt-5">
                    <Menu.Item>
                      {({active}) => (
                        <button
                        className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                        >
                          Scrap COl
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                        className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                        >
                          For Individuals
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <button
                        className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                        >
                          For Individuals
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="flex xxs+:flex-col items-center justify-center gap-y-2  mt-5">
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        Scrap COl
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="  flex xxs+:flex-col items-center justify-center gap-y-2  mt-5">
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        Scrap COl
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                </div>
                </div>
              </div>
              <div className="flex flex-col">
                <Menu.Item>
                  {() => (
                    <button
                    className={`border-b-2 border-[#19a419] text-lg text-[#19a419] group flex w-full items-center  px-2 py-2 `}
                    >
                      For Individuals
                    </button>
                  )}
                </Menu.Item>
                <div className="flex sm:flex-col items-center justify-center gap-y-2  mt-5">
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        Scrap COl
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button
                      className={` ${active ? 'text-base text-[#19a419] group flex w-full items-center rounded-md px-2 py-2' : 'text-base text-sun-dark group flex w-full items-center rounded-md px-2 py-2 '}`}
                      >
                        For Individuals
                      </button>
                    )}
                  </Menu.Item>
                </div>

              </div>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
   
  )
}

function EditInactiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#dbeafe"
        stroke="#60a5fa"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#3b82f6"
        stroke="#93c5fd"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#dbeafe"
        stroke="#60a5fa"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#dbeafe"
        stroke="#60a5fa"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#3b82f6"
        stroke="#93c5fd"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#3b82f6"
        stroke="#93c5fd"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#dbeafe"
        stroke="#60a5fa"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#dbeafe"
        stroke="#60a5fa"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#60a5fa" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#3b82f6"
        stroke="#93c5fd"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#3b82f6"
        stroke="#93c5fd"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#60a5fa" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#60a5fa" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#60a5fa" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#60a5fa" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#93c5fd" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#93c5fd" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#93c5fd" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#dbeafe"
        stroke="#60a5fa"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#60a5fa" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#60a5fa" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props: CheckClass) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#3b82f6"
        stroke="#93c5fd"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#93c5fd" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#93c5fd" strokeWidth="2" />
    </svg>
  )
}
