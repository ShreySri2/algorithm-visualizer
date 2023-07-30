import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Homepage from './pages/homepage/Homepage.tsx'
import Sorting from "./pages/sorting/Sorting";
import Convexhull from "./pages/convex hull/Convexhull";
import Pathfinder from "./pages/pathfinder/Pathfinder";

import SortingContext  from './pages/sorting/utils/SortingContext.tsx'

function App() {

  return (
    <>
        
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/convexhull" element={<Convexhull/>}/>
    <Route
            path="/sorting"
            element={
              <SortingContext>
                <Sorting />
              </SortingContext>
            }
          />
    <Route path="pathfinder" element={<Pathfinder/>}/>
    

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
