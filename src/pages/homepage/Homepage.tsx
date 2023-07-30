import {Link} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import algos from './homepage.ts'

export default function Homepage() {
  return (
    <>
    <Header/>
    <div>
          <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 sm:place-items-center'>
        {algos.map(algo => {
          return (
            <div key={algo.key}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-500 hover:scale-110">
                <img className="w-full" src={algo.image} alt={algo.alt} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2"><Link to={algo.route}>{algo.name}</Link></div>
                  <p className="text-gray-700 text-base">
                    {algo.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}


      </div>
      
    </div>
    <Footer/>
    </>
  )
}
