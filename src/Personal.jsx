import React, { useContext, useState ,useRef} from "react";
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

    const refName = useRef();
    const refmail = useRef();
    const refnum = useRef();

    const HandleGit = (git) => {
        setPersonal({ ...personal, git: git })
    }

    const HandlePort=(port)=>{
        setPersonal({...personal,port:port})
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
            refName.current?.select()
            newErrors.name = true;
        }
        if (personal.email.trim() === "") {
            refmail.current.select()
            newErrors.email = true;
        }
        if (personal.contact.trim() === "") {
            refnum.current.select();
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
                        ref={refName}
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
                        ref={refmail}
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
                        ref={refnum}
                        className={`input ${errors.contact ? "error" : ""}`}
                        type="tel"
                        placeholder="Enter your phone number"
                        value={personal.contact}
                        onChange={(e) => { HandleNum(e.target.value) }}
                    />
                </div>
                <div className="input-group">
                    <label > Porfolio Link: </label>
                    <input type="text"
                        placeholder="enter porfolio link"
                        value={personal.port}
                        onChange={(e) => { HandlePort(e.target.value) }}
                    />
                </div>
                <div className="input-group">
                    <label > Git:</label> 
                    <input type="text"
                        placeholder="enter git  link"
                        value={personal.git}
                        onChange={(e) => { HandleGit(e.target.value) }}
                    />
                </div>
                <button onClick={handleSubmit}>
                    Save & Next
                </button>
            </div>
        </div>
    )
}