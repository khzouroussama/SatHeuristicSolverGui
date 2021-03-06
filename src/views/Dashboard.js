import React, {useState} from "react";

import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
import LineChart from "../components/LineChart.js";
import BarChart from "../components/BarChart.js";
import CnfInformations from "./cnfInformations";
import ResultInfos from "./ResultInfos";

const Path = window.require('path')
const exec = window.require('child_process').exec;


//const path2jar = Path.join( '/home/oussama/WebstormProjects/EleReactProject/extraResources/SatHeuristicSolver.jar');
const path2jar = Path.join(window.require('electron').remote.process.resourcesPath, 'extraResources', 'SatHeuristicSolver.jar');
// console.log(path2jar)

function execute(command, callback , errCallback) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            errCallback(error)
            return ;
        }
        else callback(stdout);
    });
};


export default function Dashboard() {

    const [satRateData ,setSatRateData] =  useState( [ [] , [] ] ) ;

    const [satEvolData ,setSatEvolData] =  useState( [ [] , [] ] ) ;

    const [resultInfos , setResultInfos] = useState({
        satrate : 0.0 ,
        max : 0 ,
        runtime : 0.0
    }) ;
    const [resultInfoHisory ,setResultInfosHistory] = useState({...resultInfos}) ;

    const [algo , setAlgo] = useState(3) ;

    const [cnf_info , setCnfInfo] = useState([0,0]) ;

    const [runButton , setRunButton] = useState(true)

    const [runParams , setRunParams] = useState({
        path_to_cnf : 'no cnf file loaded' ,
        PSO_params : {
            attempts : 5 ,
            runtime : 1000 ,
            population : 90 ,
            interia : 0.9 ,
            c1 : 1.7 ,
            c2 : 1.7
        } , 
        BSO_params : {
            attempts : 5 ,
            runtime : 1000 ,
            max_local_search : 15 ,
            number_of_bees : 15 ,
            flip : 11 ,
            max_chances : 10 
        } ,
        GA_params :{
            attempts : 5 ,
            runtime : 1000 ,
            population : 20 ,
            crossoverRate : 100 ,
            mutationRate : 20
        }

    })

    const _runGA  = `java -jar ${path2jar} -solveGA ${runParams.path_to_cnf} ${runParams.GA_params.attempts} ${runParams.GA_params.runtime} ${runParams.GA_params.population} ${runParams.GA_params.crossoverRate} ${runParams.GA_params.mutationRate}` 
    const _runPSO = `java -jar ${path2jar} -solvePSO ${runParams.path_to_cnf} ${runParams.PSO_params.attempts} ${runParams.PSO_params.runtime} ${runParams.PSO_params.population} ${runParams.PSO_params.interia} ${runParams.PSO_params.c1} ${runParams.PSO_params.c2}` 
    const _runBSO = `java -jar ${path2jar} -solveBSO ${runParams.path_to_cnf} ${runParams.BSO_params.attempts} ${runParams.BSO_params.runtime} ${runParams.BSO_params.max_local_search} ${runParams.BSO_params.number_of_bees} ${runParams.BSO_params.flip} ${runParams.BSO_params.max_chances}` 

    const GA_info = {
        name : 'genetic algorithm' , 
        param : 'GA_params' ,
        run : _runGA,
    } ;
    const PSO_info = {
        name : 'particle swarm optimization' , 
        param : 'PSO_params' ,
        run : _runPSO,
    } ; 
    const BSO_info = {
        name : 'Bee swarm optimization' , 
        param : 'BSO_params' ,
        run : _runBSO,
    };

    const algoMapper = (algorithme) => {
        switch (algorithme) {
            case 1 :return GA_info;
            case 2 :return PSO_info;
            case 3 :return BSO_info;
        }
    }


    const initView = () => {
        setSatEvolData([[],[]]) ;
        setSatRateData([[],[]]) ;
        setResultInfos({
            satrate : 0.0 ,
            max : 0 ,
            runtime : 0.0
        }) ;
        setResultInfosHistory ( {
            satrate : 0.0 ,
            max : 0 ,
            runtime : 0.0
        }) ;
    }

    const fetchCnfInfo = (path) => {
        // call the function
        execute(
            'java -jar '+ path2jar +
            ' -parse '+ path,
            (output) => {
                setCnfInfo([output.split(';')[0] , output.split(';')[1]  ]) ;
                setRunParams( {...runParams ,path_to_cnf: path}) ;
            } ,
            (err) => alert(err)
        );
    }

    const runExperment = () => {
        //TODO SHOW ALERT
        if (runParams.path_to_cnf === 'no cnf file loaded' ) {
            alert('No Benchmark was laoded !! ')
            return ;
        }
        initView() ;
        setRunButton(false) ;
        let runtimeStart = window.performance.now() ;
        execute(
            algoMapper(algo).run ,
            (output) => {
                let runtimeEnd = window.performance.now() ;
                //SHOW NOTIFICATION
                let jsonn = JSON.parse('{}') ;
                try {
                    jsonn =  JSON.parse(output) ;
                }catch (e) {
                    alert('Erreur ->'+ ((cnf_info[0] === 0) ? ' JAVA EREUR ! ' : 'No Benchmark was laoded !! '));
                    setRunButton(true) ;
                    return ;
                }


                setRunButton(true) ;

                let label_from_Json = [] ;
                let data_from_Json = [] ;
                let evolLabledata = [] ;
                let evolData = [] ;
                let satRate = 0 ;
                for (let i = 0; i < jsonn.length ; i++) {
                    label_from_Json[i] = 'Attempt '+ (i+1) ;
                    data_from_Json[i] = jsonn[i].fitness ;
                    evolData[i] = {
                        label: 'Attempt' + (i+1),
                        //backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16),
                        borderColor: "#"+((1<<24)*Math.random()|0).toString(16),
                        data: jsonn[i].evol
                    }
                    satRate += ( (jsonn[i].fitness * 100) / cnf_info[1]) ;
                }
                for (let i = 0; i < jsonn[0].evol.length; i++)
                    evolLabledata[i] = (i+1) ;

                satRate = (satRate /runParams[algoMapper(algo).param].attempts) ;

                // save history
                setResultInfosHistory ( {...resultInfos} ) ;

                setResultInfos (
                    {
                        satrate :  satRate.toFixed(2)  ,
                        max : ((Math.max(...data_from_Json) *100) / cnf_info[1]).toFixed(2) ,
                        runtime : ((runtimeEnd - runtimeStart) /1000).toFixed(1)
                    }
                )
                setSatEvolData( [evolLabledata , evolData] ) ;
                setSatRateData( [label_from_Json , data_from_Json ]) ;
            }
            ,(err) => {setRunButton(true) ; alert(err)}
        )
    }

    const handleCnfFileUpload = (path) => {
        fetchCnfInfo(path) ;
        initView() ;
    } ;
    const handleChooseAlgorithme = (algoNbr) => setAlgo(algoNbr);

    const handleRunChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setRunParams({
            ...runParams ,
            [algoMapper(algo).param] : { ...runParams[algoMapper(algo).param] , [name] : value } ,
        }) ;
    }
    return (
        <>
            <Sidebar algo ={algo} onAlgoChange={handleChooseAlgorithme} onRun={handleRunChange} defaultRunParams={runParams}/>
            <div className="relative md:ml-64 bg-gray-200 h-screen">
                <Navbar algorithme = {algoMapper(algo).name} onCnfUpload={handleCnfFileUpload} cnf={runParams.path_to_cnf}/>
                {/* Header */}
                <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">

                </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-40 ">
                    <div className="flex flex-wrap ">
                        <BarChart Data={satRateData} />
                        <LineChart Data={satEvolData} />
                        {/*============== INFOS =======================*/}
                        <ResultInfos Data={resultInfos} history={resultInfoHisory}/>
                    </div>
                </div>

                {/*  footer*/}
                <div className="absolute bottom-0 left-0 w-full shadow-xl
                                md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 bg-blue-600 ">
                    <div className="w-full mx-auto items-center flex justify-between md:flex-no-wrap flex-wrap ">

                        <CnfInformations vars={cnf_info[0]} clauses={cnf_info[1]} />
                        {/* Run Expermentation */}
                        <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto ">
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <div className="items-center justify-center bg-green-lighter">
                                    { runButton ? (
                                        <button
                                            onClick={()=> runExperment()}
                                            className="bg-green-400  hover:bg-green-500 shadow-lg
                                      text-green-900 font-bold py-2 px-4 rounded inline-flex items-center">
                                            <i className={`fas fa-cogs  w-4 h-4 mr-3`}></i>
                                            <span className="text-lg">Run Experimentation</span>
                                        </button> )
                                        : (
                                        <button
                                            className="bg-green-400  hover:bg-green-500 shadow-lg cursor-not-allowed
                                            text-green-900 font-bold py-2 px-4 rounded inline-flex items-center">
                                            <i className={`fas   w-4 h-4 mr-3 fa-spinner fa-spin`}></i>
                                            <span className="text-lg">Experiment is running</span>
                                        </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
