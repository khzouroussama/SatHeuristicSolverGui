import React from 'react';
import './tailwind.generated.css';
const electron = window.require('electron');


const App = () => (
        <section className="absolute w-full h-full antialiased bg-gray-400">

            <div className=" mx-auto px-4 h-full w-full">
                <div className="flex content-center items-center justify-center h-full py-4">
                        <div className="flex mx-auto overflow-hidden w-full h-full">
                            {/* Right part */}
                            <div className="flex-row flex-wrap py-8 px-6 md:px-8 lg:w-1/2 bg-white shadow-xl rounded-lg mx-2 "  >
                                <div className="flex-1 items-center items-center ">
                                    <h2 className="text-2xl font-semibold text-gray-700 text-center">
                                        Reglage des parametre
                                    </h2>

                                </div>
                                <div className="flex-1 w-full h-auto">

                                    <form>
                                        <div className="mb-3 pt-0 w-full ">
                                            <input type="text" placeholder="Polpulation"
                                                   className="px-3 py-3 placeholder-gray-400
                                                   text-gray-700 relative bg-white bg-white
                                                   rounded text-sm shadow outline-none
                                                   focus:outline-none
                                                   focus:shadow-outline mx-auto "/>
                                        </div>
                                    </form>

                                </div>
                                <div className="flex-1 bg-blue-500">
                                    Run
                                </div>
                            </div>

                            {/* Right part */}

                            <div className="flex-1 py-8 px-6 md:px-8 lg:w-1/2 bg-white shadow-xl rounded-lg mx-2">
                                <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                                <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="border-b w-1/5 lg:w-1/4" />
                                            Hello
                                    <span className="border-b w-1/5 lg:w-1/4" />

                                </div>


                            </div>
                        </div>

                </div>
            </div>

        </section>
);


export default App;
