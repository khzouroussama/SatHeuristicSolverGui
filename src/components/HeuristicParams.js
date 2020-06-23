import React from "react";

export  function HeuristicParametersGA(props) {
 
    return (
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
                                defaultValue={props.defaultRunParams.GA_params.attempts} step={1}>
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
                                defaultValue={props.defaultRunParams.GA_params.runtime} step={100}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*max local search*/}
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
                                id="" type="number" placeholder="max local search"
                                defaultValue={props.defaultRunParams.GA_params.population} step={1}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*number of bees*/}
                <li className="inline-flex mt-2">
                    <div className="flex flex-wrap -mx-3 ">
                        <div className="w-full px-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                htmlFor="">
                                crossover Rate
                            </label>
                            <input
                                name="crossoverRate"
                                onChange={props.handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700
                        border-2 border-gray-400 rounded py-1 px-4 leading-tight
                        focus:outline-none focus:bg-white focus:border-blue-600
                        text-center rounded-full
                        "
                                id="" type="number" placeholder="inertia"
                                defaultValue={props.defaultRunParams.GA_params.crossoverRate} step={1}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*flip*/}
                <li className="inline-flex mt-2">
                    <div className="flex flex-wrap -mx-3 ">
                        <div className="w-full px-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                htmlFor="">
                                mutation Rate
                            </label>
                            <input
                                name = "mutationRate"
                                onChange={props.handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700
                        border-2 border-gray-400 rounded py-1 px-4 leading-tight
                        focus:outline-none focus:bg-white focus:border-blue-600
                        text-center rounded-full
                        "
                                id="" type="number" placeholder="cognitive"
                                defaultValue={props.defaultRunParams.GA_params.mutationRate} step={1}>
                            </input>
                        </div>
                    </div>
                </li>
            </ul>
        </form>
    )
}

export  function HeuristicParametersPSO(props) {
    return (
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
                                defaultValue={props.defaultRunParams.PSO_params.attempts} step={1}>
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
                                defaultValue={props.defaultRunParams.PSO_params.runtime} step={100}>
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
                                defaultValue={props.defaultRunParams.PSO_params.population} step={5}>
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
                                defaultValue={props.defaultRunParams.PSO_params.interia} step={0.1}>
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
                                defaultValue={props.defaultRunParams.PSO_params.c1} step={0.1}>
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
                                defaultValue={props.defaultRunParams.PSO_params.c2} step={0.1}>
                            </input>
                        </div>
                    </div>
                </li>   

            </ul>
        </form>
    )
}   

export  function HeuristicParametersBSO(props) {
    return  (
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
                                defaultValue={props.defaultRunParams.BSO_params.attempts} step={1}>
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
                                defaultValue={props.defaultRunParams.BSO_params.runtime} step={100}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*max local search*/}
                <li className="inline-flex mt-2">
                    <div className="flex flex-wrap -mx-3 ">
                        <div className="w-full px-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                htmlFor="">
                                max local search
                            </label>
                            <input
                                name="max_local_search"
                                onChange={props.handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700
                        border-2 border-gray-400 rounded py-1 px-4 leading-tight
                        focus:outline-none focus:bg-white focus:border-blue-600
                        text-center rounded-full
                        "
                                id="" type="number" placeholder="max local search"
                                defaultValue={props.defaultRunParams.BSO_params.max_local_search} step={1}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*number of bees*/}
                <li className="inline-flex mt-2">
                    <div className="flex flex-wrap -mx-3 ">
                        <div className="w-full px-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                htmlFor="">
                                number of bees
                            </label>
                            <input
                                name="number_of_bees"
                                onChange={props.handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700
                        border-2 border-gray-400 rounded py-1 px-4 leading-tight
                        focus:outline-none focus:bg-white focus:border-blue-600
                        text-center rounded-full
                        "
                                id="" type="number" placeholder="inertia"
                                defaultValue={props.defaultRunParams.BSO_params.number_of_bees} step={1}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*flip*/}
                <li className="inline-flex mt-2">
                    <div className="flex flex-wrap -mx-3 ">
                        <div className="w-full px-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                                htmlFor="">
                                flip
                            </label>
                            <input
                                name = "flip"
                                onChange={props.handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700
                        border-2 border-gray-400 rounded py-1 px-4 leading-tight
                        focus:outline-none focus:bg-white focus:border-blue-600
                        text-center rounded-full
                        "
                                id="" type="number" placeholder="cognitive"
                                defaultValue={props.defaultRunParams.BSO_params.flip} step={1}>
                            </input>
                        </div>
                    </div>
                </li>

                {/*max chances*/}
                <li className="inline-flex mt-2">
                <div className="flex flex-wrap -mx-3 ">
                    <div className="w-full px-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  text-center"
                            htmlFor="">
                            max chances
                        </label>
                        <input
                            name = "max_chances"
                            onChange={props.handleChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700
                    border-2 border-gray-400 rounded py-1 px-4 leading-tight
                    focus:outline-none focus:bg-white focus:border-blue-600
                    text-center rounded-full
                    "
                            id="" type="number" placeholder="social"
                            defaultValue={props.defaultRunParams.BSO_params.max_chances} step={1}>
                        </input>
                    </div>
                </div>
            </li>
            
            </ul>
        </form>
    )
}