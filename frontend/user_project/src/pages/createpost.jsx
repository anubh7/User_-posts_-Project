import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage('')

        const formData = new FormData(e.target)

        try {
            const response = await axios.post('http://localhost:3000/create-posts', formData)
            console.log('POST /create-posts response:', response.data)
            e.target.reset()
            setSelectedFile(null)
            navigate('/feed')
        } catch (error) {
            console.error('POST /create-posts failed:', error)
            setErrorMessage('Unable to publish your post. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className='create-post-section'>
            <div className='create-post-card'>
                <p className='eyebrow'>Share an update</p>
                <h1>Create a post</h1>
                <p className='form-intro'>Add an image and a caption to share something with your community.</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='image'>Image</label>
                    <input
                        id='image'
                        type='file'
                        name='image'
                        accept='image/*'
                        onChange={(event) => setSelectedFile(event.target.files[0] ?? null)}
                        required
                    />
                    {selectedFile && <span className='file-name'>{selectedFile.name}</span>}

                    <label htmlFor='caption'>Caption</label>
                    <textarea id='caption' name='caption' placeholder='What would you like to share?' required />

                    {errorMessage && <p className='form-error' role='alert'>{errorMessage}</p>}

                    <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Publish post'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Createpost
