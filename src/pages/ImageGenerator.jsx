import { useState } from "react";
import {
    Image as ImageIcon,
    Sparkles,
    Download,
    Clock,
    WandSparkles,
    Square,
    RectangleVertical,
    RectangleHorizontal,
    RotateCcw,
    Lightbulb,
    Palette,
} from "lucide-react";

const styles = [
    "Realistic",
    "Anime",
    "3D Art",
    "Digital Art",
    "Watercolor",
    "Minimalist",
];

const ratios = [
    { label: "Square", value: "1:1", icon: Square },
    { label: "Portrait", value: "3:4", icon: RectangleVertical },
    { label: "Landscape", value: "16:9", icon: RectangleHorizontal },
];

const examples = [
    {
        title: "Dreamy Landscape",
        prompt: "A dreamy mountain landscape at sunset",
        colors: ["#F6B66D", "#D98269", "#7A91A6"],
        emoji: "🏔️",
    },
    {
        title: "Cute Character",
        prompt: "A cute little astronaut floating in space",
        colors: ["#B8A9E8", "#E6B8D4", "#8C9EDB"],
        emoji: "👩‍🚀",
    },
    {
        title: "Modern Interior",
        prompt: "A cozy modern living room with natural light",
        colors: ["#D7B99A", "#B4C5A8", "#F1DCC4"],
        emoji: "🛋️",
    },
];

