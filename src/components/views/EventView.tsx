import { IEvent } from "@src/types/generated/contentful";

type EventViewProps = {
    entry: IEvent;
}

const EventView: React.FC<EventViewProps> = ({ entry }) => {
    return (
        <>
            <b>Event Component!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default EventView;
