import { Container } from "reactstrap";
import SkillsList from './../skills/SkillsList';
import ProjectCardList from "./ProjectCardList";

const ProjectsSection = () => {
    return ( 
        <Container>
            <SkillsList/>
            <ProjectCardList/>
        </Container>
     );
}
 
export default ProjectsSection;