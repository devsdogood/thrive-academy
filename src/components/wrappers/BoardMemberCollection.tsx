const BoardMemberCollection: React.FC = ({ children }) => {
    return (
        <div>
            <h1>Thrive Academy Board Members</h1>
            <br />
            <div>
                {children}
            </div>
        </div>
    );
}

export default BoardMemberCollection;
