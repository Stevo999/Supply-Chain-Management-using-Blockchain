import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const redirect_to_roles = () => {
    history.push('/roles');
  };
  const redirect_to_addmed = () => {
    history.push('/addmed');
  };
  const redirect_to_supply = () => {
    history.push('/supply');
  };
  const redirect_to_track = () => {
    history.push('/track');
  };

  const buttonStyle = {
    margin: '0.5rem',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#3498db', // Change this to the desired button color
    color: '#ffffff', // Change this to the desired text color within the button
    border: '1px solid #3498db', // Adjust the border color if needed
  };

  const containerStyle = {
    padding: '2rem',
    backgroundImage: 'url("/back1.png")', // Add the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff', // Adjust text color to be visible against the background
  };

  const trackContainerStyle = {
    padding: '2rem',
    backgroundImage: 'url("/back1.png")', // Add the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff', // Adjust text color to be visible against the background
    marginTop: '2rem', // Adjust the margin as needed
  };

  return (
    <div>
      <div style={containerStyle}>
        <h3>Supply Chain Flow for Pharmaceutical </h3>
        <br />
        <h6>(Note: Here <u>Owner</u> is the person who deployed the smart contract on the blockchain)</h6>
        <h5>Owner Should Register Mustmaterial suppliers, Manufacturers, Distributors and Retailers</h5>
        <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm" style={buttonStyle}>
          Register
        </button>
        <br />
        <h5> Owner must order medicines</h5>
        <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm" style={buttonStyle}>
          Order Medicines
        </button>
        <br />
        <h5>Control Supply Chain</h5>
        <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm" style={buttonStyle}>
          Control Supply Chain
        </button>
        <br />
        <hr />
      </div>

      <div style={trackContainerStyle}>
        <h5>
          <b>Track</b> the medicines:
        </h5>
        <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm" style={buttonStyle}>
          Track Medicines
        </button>
      </div>
    </div>
  );
}

export default Home;
