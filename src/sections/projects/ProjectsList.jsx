import ProjectCard from "./ProjectCard";
import { Row } from "reactstrap";
import { useEffect, useState, useMemo } from 'react';
import { getFilteredList } from "./skillsSlice";


const ProjectsList = () => {
    const [mySkillsList, setFilteredList] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState();

   
    useEffect(() => {
        setFilteredList(projects);
    }, []);

    const filteredList = useMemo(getFilteredList, [selectedSkill, mySkillsList]);
    const projects = filteredList.map(project => {
        return (
            <ProjectCard 
            key={project.id}
            project={project}
            style={{}}
            // onClick={() => onItemSelect(project)}        this will activate the modal
            />
            )
        })
    
    return ( 
        <Row style={{justifyContent: 'center'}}> 
            {projects}
        </Row>
     );
}
 
export default ProjectsList;