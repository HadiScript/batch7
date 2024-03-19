import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accordions from './pages/Accordions'
import Home from './pages/Home'
import Stats from './pages/Stats'
import { AccordionPath, DashboardPath, HomePath } from './assets/path'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HomePath} element={<Home />} />
        <Route path={DashboardPath} element={<Stats />} />
        <Route path={AccordionPath} element={<Accordions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages2/Home'
// import Users from './pages2/Users'
// import UserDetails from './pages2/UserDetails'
// import Header from './pages2/Header'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/user/:id" element={<UserDetails />} />
//         <Route path="*" element={<h5>Not Found</h5>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App