import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IEvent } from "@src/types/generated/contentful";
import { Breadcrumb, Container } from "react-bootstrap";
import { Date } from '../previews/EventPreview';
import { FaCalendar, FaMapMarker } from "react-icons/fa"
import Head from "next/head";
import PageContent from "@components/layout/PageContent";
import PageTitleSection from "@components/layout/PageTitleSection";

type EventViewProps = {
    entry: IEvent;
}

const EventView: React.FC<EventViewProps> = ({ entry }) => {
    return (
        <>
            <PageTitleSection backgroundImage={'/page-title.jpg'} title={entry.fields.title} />
            <PageContent backgroundImage={''}>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
                        <Breadcrumb.Item active>{entry.fields.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div>
                        <h1>{entry.fields.title}</h1>
                        <div>
                            <FaCalendar /> {Date(entry.fields.dateAndTime)}{` `}
                            <FaMapMarker /> {entry.fields.location}
                        </div>
                        <br />
                        <div>{documentToReactComponents(entry.fields.content.fields.content)}</div>
                    </div>
                </Container>
            </PageContent>
        </>
    );
};

export default EventView;
