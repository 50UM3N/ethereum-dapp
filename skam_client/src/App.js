import "./App.scss";

import TeamChart from "./components/TeamChart";
import TeamsList from "./components/TeamsList";
import useWeb3 from "./hooks/useWeb3";
import skam from "./contracts/skam.json";
import Loader from "./components/Loader";
import { useState } from "react";
import AddVoter from "./components/AddVoter";
import Toast from "./components/Toast";

const App = () => {
    const [web3, SKAMContract, accounts, isPending, user, admin] =
        useWeb3(skam);
    const [pending, setPending] = useState(false);
    const [toastData, setToastData] = useState({
        enable: false,
        toastTitle: "",
        toastBody: "",
    });
    const handleAddVoter = (e, value) => {
        e.preventDefault();
        if (!web3.utils.isAddress(value)) return;
        SKAMContract.methods
            .addVoter(value)
            .send({ from: accounts[0] })
            .then((data) => {
                console.log(data);
            })
            .catch((e) => {
                let error = JSON.parse(e.message.split("'")[1]).value.data
                    .message;
                setToastData((data) => ({
                    ...data,
                    ["enable"]: true,
                    ["toastTitle"]: "Ethereum Error",
                    ["toastBody"]: error,
                }));
            });
    };

    return (
        <>
            {isPending ? (
                <Loader />
            ) : (
                <div className="container my-5">
                    <div className="alert alert-primary" role="alert">
                        <h4 className="alert-heading">Welcome to SKAM</h4>
                        <p>
                            A simple digital voting solution made in top of
                            Ethereum blockchain and react by{" "}
                            <a href="#" class="alert-link">
                                50um3n
                            </a>{" "}
                            and{" "}
                            <a href="#" class="alert-link">
                                4rn4b
                            </a>{" "}
                            and y ou can star our repo
                        </p>
                        <hr />
                        <p className="mb-0">
                            Your are login with account {accounts[0]}, this is
                            the default account if you connect this DAPP to
                            multiple account
                        </p>
                    </div>
                    {admin && (
                        <AddVoter
                            handleAddVoter={handleAddVoter}
                            pending={pending}
                        />
                    )}
                    {!user.user.voted && (
                        <TeamsList
                            web3={web3}
                            SKAMContract={SKAMContract}
                            userDetails={user}
                            toast={{ toastData, setToastData }}
                            setUser={user.setUser}
                        />
                    )}

                    {user.user.voted && (
                        <>
                            <div className="alert alert-success" role="alert">
                                You already give your vote
                            </div>
                            <div className="card my-3">
                                <div className="card-header">Result</div>
                                <div className="card-body">
                                    <TeamChart />
                                </div>
                            </div>
                        </>
                    )}
                    <Toast setToastData={setToastData} toastData={toastData} />
                </div>
            )}
        </>
    );
};

export default App;
