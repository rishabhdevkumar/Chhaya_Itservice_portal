  import Footer from "./components/Footer"
  import Navbar from "./components/Navbar"
  import AppRoutes from "./routes/AppRoutes"
  import ScrollToTop from "./components/ScrollToTop";


  export default function App() {
    return (
      <>
        <Navbar />
        <ScrollToTop/>  
        <AppRoutes />
        <Footer/>
      </>
    )
  }



  
