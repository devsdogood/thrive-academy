import Image from "next/image";
import { IBoardMember } from "@src/types/generated/contentful";

type BoardMemberProps = {
  entry: IBoardMember;
};

const BoardMember: React.FC<BoardMemberProps> = ({ entry }) => {
  const image = entry.fields.image;

  return (
    <>
      <div style={{ height: "20vh", width: "300px", position: "relative" }}>
        <Image
          src={`https:${image.fields.file.url}`}
          alt={image.fields.description}
          layout="fill"
        />
      </div>
      <b>{entry.fields.fullName}</b>
      <br />
      <div>{entry.fields.bio}</div>
    </>
  );
};

export default BoardMember;
