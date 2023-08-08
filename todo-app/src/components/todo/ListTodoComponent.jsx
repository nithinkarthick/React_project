

export default function ListTodoComponent(){

    const today = new Date();
    const tagertDate = new Date(today.getFullYear()+2, today.getMonth(), today.getDay())
    const todos =[ 
        {id:1, description:'learn Spring', done: false, targetDate:tagertDate},
        {id:2, description:'learn AWS', done: false, targetDate:tagertDate},
        {id:3, description:'learn C#', done: false, targetDate:tagertDate},
        {id:4, description:'learn Java', done: false, targetDate:tagertDate},
    
    ]

    return(

        <div className="container">
           <h1>Things You Want To Do!</h1>
           <div>
               <table className='table '>
                 <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>TargetDate</td>
                    </tr>
                 </thead>
                 <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>  
                            )
                        )
                    }
                  
                 </tbody>
               </table>
           </div>
        </div>

    )
}
