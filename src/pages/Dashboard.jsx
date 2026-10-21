import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Sparkles,
    MessageSquare,
    Image,
    Code2,
    FileText,
    Mail,
    PenTool,
    LayoutDashboard,
    Settings,
    LogOut,
    ArrowRight,
    Search,
    Menu,
    X,
} from "lucide-react";

const aiTools = [
    {
        title: "AI Chat",
        description: "Brainstorm ideas and get instant answers.",
        icon: MessageSquare,
        color: "orange",
        path: "/chat",
    },
    {
        title: "Image Generator",
        description: "Turn your imagination into visuals.",
        icon: Image,
        color: "purple",
        path: "/image-generator",
    },
    {
        title: "Code Assistant",
        description: "Write, explain and improve your code.",
        icon: Code2,
        color: "blue",
        path: "/code-assistant",
    },
    {
        title: "Text Summarizer",
        description: "Make long documents short and clear.",
        icon: FileText,
        color: "green",
        path: "/summarizer",
    },
    {
        title: "Email Writer",
        description: "Write polished emails in seconds.",
        icon: Mail,
        color: "pink",
        path: "/email-writer",
    },
    {
        title: "Blog Writer",
        description: "Create engaging content and articles.",
        icon: PenTool,
        color: "yellow",
        path: "/blog-writer",
    },
];

function Dashboard() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const user = JSON.parse(
        localStorage.getItem("aivoraUser") || "null"
    );

    const filteredTools = aiTools.filter((tool) =>
        tool.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleLogout = () => {
        localStorage.removeItem("aivoraLoggedIn");
        navigate("/login");
    };

    return (
        <div className="dashboard-page">
            {sidebarOpen && (
                <button
                    className="sidebar-backdrop"
                    aria-label="Close menu"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className={`dashboard-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <Link to="/" className="dashboard-brand">
                    <span className="dashboard-logo">
                        <Sparkles size={20} />
                    </span>
                    <span>Aivora <small>AI</small></span>
                    <button
                        type="button"
                        className="sidebar-close"
                        aria-label="Close sidebar"
                        onClick={(e) => {
                            e.preventDefault();
                            setSidebarOpen(false);
                        }}
                    >
                        <X size={19} />
                    </button>
                </Link>

                <div className="sidebar-caption">WORKSPACE</div>

                <button className="dashboard-nav active">
                    <LayoutDashboard size={18} />
                    Dashboard
                </button>

                <div className="sidebar-caption tools-caption">AI TOOLS</div>

                {aiTools.map((tool) => {
                    const Icon = tool.icon;

                    return (
                        <button
                            key={tool.title}
                            className="dashboard-nav"
                            onClick={() => navigate(tool.path)}
                        >
                            <Icon size={18} />
                            {tool.title}
                        </button>
                    );
                })}

                <div className="sidebar-bottom">
                    <button
                        className="dashboard-nav"
                        onClick={() => navigate("/settings")}
                    >
                        <Settings size={18} />
                        Settings
                    </button>

                    <button className="dashboard-nav logout-button" onClick={handleLogout}>
                        <LogOut size={18} />
                        Sign out
                    </button>

                    <div className="sidebar-user">
                        <div className="user-avatar">
                            {(user?.name || "A").charAt(0).toUpperCase()}
                        </div>
                        <div className="user-details">
                            <strong>{user?.name || "Aivora User"}</strong>
                            <span>{user?.email || "Welcome back"}</span>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <button
                        type="button"
                        className="mobile-menu-button"
                        aria-label="Open menu"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={22} />
                    </button>

                    <div className="dashboard-breadcrumb">
                        <span>Workspace</span>
                        <span>/</span>
                        <strong>Dashboard</strong>
                    </div>

                    <div className="dashboard-header-right">
                        <span className="status-dot" />
                        <span>AI workspace</span>
                    </div>
                </header>

                <div className="dashboard-content">
                    <section className="dashboard-welcome">
                        <div>
                            <div className="dashboard-eyebrow">
                                <Sparkles size={15} />
                                YOUR PERSONAL AI WORKSPACE
                            </div>

                            <h1>
                                {user?.name
                                    ? `Hello, ${user.name.split(" ")[0]}!`
                                    : "Hello, creator!"}
                                <br />
                                <span>What are we creating today?</span>
                            </h1>

                            <p>
                                Your ideas deserve more than just an ordinary workspace.
                                Let AI help you bring them to life.
                            </p>
                        </div>

                        <div className="welcome-decoration">
                            <div className="decoration-orbit orbit-one" />
                            <div className="decoration-orbit orbit-two" />
                            <div className="decoration-center">
                                <Sparkles size={35} />
                            </div>
                        </div>
                    </section>

                    <section className="dashboard-stats">
                        <div className="stat-card">
                            <span>Available AI tools</span>
                            <strong>06</strong>
                            <small>Ready to explore</small>
                        </div>

                        <div className="stat-card">
                            <span>Your workspace</span>
                            <strong>Active</strong>
                            <small>Everything in one place</small>
                        </div>

                        <div className="stat-card">
                            <span>Creative potential</span>
                            <strong>∞</strong>
                            <small>Ideas have no limits</small>
                        </div>
                    </section>

                    <section className="dashboard-tools-section">
                        <div className="tools-heading">
                            <div>
                                <span className="section-label">EXPLORE YOUR WORKSPACE</span>
                                <h2>Your AI toolkit</h2>
                                <p>Choose a tool and turn your next idea into reality.</p>
                            </div>

                            <div className="tool-search">
                                <Search size={17} />
                                <input
                                    type="search"
                                    placeholder="Find a tool..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="dashboard-tools-grid">
                            {filteredTools.map((tool) => {
                                const Icon = tool.icon;

                                return (
                                    <button
                                        className="dashboard-tool-card"
                                        key={tool.title}
                                        onClick={() => navigate(tool.path)}
                                    >
                                        <div className={`tool-icon ${tool.color}`}>
                                            <Icon size={23} />
                                        </div>

                                        <h3>{tool.title}</h3>
                                        <p>{tool.description}</p>

                                        <span className="tool-open">
                                            Open tool <ArrowRight size={16} />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {filteredTools.length === 0 && (
                            <div className="no-tools">
                                No tools found. Try a different search.
                            </div>
                        )}
                    </section>

                    <footer className="dashboard-footer">
                        <span>© 2026 Aivora AI</span>
                        <span>Made for curious minds <Sparkles size={14} /></span>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;