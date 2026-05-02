import { Route, Routes } from "react-router-dom";
import { ResumeContext } from "./ResumeContext";
import Layout from "./Layout";
import Personal from "./Personal";
import Summary from "./Summary";
import Education from "./Education";
import Resume from "./Resume";
import { useState } from "react";
export default function Leader() {
    
    const [personal, setPersonal] = useState({
        name: "",
        age: "",
        email: "",
        contact: "",
        port:"",
        git:"",
    });

    const [summary, setSummary] = useState({
        collage: "",
        degree: "",
        skill: "",
        Interest: "",
        project_type: "",
        projects: [],
    });

    const [education, setEducation] = useState({
        collage: "",
        degree: "",
        year: "",
        any: "",
        gpa: "",
    });
    return (
        <ResumeContext.Provider
            value={{
                personal,
                setPersonal,
                summary,
                setSummary,
                education,
                setEducation,
            }}
        >
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Personal />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/resume" element={<Resume />} />
                </Route>
            </Routes>
        </ResumeContext.Provider>
    )
}