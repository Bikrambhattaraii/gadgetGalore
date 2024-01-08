import { Outlet } from "react-router-dom";
import Header from "src/components/header/header";
import Footer from "src/components/footer/footer";

const DefaultLayout = () =>{
    return (
        <>
        <Header />
         <Outlet />
        <Footer />
        </>
    )
}

export default  DefaultLayout;