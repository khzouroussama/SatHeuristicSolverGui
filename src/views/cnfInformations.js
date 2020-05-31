import React from 'react'

const CnfInformations = (props) => {
    if (props.vars == 0 || props.clauses == 0)
            return (
                <div
                    className=" text-xs inline-flex items-center shadow-inner mt-1
                                     font-bold leading-sm uppercase px-3 py-1 rounded-full
                                     bg-blue-200 text-blue-700  "
                    >
                    <i className="fas fa-info-circle mr-2"></i>
                    {`No benchmark loaded`}
                </div>
            );

    return (
        <div
          className=" text-xs inline-flex items-center shadow-inner mt-1
                             font-bold leading-sm uppercase px-3 py-1 rounded-full
                             bg-blue-200 text-blue-700  "
        >
          <i className="fas fa-check-circle mr-2"></i>
          {`benchmark loaded : (${props.vars}) variables (${props.clauses}) clauses `}
        </div>
    );
}

export default CnfInformations ;