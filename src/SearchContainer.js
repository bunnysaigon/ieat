import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { getUsersWithCompatibleAvailability } from './AvailibilityUtils';
import {getUser} from './CurrentUser';
import { Link, useParams } from 'react-router-dom';

export const Searchcontainer = () => {
  
  const { user } = useParams();
  const [sampleUser, setSampleUser] = useState(null); // Initialize with null
  const [compatibleUsers, setCompatibleUsers] = useState([]);

  console.log('User Data:', user);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser(user);
      setSampleUser(userData);

      const users = getUsersWithCompatibleAvailability(userData);
      setCompatibleUsers(users);
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [user]);
  
  
  // TODO:
  // let user select a day to check for availibility for that day - input
  // basically you have to check what day is the date
  // then add one more argument 'day' in the function below in  './AvailibilityUtils';
  // eg. getUsersWithCompatibleAvailability(user, day);
  // and also change the logic in isComapitble(), etc.

  // TODO:
  // two tabs for: location and time filtering


  return (
    <div>
      <h1>Search for Lunchtime Companions</h1>
      {compatibleUsers.length > 0 ? (
        compatibleUsers.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>No compatible users found.</p>
      )}
    </div>
  );
};