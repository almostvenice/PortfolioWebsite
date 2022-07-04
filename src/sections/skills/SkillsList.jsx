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