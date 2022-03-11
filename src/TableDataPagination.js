function TableDataPagination({paginTableItems}){
    return(
        <>
             <table>
                
                <tbody>
                    {paginTableItems.map((item)=>{
                    
                            return(
                                
                                <tr key={Math.random()}>
                                    <td>{item.title}</td>
                                    <td>{item.author_name}</td>
                                    <td>{item.first_publish_year}</td>
                                    <td>{item.subject}</td>
                                </tr>
                            
                            )
                    
                    })}
                </tbody>
           
            </table>
        </>
    )
}

export default TableDataPagination;