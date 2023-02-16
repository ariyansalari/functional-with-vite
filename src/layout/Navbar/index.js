import NavEL from "../../utils/NavEL";
import "./index.css"
{/* <div class=""></div> */}
const Navbar=()=>{

  const navbar=NavEL({
    element:"nav",
    className:"",
    children:NavEL({
        element:"ul",
        className:"flex justify-between items-center pt-2",
        children:[NavEL({
            element:"div",
            className:"flex gap-6 items-center pl-7",
            style:"margin-right:21rem",
            children:[NavEL({
                element:"button",
                innerText:"ثبت آگهی",
                className:"bg-red-800 p-2 rounded-sm font-semibold justify-center",
                style:"color:var(--white)",
                }),NavEL({
                element:"a",
                innerText:"پشتیبانی",
                style:"color:var(--gray)",
                className:"font-semibold",
            }),NavEL({
                element:"div",
                className:"flex",
                style:"align-items:center",
                children:[NavEL({
                    element:"a",
                    innerText:"چت",
                    style:"color:var(--gray); margin-right:0.4rem",
                    className:"font-semibold"
                    
                }),NavEL({
                    element:"img",
                    src:"https://cdn-icons-png.flaticon.com/512/1380/1380370.png",
                    className:"w-4 h-4"
                })]
            }),NavEL({
                element:"div",
                className:"flex ",
                style:"align-items:center",
                children:[NavEL({

                    element:"a",
                    style:"color:var(--gray); margin-right:0.4rem",
                    innerText:"دیوار من",
                    className:"font-semibold",
                }),NavEL({
                    element:"img",
                    src:"https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
                    className:"w-4 h-4"
                })]
            })]
        }),NavEL({
            element:"div",
            className:"flex ",
            style:"width:500px",
            children:NavEL({
                element:"div",
                style:"background-color:var(--primary); border-radius:4px; align-items:center",
                className:"flex p-2 flex-1",
                
                children:[NavEL({
                    element:"input",
                    className:"flex-1",
                    style:"background:none",
                    placeholder:"                                                                   جستجو در همهٔ آگهی‌ها"
                }),NavEL({
                    element:"img",
                    src:"https://cdn-icons-png.flaticon.com/512/3917/3917754.png",
                    className:"w-4 h-4",
                    style:"margin-right:0.8rem"
                })]
            })
         
        }),NavEL({
            element:"div",
            className:"flex",
            children:[NavEL({
                element:"img",
                src:"https://cdn-icons-png.flaticon.com/512/152/152415.png",
                className:"w-2 h-2 m-2"}),
                NavEL({
element:"button",
innerText:"دسته ها",
style:"color:var(--gray)",
className:"font-semibold"
            
        })] 
    }),NavEL({
            element:"div",
            className:"flex",
            style:"align-items:center",
            children:[NavEL({
                element:"div",
                className:"flex mx-4",
                children:[NavEL({
                    element:"a",
                    innerText:"شیراز",
                    style:"color:var(--gray)",
                    className:"font-semibold"
                }),NavEL({
                    element:"img",
                    src:"https://www.iconpacks.net/icons/2/free-location-icon-2950-thumb.png",
                    className:"w-6 h-6",
              
                })]
            }),NavEL({
                element:"hr",
                style:"border-left:0.1rem solid black; height:1.5rem;"
            }),NavEL({
                element:"div",
                className:"mx-4",
                children:NavEL({
                    element:"img",
                    src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E2MjYyNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zODYgMTQuNjE3SDguMjhhLjcxMi43MTIgMCAwIDEtLjU5NS0uODA2Yy40NzMtMy4xMTcuNjMtOC4wOTIuNjMtOC4xMjcuMDM1LS4zODYuMzMzLS43LjczNi0uNjgzYS43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjIxLS4xNzUgNS4wOTctLjY0OCA4LjMwM2EuNy43IDAgMCAxLS43LjU5NVptMTAuMDM3IDEuMjk2YS42OTMuNjkzIDAgMCAxLS42NjYtLjQ5LjY4OC42ODggMCAwIDEgLjQ1NS0uODc2YzMuMzEtMS4wNSAzLjM2My0xLjg1NyAzLjM4MS0yLjI5NS4wMzUtLjY4My0uNDktMS41NTgtLjctMS44NTZhLjcwMS43MDEgMCAxIDEgMS4xMzgtLjgyNGMuMTA1LjE0IDEuMDUgMS40NTQuOTYzIDIuNzY4LS4wODcgMS41OTQtMS4zMTQgMi41NzUtNC4zNjEgMy41NTZhLjg0NS44NDUgMCAwIDAtLjEwNS4wMDljLS4wMzUuMDA0LS4wNy4wMDktLjEwNS4wMDlabS05LjUxMiAyLjQ3YS42NTYuNjU2IDAgMCAxLS41NDMtLjI2Mi42ODMuNjgzIDAgMCAxIC4xMjMtLjk4MWMxLjQzNi0xLjEzOSAyLjQtMi4xNTUgMy4wMy0zLjA0OC0uMzUtLjE3NS0uNzE4LS40MzgtLjkxLS44NzYtLjE3Ni0uNDAzLS4yODEtMS4wNjkuMzMyLTEuOTYyLjg3Ni0xLjI5NiAxLjc1Mi0xLjU5NCAyLjA4NC0xLjY2NGEuODcxLjg3MSAwIDAgMSAxLjAxNi42MTNjLjA4OC4zMTUuMjk4IDEuMzE0LS4zMzIgMi44MzguODQtLjAxOCAxLjUwNi0uMjQ1IDIuMDE0LS42NjYuOTgtLjc4OCAxLjAzMy0yLjEyIDEuMDMzLTIuMTM3YS43MTUuNzE1IDAgMCAxIC43MTktLjY4My43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjA3LS4wNyAxLjk0NC0xLjUyNCAzLjE3LS45MTEuNzcxLTIuMTU1IDEuMTA0LTMuNjYxLjk4Mi0uNzE4IDEuMTAzLTEuODU3IDIuNC0zLjYyNiAzLjhhLjcwOC43MDggMCAwIDEtLjQzOC4xNThabTMuODAxLTcuMDc2YTMuMTM0IDMuMTM0IDAgMCAwLS42My43MzVjLS4yMjguMzUtLjI0Ni41NDMtLjIyOC41OTYuMDM1LjA4OC4yMS4xNzUuMzg1LjI0NS4zMzMtLjY2NS40MzgtMS4xOTEuNDczLTEuNTc2Wm0uMTc1IDQuOTIyYS43MS43MSAwIDAgMCAuNy42ODNoLjAzNmMuMDUzIDAgMS4yMjYtLjAzNSAyLjkwOC0uNDJhLjcwMi43MDIgMCAwIDAgLjU0My0uODQxLjcwMi43MDIgMCAwIDAtLjg0MS0uNTQzYy0xLjU2LjMzMi0yLjY2My4zODUtMi42OC4zODVhLjcwNC43MDQgMCAwIDAtLjY2Ni43MzZaTTEuMTM0IDE4LjEwM2MuMTIyLjE3NS4zNS4yOC41Ni4yOC4xNCAwIC4yOC0uMDM1LjQyLS4xMjIgNC40NS0zLjI0IDQuNjI1LTcuNDggNC42MjUtNy42NTUgMC0uMzg1LS4yOTgtLjctLjY4My0uNzE4LS4zODYtLjAxOC0uNy4yOTgtLjcxOC42ODMgMCAuMTQtLjE3NiAzLjczMS00LjA0NyA2LjU1MWEuNzAxLjcwMSAwIDAgMC0uMTU3Ljk4MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
                    className:"w-8 h-8"

                })
            })]
        })]
    })
  
  })
    return navbar;
}

export default Navbar;