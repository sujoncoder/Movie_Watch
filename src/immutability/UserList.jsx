import { useState } from "react"

const UserList = () => {
    const [users, setUsers] = useState([{
        id: crypto.randomUUID(),
        name: "Sujon",
        address: "Magura"
    }]);

    // CHANGE USER
    function changeUser(id, name) {
        const userCopy = [...users];
        const found = userCopy.find((user) => user.id === id);
        found.name = name;
        setUsers(userCopy)
    };

    // ADD USER
    function addUser() {
        const newUser = {
            id: crypto.randomUUID(),
            name: "Sheikh",
            address: "Sonpur"
        };

        setUsers([...users, newUser]);
        console.log(newUser)
    };

    return (
        <div>
            <ul className="w-[400px] border rounded p-4 mt-10 mx-auto">
                {
                    users.map((user) => (
                        <li key={user.id} className="flex justify-center items-center space-x-2 space-y-2">
                            <p className="text-lg">{user.name} lives in {user.address}</p>

                            <button
                                onClick={() => changeUser(user.id, "Random")}
                                className="border-2 rounded px-4 py-1.5">
                                Change
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div className="flex justify-center mt-10">
                <button
                    onClick={addUser}
                    className="text-white font-semibold rounded-full bg-blue-500 active:bg-blue-600 w-[100px] py-2">
                    Add user
                </button>
            </div>
        </div>
    )
}

export default UserList