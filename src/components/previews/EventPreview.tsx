import Link from 'next/link'
import { IEvent } from "@src/types/generated/contentful";
import { parseISO, format } from 'date-fns'
import styles from "../../styles/EventsStyle/EventsStyle.module.css";

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  let time = entry.fields.dateAndTime
  let date = Date(time)



  return (
    <div className={styles.eventPreview}>
      <div className={styles.eventPreviewTitle}>{entry.fields.title} at slug{" "}</div>
      <div className={styles.eventPreviewDate}>{date}</div>
      <div className={styles.eventPreviewLocation}>{entry.fields.location}</div>

      SEE MORE: <a className={styles.eventPreviewLink} href={`/events/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </div>
  );
};

export default EventPreview;

export function Date(dateString: string) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}