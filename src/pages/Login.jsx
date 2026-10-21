import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Bot,
    Eye,
    EyeOff,
    Sparkles,
    Mail,
    Lock,
} from "lucide-react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        // Check saved user credentials
        const savedUser = JSON.parse(
            localStorage.getItem("aivoraUser") || "null"
        );

        if (!savedUser) {
            setError("Account not found. Please create an account first.");
            return;
        }

        if (
            savedUser.email !== email.trim().toLowerCase() ||
            savedUser.password !== password
        ) {
            setError("Invalid email or password. Please try again.");
            return;
        }

        localStorage.setItem("aivoraLoggedIn", "true");
        navigate("/dashboard");
    };

    return (
        <div className="auth-page">
            <Link to="/" className="auth-brand">
                <div className="logo-mark">
                    <Sparkles size={18} />
                </div>
                <span>Aivora</span>
                <small>AI</small>
            </Link>

            <div className="auth-card">
                <div className="auth-icon">
                    <Bot size={25} />
                </div>

                <h1>Welcome back</h1>
                <p>Sign in to continue to your AI workspace.</p>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email address</label>

                    <div className="auth-input-wrapper">
                        <Mail size={18} />
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="password-label">
                        <label htmlFor="password">Password</label>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                    <div className="auth-input-wrapper">
                        <Lock size={18} />

                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {error && (
                        <div className="auth-error" role="alert">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="auth-submit">
                        Sign In <ArrowRight size={17} />
                    </button>
                </form>

                <div className="auth-divider">
                    <span>or</span>
                </div>

                <p className="auth-switch">
                    Don't have an account? <Link to="/signup">Create one</Link>
                </p>
            </div>

            <span className="auth-footer">© 2026 Aivora AI · Built for creativity</span>
        </div>
    );
}

export default Login;