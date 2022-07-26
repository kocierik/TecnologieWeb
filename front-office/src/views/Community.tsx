import React from 'react'
import DropDown from './common/DropDown'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Rawtable from './common/Rawtable'

const Community = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className='flex  justify-between' style={{flexFlow: "wrap"}}>
            <h2 className="text-2xl font-semibold mb-5 leading-tight">Game leaderboard</h2>
          <DropDown />
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className=" min-w-full shadow-md rounded-lg overflow-hidden inline-block">
              <table className="min-w-full leading-normal text-center 	">
                <thead>
                  <tr style={{ textAlignLast: 'center' }}>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      User
                    </th>
                    <th className="py-3 pr-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Points
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Game
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Rawtable />
                  <Rawtable />
                  <Rawtable />
                  <Rawtable />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Community
