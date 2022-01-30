import Image from "next/image";
import { IBoardMember } from "@src/types/generated/contentful";
import { Container, Row, Col} from "react-bootstrap";

type BoardMemberProps = {
  entry: IBoardMember;
};

const BoardMember: React.FC<BoardMemberProps> = ({ entry }) => {
  const image = entry.fields.image;

  return (
    
    <Container fluid> 

      <Row className="row">
        <Col xs={12} sm={12} md={3} lg={3} xl={3}  className="column flex-shrink">
          <div className='BoardMember'>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={image.fields.description}
              layout="fixed"
              width='225'
              height='300'
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={9} lg={9} xl={9} className="column flex-grow BoardMemberDetails">
          <div className='fullName'>
            <div>{entry.fields.fullName}</div>
          </div>
          <br />
          <div className='boardTitle'>
{/* @ts-ignore */} 
            <div>{entry.fields.boardTitle}</div>
          </div>
          <br />
          <div className='bio'>
            <div>{entry.fields.bio}</div>
          </div>
        </Col>
      </Row>
    </Container>




  );
};

export default BoardMember;
