import { skillsTree } from "../../app/shared/SKILLS";
import { Col, Row } from 'reactstrap';
import { IconContext } from "react-icons";
import './skills.css';

const SkillsList = () => {

    const skillsList = skillsTree.icons.map(skill => {
        return (
            <li className="list-inline-item mx-3" key={skill.name}>
                <span>
                    <div className="skillsItem text-center rounded">
                        <button style={{backgroundColor: "white"}}>
                            <IconContext.Provider value={{ className: "global-class-name", size: '3rem', color: 'darkcyan' }}>
                                <div>
                                    {skill.class} 
                                </div>
                            </IconContext.Provider>

                        </button>
                        
                            {console.log(skill.class)}
                            <p
                                className="text-center"
                                style={{ fontSize: "100%", marginTop: "4px", fontFamily: 'Lobster', color: 'white' }}
                            >
                                {skill.name}
                            </p>
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
                        <h1 >
                            <span id="skills" className="text-white">Skills</span>
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