import React, { useState } from 'react';
import { Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import HomeFrame from '../components/HomeFrame';
import EditProfile from './EditProfile';


const MyProfile = ({ name, department, position, email, contactNumber, profilePhoto }) => {
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setEditProfileModalOpen(true);
  };

  const handleEditProfileModalClose = () => {
    setEditProfileModalOpen(false);
  };

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
            className="rounded-full ring-2 ring-white"
            style={{ borderRadius: '50%', height: '150px', width: '150px', marginRight: '100px' }}
          />
          <div>
            <div className="text-m font-bold mb-2">Name: {name}</div>
            <div className="text-m font-bold mb-2">Department: {department}</div>
            <div className="text-m font-bold mb-2">Position: {position}</div>
            <div className="text-m font-bold mb-2">Email: {email}</div>
            <div className="text-m font-bold mb-2">Contact Number: {contactNumber}</div>
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
        <Dialog open={isEditProfileModalOpen} onClose={handleEditProfileModalClose } >
        <DialogTitle className='bg-gray-200'>Edit Profile</DialogTitle>
        <DialogContent>
          <EditProfile />
        </DialogContent>
        <DialogActions>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick={handleEditProfileModalClose } type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              onClick={handleEditProfileModalClose }
              type="submit"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Changes
            </button>
          </div>
        </DialogActions>

    </Dialog>
    </div>
  </div>
  </div>
  </div>
  );
};

export default MyProfile;
