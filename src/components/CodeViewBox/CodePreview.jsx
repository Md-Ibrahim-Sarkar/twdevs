import React from 'react'

function CodePreview({children }) {
    return (
        <div className="border w-full bg-slate-800 max-h-[450px]  outline outline-1 outline-rose-500 rounded-lg overflow-auto scrollbar-hide scrollbar-custom duration-300">
            {children}
        </div>
    )
}

export default CodePreview