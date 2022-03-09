import Image from "next/image";
import { IBoardMember } from "@src/types/generated/contentful";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/BoardMembers.module.css";

type BoardMemberProps = {
  entry: IBoardMember;
};

const BoardMember: React.FC<BoardMemberProps> = ({ entry }) => {
  const image = entry.fields.image.fields.file;

  return (
    <Container fluid>
      <Row className="row mb-4">
        <Col xs={12} sm={12} md="auto">
        <div className="board-img">
              <Image
                src={`https:${image.url}`}
                alt={`${entry.fields.fullName} board member image`}
                height={image.details.image?.height}
                width={image.details.image?.width}
              />
            </div>
        </Col>
        <Col xs={12} sm={12} md={9} lg={9} xl={9} className="column flex-grow BoardMemberDetails">
          <div className={styles.name}>
            <div>{entry.fields.fullName}</div>
          </div>
          <div className={styles.title}>
            <div>{entry.fields.boardTitle}</div>
          </div>
          <div className={styles.bio}>
            <div>{entry.fields.bio}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BoardMember;
