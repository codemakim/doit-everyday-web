import { Route, Routes } from "react-router-dom"
import Calendar from "./Calendar"
import DoitList from "./DoitList"

const RouteView = () => {
    return (
        <Routes>
            <Route path="/doit-calendar" element={<Calendar/>}/>
            <Route path="/doit-list" element={<DoitList/>}/>
        </Routes>
    )
}

export default RouteView;