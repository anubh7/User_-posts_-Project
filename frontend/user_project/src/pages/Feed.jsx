import { useState,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
            caption: 'A quiet morning in the mountains.'
        }
    ])
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:3000/get-posts')
            console.log('GET /get-posts response:', response.data)
            setPosts(response.data.posts)
        }

        fetchPosts()
    }, [])

    return (
        <section className='feed-section'>
            <header className='feed-header'>
                <p className='eyebrow'>Community feed</p>
                <h1>Discover posts</h1>
                <p>See what people are sharing with the community.</p>
            </header>

            <div className='post-card-container'>
                {
                    posts.map(post => (
                        <div key={post._id ?? post.id} className='post'>
                            <img
                                src={post.image}
                                alt={`Post ${post._id ?? post.id}`}
                                className='post-image'
                                onClick={() => setSelectedPost(post)}
                            />
                            <p>{post.caption}</p>
                        </div>
                    ))
                }
            </div>

            {selectedPost && (
                <div className='image-modal' role='dialog' aria-modal='true' onClick={() => setSelectedPost(null)}>
                    <div className='image-modal-content' onClick={(event) => event.stopPropagation()}>
                        <button className='image-modal-close' type='button' onClick={() => setSelectedPost(null)} aria-label='Close image'>
                            &times;
                        </button>
                        <img src={selectedPost.image} alt={`Post ${selectedPost._id ?? selectedPost.id}`} />
                        <p>{selectedPost.caption}</p>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Feed