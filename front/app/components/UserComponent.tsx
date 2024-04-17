// components/Profile.tsx
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../lib/hooks';
import { RootState } from '../lib/store';
import { fetchUser } from '../lib/userSlice'; // Assuming you have a thunk to fetch reviews

const UserComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user); // Assuming user info is also part of the state
  const reviews = useAppSelector((state: RootState) => state.user); // This should match your actual state structure
  const loading = useAppSelector((state: RootState) => state.user.loading);

  // Dispatch fetchUserReviews when the component mounts
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user?.role || 'Doctor'}</h1>
      <h2>Cardiologist</h2>
      <div>Edit Profile</div>
      <div>146 Rates</div>
      <div>95% Trust</div>
      <div>
        {/* {user.map((review: Review) => (
          return< key={review.id} review={review} >
          
          </>
        ))} */}
      </div>
    </div>
  );
};

export default UserComponent;
