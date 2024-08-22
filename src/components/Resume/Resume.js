import React, { useState, useEffect, useRef, forwardRef } from 'react'
import styles from './resume.module.css'
import { AtSign, GitHub, Linkedin, Phone, Calendar, Paperclip, MapPin } from 'react-feather'
const Resume = forwardRef((props, ref) => {
    const information = props.information
    console.log(information)
    const sections = props.sections
    const [columns, setColumns] = useState([[], []])
    const [source, setSource] = useState("")
    const [target, setTarget] = useState("")
    const containerRef = useRef()
    const info = {
        workExp: information[sections.workExp],
        project: information[sections.projects],
        education: information[sections.education],
        achievements: information[sections.achievements],
        summary: information[sections.summary],
        skills: information[sections.skills],
        extraCurricular: information[sections.extraCurricular],
        others: information[sections.others],
        basicInfo: information[sections.basicInfo]

    }
    const getFormattedDate = (value) => {
        if (!value) return ""
        const date = new Date(value)
        return `${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}}`

    }
    console.log(info)
    const sectionsDivs = {
        [sections.workExp]: (
            <div
                key={"workExp"}
                className={`${styles.section} ${info.workExp?.sectionTitle ? "" : styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.workExp?.id)}
                onDragEnd={() => setSource(info.workExp?.id)}
            >
                <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
                <div className={styles.content}>
                    {
                        info.workExp?.details?.map((item) => (
                            <div className={styles.item} key={item.title}>
                                {item.title && (<p className={styles.title}>{item.title}</p>)}
                                {item.companyName && (<p className={styles.subTitle}>{item.companyName}</p>)}
                                {item?.certificateLink && (<a className={styles.link} href={item.certificateLink}>
                                    <Paperclip /> {item.certificateLink}
                                </a>)}
                                {item.startDate && item.endDate ? (
                                    <div className={styles.date}>
                                        <Calendar /> {" "}
                                        {getFormattedDate(item.startDate)} -
                                        {getFormattedDate(item.endDate)}
                                    </div>) : (" ")}

                                {/* <p className={styles.overview}>
                                This work exp is a dummy work exp built to showcase
                            </p> */}
                                {item.location && (
                                    <p className={styles.date}>
                                        <MapPin /> {item.location}
                                    </p>)}
                                {item.points?.length > 0 && (
                                    <ul className={styles.points}>
                                        {item.points?.map((elem, index) => <li className={styles.point} key={elem + index}>{elem} </li>)}
                                    </ul>)}
                            </div>))}
                </div>
            </div>),
        [sections.projects]: (
            <div
                key={"project"}
                className={`${styles.section} ${info.project?.sectionTitle ? "" : styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.project?.id)}
                onDragEnd={() => setSource(info.project?.id)}
            >
                <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
                <div className={styles.content}>
                    {info.project?.details?.map((item) => (
                        <div className={styles.item}>
                            {item.title && (<p className={styles.title}>Project 1</p>)}
                            {item.link && (<a className={styles.link} href={item.link}><Paperclip />{item.link}</a>)}
                            {item.github && (<a className={styles.link} href={item.github}><GitHub />item.github</a>)}
                            {item.overview && (<p className={styles.overview}>
                                {item.overview}
                            </p>)}
                            {item.points?.length > 0 && (
                                <ul className={styles.points}>
                                    {item.points?.map((elem, index) => <li className={styles.point} key={elem + index}>{elem} </li>)}
                                </ul>)}
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.education]: (
            <div
                key={"education"}
                className={`${styles.section} ${info.education?.sectionTitle ? "" : styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.education?.id)}
                onDragEnd={() => setSource(info.education?.id)}
            >
                <div className={styles.sectionTitle}>{info.education?.sectionTitle}</div>
                <div className={styles.content}>
                    {info.education?.details?.map((item) => (
                        <div className={styles.item}>
                            {item.title && (<p className={styles.title}>{item.title}</p>)}
                            {item.college && (<p className={styles.subTitle}>{item.college}</p>)}
                            {item.startDate && item.endDate &&
                                (<div className={styles.date}>
                                    <Calendar /> {getFormattedDate(item.startDate)}- {getFormattedDate(item.endDate)}
                                </div>)}
                        </div>))}
                </div>
            </div>
        ),
        [sections.skills]:(
            <div
                key={"skills"}
                className={`${styles.section} ${info.skills?.sectionTitle? "": styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.skills?.id)}
                onDragEnd={() => setSource(info.skills?.id)}
            >
                <div className={styles.sectionTitle}>{info.skills?.sectionTitle}</div>
                <div className={styles.content}>
                    {info.skills?.details.length > 0 && info.skills.details.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.chips}>{item.point}</div>
                        </div>
                    ))}
                </div>
                </div>
        ),
        [sections.achievements]: (
            <div
                key={"achievements"}
                className={`${styles.section} ${info.achievements?.sectionTitle ? "" : styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.achievements?.id)}
                onDragEnd={() => setSource(info.achievements?.id)}
            >
                <div className={styles.sectionTitle}>{info.achievements?.sectionTitle}</div>
                <div classsName={styles.content}>
                    {info.achievements?.points?.length > 0 && (
                        <ul className={styles.points}>
                            {info.achievements.points?.map((elem, index) => (
                                <li className={styles.points} key={elem + index}>{elem}</li>
                            ))}
                        </ul>
                    )
                    }
                </div>
            </div>),
        [sections.summary]: (
            <div
                key={"summary"}
                className={`${styles.section} ${info.summary?.sectionTitle ? "" : styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.summary?.id)}
                onDragEnd={() => setSource(info.summary?.id)}
            >
                <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
                <div className={styles.content}>
                    <p className={styles.overview}>{info.summary?.summary}</p>
                </div>
            </div>),
        [sections.extraCurricular]: (
            <div
                key={"extras"}
                className={`${styles.section} ${info.extraCurricular?.sectionTitle ? "" : styles.hidden}`}
                draggable
                onDragOver={() => setTarget(info.extraCurricular?.id)}
                onDragEnd={() => setSource(info.extraCurricular?.id)}
            >
                <div className={styles.sectionTitle}>{info?.extraCurricular?.sectionTitle}</div>
                <div classsName={styles.content}>
                    {info.extraCurricular?.points?.length > 0 && (
                        <ul className={styles.points}>
                            {info.extraCurricular.points?.map((elem, index) => (
                                <li className={styles.points} key={elem + index}>{elem}</li>
                            ))}
                        </ul>
                    )
                    }
                </div>
            </div>

        )

    }
    const swapSourceTarget = (source, target) => {
        if (!source || !target) return;
        const tempColumns = [[...columns[0]], [...columns[1]]]
        let sourceColumnIndex = 0;
        let sourceRowIndex = tempColumns[0].findIndex(item => item === source)
        if (sourceRowIndex < 0) {
            sourceColumnIndex = 1;
            sourceRowIndex = tempColumns[1].findIndex(item => item === source)
        }

        let targetColumnIndex = 0;
        let targetRowIndex = tempColumns[0].findIndex(item => item === target)
        if (targetRowIndex < 0) {
            targetColumnIndex = 1;
            targetRowIndex = tempColumns[1].findIndex(item => item === target)
        }
        const tempSource = columns[sourceColumnIndex][sourceRowIndex]
        tempColumns[sourceColumnIndex][sourceRowIndex] = tempColumns[targetColumnIndex][targetRowIndex]
        tempColumns[targetColumnIndex][targetRowIndex] = tempSource
        setColumns(tempColumns)
        // let sourceCopy = source;
        //     setSource(target);
        //     setTarget(sourceCopy)

    }
    useEffect(() => {
        setColumns([
            [sections.projects, sections.education, sections.summary, sections.skills],
            [sections.workExp, sections.achievements, sections.extraCurricular]
        ])
    }, [])
     console.log(info);
    useEffect(() => {
        swapSourceTarget(source, target)
    }, [source])
    useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return;
        container.style.setProperty("--color", props.activeColor)

    }, [props.activeColor])

    //console.log(source, target);
    // useEffect(()=>{},[])
    return (
        <div ref={ref}>
            <div ref={containerRef} className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
                    <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

                    <div className={styles.links}>

                        {info.basicInfo?.detail?.email && (
                            <a className={styles.link} type="email">
                                <AtSign /> {info.basicInfo?.detail?.email}</a>
                        )}
                        {info.basicInfo?.detail?.phone && (
                            <a className={styles.link} type="phone">
                                <Phone /> {info.basicInfo?.detail?.phone}</a>
                        )}
                        {info.basicInfo?.detail?.linkedin && (
                            <a className={styles.link} href={info.basicInfo?.detail?.linkedin}>
                                <Linkedin /> {info.basicInfo?.detail?.linkedin}</a>
                        )}

                        {info.basicInfo?.detail?.github && (
                            <a className={styles.link} href={info.basicInfo?.detail?.github}>
                                <GitHub /> {info.basicInfo?.detail?.github}</a>
                        )}
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.col1}>
                        {
                            columns[0].map(item => sectionsDivs[item])
                        }
                    </div>
                    <div className={styles.col2}>{
                        columns[1].map(item => sectionsDivs[item])
                    }</div>
                </div>
            </div>
        </div>
        )
})

export default Resume