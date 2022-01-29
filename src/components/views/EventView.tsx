import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IEvent } from "@src/types/generated/contentful";
import { Date } from '../previews/EventPreview';

type EventViewProps = {
    entry: IEvent;
}

const EventView: React.FC<EventViewProps> = ({ entry }) => {
    return (
        <>
            <div id="event-component" className='event'>
                <h1 className="title">{entry.fields.title}</h1>
                <div className='date'>{Date(entry.fields.dateAndTime)}</div>
                <div className="location">{entry.fields.location}</div>
                <div>{documentToReactComponents(entry.fields.content.fields.content)}</div>
            </div>
        </>
    );
};

export default EventView;
