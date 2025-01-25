import React from 'react'
import UnstaticForm from '../components/UnstaticForm';

const Contact = () => {
  return (
    <>
      <div className="container-fluid px-5">
        <h2 className="fade-in-down">Me contacter</h2>

         <UnstaticForm></UnstaticForm>

        <div className="row">
          <div className="col p-5">
            <img
              src="./public/images/photos-de-moi/moi-1.jpg"
              alt="test"
              className="img-fluid"
            />
          </div>
          <div className="col p-5">
            <img
              src="./public/images/photos-de-moi/moi-2.jpg"
              alt="test"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact