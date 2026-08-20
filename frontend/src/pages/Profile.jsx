import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Profile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to load users:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading profile...</h1>;
  }

  return (
    <>
      <h1 className="page-title">Profile</h1>

      {users.length === 0 ? (
        <p className="page-subtitle">No users found.</p>
      ) : (
        users.map((user) => (
          <div className="dashboard-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Codeforces: {user.codeforces_handle || "Not connected"}</p>
          </div>
        ))
      )}
    </>
  );
}

export default Profile;
