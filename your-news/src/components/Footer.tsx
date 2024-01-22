import React from 'react'

const Footer = ({copyright}:{copyright:string|undefined}) => {
  return (
    <div className="p-2 fixed bottom-0 w-full bg-white">
        <div className="w-11/12 m-auto">
            <hr/>
            <div className="flex flex-col md:flex-row justify-between px-4">
                <h1 className='text-xs text-center md:text-base md:text-right'>{copyright}</h1>
                <div className="text-sm text-center md:text-base md:text-right">
                    Icons by <a className="underline" target="_blank" href="https://icons8.com">Icons8</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer