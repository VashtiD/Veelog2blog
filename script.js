// Sample posts data
const posts = [
    {
        title: "Journey into Creativity",
        excerpt: "Discover how to unlock your creative potential with simple daily habits..."
    },
    {
        title: "Top 10 Design Tips",
        excerpt: "Enhance your projects with these essential design principles..."
    },
    {
        title: "Storytelling in the Digital Age",
        excerpt: "Learn how to craft compelling stories that resonate online..."
    },
    {
        title: "Photography Tricks",
        excerpt: "Capture stunning images with these expert tips..."
    },
    {
        title: "Mindfulness and Productivity",
        excerpt: "Boost your efficiency by practicing mindfulness..."
    },
    {
        title: "Travel Diaries",
        excerpt: "Sharing adventures from around the world..."
    },
    // Add more posts as desired
];

let currentPostIndex = 0;
const postsPerLoad = 3;

const postsContainer = document.getElementById('postsContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const readMoreBtn = document.getElementById('readMoreBtn');
const formMessage = document.getElementById('formMessage');

// Function to create a post element
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';

    const title = document.createElement('div');
    title.className = 'post-title';
    title.textContent = post.title;

    const excerpt = document.createElement('div');
    excerpt.className = 'post-excerpt';
    excerpt.textContent = post.excerpt;

    postDiv.appendChild(title);
    postDiv.appendChild(excerpt);
    return postDiv;
}

// Load initial posts
function loadPosts() {
    const nextIndex = currentPostIndex + postsPerLoad;
    const postsToLoad = posts.slice(currentPostIndex, nextIndex);
    postsToLoad.forEach(post => {
        postsContainer.appendChild(createPostElement(post));
    });
    currentPostIndex += postsPerLoad;
    if (currentPostIndex >= posts.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Event listener for Load More button
loadMoreBtn.addEventListener('click', () => {
    loadPosts();
});

// Event listener for Read More button
document.getElementById('readMoreBtn').addEventListener('click', () => {
    window.scrollTo({ top: document.querySelector('#posts').offsetTop, behavior: 'smooth' });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple form validation can be added here
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMessage.style.color = 'green';
    e.target.reset();
});

// Load initial posts on page load
window.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});
