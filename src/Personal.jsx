import React, { useContext, useState } from "react";
import { ResumeContext } from "./ResumeContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function Personal() {
    const navigate = useNavigate();
    const { personal, setPersonal } = useContext(ResumeContext);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        contact: false,
    });

    const Handle_CON = {
        IS_VALID: "is_valid",
        IS_NOTVALID: "is_notvalid",
    }
    const HandleName = (name) => {
        setPersonal({ ...personal, name: name });
    }

    const HandleEmail = (email) => {
        setPersonal({ ...personal, email: email })
    }

    const HandleNum = (nums) => {
        setPersonal({ ...personal, contact: nums })
    }

    const handleSubmit = () => {
        const newErrors = {
            name: false,
            email: false,
            contact: false,
        };
        if (personal.name.trim() === "") {
            newErrors.name = true;
        }
        if (personal.email.trim() === "") {
            newErrors.email = true;
        }

        if (personal.contact.trim() === "") {
            newErrors.contact = true;
        }
        setErrors(newErrors);
        if (!newErrors.name && !newErrors.age && !newErrors.email && !newErrors.contact) {
            navigate("/summary");
        }
    };

    return (
        <div className="form-container">
            <h2>Personal Information</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        className={`input ${errors.name ? "error" : ""}`}
                        placeholder="Enter your name"
                        type="text"
                        value={personal.name}
                        onChange={(e) => { HandleName(e.target.value) }}
                    />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        className={`input ${errors.email ? "error" : ""}`}
                        type="email"
                        placeholder="Enter your email"
                        value={personal.email}
                        onChange={(e) => { HandleEmail(e.target.value) }}
                    />
                </div>
                <div className="input-group">
                    <label>Phone Number:</label>
                    <input
                        className={`input ${errors.contact ? "error" : ""}`}
                        type="tel"
                        placeholder="Enter your phone number"
                        value={personal.contact}
                        onChange={(e) => { HandleNum(e.target.value) }}
                    />
                </div>
                <button onClick={handleSubmit}>
                    Save & Next
                </button>
            </div>
        </div>
    )
}