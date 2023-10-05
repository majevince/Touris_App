import React, { useState } from 'react';

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    // Define form fields here
    name: '',
    email: '',
    // Add more fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Add more form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IntakeForm;




// import React, { useState } from 'react';
// // import './IntakeForm.css'; // Import the CSS file for styling

// function IntakeForm() {
//   // Define state variables to store user inputs
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can perform actions with the collected data here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);

//     // Clear the form fields
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className="intake-form">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default IntakeForm;