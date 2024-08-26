import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
    //  axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
    // .then( resp => console.log (resp.data.data[0] ) );




    // fetch('https://reqres.in/api/users?page=2')
    //     .then( resp => resp.json() )
    //     .then( data => console.log(data) );



    const {users, prevPage, nextPage} = useUsers();

  return (
    <>
        <h3>Usuarios:</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user => (

                    <UserRow key={ user.id } user={user} />
                ))
            } 
            </tbody>
        </table>
    
           <div>
            <button onClick={nextPage}>Prev</button>
            <button onClick={prevPage}>Next</button>
           </div>

    </>
  );
};


