import React from 'react'

const Footer = ({copyright}:{copyright:string|undefined}) => {
  return (
    <div className="p-2 fixed bottom-0 w-full bg-white">
        <div className="w-11/12 m-auto">
            <hr/>
            <div className="flex flex-col md:flex-row justify-between px-4">
                <h1>{copyright}</h1>
                <div className="text-center md:text-right">
                    <a target="_blank" href="https://icons8.com/icon/NsSPf86pJEl8/new-york-times">New York Times</a> icon by <a className="underline" target="_blank" href="https://icons8.com">Icons8</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer