function TableData({tableItems}){
    return(
        <>
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

export default TableData;