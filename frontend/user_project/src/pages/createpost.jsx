import axios from 'axios'

import {useNavigate} from 'react-router-dom'

const Createpost = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        e.target.querySelector('button[type="submit"]').textContent = 'Submitting...'; // Change button text to "Submitting..." when the form is submitted


        const formData = new FormData(e.target); // a formdata object is created from the form element. This object contains all the form data in key-value pairs, where the keys are the names of the form fields and the values are the values entered by the user.

        const response = await axios.post('http://localhost:3000/create-posts', formData)

        const data=await response.data

        console.log('POST /create-posts response:', data);

        e.target.reset(); // Reset the form fields after successful submission

        e.target.querySelector('button[type="submit"]').textContent = 'Submit'; // Change button text back to "Submit" after successful submission
        navigate('/feed'); // Navigate to the posts page after successful submission
    };

  return (
    <section className='create-post-section'>
        <h1>Create post</h1>

        <form onSubmit={handleSubmit}>
            <input type='file' name='image' accept='image' />
            <input type='text' name='caption' placeholder='Enter a caption' required />
            <button type='submit'>Submit</button>
        </form>





    </section>
  )
}

export default Createpost