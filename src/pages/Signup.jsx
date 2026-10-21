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
    User,
} from "lucide-react";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setError("");

        const normalizedEmail = email.trim().toLowerCase();

        // Password validation
        if (password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        // Check whether an account already exists
        const savedUser = JSON.parse(
            localStorage.getItem("aivoraUser") || "null"
        );

        if (savedUser && savedUser.email === normalizedEmail) {
            setError("An account with this email already exists. Please sign in.");
            return;
        }

        // Save demo account
        const newUser = {
            name: name.trim(),
            email: normalizedEmail,
            password: password,
        };

        localStorage.setItem("aivoraUser", JSON.stringify(newUser));
        localStorage.setItem("aivoraLoggedIn", "true");

        // Open dashboard after signup
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

                <h1>Create your account</h1>
                <p>Start your journey with your personal AI workspace.</p>

                <form onSubmit={handleSignup}>
                    <label htmlFor="name">Full Name</label>

                    <div className="auth-input-wrapper">
                        <User size={18} />
                        <input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            required
                        />
                    </div>

                    <label htmlFor="email">Email Address</label>

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

                    <label htmlFor="password">Password</label>

                    <div className="auth-input-wrapper">
                        <Lock size={18} />

                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="At least 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                            minLength={8}
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
                        Create Account <ArrowRight size={17} />
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>

            <span className="auth-footer">
                © 2026 Aivora AI · Built for creativity
            </span>
        </div>
    );
}

export default Signup;