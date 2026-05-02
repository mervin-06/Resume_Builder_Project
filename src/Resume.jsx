import { useContext } from "react"
import { ResumeContext } from "./ResumeContext"
import "./styles.css";

export default function Resume() {
    const { personal, summary, education } = useContext(ResumeContext);

    const hasPreviewData = personal.name || (summary && (summary.degree || summary.skill)) || education.collage;

    const handleDownload = () => {
        const element = document.getElementById("resume-content");
        if (!element) {
            alert("Resume content not found");
            return;
        }

        const printWindow = window.open("", "", "width=900,height=1200");
        if (!printWindow) {
            alert("Please allow popups to download your resume as PDF");
            return;
        }

        const stylesheetLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .map((link) => `<link rel="stylesheet" href="${link.href}">`)
            .join("");

        const inlineStyles = Array.from(document.querySelectorAll("style"))
            .map((style) => `<style>${style.innerHTML}</style>`)
            .join("");

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${personal.name || "Resume"}</title>
                ${stylesheetLinks}
                ${inlineStyles}
                <style>
                    body {
                        margin: 0;
                        padding: 24px;
                        background: #eef3f8;
                    }

                    .professional-resume {
                        margin: 0 auto;
                    }

                    @media print {
                        @page {
                            size: A4;
                            margin: 0;
                        }

                        body {
                            padding: 0;
                            background: #ffffff;
                        }

                        .professional-resume {
                            width: 100%;
                            max-width: 100%;
                            min-height: auto;
                            margin: 0;
                            border: 0;
                            border-radius: 0;
                            box-shadow: none;
                        }
                    }
                </style>
            </head>
            <body>
                ${element.outerHTML}
            </body>
            </html>
        `);

        let didPrint = false;
        const printResume = () => {
            if (didPrint) return;
            didPrint = true;
            printWindow.focus();
            printWindow.print();
        };

        printWindow.document.close();
        printWindow.onload = printResume;
        setTimeout(printResume, 700);
    };

    if (!hasPreviewData) {
        return (
            <div className="resume-alert">
                <div className="alert-box">
                    <h2>Preview Not Found</h2>
                    <p>Please fill in your personal details, summary, and education information to see your resume preview.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="resume-container">
            <div className="download-buttons">
                <button className="btn-download" onClick={handleDownload}>
                    Download as PDF
                </button>
            </div>

            <article className="professional-resume" id="resume-content">
                <header className="prof-header">
                    <div className="prof-name-section">
                        <h1 className="prof-name">{personal.name || "YOUR NAME"}</h1>
                    </div>
                    <div className="prof-contact-info">
                        {personal.email && (
                            <span className="prof-contact-item">
                                Email: {personal.email}
                            </span>
                        )}
                        {personal.contact && (
                            <span className="prof-contact-item">
                                Phone: {personal.contact}
                            </span>
                        )}
                        {personal.port && (
                            <span className="prof-contact-item">
                                Portfolio: {personal.port}
                            </span>
                        )}
                        {personal.git && (
                            <span className="prof-contact-item">
                                Git: {personal.git}
                            </span>
                        )}
                    </div>
                </header>

                {summary && (summary.degree || summary.skill || summary.Interest) && (
                    <section className="prof-section">
                        <h2 className="prof-section-title">PROFESSIONAL SUMMARY</h2>
                        <div className="prof-content">
                            <p className="prof-text">
                                {summary.degree && (
                                    <>
                                        Accomplished <strong>{summary.degree}</strong> graduate
                                    </>
                                )}
                                {(summary.collage || summary.college) && (
                                    <>
                                        {" "}from <strong>{summary.collage || summary.college}</strong>
                                    </>
                                )}
                                {(summary.skill || summary.skills) && (
                                    <>
                                        . Expertise in <strong>{summary.skill || summary.skills}</strong>
                                    </>
                                )}
                                {(summary.Interest || summary.interest) && (
                                    <>
                                        . Passionate about <strong>{summary.Interest || summary.interest}</strong>
                                    </>
                                )}.
                            </p>
                        </div>
                    </section>
                )}

                <section className="prof-section">
                    <h2 className="prof-section-title">EDUCATION</h2>
                    <div className="prof-content">
                        <div className="prof-entry">
                            <div className="prof-entry-top">
                                <h3 className="prof-entry-title">{education.collage || "COLLEGE NAME"}</h3>
                                <span className="prof-entry-date">{education.year || "YEAR"}</span>
                            </div>
                            <p className="prof-entry-subtitle">{education.degree || "Degree"}</p>
                            {education.gpa && (
                                <p className="prof-entry-detail">
                                    <strong>GPA:</strong> {education.gpa}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {summary && (summary.skill || summary.skills) && (
                    <section className="prof-section">
                        <h2 className="prof-section-title">TECHNICAL SKILLS</h2>
                        <div className="prof-content">
                            <div className="prof-skills-container">
                                {(summary.skill || summary.skills)
                                    .split(/,|;/)
                                    .filter((skill) => skill.trim())
                                    .map((skill, index) => (
                                        <span key={index} className="prof-skill-badge">
                                            {skill.trim()}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </section>
                )}

                {summary && summary.projects && summary.projects.length > 0 && (
                    <section className="prof-section">
                        <h2 className="prof-section-title">PROJECTS</h2>
                        <div className="prof-content">
                            {summary.projects.map((proj, index) => (
                                <div key={index} className="project-item">
                                    <h3 className="prof-sub-title">{proj.title}:</h3>
                                    <p className="prof-text">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}
