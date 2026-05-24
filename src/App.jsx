import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle('')
    setDetails('')
  }

  const deleteHandler = (index) => {
    const copyTask = task.filter((_, idx) => idx !== index);
    setTask(copyTask);
  }



  return (
    <div className='relative z-10 min-h-screen w-full lg:flex bg-[#0b0c10] text-slate-100 p-6 lg:p-12 gap-8 font-sans overflow-y-auto'>
      {/* Dynamic Background Glowing Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] animate-float-reverse"></div>
      </div>

      {/* Form Section */}
      <form 
        className='relative z-10 flex lg:w-[35%] xl:w-[30%] shrink-0 flex-col gap-5 w-full max-w-md mx-auto lg:mx-0' 
        onSubmit={(e) => {
          submitHandler(e)
        }}
      >
        <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden">
          {/* Subtle gradient border at the top of card */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500"></div>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-violet-400 uppercase">Workspace</span>
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">Create Note</h2>
          </div>

          {/* Title Input field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Note Title</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder='Enter Notes Details' 
                className='pl-11 pr-4 py-3.5 w-full bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 font-medium text-sm rounded-xl focus:outline-none transition-all duration-300 focus:bg-white/[0.07] focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/15'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }} 
              />
            </div>
          </div>

          {/* Details Input field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Description</label>
            <div className="relative">
              <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <textarea 
                placeholder='Enter in Details' 
                className='pl-11 pr-4 py-3.5 w-full h-32 bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 font-medium text-sm rounded-xl focus:outline-none resize-none transition-all duration-300 focus:bg-white/[0.07] focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/15'
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Add Button */}
          <button className='relative group overflow-hidden rounded-xl py-4 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-[0_4px_20px_0_rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_4px_25px_0_rgba(139,92,246,0.5)] active:scale-[0.98] cursor-pointer'>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center justify-center gap-2">
              <span>Add Notes</span>
              <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
        </div>
      </form>

      {/* Notes Display Section */}
      <div className='relative z-10 flex-1 flex flex-col gap-6 mt-8 lg:mt-0 max-h-[85vh] lg:max-h-none overflow-hidden'>
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <h1 className='text-2xl lg:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent'>
              Your Notes
            </h1>
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/30">
              {task.length}
            </span>
          </div>
        </div>

        {/* Notes Grid */}
        <div className='flex-1 overflow-y-auto pr-2 pb-6'>
          {task.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-6 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
              <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/25 mb-4 text-violet-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m-9 1V4a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">No notes yet</h3>
              <p className="text-sm text-slate-400 text-center max-w-[280px]">
                Create your first note using the form on the left to start organizing your thoughts.
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max'>
              {task.map(function (elem, idx) {
                return (
                  <div 
                    key={idx} 
                    className="group relative flex flex-col justify-between min-h-[200px] rounded-2xl bg-white/[0.03] border border-white/5 p-6 hover:bg-white/[0.06] hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:translate-y-[-4px] overflow-hidden"
                  >
                    {/* Decorative hover card glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="flex flex-col gap-3 relative z-10">
                      <h3 className='text-lg font-bold text-white group-hover:text-violet-300 transition-colors leading-tight line-clamp-2'>
                        {elem.title}
                      </h3>
                      <p className='text-sm font-medium text-slate-400 leading-relaxed overflow-y-auto max-h-[100px] pr-1 break-words'>
                        {elem.details}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4 relative z-20 text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                      <span className="pointer-events-none">Note #{idx + 1}</span>
                      <button 
                        onClick={() => deleteHandler(idx)}
                        className="p-1.5 rounded-md bg-red-500/10 hover:bg-red-500/25 text-red-400 hover:text-red-300 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 active:scale-90 cursor-pointer opacity-0 group-hover:opacity-100 shadow-[0_2px_10px_rgba(239,68,68,0.15)]"
                        title="Delete Note"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default App
