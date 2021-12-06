import TeamCard from "./TeamCard";
import { useState, useEffect } from "react";
const TeamsList = ({ web3, SKAMContract }) => {
    const [teams, setTeams] = useState(null);
    useEffect(() => {
        const func = async () => {
            let userDetails = await SKAMContract.methods.getTeams().call();
            userDetails = userDetails.map((item) => {
                return {
                    name: web3.utils.hexToString(item[0]),
                    vote: item[1],
                };
            });
            let arr = userDetails.map((item) => {
                return (
                    <div className="col-md-6" key={Math.random()}>
                        <TeamCard
                            thumbnail="/assets/teams/team1.png"
                            web3={web3}
                            SKAMContract={SKAMContract}
                        >
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                Fight for right to repair
                            </p>
                        </TeamCard>
                    </div>
                );
            });
            setTeams(arr);
        };
        func();
    }, []);

    return (
        <div className="card my-3">
            <div className="card-header">Vote</div>
            <div className="card-body">
                <div className="row g-3">
                    {teams ? (
                        teams
                    ) : (
                        <div className="text-center">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamsList;
