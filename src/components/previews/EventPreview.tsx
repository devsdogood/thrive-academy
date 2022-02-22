import Link from 'next/link'
import Image from 'next/image'
import { IEvent } from "@src/types/generated/contentful";
import { parseISO, format } from 'date-fns'
import { Card, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  let time = entry.fields.dateAndTime;
  let image = entry.fields.thumbnailImage.fields.file;
  let day = GetDay(time);
  let month = GetMonth(time);

  return (
    <Col lg={4} sm={6} className='mb-5'>
      <Link href={`/events/${entry.fields.slug}`}>
        <a>
          <Card className='border-0 rounded-0 hover-shadow'>
            <div className="card-img position-relative event-img">
              <Image
                src={`https:${image.url}`}
                alt={`${entry.fields.title} event thumbnail image`}
                height={image.details.image?.height}
                width={image.details.image?.width}
              />
            </div>
            <div className="card-date">
              <span>{day}</span>
              <br />
              {month}
            </div>
            <Card.Body>
              <p><FaMapMarkerAlt /> {entry.fields.location}</p>

              <h4 className="card-title">
                {entry.fields.title}
              </h4>

            </Card.Body>
          </Card>
        </a>
      </Link>
    </Col >
  );
};

export default EventPreview;

export function GetDay(dateString: string) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'd')}</time>
}

export function GetMonth(dateString: string) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL')}</time>
}