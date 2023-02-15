const NavEL=(options)=>{
const El=document.createElement(options.element);
for (const key in options) {
  if(key!=="element"&&key!=="children")
  {
    El[key]=options[key];
  }
}
if(options.children)
{
    if(Array.isArray(options.children))
    {
        options.children.forEach(element => {
            El.append(element);
        });
    }
    else{
        El.append(options.children);
    }
}

return El;
}

export default NavEL;