import React from "react";
import { Link } from "react-router-dom";

import  { HeuristicParametersGA, HeuristicParametersPSO , HeuristicParametersBSO } from "../components/HeuristicParams";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const  oussTitle  = ' Meta heuristics project  ' ;


  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0
                      md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden
                      shadow-xl bg-white flex flex-wrap items-center justify-between
                      relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-center text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-2 px-0"
            to="/"
          >
            {oussTitle}
          </Link>
          {/* User */}
          {/*<ul className="md:hidden items-center flex flex-wrap list-none">*/}
          {/*  <li className="inline-block relative">*/}
          {/*    <NotificationDropdown />*/}
          {/*  </li>*/}
          {/*  <li className="inline-block relative">*/}
          {/*    <UserDropdown />*/}
          {/*  </li>*/}
          {/*</ul>*/}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    {oussTitle}
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={"text-blue-500 hover:text-blue-600 text-xs uppercase py-3 font-bold block " +
                            "hover:bg-blue-200 rounded-lg " + (props.algo ===1 ? 'bg-blue-200 shadow-lg': null) }
                  to="/dashboard"
                  onClick={() =>props.onAlgoChange(1) }
                >
                  <div className="text-center"><i className="fas fa-dna opacity-75 mr-2 text-lg"/></div>
                  <div className="text-center">genetic algorithm</div>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={ "text-green-800 hover:text-green-600 text-xs uppercase py-3 font-bold block "
                            + "hover:bg-green-200  rounded-lg my-1 " +  (props.algo ===2 ? 'bg-green-200 shadow-lg': null) }
                  to="/dashboard"
                  onClick={() =>props.onAlgoChange(2) }
                >
                  <div className="text-center"><i className="fas fa-crow opacity-75 mr-2 text-lg"/></div>
                  <div className="text-center mx-2">particle swarm optimization</div>

                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={"text-pink-800 hover:text-pink-600 text-xs uppercase py-3 font-bold block "
                             +"hover:bg-pink-200 rounded-lg " + (props.algo ===3 ? 'bg-pink-200 shadow-lg': null) }
                  to="/dashboard"
                  onClick={() => props.onAlgoChange(3) }
                >
                  <div className="text-center"><i className="fab fa-forumbee opacity-75 mr-2 text-lg"/></div>
                  <div className="text-center">Bee swarm optimization</div>
                </Link>
              </li>

            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-sm uppercase font-bold block pt-1  no-underline text-center">
              Parameter tuning
            </h6>
            {/* Navigation */}
            {
            props.algo === 1 ?<HeuristicParametersGA handleChange={props.onRun} defaultRunParams={props.defaultRunParams}/> :
            props.algo === 2 ?<HeuristicParametersPSO handleChange={props.onRun} defaultRunParams={props.defaultRunParams} /> :
             <HeuristicParametersBSO handleChange={props.onRun} defaultRunParams={props.defaultRunParams} /> 
            }
          </div>
        </div>
      </nav>
    </>
  );
}
