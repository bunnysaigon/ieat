// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { updateUser, getUser } from './CurrentUser';

// export const Profilecontainer = () => {
//   const { user } = useParams();
//   const sample_user = getUser(user);
//   console.log(sample_user);

//   return (
//     <div className="hi">
//       This is the profile page!
//       <br></br>
//       Name: {sample_user.first_name} {sample_user.last_name}
//       <br></br>
//       netid: {sample_user.netid}
//       <br></br>
//       <Link to={`/edit/${user}`}>Edit Profile</Link> {/* Add the "Edit" button */}
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from './CurrentUser';

export const Profilecontainer = () => {
  const { user } = useParams();
  const [sampleUser, setSampleUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(user);
        setSampleUser(userData);
      } catch (error) {
        // Handle any errors, e.g., user not found
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="hi">
      This is the profile page!
      <br></br>
      {sampleUser ? (
        <>
          Name: {sampleUser.first_name} {sampleUser.last_name}
          <br></br>
          netid: {sampleUser.netid}
          <br></br>
        </>
      ) : (
        'Loading user data...' // You can add a loading indicator or message
      )}
      <Link to={`/edit/${user}`}>Edit Profile</Link>
    </div>
  );
};




// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { updateUser, getUser } from './CurrentUser';

// export const Profilecontainer  = () => {
//   const { user } = useParams();
//   const [editedUser, setEditedUser] = useState(getUser(user));

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // console.log("handlesave");
//     // console.log('Edited User Data:', editedUser);
//     updateUser(editedUser);
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <form>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="first_name"
//             value={editedUser.first_name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="last_name"
//             value={editedUser.last_name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Profile Picture:</label>
//           <input
//             type="text"
//             name="profile_pic"
//             value={editedUser.profile_pic}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <input
//             type="text"
//             name="gender"
//             value={editedUser.gender}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Grade:</label>
//           <input
//             type="text"
//             name="grade"
//             value={editedUser.grade}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Major:</label>
//           <input
//             type="text"
//             name="major"
//             value={editedUser.major}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Availability:</label>
//           <input
//             type="text"
//             name="availability"
//             value={editedUser.availability}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Favorite Locations:</label>
//           <input
//             type="text"
//             name="fav_locations"
//             value={editedUser.fav_locations}
//             onChange={handleInputChange}
//           />
//         </div>
//       </form>
//       <button onClick={handleSave}>Save</button>
//       <Link to={`/profile/${user}`}>Cancel</Link>
//     </div>
//   );
// };





