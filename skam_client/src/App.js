import "./App.scss";
import TeamCard from "./components/TeamCard";
import TeamChart from "./components/TeamChart";
const App = () => {
    return (
        <div className="container my-5">
            <div className="card my-3">
                <div className="card-header">Add new voter to voter list</div>
                <div className="card-body">
                    <label className="form-label">
                        Enter the account address and add to the account to
                        voter list
                    </label>
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ethereum account"
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="card my-3">
                <div class="card-header">Vote</div>
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-5">
                            <TeamCard thumbnail="/assets/teams/team1.png">
                                <h5 className="card-title">Soumen Khara</h5>
                                <p className="card-text">
                                    Fight for right to repair
                                </p>
                            </TeamCard>
                            <TeamCard thumbnail="/assets/teams/team1.png">
                                <h5 className="card-title">Soumen Khara</h5>
                                <p className="card-text">
                                    Fight for right to repair
                                </p>
                            </TeamCard>
                            <TeamCard thumbnail="/assets/teams/team1.png">
                                <h5 className="card-title">Soumen Khara</h5>
                                <p className="card-text">
                                    Fight for right to repair
                                </p>
                            </TeamCard>
                        </div>
                        <div className="col-md-7"></div>
                    </div>
                </div>
            </div>

            <div className="card my-3">
                <div class="card-header">Result</div>
                <div className="card-body">
                    <TeamChart />
                </div>
            </div>
        </div>
    );
};

export default App;
