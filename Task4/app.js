const { useState } = React;

const postsData = [
    { id: 1, title: "React Basics", category: "Tech", img: "https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109217/iamtimsmith/react-101-the-basics_oskpng.jpg", desc: "Learn the basics of React step by step.", date: "2025-09-01" },
    { id: 2, title: "Exploring Egypt", category: "Travel", img: "https://tse4.mm.bing.net/th/id/OIP.6aYi-D8WEi5FG4eysr1JywAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Discover the beauty of pyramids and Nile.", date: "2025-09-05" },
    { id: 3, title: "Healthy Recipes", category: "Food", img: "https://th.bing.com/th/id/R.8227b72443c0f6601b62bfbc3a2626dc?rik=ZhyqKGaQGuyqqw&riu=http%3a%2f%2fwww.bendactive.com%2fcdn%2fshop%2farticles%2fHealthy_Recipes.jpg%3fv%3d1585933764&ehk=FX6uvIUm3msWLAw%2fTJLWVtPrHGNJdhxDDczsU8wco58%3d&risl=&pid=ImgRaw&r=0", desc: "Quick and healthy meals for busy people.", date: "2025-09-08" },
    { id: 4, title: "Advanced JavaScript", category: "Tech", img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/cf04d4ad71ce.png", desc: "Deep dive into closures, async, and promises.", date: "2025-09-10" },
    { id: 5, title: "Paris Adventures", category: "Travel", img: "https://tse1.mm.bing.net/th/id/OIP.cBquYwp7sXivaxfaLu3LFQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Walking through the streets of Paris.", date: "2025-09-12" },
    { id: 6, title: "Italian Pasta", category: "Food", img: "https://tse2.mm.bing.net/th/id/OIP.j4JuzMeWp_M731iI7IqVFAHaEL?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "The secret of authentic Italian pasta.", date: "2025-09-14" },
];

function App() {
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const filteredPosts = category === "All" ? postsData : postsData.filter(post => post.category === category);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const visiblePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    return (
        <div>
            <header>
                <h1>My Blog</h1>
                <p>Welcome to my personal blog</p>
            </header>

            {/* Category Filter */}
            <div className="filter-bar">
                {["All", "Tech", "Travel", "Food"].map(cat => (
                <button 
                    key={cat} 
                    className={category === cat ? "active" : ""}
                    onClick={() => { setCategory(cat); setCurrentPage(1); }}
                >
                    {cat}
                </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="blog-grid">
                {visiblePosts.map(post => (
                <div className="blog-card" key={post.id}>
                    <img src={post.img} alt={post.title} />
                    <div className="content">
                        <h3>{post.title}</h3>
                        <p>{post.desc}</p>
                        <small>{post.date} - {post.category}</small>
                    </div>
                </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                <button 
                    key={i} 
                    className={currentPage === i + 1 ? "active" : ""} 
                    onClick={() => setCurrentPage(i + 1)}
                >
                    {i + 1}
                </button>
                ))}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
