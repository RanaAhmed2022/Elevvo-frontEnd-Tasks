function App() {
    React.useEffect(() => {
        const sections = document.querySelectorAll("section");
        const onScroll = () => {
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                sec.classList.add("visible");
                }
            });
        };
        window.addEventListener("scroll", onScroll);
        onScroll(); // trigger on load
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <header>
                <h1>TaskFlow</h1>
                <p>Organize your tasks and boost your productivity</p>
                <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
                Get Started
                </button>
            </header>

            {/* Features Section */}
            <section id="features">
                <h2>Features</h2>
                <div className="features">
                    <div className="card">✅ Easy to Use</div>
                    <div className="card">📅 Smart Scheduling</div>
                    <div className="card">📊 Progress Tracking</div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews">
                <h2>What Our Users Say</h2>
                <div className="reviews">
                    <div className="card">"Amazing app! Helps me stay productive." – Sarah</div>
                    <div className="card">"I love how simple it is to manage tasks." – Ahmed</div>
                    <div className="card">"The best tool for organizing my team." – John</div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing">
                <h2>Pricing Plans</h2>
                <div className="pricing">
                    <div className="card">💡 Free – $0/month</div>
                    <div className="card">🚀 Pro – $10/month</div>
                    <div className="card">👨‍👩‍👧 Team – $25/month</div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>Contact us at: support@taskflow.com</p>
                <p>
                <a href="#">Twitter</a> | <a href="#">Facebook</a> | <a href="#">LinkedIn</a>
                </p>
            </footer>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
