import React from 'react';
import { useContext, useEffect } from 'react';
import { connect } from 'mongoose';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import '../../assets/css/home.css';
import Updatelogo from '../../assets/logos/update-logo.png';
import NavbarInside from '../layout/NavbarInside';

const Settings = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='wrapper wrapper22'>
        <h1 className='heading-settings'>Settings</h1>
        {user && (
          <div className='settings-box'>
            <form>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='name'>Name : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input type='text' name='namee' value={user.name} />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='phonenumber'>Phone Number : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input type='text' name='phone' value={user.phone} />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='skill'>Skill : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input type='text' name='skill' value={user.skill} />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='group'>
                    Individual/Associated with a SHG :{' '}
                  </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input type='text' name='group' value={user.group} />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='pin'>PIN : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input type='password' name='password' value={'****'} />
                </div>
              </div>
              <input type='submit' value='Update' className='btn-sbmt' />
              <ul class='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
