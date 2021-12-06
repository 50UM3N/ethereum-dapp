const TeamCard = ({ children, thumbnail }) => {
    return (
        <div className="card">
            <div className="row g-0">
                <div
                    className="col-sm-4 p-3"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img width="100%" src={thumbnail} alt="team " />
                </div>
                <div
                    className="col-sm-8"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="card-body">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
