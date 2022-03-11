import { useEffect, useState } from "react";
import TableData from "./TableData";
import TableDataPagination from "./TableDataPagination";


function Pagination({pages, inputValue, tableItems}){
    const [paginTableItems, setPaginTableItems] = useState([]);
    const [show, setShow] = useState(true);

    function handlePages(e){
        fetch(`http://openlibrary.org/search.json?q=${inputValue}&page=${e.target.innerText}`).then((res)=>{
       
            return res.json();

        }).then((res)=>{
            setPaginTableItems(res.docs)
            console.log(res);
            
        })
              
    }


useEffect(()=>{
   setShow(false)
},[ paginTableItems]);

   
    return(
        <>
          
            {show ? <TableData tableItems={tableItems}/> : <TableDataPagination paginTableItems={paginTableItems} />}
            <div className="pagination">
                { [...Array(pages)].fill().map((_e,i) => {
                    if(i===0){
                        i = 1;
                    }else{
                        i +=1;
                    }
                        return (
                            <>
                                
                                <button key={i} style={{width:'50px', height:'30px'}} onClick={(e)=>{
                                    handlePages(e);
                                }}>{i}</button>
    
                            </>    
                        )
                    
                })}
         </div> 
        </>
    )
}

export default Pagination;