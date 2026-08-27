import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1781100037733-fbdfc1629114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus maxime et perferendis.</p>
            <button>View profile</button>
        </div>
    )
}

export default Card