import Link from 'next/link'
import { IEvent } from "@src/types/generated/contentful";

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  let time = entry.fields.dateAndTime
  let date = new Date(time)
  let formattedTime = date.toDateString()


  
  return (
    <div className='event-preview'>
      <p className='event-preview-title'>{entry.fields.title} at slug{" "}</p>
      <p className='event-preview-date'>{formattedTime}</p>

      SEE MORE: <a className='event-preview-link' href={`/events/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </div>
  );
};

export default EventPreview;
