import React from "react";

export default function HeuristicParameters(props) {
    return (
        <>
            <form>
                <ul className="md:min-w-full flex flex-col list-none ">


                    {/*Attempts*/}
                    <li className="inline-flex mt-2">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                       htmlFor="">
                                    <i className="text-xs fas fa-redo mx-1"></i>Attempts
                                </label>
                                <input
                                    name ="attempts"
                                    onChange={props.handleChange}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700
                            border-2 border-gray-400 rounded py-1 px-4 leading-tight
                             focus:outline-none focus:bg-white focus:border-blue-600
                             text-center rounded-full
                             "
                                    id="" type="number" placeholder="Attempts"
                                    defaultValue={props.defaultRunParams.attempts} step={1}>
                                </input>
                            </div>
                        </div>
                    </li>

                    {/*Runtime*/}
                    <li className="inline-flex mt-2">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                       htmlFor="">
                                    <i className="fas text-xs fa-clock mx-1"></i>Iterations
                                </label>
                                <input
                                    name ="runtime"
                                    onChange={props.handleChange}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700
                            border-2 border-gray-400 rounded py-1 px-4 leading-tight
                             focus:outline-none focus:bg-white focus:border-blue-600
                             text-center rounded-full
                             "
                                    id="" type="number" placeholder="Runtime"
                                    defaultValue={props.defaultRunParams.runtime} step={100}>
                                </input>
                            </div>
                        </div>
                    </li>

                    {/*Population*/}
                    <li className="inline-flex mt-2">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                       htmlFor="">
                                    population
                                </label>
                                <input
                                    name="population"
                                    onChange={props.handleChange}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700
                            border-2 border-gray-400 rounded py-1 px-4 leading-tight
                             focus:outline-none focus:bg-white focus:border-blue-600
                             text-center rounded-full
                             "
                                    id="" type="number" placeholder="Population"
                                    defaultValue={props.defaultRunParams.population} step={5}>
                                </input>
                            </div>
                        </div>
                    </li>

                    {/*inertia coefficient*/}
                    <li className="inline-flex mt-2">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                       htmlFor="">
                                    inertia coefficient
                                </label>
                                <input
                                    name="interia"
                                    onChange={props.handleChange}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700
                            border-2 border-gray-400 rounded py-1 px-4 leading-tight
                             focus:outline-none focus:bg-white focus:border-blue-600
                             text-center rounded-full
                             "
                                    id="" type="number" placeholder="inertia"
                                    defaultValue={props.defaultRunParams.interia} step={0.1}>
                                </input>
                            </div>
                        </div>
                    </li>

                    {/*cognitive coefficient*/}
                    <li className="inline-flex mt-2">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                       htmlFor="">
                                    cognitive coefficient
                                </label>
                                <input
                                    name = "c1"
                                    onChange={props.handleChange}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700
                            border-2 border-gray-400 rounded py-1 px-4 leading-tight
                             focus:outline-none focus:bg-white focus:border-blue-600
                             text-center rounded-full
                             "
                                    id="" type="number" placeholder="cognitive"
                                    defaultValue={props.defaultRunParams.c1} step={0.1}>
                                </input>
                            </div>
                        </div>
                    </li>

                    {/*social coefficient*/}
                    <li className="inline-flex mt-2">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                       htmlFor="">
                                    social coefficient
                                </label>
                                <input
                                    name = "c2"
                                    onChange={props.handleChange}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700
                            border-2 border-gray-400 rounded py-1 px-4 leading-tight
                             focus:outline-none focus:bg-white focus:border-blue-600
                             text-center rounded-full
                             "
                                    id="" type="number" placeholder="social"
                                    defaultValue={props.defaultRunParams.c2} step={0.1}>
                                </input>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </>
    )
}