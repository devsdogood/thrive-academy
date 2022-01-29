import Link from 'next/link'
import { IEvent } from "@src/types/generated/contentful";
import { parseISO, format } from 'date-fns'

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  return (
    <Link href={`/events/${entry.fields.slug}`}>
      <a>
        <div className='event-preview'>
          <span className="title">{entry.fields.title}</span> -{` `}
          <span className='date'>{Date(entry.fields.dateAndTime)}</span>
        </div>
      </a>
    </Link>
  );
};

export default EventPreview;

export function Date(dateString: string) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}