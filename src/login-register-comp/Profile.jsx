import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from './Auth'

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/');
  }, [navigate]);

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to your Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;