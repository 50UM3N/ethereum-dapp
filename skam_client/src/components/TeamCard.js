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
                    <div className="card-body">
                        {children}

                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-primary btn-sm">
                                Vote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
