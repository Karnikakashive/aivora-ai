import { useState } from "react";
import { Link } from "react-router-dom";

import {
    ArrowRight,
    ArrowUpRight,
    Sparkles,
    Menu,
    X,
    Check,
    MessageSquare,
    Image as ImageIcon,
    Code2,
    FileText,
    Mail,
    PenTool,
    Zap,
    ShieldCheck,
    Send,
    LayoutDashboard,
    History,
    Settings,
    ChevronDown,
    ChevronUp,
    Play,
    BrainCircuit,
} from "lucide-react";

// FEATURES DATA
const features = [
    {
        icon: MessageSquare,
        title: "AI Chat Assistant",
        description:
            "Explore ideas, ask questions, and get helpful answers to move your work forward.",
    },
    {
        icon: ImageIcon,
        title: "Image Studio",
        description:
            "Explore visual ideas, creative concepts, and inspiration for your next project.",
    },
    {
        icon: Code2,
        title: "Code Generator",
        description:
            "Understand programming concepts and get help while building your next project.",
    },
    {
        icon: FileText,
        title: "Smart Summarizer",
        description:
            "Turn long documents and notes into concise summaries that are easier to understand.",
    },
    {
        icon: Mail,
        title: "Email Assistant",
        description:
            "Draft professional emails and express your thoughts with greater confidence.",
    },
    {
        icon: PenTool,
        title: "Content Writer",
        description:
            "Organize your thoughts and develop ideas for blogs, articles, and creative content.",
    },
];

// HOW IT WORKS DATA
const steps = [
    {
        number: "01",
        title: "Choose your tool",
        description:
            "Select a workspace tool that fits your task, from coding and writing to creative exploration.",
    },
    {
        number: "02",
        title: "Share your idea",
        description:
            "Describe your goal or question so you can start working toward a useful result.",
    },
    {
        number: "03",
        title: "Create something great",
        description:
            "Review the suggestions, refine your ideas, and turn them into meaningful work.",
    },
];

// PRICING DATA
const plans = [
    {
        name: "Starter",
        description: "A simple starting point for everyday ideas.",
        price: "Free",
        badge: "",
        features: [
            "AI workspace preview",
            "Basic writing assistance",
            "Personal workspace",
            "Beginner-friendly experience",
        ],
    },
    {
        name: "Creator",
        description: "For students, creators, and ambitious builders.",
        price: "Coming soon",
        badge: "POPULAR",
        features: [
            "Everything in Starter",
            "More creative workflows",
            "Advanced productivity tools",
            "Expanded usage options",
        ],
    },
    {
        name: "Team",
        description: "A shared space for bigger ideas.",
        price: "Coming soon",
        badge: "",
        features: [
            "Everything in Creator",
            "Team-oriented workflows",
            "Shared productivity space",
            "Collaboration features",
        ],
    },
];

// FAQ DATA
const questions = [
    {
        question: "What is Aivora AI?",
        answer:
            "Aivora AI is an AI-powered workspace concept that brings writing, coding, summarization, and creative tools together in one place.",
    },
    {
        question: "Who can use Aivora AI?",
        answer:
            "Students, developers, creators, professionals, and curious learners can explore the workspace and discover ways to improve their productivity.",
    },
    {
        question: "Do I need coding experience?",
        answer:
            "No. Writing and summarization tools can support beginners, while coding assistance can help developers learn and build projects.",
    },
    {
        question: "Are paid plans available?",
        answer:
            "The Creator and Team plans are currently presented as coming soon. The pricing section is a design preview, not a live subscription system.",
    },
    {
        question: "Can AI make mistakes?",
        answer:
            "Yes. AI-generated content can be inaccurate. Review important information, verify facts, and test generated code before using it.",
    },
];

// BRAND
function Brand() {
    return (
        <span className="brand">
            <span className="brand-mark">
                <Sparkles size={19} />
            </span>

            <span>
                Aivora<span className="brand-ai"> AI</span>
            </span>
        </span>
    );
}

// NAVBAR
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link
                    to="/"
                    className="navbar-brand-link"
                    aria-label="Aivora AI home"
                    onClick={closeMenu}
                >
                    <Brand />
                </Link>

                <nav
                    className={`nav-links ${menuOpen ? "open" : ""}`}
                    aria-label="Main navigation"
                >
                    <a href="#features" onClick={closeMenu}>
                        Features
                    </a>

                    <a href="#how-it-works" onClick={closeMenu}>
                        How it works
                    </a>

                    <a href="#pricing" onClick={closeMenu}>
                        Pricing
                    </a>

                    <a href="#faq" onClick={closeMenu}>
                        FAQ
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>

                <div className="nav-actions">
                    <Link to="/login" className="nav-login">
                        Log in
                    </Link>

                    <Link to="/signup" className="primary-button nav-signup">
                        Get started
                        <ArrowUpRight size={16} />
                    </Link>

                    <button
                        className="mobile-menu-button"
                        type="button"
                        aria-label={
                            menuOpen ? "Close navigation" : "Open navigation"
                        }
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

