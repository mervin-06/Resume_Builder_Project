import { useContext } from "react"
import { ResumeContext } from "./ResumeContext"
import "./styles.css";

export default function Education() {
    const { education, setEducation } = useContext(ResumeContext)

    const clg = (val) => {
        setEducation({ ...education, collage: val });
    }
    const degree = (val) => {
        setEducation({ ...education, degree: val })
    }
    const Graduate = (val) => {
        setEducation({ ...education, year: val })
    }
    const gpa = (val) => {
        setEducation({ ...education, gpa: val })
    }
    return (
        <div className="form-container">
            <h2>Education Information</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>College Name:</label>
                    <input
                        type="text"
                        placeholder="Enter college name"
                        value={education.collage}
                        onChange={(e) => clg(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Degree:</label>
                    <input
                        type="text"
                        placeholder="Enter your degree"
                        value={education.degree}
                        onChange={(e) => degree(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Year of Graduation:</label>
                    <input
                        type="text"
                        placeholder="Enter year of graduation"
                        value={education.year}
                        onChange={(e) => Graduate(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>GPA:</label>
                    <input
                        type="text"
                        placeholder="Enter your GPA"
                        value={education.gpa}
                        onChange={(e) => gpa(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}