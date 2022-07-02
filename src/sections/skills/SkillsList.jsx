import { mySkills } from "../../app/shared/SKILLS";
import { Col, Row } from 'reactstrap';

const SkillsList = () => {
    const skills = mySkills

    return ( 
        <Row className="ms-auto border">
            {skills.map((skill) => {
                return (
                    <Col 
                        md='1'
                        className="m-2"
                        key={skill.id}
                    >
                        <button className="btn-primary">{skill}</button>
                    </Col>
                )
            })}
        </Row>
     );
}
 
export default SkillsList;