// AI WORKSPACE PREVIEW
function WorkspacePreview() {
    return (
        <div className="hero-visual">
            <div className="workspace-window">
                <div className="window-topbar">
                    <div className="window-dots">
                        <span />
                        <span />
                        <span />
                    </div>

                    <span className="window-title">
                        Aivora Workspace
                    </span>

                    <div style={{ width: 30 }} />
                </div>

                <div className="window-content">
                    <aside className="workspace-sidebar">
                        <p className="sidebar-label">WORKSPACE</p>

                        <div className="sidebar-item active">
                            <LayoutDashboard size={14} />
                            <span>Overview</span>
                        </div>

                        <div className="sidebar-item">
                            <MessageSquare size={14} />
                            <span>AI Chat</span>
                        </div>

                        <div className="sidebar-item">
                            <ImageIcon size={14} />
                            <span>Images</span>
                        </div>

                        <div className="sidebar-item">
                            <Code2 size={14} />
                            <span>Coding</span>
                        </div>

                        <div className="sidebar-item">
                            <History size={14} />
                            <span>History</span>
                        </div>

                        <div className="sidebar-item">
                            <Settings size={14} />
                            <span>Settings</span>
                        </div>
                    </aside>

                    <div className="workspace-main">
                        <div className="workspace-welcome">
                            <span className="section-label">
                                YOUR CREATIVE SPACE
                            </span>

                            <p className="workspace-greeting">
                                Let's create something.
                            </p>

                            <p className="workspace-subtitle">
                                Your ideas have a place to grow.
                            </p>
                        </div>

                        <div className="prompt-card">
                            <div className="prompt-label">
                                <Sparkles size={15} />
                                YOUR NEXT BIG IDEA
                            </div>

                            <p className="prompt-text">
                                Help me create a project plan for a creative
                                portfolio website with a modern, minimal design.
                            </p>

                            <div className="prompt-bottom">
                                <span className="prompt-chip">
                                    <Sparkles size={12} />
                                    Creative mode
                                </span>

                                <button
                                    className="prompt-send"
                                    type="button"
                                    aria-label="Example send button"
                                    title="Workspace preview"
                                >
                                    <Send size={15} />
                                </button>
                            </div>
                        </div>

                        <div className="workspace-result">
                            <div className="result-icon">
                                <BrainCircuit size={18} />
                            </div>

                            <div>
                                <p className="result-title">
                                    Your ideas, organized.
                                </p>

                                <p className="result-description">
                                    Explore possibilities, organize your goals,
                                    and start building with confidence.
                                </p>
                            </div>
                        </div>

                        <div className="workspace-bottom-note">
                            <ShieldCheck size={14} />
                            A little more clarity. A lot more creativity.
                        </div>
                    </div>
                </div>
            </div>

            <div className="floating-tag floating-tag-one">
                <div className="floating-tag-icon">
                    <Zap size={19} />
                </div>

                <div>
                    <strong>One smart workspace</strong>
                    <small>Less switching, more creating</small>
                </div>
            </div>

            <div className="floating-tag floating-tag-two">
                <div className="floating-tag-icon">
                    <BrainCircuit size={19} />
                </div>

                <div>
                    <strong>Ideas into action</strong>
                    <small>Make room for your next big thing</small>
                </div>
            </div>
        </div>
    );
}

// HERO SECTION
function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <div className="hero-badge">
                        <Sparkles size={15} />

                        <span>
                            YOUR IDEAS, WITH A LITTLE MORE INTELLIGENCE
                        </span>
                    </div>

                    <h1 className="hero-title">
                        Your ideas deserve <span>better tools.</span>
                    </h1>

                    <p className="hero-description">
                        One workspace to think, create, build, and bring your
                        ideas to life with AI. Less busywork, more room for
                        what matters.
                    </p>

                    <div className="hero-actions">
                        <Link to="/signup" className="primary-button">
                            Explore Aivora
                            <ArrowRight size={17} />
                        </Link>

                        <a href="#features" className="secondary-button">
                            <Play size={15} />
                            Discover the tools
                        </a>
                    </div>

                    <div className="hero-note">
                        <ShieldCheck size={17} />

                        <span>
                            Built for curious minds, creative thinkers,
                            and everyday builders.
                        </span>
                    </div>

                    <div className="hero-mini-stats">
                        <div className="mini-stat">
                            <strong>06</strong>
                            <span>Creative tools</span>
                        </div>

                        <div className="mini-stat-divider" />

                        <div className="mini-stat">
                            <strong>01</strong>
                            <span>Unified workspace</span>
                        </div>

                        <div className="mini-stat-divider" />

                        <div className="mini-stat">
                            <strong>∞</strong>
                            <span>Ideas to explore</span>
                        </div>
                    </div>
                </div>

                <WorkspacePreview />
            </div>
        </section>
    );
}

// TRUSTED AUDIENCE STRIP
function TrustedStrip() {
    return (
        <section className="trusted-strip">
            <div className="container trusted-inner">
                <p className="trusted-caption">
                    A WORKSPACE FOR EVERY KIND OF THINKER
                </p>

                <span className="trusted-name">THE STUDENT</span>
                <span className="trusted-name">THE CREATOR</span>
                <span className="trusted-name">THE DEVELOPER</span>
                <span className="trusted-name">THE DREAMER</span>
            </div>
        </section>
    );
}

