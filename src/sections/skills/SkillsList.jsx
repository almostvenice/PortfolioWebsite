import { SKILLS } from "../../app/shared/SKILLS";
import { Col, Row } from 'reactstrap';
import { IconContext } from "react-icons";
import './skills.css';
import { useState } from "react";

const SkillsList = ({onItemSelect}) => {
    const [selectedSkill, setSelectedSkill] = useState();


    const handleSkillChange = event => {
        setSelectedSkill(event.target.skill);
      }

    const skillsList = SKILLS.map(skill => {
        return (
            <li 
                key={skill.name}
                className="list-inline-item mx-3"
                onClick={() => handleSkillChange(onItemSelect)}
            >
                <span>
                    <div className="skillsItem text-center rounded">
                        <button className="rounded">
                            <div style={{width: '5rem'}}>
                                <IconContext.Provider value={{ size: '3rem', color: 'darkcyan' }}>
                                    <div style={{paddingTop: '8px'}}>
                                        {skill.class} 
                                    </div>
                                </IconContext.Provider>
                            </div>

                        
                            {console.log(skill.class)}
                            <p
                                className="text-center"
                                style={{ fontSize: "110%", marginTop: "4px", fontFamily: 'Lobster', color: 'black'}}
                                >
                                {skill.name}
                            </p>
                        </button>
                    </div>
                </span>
            </li>
        )
    });

    return ( 
        <>
            <Row>
                <Col md='12' className="text-center">
                    <div >
                        <h1 style={{marginTop: '18px'}}>
                            <span id="skills" className="text-white" style={{fontFamily: 'Lobster'}}>Skills</span>
                        </h1>
                    </div>
                    <div >
                        <ul className="list-inline mx-auto skill-icon">{skillsList}</ul>
                    </div>
                </Col>
            </Row>
        </>
     );
}
 
export default SkillsList;