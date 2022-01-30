import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IEvent } from "@src/types/generated/contentful";
import { Breadcrumb } from "react-bootstrap";
import { Date } from '../previews/EventPreview';
import { FaCalendar, FaMapMarker } from "react-icons/fa"

type EventViewProps = {
    entry: IEvent;
}

const EventView: React.FC<EventViewProps> = ({ entry }) => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
                <Breadcrumb.Item active>{entry.fields.title}</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h1>{entry.fields.title}</h1>
                <div>
                    <span>
                        <FaCalendar /> {Date(entry.fields.dateAndTime)}{` `}
                        <FaMapMarker /> {entry.fields.location}
                    </span>
                </div>
                <br />
                <div>{documentToReactComponents(entry.fields.content.fields.content)}</div>
            </div>
        </>
    );
};

export default EventView;
