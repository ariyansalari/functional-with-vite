import "./index.css"
import NavEL from "../../utils/NavEL";
const Sidebar=()=>{
const sidebar=NavEL({
    element:"div",
    className:"absolute right-0",
    children:NavEL({
        element:"div",
        children:[NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"املاک"
            })]

        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"وسایل نقلیه"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"کالای دیجیتال"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"خانه و آشپزخانه"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"خدمات"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"وسایل شخصی"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"سرگرمی و فراغت"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"اجتماعی"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"تجهیزات و صنعتی"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"استخدام و کاریابی"
            })]
        }),NavEL({
            element:"hr"
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"محل"
            })]
        }),NavEL({
            element:"hr"
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"قیمت"
            })]
        }),NavEL({
            element:"hr"
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"img",

            }),NavEL({
                element:"h3",
                innerText:"وضعیت آگهی"
            })]
        }),NavEL({
            element:"hr"
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"h4",
                innerText:"بلاگ دیوار"
            }),NavEL({
                element:"h4",
                innerText:"دریافت برنامه"
            }),NavEL({
                element:"h4",
                innerText:"درباره دیوار"
            })]
        }),NavEL({
            element:"div",
            children:[NavEL({
                element:"h4",
                innerText:"پشتیبانی قوانین"
            }),NavEL({
                element:"h4",
                innerText:"کسب و کارها"
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
    })
})

return sidebar;
}

export default Sidebar;