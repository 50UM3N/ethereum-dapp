import TeamCard from "./TeamCard";
const TeamsList = ({web3, SKAMContract}) => {
    return (
        <div className="card my-3">
            <div className="card-header">Vote</div>
            <div className="card-body">
                <div className="row g-3">
                    <div className="col-md-6">
                        <TeamCard thumbnail="/assets/teams/team1.png" web3={web3} SKAMContract={SKAMContract}>
                            <h5 className="card-title">Soumen Khara</h5>
                            <p className="card-text">
                                Fight for right to repair
                            </p>
                        </TeamCard>
                    </div>
                    <div className="col-md-6">
                        <TeamCard thumbnail="/assets/teams/team1.png" web3={web3} SKAMContract={SKAMContract}>
                            <h5 className="card-title">Soumen Khara</h5>
                            <p className="card-text">
                                Fight for right to repair
                            </p>
                        </TeamCard>
                    </div>
                    <div className="col-md-6">
                        <TeamCard thumbnail="/assets/teams/team1.png" web3={web3} SKAMContract={SKAMContract}>
                            <h5 className="card-title">Soumen Khara</h5>
                            <p className="card-text">
                                Fight for right to repair
                            </p>
                        </TeamCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TeamsList;