import NavEL from "./NavEL";

const Product=(Text1,Text2,Text3)=>{


const card=NavEL({
    element:"a",
    className:"flex mt-4 rounded ",
    style:"width:426px; border:2px solid var(--primary);",
    children:[NavEL({
element:"img",
src:"https://s100.divarcdn.com/static/thumbnails/1676911327/wYyTXzZG.webp",
style:"border-radius:4p",
className:"p-2",
    }),NavEL({
        element:"div",
        className:"flex flex-col justify-between flex-1",
        children:[NavEL({
            element:"h3",
            innerText:"کامپیوتر گیمینگ",
            className:"font-semibold text-end p-2"

        }),NavEL({
            element:"div",
            className:"flex flex-col p-2",
            style:"align-items:flex-end",
            children:[NavEL({
                element:"p",
                innerText:Text1,
                className:"",
                style:"color:var(--gray)",
            }),NavEL({
                element:"p",
                innerText:Text2,
                style:"color:var(--gray)",
            }),NavEL({
                element:"p",
                innerText:Text3,
                style:"color:var(--gray)",
            })]
        })]
    })]
    
})

return card;
}
export default Product;