import React from 'react' ;

export default function ResultInfos(props) {

    const Positvemarker  = (props) => (
        <div>
            <p className="flex items-center justify-end text-green-500 text-md">
                <span className="font-bold">{props.value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"
                     viewBox="0 0 24 24">
                    <path className="heroicon-ui"
                          d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/>
                </svg>
            </p>
        </div>
    ) ;

    const NegativeMarker = (props) => (
        <div>
            <p className="flex items-center justify-end text-red-500 text-md">
                <span className="font-bold">{props.value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"
                     viewBox="0 0 24 24">
                    <path className="heroicon-ui"
                          d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z"/>
                </svg>
            </p>
        </div>
    )

    const StableMarker = (props) => (
        <div>
            <p className="flex items-center justify-end text-gray-500 text-md">
                <span className="font-bold">{props.value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"
                     viewBox="0 0 24 24">
                    <path className="heroicon-ui"
                          d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z"/>
                </svg>
            </p>
        </div>
    )

    const getHistoricRate = (new_val , old_val , extrString) => {
        if (new_val > old_val )
            return <Positvemarker value={(new_val - old_val).toFixed(1) + ' ' + extrString} />
        else if (new_val < old_val )
            return <NegativeMarker value={(new_val - old_val).toFixed(1) + ' ' + extrString} />
        else return <StableMarker value={ '0 '+extrString} />
    }

    return (
        <div id="wrapper" className="max-w-xl px-4 py-1 mx-auto">
            <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                <div id="jh-stats-positive"
                     className="flex flex-col shadow-lg justify-center px-4 py-4 bg-white border border-gray-300 rounded">
                    <div>
                        {getHistoricRate(props.Data.satrate , props.history.satrate , '%')}
                        <p className="text-3xl font-semibold text-center text-gray-800">{props.Data.satrate} %</p>
                        <p className="text-sm uppercase text-center text-gray-500">satisfiability rate</p>
                    </div>
                </div>

                <div id="jh-stats-negative "
                     className="flex flex-col shadow-lg justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        {getHistoricRate(props.Data.max , props.history.max , '%')}
                        <p className="text-3xl font-semibold text-center text-gray-800">{props.Data.max} %</p>
                        <p className="text-sm uppercase text-center text-gray-500">Max Satisfiability</p>
                    </div>
                </div>

                <div id="jh-stats-neutral"
                     className="flex flex-col shadow-lg justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        {getHistoricRate(props.Data.runtime , props.history.runtime, 's' )}
                        <p className="text-3xl font-semibold text-center text-gray-800">{props.Data.runtime} s</p>
                        <p className="text-sm uppercase text-center text-gray-500">Runtime</p>
                    </div>
                </div>
            </div>
        </div>
    )
}