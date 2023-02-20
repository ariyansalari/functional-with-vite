import Products from "./Card";
import Layout from "./layout";
import Product from "./utils/CardEL";

const App=()=>{
    const functional=document.createElement("div")
    functional.append(Layout(),Products());

    return functional;
}

export default App;