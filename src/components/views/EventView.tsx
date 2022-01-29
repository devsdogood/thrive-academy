import { IEvent } from "@src/types/generated/contentful";
import { Children } from "react";

type EventViewProps = {
    entry: IEvent;
}

const EventView: React.FC<EventViewProps> = ({ entry }) => {
    return (
        <>
        <div id="event-component">
            <b>Event Component!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}
        </div>
            
        </>
    );
};

export default EventView;
