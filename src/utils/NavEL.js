const NavEL=({element,children,...rest})=>{
const El=document.createElement(element || "div");
for (const key in rest)
    El[key]=rest[key]; 
if(children)
(Array.isArray(children))?El.append(...children):El.append(children);
return El;
}
export default NavEL;

