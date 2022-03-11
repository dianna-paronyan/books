import './FetchingData.css';
import Pagination from './Pagination';
import {useState} from 'react';


function FetchingData(){
    const [inputValue, setInputValue] = useState('');
    const [numFound, setNumFound] = useState('');
    const [tableItems, setTableItems] = useState([]);
    const [pages, setPages] = useState(null);


    function handleInput(e){
        
        e.preventDefault();

        fetch(`http://openlibrary.org/search.json?q=${inputValue}`).then(async (res)=>{

            return res.json();
    
        }).then( async (res)=>{
            setNumFound(res.numFound);
            setTableItems(res.docs);
           await setPages(Math.ceil(res.numFound/100));
        })

    }
 

    return(
        <>
            <h2 className='searchResults'>{`Results of search are equal: ${numFound}`}</h2>
            <div className="bookSearch">
                <form action="" onSubmit={(e)=> {
                    handleInput(e);
                        
                }}>

                    <input type="text" name="" id="" placeholder="Search a book..."  value={inputValue} 
                        onChange={(e)=>setInputValue(e.target.value)} 

                    />

                    <button className="searchBtn" type="submit">Search</button>
                </form>
            </div>

            {tableItems.length>=100 ? <Pagination pages = {pages} inputValue = {inputValue}  tableItems={tableItems} /> : ''}

        </>
    )
}

export default FetchingData;