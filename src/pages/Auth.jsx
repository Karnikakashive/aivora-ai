import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth({ type }) {
    const isSignup = type === "signup";
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setError("");

        const users = JSON.parse(
            localStorage.getItem("aivoraUsers") || "[]"
        );

        if (isSignup) {
            const existingUser = users.find(
                (user) => user.email.toLowerCase() === email.toLowerCase()
            );

            if (existingUser) {
                setError("An account with this email already exists.");
                return;
            }

            const newUser = {
                name,
                email,
                password,
            };

            localStorage.setItem(
                "aivoraUsers",
                JSON.stringify([...users, newUser])
            );

            localStorage.setItem("aivoraLoggedIn", "true");
            localStorage.setItem("aivoraUser", JSON.stringify({
                name,
                email,
            }));

            navigate("/");
            return;
        }

        const matchedUser = users.find(
            (user) =>
                user.email.toLowerCase() === email.toLowerCase() &&
                user.password === password
        );

        if (!matchedUser) {
            setError("Incorrect email or password. Please try again.");
            return;
        }

        localStorage.setItem("aivoraLoggedIn", "true");
        localStorage.setItem("aivoraUser", JSON.stringify({
            name: matchedUser.name,
            email: matchedUser.email,
        }));

        navigate("/");
    }

    return (
        <main className="auth-page">
            <div className="auth-decoration auth-decoration-one"></div>
            <div className="auth-decoration auth-decoration-two"></div>

            <Link to="/" className="auth-back">
                ← Back to Aivora
            </Link>

            <div className="auth-card">
                <Link to="/" className="logo auth-logo">
                    <span className="logo-icon">✦</span>
                    <span>
                        aivora<span className="logo-dot">.</span>
                    </span>
                    <span className="logo-ai">AI</span>
                </Link>

                <div className="auth-icon">✦</div>

                <h1>
                    {isSignup ? "Create your account" : "Welcome back"}
                </h1>

                <p className="auth-subtitle">
                    {isSignup
                        ? "Start your creative journey with Aivora AI."
                        : "Sign in to your creative workspace."}
                </p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                            <label htmlFor="auth-name">Full name</label>

                            <input
                                id="auth-name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </>
                    )}

                    <label htmlFor="auth-email">Email address</label>

                    <input
                        id="auth-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="auth-password">Password</label>

                    <input
                        id="auth-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        minLength={6}
                        required
                    />

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="button button-primary auth-submit">
                        {isSignup ? "Create account" : "Log in"} <span>↗</span>
                    </button>
                </form>

                <p className="auth-switch">
                    {isSignup
                        ? "Already have an account?"
                        : "Don't have an account?"}{" "}
                    <Link to={isSignup ? "/login" : "/signup"}>
                        {isSignup ? "Log in" : "Sign up"}
                    </Link>
                </p>

                <p className="auth-demo-note">
                    Demo authentication only. Do not use real passwords here. A
                    production app needs secure backend authentication.
                </p>
            </div>
        </main>
    );
}