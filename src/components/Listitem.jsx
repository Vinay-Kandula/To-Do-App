import React,{ useState } from "react";

function Listitem(props){
    const [bool, setBool] = useState(false);
    const [add, setAdd] = useState("");
    function handleClick(){
        setBool(prevBool=>true);
        //props.md(props.text);

        var dateWithoutSecond = new Date();
        const str = "done on "+dateWithoutSecond.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
        setAdd(prevAdd=>str);
    }
    return (
        <div onClick={handleClick}>
            <li><span style={{textDecoration:bool?"line-through":"none"}}>{props.text}</span> {add}</li>
        </div>
    );
}

// function Listitem(props){
//     return (     
//         <div onClick={()=>{props.deletefun(props.id)}}>  for deletefun function..
//             <li>{props.text}</li>
//         </div>
//     );
// }
export default Listitem;