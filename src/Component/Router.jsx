import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import ContactUs from "../ContactUs";
import HeroSection from "./HeroSection";
import Collections from "./Collections";


export const router=createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[{
      path:"/",
      element:<HeroSection />
    },
    {
      path: "/home",
      element: <HeroSection />
    },
    {
      path: "/Collections",
      element: <Collections />
    },
    {
      path: "/ContactUs",
      element: <ContactUs />
    },]
  
  },
  
]
)

