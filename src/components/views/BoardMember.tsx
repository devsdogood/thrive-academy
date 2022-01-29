import Image from "next/image";
import { IBoardMember } from "@src/types/generated/contentful";

type BoardMemberProps = {
  entry: IBoardMember;
};

const BoardMember: React.FC<BoardMemberProps> = ({ entry }) => {
  const image = entry.fields.image;

  return (
    
      <div className="row">
        <div className="column flex-shrink">
          <div className='BoardMember'>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={image.fields.description}
              layout="fixed"
              width='225'
              height='300'
            />
          </div>
        </div>
        <div className="column flex-grow BoardMemberDetails">
          <div className='fullName'>
            <div>{entry.fields.fullName}</div>
          </div>
          <br />
          <div className='boardTitle'>
            <div>{entry.fields.boardTitle}</div>
          </div>
          <br />
          <div className='bio'>
            <div>{entry.fields.bio}</div>
          </div>
        </div>
      </div>
    




  );
};

export default BoardMember;