export default function ImageGenerator() {
    const [prompt, setPrompt] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("Digital Art");
    const [selectedRatio, setSelectedRatio] = useState("1:1");
    const [generatedItems, setGeneratedItems] = useState([]);
    const [message, setMessage] = useState("");

    function handleGenerate() {
        if (!prompt.trim()) {
            setMessage("Please enter a prompt to continue.");
            return;
        }

        setMessage(
            "Demo mode: AI image generation is not connected yet. Your prompt has been saved to Recent Prompts."
        );

        const newItem = {
            id: Date.now(),
            prompt: prompt.trim(),
            style: selectedStyle,
            ratio: selectedRatio,
            date: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setGeneratedItems((previous) => [newItem, ...previous].slice(0, 6));
    }

    function handleExample(examplePrompt) {
        setPrompt(examplePrompt);
        setMessage("");
    }

    function handleClear() {
        setPrompt("");
        setMessage("");
    }

    return (
        <div className="image-generator-page">
            <header className="ig-header">
                <div className="ig-heading">
                    <div className="ig-title-icon">
                        <ImageIcon size={23} />
                    </div>

                    <div>
                        <p className="ig-eyebrow">CREATIVE STUDIO</p>
                        <h1>Image Generator</h1>
                        <p className="ig-subtitle">
                            Turn your imagination into visual ideas.
                        </p>
                    </div>
                </div>

                <div className="ig-demo-badge">
                    <span></span>
                    Demo Mode
                </div>
            </header>

            <section className="ig-hero">
                <div className="ig-hero-content">
                    <div className="ig-hero-label">
                        <Sparkles size={15} />
                        YOUR CREATIVE SPACE
                    </div>

                    <h2>
                        Imagine it.
                        <br />
                        <span>Create something wonderful.</span>
                    </h2>

                    <p>
                        Describe your idea, explore different artistic styles, and prepare
                        your next creative masterpiece.
                    </p>
                </div>

                <div className="ig-hero-art" aria-hidden="true">
                    <div className="ig-art-circle ig-art-circle-one"></div>
                    <div className="ig-art-circle ig-art-circle-two"></div>
                    <div className="ig-art-sun"></div>
                    <div className="ig-art-mountain ig-mountain-one"></div>
                    <div className="ig-art-mountain ig-mountain-two"></div>
                    <div className="ig-art-cloud">✦</div>
                    <div className="ig-art-sparkle">✧</div>
                </div>
            </section>

            <div className="ig-main-grid">
                <section className="ig-panel ig-prompt-panel">
                    <div className="ig-section-heading">
                        <div>
                            <h3>Describe your vision</h3>
                            <p>Give your imagination a little direction.</p>
                        </div>

                        <WandSparkles size={21} />
                    </div>

                    <label className="ig-label" htmlFor="ig-prompt">
                        YOUR PROMPT
                    </label>

                    <textarea
                        id="ig-prompt"
                        className="ig-prompt-input"
                        placeholder="A tiny cottage in a magical forest, glowing fireflies, soft moonlight, dreamy atmosphere..."
                        value={prompt}
                        onChange={(event) => {
                            setPrompt(event.target.value);
                            setMessage("");
                        }}
                        maxLength={1000}
                    />

                    <div className="ig-prompt-footer">
                        <span>Be descriptive for better creative direction.</span>
                        <span>{prompt.length}/1000</span>
                    </div>

                    <div className="ig-divider"></div>

                    <div className="ig-option-group">
                        <div className="ig-option-heading">
                            <Palette size={17} />
                            <span>Art style</span>
                        </div>

                        <div className="ig-style-options">
                            {styles.map((style) => (
                                <button
                                    type="button"
                                    key={style}
                                    className={`ig-style-chip ${selectedStyle === style ? "active" : ""
                                        }`}
                                    onClick={() => setSelectedStyle(style)}
                                >
                                    {style}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ig-option-group">
                        <div className="ig-option-heading">
                            <ImageIcon size={17} />
                            <span>Aspect ratio</span>
                        </div>

                        <div className="ig-ratio-options">
                            {ratios.map((ratio) => {
                                const RatioIcon = ratio.icon;

                                return (
                                    <button
                                        type="button"
                                        key={ratio.value}
                                        className={`ig-ratio-card ${selectedRatio === ratio.value ? "active" : ""
                                            }`}
                                        onClick={() => setSelectedRatio(ratio.value)}
                                    >
                                        <RatioIcon size={21} />
                                        <span>{ratio.label}</span>
                                        <small>{ratio.value}</small>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="ig-generate-button"
                        onClick={handleGenerate}
                    >
                        <Sparkles size={18} />
                        Save Creative Prompt
                    </button>

                    {message && (
                        <div className="ig-message" role="status">
                            {message}
                        </div>
                    )}

                    <p className="ig-disclaimer">
                        <Lightbulb size={14} />
                        Demo mode: actual AI image generation is not connected.
                    </p>
                </section>

                <section className="ig-panel ig-preview-panel">
                    <div className="ig-section-heading">
                        <div>
                            <h3>Creative preview</h3>
                            <p>Your selected style and prompt settings.</p>
                        </div>

                        <span className="ig-preview-tag">PREVIEW</span>
                    </div>

                    <div className="ig-preview-canvas">
                        <div className="ig-preview-decoration">
                            <div className="ig-preview-orbit"></div>
                            <div className="ig-preview-star star-one">✦</div>
                            <div className="ig-preview-star star-two">✧</div>

                            <div className="ig-preview-center-icon">
                                <ImageIcon size={31} strokeWidth={1.4} />
                            </div>

                            <h4>Your next big idea starts here</h4>

                            <p>
                                {prompt.trim()
                                    ? "Your prompt is ready for the next creative step."
                                    : "Add a prompt and customize your creative settings."}
                            </p>
                        </div>
                    </div>

                    <div className="ig-preview-details">
                        <div>
                            <span>SELECTED STYLE</span>
                            <strong>{selectedStyle}</strong>
                        </div>

                        <div>
                            <span>ASPECT RATIO</span>
                            <strong>{selectedRatio}</strong>
                        </div>
                    </div>

                    <div className="ig-preview-tip">
                        <Sparkles size={17} />
                        <div>
                            <strong>Creative tip</strong>
                            <p>
                                Include lighting, mood, colors, and composition in your prompt
                                to describe your idea more clearly.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="ig-examples-section">
                <div className="ig-section-heading">
                    <div>
                        <h3>Need a little inspiration?</h3>
                        <p>Choose an idea to get started.</p>
                    </div>
                </div>

                <div className="ig-examples-grid">
                    {examples.map((example) => (
                        <button
                            type="button"
                            key={example.title}
                            className="ig-example-card"
                            onClick={() => handleExample(example.prompt)}
                        >
                            <div
                                className="ig-example-art"
                                style={{
                                    background: `linear-gradient(135deg, ${example.colors.join(
                                        ", "
                                    )})`,
                                }}
                            >
                                <span>{example.emoji}</span>
                                <div className="ig-example-shine"></div>
                            </div>

                            <div className="ig-example-info">
                                <div>
                                    <strong>{example.title}</strong>
                                    <p>{example.prompt}</p>
                                </div>

                                <Sparkles size={17} />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <section className="ig-recent-section">
                <div className="ig-section-heading">
                    <div>
                        <h3>
                            <Clock size={19} />
                            Recent prompts
                        </h3>
                        <p>Your latest saved creative ideas in this session.</p>
                    </div>

                    {generatedItems.length > 0 && (
                        <button
                            type="button"
                            className="ig-clear-button"
                            onClick={() => setGeneratedItems([])}
                        >
                            <RotateCcw size={15} />
                            Clear history
                        </button>
                    )}
                </div>

                {generatedItems.length === 0 ? (
                    <div className="ig-empty-history">
                        <div>
                            <Clock size={22} />
                        </div>
                        <p>No prompts saved yet.</p>
                        <span>Your saved creative prompts will appear here.</span>
                    </div>
                ) : (
                    <div className="ig-recent-list">
                        {generatedItems.map((item) => (
                            <div className="ig-recent-item" key={item.id}>
                                <div className="ig-recent-icon">
                                    <ImageIcon size={19} />
                                </div>

                                <button
                                    type="button"
                                    className="ig-recent-prompt"
                                    onClick={() => setPrompt(item.prompt)}
                                    title="Load this prompt"
                                >
                                    <strong>{item.prompt}</strong>
                                    <span>
                                        {item.style} · {item.ratio}
                                    </span>
                                </button>

                                <span className="ig-recent-time">{item.date}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <footer className="ig-footer">
                <span>Made with creativity and a little help from Aivora.</span>

                <button type="button" onClick={handleClear}>
                    Clear prompt
                </button>
            </footer>
        </div>
    );
}