const EventCollection: React.FC = ({ children }) => {
    return (
        <div id="events-body" style={{ width:'600px',display:'flex',flexDirection:'column',margin:'0 auto', backgroundColor:"white"}}>
            {children}
        </div>
    );
}

export default EventCollection;
