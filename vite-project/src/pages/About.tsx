import React from 'react'

const About = () => {
  return (
    <>
      <div className="container-fluid px-5">
        <h2 className="fade-in-down">À propos</h2>

        <div className="row my-5" style={{ height: "50vh" }}>
          <div className="col-2">
            <img
              src="./public/images/photos-de-moi/moi-petit.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About