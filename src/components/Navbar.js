import React, {useState} from "react";
const {dialog} = window.require('electron').remote;

export default function Navbar(props) {

    const checked_icon = (props) => <i className="fas fa-check-circle-o"></i> ;

    const [cnfPath,setCnfPath] = useState('') ;

    const handleCnfUpload = (e) => {
        //props.onCnfUpload('file.filePaths[0]') ;
        dialog.showOpenDialog({properties: ['openFile']})
            .then(
                (file)=> {
                    if (file !== undefined) {
                        //setCnfPath(file.filePaths[0]) ;
                        props.onCnfUpload(file.filePaths[0]) ;
                    }
                }
            ).catch(err => {
            console.log(err)
        })
    }

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap ">
          {/* Brand */}
          <a
            className="text-white  uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            {props.algorithme}
          </a>
          {/* Form */}
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto ">
            <div className="relative flex w-full flex-wrap items-stretch">
              <div className="items-center justify-center bg-grey-lighter">
                  { props.cnf ?
                      <span className="bg-blue-200 text-blue-700 font-bold items-center rounded-full pt-1 px-2 text-sm mr-3 font-mono">
                          <i className="fas fa-check-circle text-xs  mr-2"></i>
                            {props.cnf.replace(/^.*[\\\/]/, '')}
                      </span>
                      : <span> </span>
                  }
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800
                     font-bold py-2 px-4 mr-2 rounded inline-flex items-center"
                    onClick={handleCnfUpload}
                >
                  <i className="fas fa-file-import w-4 h-4 mr-2 "></i>

                  <span>Select a benchmark</span>
                </button>
              </div>
            </div>
          </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            {/*<UserDropdown />*/}
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
