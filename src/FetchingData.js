import './FetchingData.css'
import {useState, useEffect} from 'react'

function FetchingData(){
    const [inputValue, setInputValue] = useState('');
    const [numFound, setNumFound] = useState('');
    const [tableItems, setTableItems] = useState([]);
    const [pages, setPages] = useState(+'');


    function handleButton(e){
        e.preventDefault();

        fetch(`http://openlibrary.org/search.json?q=${inputValue}`).then((res)=>{

            return res.json();
    
        }).then((res)=>{
            console.log(res);
            setNumFound(res.numFound);
            setTableItems(res.docs);
            setPages(Math.ceil(res.numFound/100));
          
        })
      
        for (let i = 0; i <= pages; i++) {
            
            if(i === 1){
             
                return(
                    <button>{i}</button>
                )
            }
           
        }
    }


    return(
        <>
            <h2 className='searchResults'>{`Results of search are equal: ${numFound}`}</h2>
            <div className="bookSearch">
                <form action="" onSubmit={(e)=> {
                     handleButton(e)
                     setInputValue('')
                }}>

                    <input type="text" name="" id="" placeholder="Search a book..."  value={inputValue} 
                        onChange={(e)=>setInputValue(e.target.value)} 

                    />

                    <button className="searchBtn" type="submit">Search</button>
                </form>
            </div>
        <table>
            <thead>
                <tr className="header">
                    <th>Author</th>
                    <th>Title</th>
                    <th>First Publish Year</th>
                    <th>Subject</th>
                </tr>
            </thead>
            
            <tbody>
                {tableItems.map((item)=>{
                    {console.log(item)}
                    return(
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.author_name}</td>
                            <td>{item.first_publish_year}</td>
                            <td>{item.subject}</td>
                        </tr>
                    )
                   
                })}
            </tbody>
           
        </table>
        <div className="pagination">
           {/* {console.log(pages)} */}
        </div>
        </>
    )
}

export default FetchingData;