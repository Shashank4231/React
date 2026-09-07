import { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
      const copyTask = [...task];
      copyTask.splice(idx,1)
      setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">

      <form onSubmit={(e) => { submitHandler(e) }} className="flex gap-4 flex-col items-start p-16 lg:w-1/2">
        <h1 className="text-4xl font-bold">Add notes</h1>

        <input type="text" placeholder="Enter notes heading" value={title} onChange={(e) => { setTitle(e.target.value) }} className="px-5 py-2 border-2 rounded w-full outline-none font-medium" />
        <textarea type="text" placeholder="Write details" value={details} onChange={(e) => { setDetails(e.target.value) }} className="px-5 py-2 h-32 flex items-start flex-row border-2 rounded w-full outline-none font-medium" />
        <button className="bg-white active:bg-gray-300 text-black px-5 py-2 rounded w-full outline-none font-medium">Add note</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyREhzHPBZtFjIcn-eID5BFKvfYDizloRDr0r5H9FgpRj0RcPKESqTwP1&s=10')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App