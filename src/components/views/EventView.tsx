import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IEvent } from "@src/types/generated/contentful";
import { Breadcrumb, Container } from "react-bootstrap";
import { FaCalendar, FaMapMarker } from "react-icons/fa"
import PageContent from "@components/layout/PageContent";
import PageTitleSection from "@components/layout/PageTitleSection";
import { format, parseISO } from "date-fns";
import siteDataPreval from "@utils/siteData.preval";

type EventViewProps = {
    entry: IEvent;
}

const EventView: React.FC<EventViewProps> = ({ entry }) => {
    const { settings: { bannerImage } } = siteDataPreval;

    return (
        <>
            <PageTitleSection backgroundImage={bannerImage.fields.file.url} title={entry.fields.title} />
            <PageContent backgroundImage={''}>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
                        <Breadcrumb.Item active>{entry.fields.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div>
                        <h1>{entry.fields.title}</h1>
                        <div>
                            <FaCalendar /> {GetDate(entry.fields.dateAndTime)}{` `}
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

function GetDate(dateString: string) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}