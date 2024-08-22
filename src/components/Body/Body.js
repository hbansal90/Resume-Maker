import React from 'react'
import styles from './Body.module.css'
import { Download } from 'react-feather';
import Editor from '../Editor/Editor'
import Resume from '../Resume/Resume'
import { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Information",
        workExp: "Work Experience",
        projects: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        skills: "Skills",
        extraCurricular: "Extra-curricular activities",
        others: "Others"
    }
    const [activeColor, setActiveColor] = useState(colors[0])
    const resumeRef = useRef();
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.extraCurricular]: {
            id: sections.extraCurricular,
            sectionTitle: sections.extraCurricular,
            details: []
        },
        [sections.projects]: {
            id: sections.projects,
            sectionTitle: sections.projects,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievements]: {
            id: sections.achievements,
            sectionTitle: sections.achievements,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.skills]:{
            id: sections.skills,
            sectionTitle: sections.skills,
            details: [],
        },
        [sections.others]: {
            id: sections.others,
            sectionTitle: sections.others,
            detail: "",
        },
    });

    return (
        <div className={styles.container}>

            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map(item => (
                            <span
                                key={item}
                                style={{ backgroundColor: item }}
                                onClick={()=>setActiveColor(item)}
                                className={`${styles.color} ${activeColor === item ? styles.active : ""
                                    }`}
                            />
                        ))
                    }
                </div>
                <ReactToPrint
                    trigger={()=>{
                        return ( <button>Download<Download /></button>)
                    }}
                    content={()=>resumeRef.current }
                />
               
            </div>
            <div className={styles.main}>
                <Editor
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation}
                />
                <Resume
                     ref={resumeRef}
                    sections={sections}
                    information={resumeInformation}
                    activeColor={activeColor}
                />
            </div>
        </div>
    )
}

export default Body