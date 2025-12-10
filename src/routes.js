import Home from "./Pages/Home/Home"
import Store from "./Pages/Store/Store"
import Mac from "./Pages/Mac/Mac"
import MainPro from "./Pages/MainPro/MainPro"

let routes = [
    {path: '/', element: <Home/>},
    {path: '/store', element: <Store/>},
    {path: '/store/:id', element: <MainPro/>},
    {path: '/mac', element: <Mac/>},
]


export default routes