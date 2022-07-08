import { Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import './projects.css'

const ProjectCard = ({project}) => {
    const { image, name, description, skill } = project;
    return ( 
        <Card className="myCards" style={{ width: '15rem', height: '18rem', margin: "10px", cursor: "pointer"}}>
            <CardImg
            alt={description}
            src={image}
            top
            width='100%'
            height='125rem'
            />
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {skill}
                </CardSubtitle>
                <CardText>
                    {description}
                </CardText>
            </CardBody>
        </Card>
     );
}
 
export default ProjectCard;