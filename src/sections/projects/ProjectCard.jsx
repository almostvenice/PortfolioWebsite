import { Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const ProjectCard = ({project}) => {
    const { image, name, description, subtitle } = project;
    return ( 
        <Card style={{width: '15rem', height: '18rem', margin: "10px", cursor: "pointer"}}>
            <CardImg
            alt={description}
            src={image}
            top
            width="100%"
            height='125rem'
            />
            <CardBody style={{}}>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {subtitle}
                </CardSubtitle>
                <CardText>
                    {description}
                </CardText>
            </CardBody>
        </Card>
     );
}
 
export default ProjectCard;