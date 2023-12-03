import React, { useState, useEffect } from 'react';
import { Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import HomeFrame from '../components/HomeFrame';
import EditProfile from './EditProfile';
import axios from 'axios';

const MyProfile = ({ name, department, position, email, contactNumber, profilePhoto }) => {
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const storedUserEmail = sessionStorage.getItem('userEmail');
  const [userData, setUserData] = useState(null);

  const handleEditProfileClick = () => {
    setEditProfileModalOpen(true);
  };

  const handleEditProfileModalClose = () => {
    setEditProfileModalOpen(false);
  };
  const handleSaveChangesClick = () => {
    setConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setConfirmationDialogOpen(false);
  };

  const handleConfirmSaveChanges = () => {
    // Add logic to handle saving changes
    // For now, just close the confirmation dialog
    setConfirmationDialogOpen(false);
  };
  
  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Make a GET request to your user details endpoint
        const response = await axios.get(`http://localhost:8080/user/getUserData?email=${storedUserEmail}`);
        setUserData(response.data); // Assuming the response contains user data
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    if (storedUserEmail) {
      fetchUserData();
    }
  }, [storedUserEmail]);
  return (
    <div className='mt-24 ml-64'>
    <div className='ml-40 mr-32'>
      <HomeFrame/>
  <div className="p-12">
  <div className="bg-gray-200 p-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 flex justify-left">My Profile</h2>
      <Divider/>
       {/* User Profile Section */}
       <div className="flex items-center mt-6 justify-left ml-12">
          <img
            src={profilePhoto}
            alt="Profile"
            className="rounded-full ring-4 ring-white"
            style={{ borderRadius: '50%', height: '150px', width: '150px', marginRight: '100px' }}
          />
          <div>

          {userData && (
            <>
            <div className="text-m mb-2">
              <span className="font-bold">Name:</span> {userData.fname} {userData.lname}
            </div>
            <div className="text-m mb-2">
              <span className="font-bold">Department:</span> {userData.department}
            </div>
            <div className="text-m mb-2">
              <span className="font-bold">Position:</span> {userData.position}
            </div>
            <div className="text-m mb-2">
              <span className="font-bold">Email:</span> {userData.email}
            </div>
            <div className="text-m mb-2">
              <span className="font-bold">Contact Number:</span> {userData.contactNum}
            </div>

            </>
          )}
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className='mt-2 flex justify-end'>
          <Button variant="contained"
          color="primary"
          onClick={handleEditProfileClick}
          sx={{
            fontFamily: "'Poppins', sans-serif",
            marginTop: 2,
            backgroundColor: '#FC3031',
            '&:hover': {
              backgroundColor: '#bd262a', // Change this to your desired hover color
            },
  }}>
            Edit Profile
          </Button>
        </div>



        {/* Profile Modal */}
        <Dialog open={isEditProfileModalOpen} onClose={handleEditProfileModalClose } maxWidth="xl" >
        <DialogTitle className='bg-gray-200'>Edit Profile</DialogTitle>
        <DialogContent>
          <EditProfile />
        </DialogContent>
        <DialogActions>
          <div className="mt-6 mb-2 mr-4 flex items-center justify-end gap-x-6">
            <button onClick={handleEditProfileModalClose } type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              onClick={handleSaveChangesClick}
              type="submit"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Changes
            </button>
          </div>
        </DialogActions>
    </Dialog>
            {/* Confirmation Dialog */}
            <Dialog open={isConfirmationDialogOpen} onClose={handleConfirmationDialogClose}>
              <DialogTitle>Confirm Save Changes</DialogTitle>
              <DialogContent>
                Are you sure you want to apply these changes?
              </DialogContent>
              <DialogActions>
                <Button onClick={handleConfirmationDialogClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleConfirmSaveChanges} variant="contained" color="primary">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
    </div>
  </div>
  </div>
  </div>
  );
};

export default MyProfile;
