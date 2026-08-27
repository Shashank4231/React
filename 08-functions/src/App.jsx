// import React from 'react'

// const App = () => {
//   const btnClicked = () => {
//     console.log("button is clicked")
//   }

//   function mouseEntered() {
//     console.log("mouse has entered")
//   }
//   return (
//     <div>
//       <button onDoubleClick={btnClicked} onMouseEnter={mouseEntered}>Click here</button>
//       <input type="text" onChange={function (elem) {
//         console.log(elem.target.value);
//       }} placeholder="enter name" />
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  const pageScrolling = () => {
    console.log('page scrolling');

  }
  return (
    <div className="box" onWheel={(elem) => {
      console.log(elem.deltaY);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>

  )
}

export default App