// FEATURES SECTION
function Features() {
    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="section-top">
                    <div>
                        <span className="section-label">
                            MADE TO MAKE THINGS EASIER
                        </span>

                        <h2 className="section-heading">
                            Everything you need to get from idea to done.
                        </h2>
                    </div>

                    <p className="section-description">
                        Your everyday creative and productivity tools,
                        brought together in one thoughtfully designed
                        workspace.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                className="feature-card"
                                key={feature.title}
                            >
                                <div className="feature-card-top">
                                    <div className="feature-icon">
                                        <Icon size={23} />
                                    </div>

                                    <span className="feature-number">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                                <Link
                                    to="/signup"
                                    className="feature-link"
                                >
                                    Explore tool
                                    <ArrowRight size={15} />
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// HOW IT WORKS SECTION
function HowItWorks() {
    return (
        <section className="section how-section" id="how-it-works">
            <div className="container">
                <div className="how-heading">
                    <span className="section-label">
                        SIMPLE BY DESIGN
                    </span>

                    <h2 className="section-heading">
                        Big ideas don't need complicated workflows.
                    </h2>

                    <p className="section-description">
                        Start with what you want to achieve. Let your workspace
                        help you organize the next steps.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step) => (
                        <article
                            className="step-card"
                            key={step.number}
                        >
                            <span className="step-number">
                                {step.number}
                            </span>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                            <div className="step-decoration">
                                <ArrowRight size={18} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// PRICING SECTION
function Pricing() {
    return (
        <section className="section pricing-section" id="pricing">
            <div className="container">
                <div className="pricing-heading">
                    <span className="section-label">
                        STRAIGHTFORWARD PLANS
                    </span>

                    <h2 className="section-heading">
                        Start small. Think bigger.
                    </h2>

                    <p className="section-description">
                        Explore the planned Aivora experience and find the
                        tier that fits your workflow.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <article
                            className={`pricing-card ${plan.badge ? "featured" : ""
                                }`}
                            key={plan.name}
                        >
                            {plan.badge && (
                                <span className="pricing-badge">
                                    {plan.badge}
                                </span>
                            )}

                            <h3 className="pricing-name">
                                {plan.name}
                            </h3>

                            <p className="pricing-description">
                                {plan.description}
                            </p>

                            <div className="pricing-price">
                                {plan.price}

                                {plan.price === "Free" && (
                                    <span> / to get started</span>
                                )}
                            </div>

                            <ul className="pricing-features">
                                {plan.features.map((item) => (
                                    <li key={item}>
                                        <Check size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/signup"
                                className={
                                    plan.badge
                                        ? "primary-button"
                                        : "secondary-button"
                                }
                            >
                                {plan.price === "Free"
                                    ? "Get started free"
                                    : "Join the journey"}

                                <ArrowRight size={15} />
                            </Link>
                        </article>
                    ))}
                </div>

                <p className="pricing-disclaimer">
                    Creator and Team plans are planned features. No paid
                    subscription is being offered through this preview.
                </p>
            </div>
        </section>
    );
}

// FAQ SECTION
function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section faq-section" id="faq">
            <div className="container faq-grid">
                <div className="faq-intro">
                    <span className="section-label">
                        QUESTIONS, ANSWERED
                    </span>

                    <h2 className="section-heading">
                        A few things you might be wondering.
                    </h2>

                    <p className="section-description">
                        Still curious? Here are some useful details about
                        the Aivora workspace.
                    </p>
                </div>

                <div className="faq-list">
                    {questions.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                className="faq-item"
                                key={item.question}
                            >
                                <button
                                    type="button"
                                    className="faq-question"
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? -1 : index
                                        )
                                    }
                                >
                                    <span>{item.question}</span>

                                    {isOpen ? (
                                        <ChevronUp size={19} />
                                    ) : (
                                        <ChevronDown size={19} />
                                    )}
                                </button>

                                {isOpen && (
                                    <p className="faq-answer">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// CONTACT SECTION
function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-box">
                    <div className="contact-copy">
                        <span className="section-label">
                            YOUR NEXT CHAPTER STARTS HERE
                        </span>

                        <h2>
                            Make a little more room for what you can create.
                        </h2>

                        <p>
                            Your next idea might be the one that changes
                            everything. Give it a place to begin.
                        </p>
                    </div>

                    <Link
                        to="/signup"
                        className="primary-button"
                    >
                        Get started
                        <ArrowUpRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// FOOTER
function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <Link
                    to="/"
                    aria-label="Aivora AI home"
                >
                    <Brand />
                </Link>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Aivora AI.
                    Made for curious minds.
                </p>

                <div className="footer-links">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </footer>
    );
}

// MAIN LANDING PAGE
export default function Landing() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <TrustedStrip />
                <Features />
                <HowItWorks />
                <Pricing />
                <FAQ />
                <Contact />
            </main>

            <Footer />
        </>
    );
}