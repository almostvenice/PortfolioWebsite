import { Container, Row, Col, CardDeck } from "reactstrap";
import ProjectsList from "./ProjectsList";
import './projects.css'

const ProjectCardList = () => {
    
    return ( 
        <Container>
            <ProjectsList/>
        </Container>
     );
}
 
export default ProjectCardList;