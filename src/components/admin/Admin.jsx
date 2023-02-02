import React from 'react'

const Admin = () => {
    const [users,setUsers] = React.useState(null);
    
    React.useEffect(()=>{
        const fetchAdmin = async()=> {
            const res = await fetch('/api/users');
            const json = await res.json();

            if(res.ok){
                setUsers(json)
            }
        }
    },[])
    

  return (
    <div className='trove__admin'>
        <div className="users">
            {users&& users.map((user)=>(
                <p key={user.id}>{user.userName}</p>
            ))}
        </div>
    </div>
  )
}

export default Admin