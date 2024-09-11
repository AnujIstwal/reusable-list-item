import axios from "axios";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";

function App() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            //console.log(res.data);
            setUserData(res.data);
        }

        loadData();
    }, []);

    return (
        <div >
            {userData?.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default App;
