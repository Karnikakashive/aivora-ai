import { Bell, Search } from "lucide-react";

function Topbar() {
    return (
        <header className="dashboard-topbar">

            <div className="topbar-search">
                <Search size={17} />

                <input
                    placeholder="Search your workspace..."
                />

                <span>⌘ K</span>
            </div>

            <div className="topbar-right">

                <button className="notification-button">
                    <Bell size={18} />
                    <i></i>
                </button>

                <div className="topbar-line"></div>

                <div className="topbar-profile">
                    <div className="avatar">K</div>

                    <div>
                        <strong>Karnika</strong>
                        <span>Free Plan</span>
                    </div>
                </div>

            </div>

        </header>
    );
}

export default Topbar;