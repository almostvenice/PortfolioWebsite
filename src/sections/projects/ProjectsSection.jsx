import { Container } from "reactstrap";
import SkillsList from './../skills/SkillsList';
import ProjectCardList from "./ProjectCardList";
import { getFilteredList } from "./skillsSlice";

const ProjectsSection = () => {
    return ( 
        <Container>
            <SkillsList
                onItemSelect={getFilteredList}
            />
            <ProjectCardList/>
        </Container>
     );
}
 
export default ProjectsSection;