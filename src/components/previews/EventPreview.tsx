import Link from 'next/link'
import { IEvent } from "@src/types/generated/contentful";
import styles from "../../styles/EventsStyle/EventsStyle.module.css";
type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  let time = entry.fields.dateAndTime
  let date = new Date(time)
  let formattedTime = date.toDateString()


  
  return (
    <div className={styles.eventPreview}>
      <p className={styles.eventPreviewTitle}>{entry.fields.title} at slug{" "}</p>
      <p className={styles.eventPreviewDate}>{formattedTime}</p>

      SEE MORE: <a className={styles.eventPreviewLink} href={`/events/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </div>
  );
};

export default EventPreview;
