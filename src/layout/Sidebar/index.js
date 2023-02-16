
import "./index.css"
import NavEL from "../../utils/NavEL";
const Sidebar=()=>{
const sidebar=NavEL({
    element:"div",
    className:"absolute right-0",
    style:"width:248px",
    children:[NavEL({
        element:"h4",

        innerText:"دسته ها",
        className:"flex justify-end  p-2 m-1"
    }),NavEL({
        element:"div",
        
        children:[NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"املاک",
                style:"color:var(--secondary)"
            
            }),NavEL({
                    element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"
                
            })]

        }),
        
        NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"وسایل نقلیه",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"
                

            })]
        }),NavEL({
            element:"div", 
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"کالای دیجیتال",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"خانه و آشپزخانه",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"خدمات",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"وسایل شخصی",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"سرگرمی و فراغت",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"اجتماعی",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2",
            children:[NavEL({
                element:"h3",
                innerText:"تجهیزات و صنعتی",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"div",
            className:"flex justify-end p-2 mb-6",
            children:[NavEL({
                element:"h3",
                innerText:"استخدام و کاریابی",
                style:"color:var(--secondary)"
            }),NavEL({
                element:"img",
                src:"https://www.freeiconspng.com/thumbs/homepage-icon-png/house-icon-png-white-32.png",
                className:"w-6 h-6"})]
        }),NavEL({
            element:"hr",
            style:"width:91%; margin:0 auto"
        }),NavEL({
            element:"div",
            className:"flex justify-end p-3",
            style:"align-items:center",
            children:[NavEL({
                element:"h3",
                innerText:"محل",
            }),NavEL({
                element:"img",
                src:"https://cdn-icons-png.flaticon.com/512/152/152415.png",
                className:"w-2 h-2 m-2"})]
        }),NavEL({
            element:"hr",
            style:"width:91%; margin:0 auto"
        }),NavEL({
            element:"div",
            className:"flex justify-end p-3" ,
            style:"align-items:center",
            children:[NavEL({
                element:"h3",
                innerText:"قیمت"
            }),NavEL({
                element:"img",
                src:"https://cdn-icons-png.flaticon.com/512/152/152415.png",
                className:"w-2 h-2 m-2"})]
        }),NavEL({
            element:"hr",
            style:"width:91%; margin:0 auto"
        }),NavEL({
            element:"div",
            className:"flex justify-end p-3",
            style:"align-items:center",
            children:[NavEL({
                element:"h3",
                innerText:"وضعیت آگهی"
            }),NavEL({
                element:"img",
                src:"https://cdn-icons-png.flaticon.com/512/152/152415.png",
                className:"w-2 h-2 m-2"})]
        }),NavEL({
            element:"hr",
            style:"width:91%; margin:0 auto"
        }),NavEL({
            element:"div",
            className:"flex justify-end gap-2 m-4",
            children:[NavEL({
                element:"h5",
                innerText:"بلاگ دیوار",
                className:"text-xs"
            }),NavEL({
                element:"h5",
                innerText:"دریافت برنامه",
                className:"text-xs"
            }),NavEL({
                element:"h5",
                innerText:"درباره دیوار",
                className:"text-xs "
            })]
        }),NavEL({
            element:"div",
            className:"flex gap-3 justify-end m-4",
            children:[NavEL({
                element:"h4",
                innerText:"پشتیبانی قوانین",
                className:"text-xs"
            }),NavEL({
                element:"h4",
                innerText:"کسب و کارها",
                className:"text-xs"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img"
            }),NavEL({
                element:"img",
    
            }),NavEL({
                element:"img"
            }),NavEL({
                element:"img"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img"
            }),NavEL({
                element:"img"
            }),NavEL({
                element:"img"
            })]
        })]
    })]
})

return sidebar;
}

export default Sidebar;