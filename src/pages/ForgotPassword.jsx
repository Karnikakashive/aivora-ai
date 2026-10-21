import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Sparkles } from "lucide-react";

function ForgotPassword() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Password reset link sent!");
    };

    return (
        <div className="auth-page">
            <div className="auth-brand">
                <div className="logo-mark"><Sparkles size={18} /></div>
                <span>Aivora</span>
                <small>AI</small>
            </div>

            <div className="auth-card">
                <div className="auth-icon">
                    <Mail size={25} />
                </div>

                <h1>Forgot password?</h1>
                <p>Enter your email and we'll send you a reset link.</p>

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        required
                    />

                    <button className="auth-submit">
                        Send Reset Link
                    </button>
                </form>

                <Link className="back-login" to="/login">
                    <ArrowLeft size={15} /> Back to login
                </Link>
            </div>

            <span className="auth-footer">© 2026 Aivora AI</span>
        </div>
    );
}

export default ForgotPassword;