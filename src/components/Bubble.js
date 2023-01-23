import React from 'react'

function Bubble(props) {
  return (
    <div className='px-4 py-2 text-left text-sm bg-gray-200 mx-2 rounded-xl'>
        {/* <h1>For sale</h1> */}
        {props.children}

    </div>
  )
}

export default Bubble