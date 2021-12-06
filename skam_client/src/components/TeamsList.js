import TeamCard from "./TeamCard";
import { useState, useEffect } from "react";
const TeamsList = ({ web3, SKAMContract, toast, setUser }) => {
    const [teams, setTeams] = useState(null);
    const [pending, setPending] = useState(false);
    const handleVote = async (index) => {
        let acc = await web3.eth.getAccounts();
        setPending(true);
        SKAMContract.methods
            .vote(index)
            .send({ from: acc[0] })
            .then((data) => {
                toast.setToastData({
                    enable: true,
                    toastTitle: "Success",
                    toastBody: "You give your vote successfully!!!",
                });
                let userData = data.events.Vote.returnValues[0];
                console.log(userData);
                setUser({
                    added: userData.added,
                    vote: userData.vote,
                    voted: userData.voted,
                });
            })
            .catch((e) => {
                let error = JSON.parse(e.message.split("'")[1]).value.data
                    .message;
                toast.setToastData({
                    enable: true,
                    toastTitle: "Error",
                    toastBody: error,
                });
                setPending(false);
            });
    };
    useEffect(() => {
        const func = async () => {
            let userDetails = await SKAMContract.methods.getTeams().call();
            userDetails = userDetails.map((item, index) => {
                return {
                    index: index,
                    name: web3.utils.hexToString(item[0]),
                    vote: item[1],
                };
            });
            let arr = userDetails.map((item) => {
                return (
                    <div className="col-md-6" key={item.index}>
                        <TeamCard
                            thumbnail="/assets/teams/team1.png"
                            web3={web3}
                            SKAMContract={SKAMContract}
                        >
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                Fight for right to repair
                            </p>
                            <div className="d-flex justify-content-end">
                                <button
                                    onClick={() => {
                                        handleVote(item.index);
                                    }}
                                    className="btn btn-outline-primary btn-sm"
                                    disabled={pending}
                                >
                                    Vote
                                </button>
                            </div>
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
