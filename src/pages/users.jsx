import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../components/header";

import { users } from "../data/users";

export const Users = () => {

  const [searchParams] = useSearchParams();
  
    function getFilteredUsers(){
        const searchString = searchParams.get('search');

        if(searchParams === null || searchString === ""){
            {console.log(users)}
            return users;
        } else{

              return users.filter((user) => user.linklabel.toLowerCase().includes(searchString.toLowerCase())
                );
          
        }
      }

    //getFilteredUsers();

       

  return (
    <>
      <Header />
      <main>
        <h1>Lista de usuários</h1>
        {}
        <ul>
          {getFilteredUsers().map((user,index) =>(

            <li key={index}>
              {console.log(user)}
              <Link to ={user.linkUrsl}>{user.linklabel}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
