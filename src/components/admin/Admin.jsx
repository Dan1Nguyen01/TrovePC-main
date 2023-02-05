import React from 'react'

const Admin = () => {
    const [users,setUsers] = React.useState(null);
    
    React.useEffect(()=>{
        const fetchUsers = async()=> {
            const res = await fetch('/api/users');
            const json = await res.json();

            if(res.ok){
                setUsers(json)
            }
        }
        fetchUsers()
    },[])
    

  return (
    <div className='trove__admin'>
        <div className="users">
            {users&& users.map((user)=>(
                <div className='container'>

                <table className='table table-striped table-dark'>
                    <thead>
                    <tr>
                        <th className='col'>User Name</th>
                        <th className='col'>Email</th>
                        <th className='col'>Password</th>
                        <th className='col'>Display Name</th>
                        <th className='col'>Is Admin</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td key={user.id}>{user.userName}</td>
                        <td key={user.id}>{user.password}</td>
                        <td key={user.id}>{user.email}</td>
                        <td key={user.id}>{user.displayedName}</td>
                        <td key={user.id}>{user.isAdmin}</td>
                    </tr>
                    </tbody>
             
                </table>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Admin