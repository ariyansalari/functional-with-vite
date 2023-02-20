import Product from "../utils/CardEL";

const  Products= () => {
    const el=document.createElement("div");
el.style.width="1300px"
    el.className="flex flex-row flex-wrap mx-auto gap-2";
    for(let i=0;i<100;i++)
    {
    el.appendChild(Product("کارکرده","قیمت","در گلدشت مالی اباد"));

}
return el;
}
 
export default Products;