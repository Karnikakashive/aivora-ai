import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    Sparkles,
    ArrowUp,
    Plus,
    MessageSquare,
    Code2,
    Lightbulb,
    Copy,
    Check,
    Menu,
    X,
    Bot,
    User,
    PanelLeftClose,
} from "lucide-react";

function Chat() {
    const navigate = useNavigate();

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    const startNewChat = () => {
        setMessages([]);
        setInput("");
        setLoading(false);
        inputRef.current?.focus();
    };

    // Demo response for testing the interface.
    // Real AI responses will be connected through a backend later.
    const getDemoResponse = (message) => {
        const text = message.toLowerCase();

        if (text.includes("hello") || text.includes("hi")) {
            return "Hey there! 👋 Welcome to Aivora AI. I'm your AI assistant, ready to help you brainstorm, learn, write, and create. What would you like to explore today?";
        }

        if (
            text.includes("javascript") ||
            text.includes("react") ||
            text.includes("coding") ||
            text.includes("code")
        ) {
            return "Great question! 💻\n\nWhen learning programming, try breaking a problem into three parts:\n\n1. Understand the problem and expected output.\n2. Write the logic in simple steps before coding.\n3. Test your solution with a small example.\n\nTell me the specific concept or code you're working on, and I can help you understand it step by step.";
        }

        if (
            text.includes("idea") ||
            text.includes("project")
        ) {
            return "Let's turn your idea into something real! ✨\n\nA good project starts with:\n\n1. A clearly defined problem.\n2. A specific group of users.\n3. A practical solution.\n4. A simple prototype to test your idea.\n\nTell me your domain and interests, and we can brainstorm a suitable project together.";
        }

        if (
            text.includes("write") ||
            text.includes("email") ||
            text.includes("blog")
        ) {
            return "I'd be happy to help you write something! ✍️\n\nTell me three things:\n\n1. What do you want to write?\n2. Who is the audience?\n3. What tone do you prefer — professional, friendly, creative, or formal?\n\nWe can then shape the content to match your needs.";
        }

        return "Thanks for your message! ✨\n\nThis is Aivora AI's demo mode. The chat interface is working, but real AI responses haven't been connected yet.\n\nOnce we integrate an AI API through a secure backend, I'll be able to generate responses tailored to your questions.";
    };

    const sendMessage = async (text = input) => {
        const trimmedMessage = text.trim();

        if (!trimmedMessage || loading) {
            return;
        }

        const userMessage = {
            role: "user",
            content: trimmedMessage,
        };

        setMessages((previous) => [...previous, userMessage]);
        setInput("");
        setLoading(true);

        // Temporary demo response.
        // We will replace this with a real backend API call later.
        window.setTimeout(() => {
            const response = getDemoResponse(trimmedMessage);

            setMessages((previous) => [
                ...previous,
                {
                    role: "assistant",
                    content: response,
                },
            ]);

            setLoading(false);
        }, 800);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    const handleCopy = async (content, index) => {
        try {
            await navigator.clipboard.writeText(content);
            setCopiedIndex(index);

            window.setTimeout(() => {
                setCopiedIndex(null);
            }, 1500);
        } catch {
            alert("Unable to copy this response.");
        }
    };

    const suggestions = [
        {
            icon: Code2,
            title: "Explain a coding concept",
            prompt: "Explain JavaScript promises in simple words.",
        },
        {
            icon: Lightbulb,
            title: "Brainstorm project ideas",
            prompt: "Suggest innovative AI project ideas for students.",
        },
        {
            icon: MessageSquare,
            title: "Help me write something",
            prompt: "Help me write a professional email.",
        },
    ];

    return (
        <div className="aivora-chat">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <button
                    className="chat-backdrop"
                    aria-label="Close sidebar"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`chat-sidebar ${sidebarOpen ? "chat-sidebar-open" : ""
                    }`}
            >
                <div className="chat-sidebar-header">
                    <button
                        className="chat-brand"
                        onClick={() => navigate("/dashboard")}
                    >
                        <span className="chat-brand-icon">
                            <Sparkles size={19} />
                        </span>

                        <span>
                            Aivora <small>AI</small>
                        </span>
                    </button>

                    <button
                        className="chat-icon-button sidebar-close"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                    >
                        <X size={19} />
                    </button>
                </div>

                <button
                    className="new-chat-button"
                    onClick={startNewChat}
                >
                    <Plus size={18} />
                    New chat
                </button>

                <div className="chat-sidebar-label">
                    YOUR WORKSPACE
                </div>

                <button
                    className="chat-sidebar-link active"
                    onClick={startNewChat}
                >
                    <MessageSquare size={17} />
                    AI Chat
                </button>

                <button
                    className="chat-sidebar-link"
                    onClick={() => navigate("/dashboard")}
                >
                    <PanelLeftClose size={17} />
                    Back to dashboard
                </button>

                <div className="chat-sidebar-bottom">
                    <div className="chat-plan-card">
                        <div className="chat-plan-icon">
                            <Sparkles size={17} />
                        </div>

                        <strong>Your creative space</strong>

                        <p>
                            Explore your ideas with Aivora AI.
                        </p>
                    </div>

                    <button
                        className="chat-sidebar-link"
                        onClick={() => {
                            localStorage.removeItem("aivoraLoggedIn");
                            navigate("/login");
                        }}
                    >
                        <User size={17} />
                        Sign out
                    </button>
                </div>
            </aside>

            {/* Main chat area */}
            <main className="chat-main">
                <header className="chat-topbar">
                    <div className="chat-topbar-left">
                        <button
                            className="chat-icon-button"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-label="Toggle sidebar"
                        >
                            {sidebarOpen ? (
                                <PanelLeftClose size={19} />
                            ) : (
                                <Menu size={20} />
                            )}
                        </button>

                        <div className="chat-model-name">
                            <span>Aivora Assistant</span>

                            <span className="chat-demo-badge">
                                DEMO
                            </span>
                        </div>
                    </div>

                    <button
                        className="chat-dashboard-button"
                        onClick={() => navigate("/dashboard")}
                    >
                        Dashboard
                    </button>
                </header>

                <div className="chat-content">
                    {messages.length === 0 ? (
                        <section className="chat-welcome">
                            <div className="chat-welcome-icon">
                                <Sparkles size={27} />
                            </div>

                            <div className="chat-welcome-eyebrow">
                                YOUR AI, YOUR POSSIBILITIES
                            </div>

                            <h1>
                                What can I help you
                                <br />
                                <span>create today?</span>
                            </h1>

                            <p>
                                Ask questions, explore ideas, understand code,
                                or turn your thoughts into something amazing.
                            </p>

                            <div className="chat-suggestions">
                                {suggestions.map((suggestion) => {
                                    const Icon = suggestion.icon;

                                    return (
                                        <button
                                            key={suggestion.title}
                                            className="chat-suggestion-card"
                                            onClick={() =>
                                                sendMessage(suggestion.prompt)
                                            }
                                        >
                                            <Icon size={20} />

                                            <span>{suggestion.title}</span>

                                            <ArrowUp
                                                size={16}
                                                className="suggestion-arrow"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </section>
                    ) : (
                        <section className="chat-messages">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`chat-message ${message.role === "user"
                                            ? "user-message"
                                            : "assistant-message"
                                        }`}
                                >
                                    <div className="chat-message-avatar">
                                        {message.role === "user" ? (
                                            <User size={18} />
                                        ) : (
                                            <Sparkles size={18} />
                                        )}
                                    </div>

                                    <div className="chat-message-body">
                                        <div className="chat-message-author">
                                            {message.role === "user"
                                                ? "You"
                                                : "Aivora"}
                                        </div>

                                        <div className="chat-message-text">
                                            {message.content}
                                        </div>

                                        {message.role === "assistant" && (
                                            <button
                                                className="chat-copy-button"
                                                onClick={() =>
                                                    handleCopy(message.content, index)
                                                }
                                            >
                                                {copiedIndex === index ? (
                                                    <Check size={15} />
                                                ) : (
                                                    <Copy size={15} />
                                                )}

                                                {copiedIndex === index
                                                    ? "Copied"
                                                    : "Copy response"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="chat-message assistant-message">
                                    <div className="chat-message-avatar">
                                        <Sparkles size={18} />
                                    </div>

                                    <div className="chat-message-body">
                                        <div className="chat-message-author">
                                            Aivora
                                        </div>

                                        <div className="chat-typing">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </section>
                    )}
                </div>

                <div className="chat-composer-area">
                    <form
                        className="chat-composer"
                        onSubmit={handleSubmit}
                    >
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (
                                    e.key === "Enter" &&
                                    !e.shiftKey &&
                                    !e.nativeEvent.isComposing
                                ) {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }
                            }}
                            placeholder="Message Aivora..."
                            rows={1}
                            aria-label="Message Aivora"
                        />

                        <button
                            type="submit"
                            className="chat-send-button"
                            disabled={!input.trim() || loading}
                            aria-label="Send message"
                        >
                            <ArrowUp size={19} />
                        </button>
                    </form>

                    <p className="chat-disclaimer">
                        Aivora AI Demo · Responses are predefined, not generated by a live AI model.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Chat;