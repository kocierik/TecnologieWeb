import React, { useEffect, useState } from 'react'
import { ApiRepository, type JsonUser, Helpers } from 'shared';


const Profile = () => {

  const [user,setUser] = useState<JsonUser.JsonUser>()
  
  const test = {
    email: "man@ah.com",
    username: "erikMan",
    password: "erik",
    firstName: "erik",
    lastName: "koci",
    phone: "3333333333",
    animals: ["cane","gatto"],
    address: {cap: 3434, city: "rimini",contry: "riccione", street:"via annibolina"}
  }


  const getUserInfo = async () =>{
    const val = (await ApiRepository.getCurrentUser()).data
    //setUser(val!)
    
  }
  
  useEffect(()=>{
    getUserInfo()
  },[])

  return (
    <>
      <main className="profile-page" data-aos="zoom-in" data-aos-duration="500">
        <section className="relative block" style={{ height: '500px' }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601562219441-29e53a4d4d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="imageProfile.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: '150px' }}
                      />
                    </div>
                  </div>
             

                
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">{test?.username} </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> test
                  </div>
                  
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div>
                
                <div className='flex flex-col items-center'>
                  <div className="w-full  lg:w-4/12 px-4 lg:order-1">
                    <div className="flex flex-col justify-center py-4 lg:pt-4 pt-8">
                      <div className='flex flex-row justify-center items-center'>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">22</span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">10</span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      </div>
                  { Helpers.isLogged() &&  <div className="w-full lg:w-4/12  lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0 text-center	">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>}
                      {/* <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">89</span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div> */}
                    </div>
                  </div>
                </div>
        <div style={{width: ""}} className="flex justify-center items-center">
          <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick
                        Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a
                        solid groove structure. An artist of considerable range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile