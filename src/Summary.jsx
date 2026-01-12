import { useContext, useState } from "react"
import { ResumeContext } from "./ResumeContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function Summary() {
    const navigate = useNavigate();
    const { summary, setSummary } = useContext(ResumeContext);
    const [sumError, setSumError] = useState({
        degree: false,
        collage: false,
        skill: false,
        interest: false,
    })
    const handleProject_title = (e) => {
        const count = Number(e.target.value);


        const newProject = Array.from({ length: count }, () => ({
            title: "",
            description: ""
        }))
    }
    const handleSummarySummit = () => {
        const UserError = {
            degree: false,
            collage: false,
            skill: false,
            interest: false,
        }
        if (summary.collage.trim() === "") {
            UserError.collage = true;
        }
        if (summary.degree.trim() === "") {
            UserError.degree = true;
        }
        if (summary.skill.trim() === "") {
            UserError.skill = true;
        }
        if (summary.Interest.trim() === "") {
            UserError.interest = true
        }

        setSumError(UserError)
        if (!UserError.collage && !UserError.degree && !UserError.skill && !UserError.interest) {
            navigate("/education")
        }
    }
    return (
        <div className="form-container">
            <h2>Summary Information</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Degree:</label>
                    <input
                        type="text"
                        className={`input ${sumError.degree ? "error " : ""} `}
                        placeholder="Enter your degree"
                        name="degree"
                        value={summary.degree}
                        onChange={(e) => setSummary({ ...summary, degree: e.target.value })}
                    />
                </div>
                <div className="input-group">
                    <label>College Name:</label>
                    <input
                        type="text"
                        className={`input ${sumError.collage ? "error" : ""}`}
                        placeholder="Enter college name"
                        name="clg"
                        value={summary.collage}
                        onChange={(e) => setSummary({ ...summary, collage: e.target.value })}
                    />
                </div>
                <div className="input-group">
                    <label>Skills:</label>
                    <input
                        type="text"
                        className={`input ${sumError.skill ? "error" : ""}`}
                        placeholder="Enter your skills"
                        name="skill"
                        value={summary.skill}
                        onChange={(e) => setSummary({ ...summary, skill: e.target.value })}
                    />
                </div>
                <div className="input-group">
                    <label>Specific Area/Interest:</label>
                    <input
                        className={`input ${sumError.interest ? "error" : ""}`}
                        type="text"
                        placeholder="Enter your specific area of interest"
                        name="specific"
                        value={summary.interest}
                        onChange={(e) => setSummary({ ...summary, Interest: e.target.value })}
                    />
                </div>
                <input
                    type="number"
                    placeholder="Number of projects"
                    onChange={(e) => {
                        const count = Number(e.target.value);
                        setSummary({
                            ...summary,
                            projects: Array.from({ length: count }, () => ({
                                title: "",
                                description: ""
                            }))
                        });
                    }}
                />

                {summary.projects && summary.projects.map((proj, index) => (
                    <div key={index} className="project-box">
                        <input
                            type="text"
                            placeholder={`Project ${index + 1} Title`}
                            value={proj.title}
                            onChange={(e) => {
                                const updated = [...summary.projects];
                                updated[index].title = e.target.value;
                                setSummary({ ...summary, projects: updated });
                            }}
                        />

                        <textarea
                            placeholder={`Project ${index + 1} Description`}
                            value={proj.description}
                            onChange={(e) => {
                                const updated = [...summary.projects];
                                updated[index].description = e.target.value;
                                setSummary({ ...summary, projects: updated });
                            }}
                        />
                    </div>
                ))}

                <button onClick={handleSummarySummit}>
                    Save & Next
                </button>
            </div>
        </div>
    )
}