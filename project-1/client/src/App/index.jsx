import { Route, Routes } from "react-router-dom"

import * as pages from "../utils/pages"
import { paths } from "../utils/paths"


const App = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<pages.Home />} />
      <Route path={paths.login} element={<pages.Login />} />
      <Route path={paths.register} element={<pages.Register />} />
      <Route path={paths.blogDetail(':id')} element={<pages.BlogDetail />} />


      {/* authors */}
      <Route path={paths.authorDashboard} element={<pages.AuthorDashboard />} />
      <Route path={paths.createBlog} element={<pages.CreateBlog />} />
      <Route path={paths.blogs} element={<pages.BlogList />} />
      <Route path={paths.editBlog(':slug')} element={<pages.EditBlog />} />



      {/* admin */}
    </Routes>
  )
}

export default App


