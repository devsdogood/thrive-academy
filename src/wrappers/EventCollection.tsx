const EventCollection: React.FC = ({ children }) => {
    return (
        <div id="events-body" className="event-list">
            {children}
        </div>
    );
}

export default EventCollection;
