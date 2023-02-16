import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layout=()=>{
    const functionare=document.createElement("div");
    functionare.append(Navbar(),Sidebar())

    return functionare
}

export default Layout;