import { BrowserRouter, Route, Routes } from "react-router-dom"
import Browse from "./pages/Browse"
import CityDetails from "./pages/CityDetails"
import CheckBooking from "./pages/CheckBooking"
import SuccessBooking from "./pages/SuccessBooking"
import Details from "./pages/Details"
import BookOffice from "./pages/BookOffice"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Browse/>}></Route>
      <Route path="/office/:slug" element={<Details />}/>
      <Route path="/office/:slug/book" element={<BookOffice/>}/>
      <Route path="/city/:slug" element={<CityDetails/>}/>
      <Route path="/success-booking" element={<SuccessBooking/>}/>
      <Route path="/check-booking" element={<CheckBooking/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App