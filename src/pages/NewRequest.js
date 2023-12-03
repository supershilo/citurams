import React, { useState } from 'react';
import HomeFrame from '../components/HomeFrame';
import { Divider, Button} from '@mui/material';

const Dropdown = ({ label, options, selectedOption, onChange }) => (
  <div className="mb-4 mr-40">
    <label className="block font-bold text-lg mb-2 text-gray-700" htmlFor={label}>
      {label}:
    </label>
    <select
      className="block w-44 p-2 bg-white text-base border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
      id={label}
      value={selectedOption}
      onChange={(e) => onChange(label, e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const NewRequest = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  // Define your options for each dropdown
  const buildingOptions = ['Building 1', 'Building 2', 'Building 3'];
  const roomOptions = ['Room 1', 'Room 2', 'Room 3'];
  const equipmentOptions = ['Equipment 1', 'Equipment 2', 'Equipment 3'];

  return (
    <div>
      <HomeFrame />
      <div className='mt-16 ml-48 '>
        <div className='ml-16'>
          <div className='mt-0 -ml-12'>
            <div className='ml-12'>
              <div className='ml-12'>
                <div className="p-12">
                  <div className="bg-gray-200 p-8 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4 flex justify-left">Make a Request</h2>
                    <Divider />
                    <hr />
                    <div className="flex justify-center items-center mt-8">
                      <Dropdown
                        label="Building"
                        options={buildingOptions}
                        selectedOption={selectedBuilding}
                        onChange={setSelectedBuilding}
                      />
                      <Dropdown
                        label="Room"
                        options={roomOptions}
                        selectedOption={selectedRoom}
                        onChange={setSelectedRoom}
                      />
                      <Dropdown
                        label="Equipment"
                        options={equipmentOptions}
                        selectedOption={selectedEquipment}
                        onChange={setSelectedEquipment}
                      />
                    </div>
                    <div className="mt-4">
                      <label className="ml-8 block font-bold text-lg mb-2 text-gray-700" htmlFor="requestDescription">
                        Request Description:
                      </label>
                      <div
                      className="overflow-hidden rounded-lg ml-8 mr-4 border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <textarea
                        id="requestdescription"
                        className="p-2 w-full h-72 resize-none border-none align-top focus:ring-0 sm:text-sm"
                        rows="4"
                        placeholder=" Enter any request description..."
                      ></textarea>

                    </div>
                    <div className='mt-2 mr-4 flex justify-end'>
                      <Button variant="contained"
                      color="primary"
                      //onClick={handleEditProfileClick}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
