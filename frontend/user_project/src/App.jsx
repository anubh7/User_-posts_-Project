import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Createpost from './pages/createpost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/create-post' replace />} />
        <Route path='/create-post' element={<Createpost />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
