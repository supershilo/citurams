import React from 'react';
import { styled} from '@mui/system';
import HomeFrame from '../components/HomeFrame';
import HomePage from './HomePage';
import { CSSTransition } from 'react-transition-group';
const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  transition: 'opacity 5s ease', // Apply transition to opacity
}));
const MyRequest = () => {

  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={300}
    classNames="fade" // CSS class prefix for transition styles
  >
    <div>
        <HomeFrame/>
        <div className='mt-24 ml-64'>
            <div className='ml-16'>
                <h1>my request</h1>
            </div>
        </div>
    </div>
        </CSSTransition>
  );
};

export default MyRequest;
