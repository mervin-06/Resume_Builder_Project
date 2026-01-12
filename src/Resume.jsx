import { useContext } from "react"
import { ResumeContext } from "./ResumeContext"
import "./styles.css";

export default function Resume() {
    const { personal, summary, education } = useContext(ResumeContext);

    const hasPreviewData = personal.name || (summary && (summary.degree || summary.skill)) || education.collage;


    const handleDownload = () => {
        const element = document.getElementById('resume-content');
        if (!element) {
            alert('Resume content not found');
            return;
        }


        const resumeHTML = element.innerHTML;


        const allStyles = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Calibri', 'Arial', sans-serif;
                color: #222;
                background: white;
                margin: 0;
                padding: 20px;
            }
            
            .professional-resume {
                font-family: 'Calibri', 'Arial', sans-serif;
                color: #222;
                background: #fff;
                max-width: 8.5in;
                height: auto;
                margin: 0 auto;
                padding: 48px 56px;
                line-height: 1.5;
                box-shadow: none;
            }
            
            .prof-header {
                margin-bottom: 20px;
                text-align: center;
                border-bottom: 2.5px solid #1e3a5f;
                padding-bottom: 14px;
            }
            
            .prof-name-section {
                margin-bottom: 8px;
            }
            
            .prof-name {
                font-size: 32px;
                font-weight: 700;
                color: #1e3a5f;
                margin: 0;
                letter-spacing: 0.8px;
                text-transform: uppercase;
            }
            
            .prof-contact-info {
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;
                font-size: 14px;
                color: #444;
            }
            
            .prof-contact-item {
                display: inline-block;
                white-space: nowrap;
            }
            
            .prof-section {
                margin-bottom: 20px;
                page-break-inside: avoid;
            }
            
            .prof-section-title {
                font-size: 15px;
                font-weight: 700;
                color: #1e3a5f;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                margin: 0 0 10px 0;
                padding-bottom: 6px;
                border-bottom: 1.5px solid #1e3a5f;
            }
            
            .prof-content {
                margin-left: 0;
            }
            
            .prof-text {
                font-size: 15px;
                line-height: 1.6;
                margin: 0 0 8px 0;
                color: #333;
            }
            
            .prof-entry {
                margin-bottom: 14px;
                page-break-inside: avoid;
            }
            
            .prof-entry-top {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                gap: 16px;
                margin-bottom: 2px;
            }
            
            .prof-entry-title {
                font-size: 15px;
                font-weight: 700;
                color: #1e3a5f;
                margin: 0;
            }
            
            .prof-entry-date {
                font-size: 14px;
                font-weight: 600;
                color: #555;
                white-space: nowrap;
            }
            
            .prof-entry-subtitle {
                font-size: 13px;
                font-style: italic;
                color: #555;
                margin: 3px 0;
            }
            
            .prof-entry-detail {
                font-size: 13px;
                color: #666;
                margin: 4px 0;
            }
            
            .prof-skills-container {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 0;
            }
            
            .prof-skill-badge {
                display: inline-block;
                background-color: #ecf0f7;
                color: #1e3a5f;
                padding: 6px 11px;
                border-radius: 2px;
                font-size: 13px;
                font-weight: 600;
                border: 1px solid #c5d3e8;
                white-space: nowrap;
            }
            
            /* ========== RESPONSIVE MEDIA QUERIES ========== */
            
            /* Tablet Devices (768px - 1024px) */
            @media (max-width: 1024px) {
                .professional-resume {
                    padding: 36px 42px;
                    max-width: 100%;
                }
                
                .prof-name {
                    font-size: 28px;
                }
                
                .prof-contact-info {
                    font-size: 13px;
                    gap: 15px;
                }
                
                .prof-section-title {
                    font-size: 14px;
                }
                
                .prof-text {
                    font-size: 14px;
                }
                
                .prof-entry-title {
                    font-size: 14px;
                }
                
                .prof-entry-date {
                    font-size: 13px;
                }
            }
            
            /* Mobile Devices (480px - 768px) */
            @media (max-width: 768px) {
                body {
                    padding: 10px;
                }
                
                .professional-resume {
                    padding: 24px 20px;
                    margin: 0;
                    box-shadow: none;
                    border-radius: 0;
                }
                
                .prof-header {
                    margin-bottom: 16px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #1e3a5f;
                }
                
                .prof-name {
                    font-size: 24px;
                    letter-spacing: 0.5px;
                }
                
                .prof-contact-info {
                    flex-direction: column;
                    gap: 6px;
                    font-size: 12px;
                    align-items: center;
                }
                
                .prof-contact-item {
                    white-space: normal;
                }
                
                .prof-section {
                    margin-bottom: 16px;
                }
                
                .prof-section-title {
                    font-size: 13px;
                    margin: 0 0 8px 0;
                    padding-bottom: 4px;
                    letter-spacing: 1px;
                }
                
                .prof-text {
                    font-size: 13px;
                    line-height: 1.5;
                    margin: 0 0 6px 0;
                }
                
                .prof-entry {
                    margin-bottom: 12px;
                }
                
                .prof-entry-top {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;
                    margin-bottom: 4px;
                }
                
                .prof-entry-title {
                    font-size: 13px;
                }
                
                .prof-entry-date {
                    font-size: 12px;
                    white-space: normal;
                    color: #666;
                }
                
                .prof-entry-subtitle {
                    font-size: 12px;
                    margin: 2px 0;
                }
                
                .prof-entry-detail {
                    font-size: 12px;
                    margin: 2px 0;
                }
                
                .prof-skills-container {
                    gap: 6px;
                }
                
                .prof-skill-badge {
                    font-size: 12px;
                    padding: 5px 9px;
                    border-radius: 2px;
                }
            }
            
            /* Small Mobile Devices (Below 480px) */
            @media (max-width: 480px) {
                body {
                    padding: 8px;
                }
                
                .professional-resume {
                    padding: 16px 12px;
                }
                
                .prof-header {
                    margin-bottom: 12px;
                    padding-bottom: 10px;
                }
                
                .prof-name {
                    font-size: 20px;
                    letter-spacing: 0.3px;
                }
                
                .prof-contact-info {
                    gap: 4px;
                    font-size: 11px;
                }
                
                .prof-section-title {
                    font-size: 12px;
                    margin: 0 0 6px 0;
                    padding-bottom: 3px;
                    letter-spacing: 0.8px;
                }
                
                .prof-text {
                    font-size: 12px;
                    line-height: 1.4;
                    margin: 0 0 4px 0;
                }
                
                .prof-entry {
                    margin-bottom: 10px;
                }
                
                .prof-entry-title {
                    font-size: 12px;
                }
                
                .prof-entry-date {
                    font-size: 11px;
                }
                
                .prof-entry-subtitle {
                    font-size: 11px;
                }
                
                .prof-entry-detail {
                    font-size: 11px;
                }
                
                .prof-skill-badge {
                    font-size: 11px;
                    padding: 4px 8px;
                }
            }
            
            @media print {
                body {
                    padding: 0;
                    margin: 0;
                }
                .professional-resume {
                    box-shadow: none;
                    margin: 0;
                    padding: 0.5in;
                    max-width: 100%;
                }
            }
        `;

        const printWindow = window.open('', '', 'width=900,height=1200');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${personal.name || 'Resume'}</title>
                <style>
                    ${allStyles}
                </style>
            </head>
            <body>
                <div class="professional-resume">
                    ${resumeHTML}
                </div>
            </body>
            </html>
        `);

        printWindow.document.close();
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
        }, 500);
    };
    if (!hasPreviewData) {
        return (
            <div className="resume-alert">
                <div className="alert-box">
                    <h2>⚠️ Preview Not Found</h2>
                    <p>Please fill in your personal details, summary, and education information to see your resume preview.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="resume-container">
            <div className="download-buttons">
                <button className="btn-download" onClick={handleDownload}>
                    📄 Download as PDF
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
                                ✉ {personal.email}
                            </span>
                        )}
                        {personal.contact && (
                            <span className="prof-contact-item">
                                ☎ {personal.contact}
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
    )
}