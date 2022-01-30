import Link from 'next/link'
import { IEvent } from "@src/types/generated/contentful";
import { parseISO, format } from 'date-fns'
import { Card, Row } from 'react-bootstrap';
import { FaCalendar, FaMapMarker } from 'react-icons/fa';

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  let time = entry.fields.dateAndTime
  let date = Date(time)

  return (
    <Row className='mb-2'>
      <Link href={`/events/${entry.fields.slug}`}>
        <a>
          <Card>
            <Card.Body>
              <Card.Title>
                {entry.fields.title}
              </Card.Title>
              <Card.Subtitle>
                <FaCalendar /> {date}
                <br />
                <FaMapMarker /> {entry.fields.location}
              </Card.Subtitle>

              <Card.Text>
                Click for more details
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Row>
  );
};

export default EventPreview;

export function Date(dateString: string) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}