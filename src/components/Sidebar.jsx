import { NavLink, useNavigate } from "react-router-dom";
import {
    Bot,
    Clock3,
    LayoutDashboard,
    Settings,
    UserRound,
    LogOut,
    Sparkles,
} from "lucide-react";

function Sidebar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("aivoraLoggedIn");
        navigate("/login");
    };

    const links = [
        { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
        { to: "/dashboard/agent", label: "AI Agent", icon: Bot },
        { to: "/dashboard/history", label: "History", icon: Clock3 },
        { to: "/dashboard/profile", label: "Profile", icon: UserRound },
        { to: "/dashboard/settings", label: "Settings", icon: Settings },
    ];

    return (
        <aside className="dashboard-sidebar">

            <div className="sidebar-brand">
                <div className="sidebar-brand-icon">
                    <Sparkles size={18} />
                </div>

                <div>
                    <strong>Aivora</strong>
                    <small>AI WORKSPACE</small>
                </div>
            </div>

            <div className="sidebar-title">WORKSPACE</div>

            <nav className="sidebar-nav">
                {links.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `sidebar-link ${isActive ? "active" : ""}`
                            }
                        >
                            <Icon size={18} />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="sidebar-bottom">

                <div className="agent-status">
                    <div className="status-icon">
                        <Bot size={17} />
                    </div>

                    <div>
                        <strong>Agent Online</strong>
                        <span>
                            <i></i>
                            Ready to help
                        </span>
                    </div>
                </div>

                <button className="logout-button" onClick={logout}>
                    <LogOut size={17} />
                    Sign out
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;