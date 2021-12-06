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
        type: "",
        enable: false,
        toastTitle: "",
        toastBody: "",
    });
    const handleAddVoter = (e, value, callback) => {
        e.preventDefault();
        if (!web3.utils.isAddress(value)) return;
        setPending(true);
        SKAMContract.methods
            .addVoter(value)
            .send({ from: accounts[0] })
            .then((data) => {
                callback(data);
                setToastData({
                    type: "success",
                    enable: true,
                    toastTitle: "SKAM Success 😋",
                    toastBody: "Successfully add voter to voter list 😎",
                });
                setPending(false);
            })
            .catch((e) => {
                let error = JSON.parse(e.message.split("'")[1]).value.data
                    .message;
                setToastData({
                    type: "error",
                    enable: true,
                    toastTitle: "SKAM Error",
                    toastBody: error,
                });
                setPending(false);
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
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/50UM3N"
                                className="alert-link"
                            >
                                50UM3N
                            </a>{" "}
                            and{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/4RN4B"
                                className="alert-link"
                            >
                                4RN4B
                            </a>
                            . You can star our repo{" "}
                            <a
                                href="https://github.com/50UM3N/ethereum-dapp"
                                className="alert-link"
                            >
                                ethereum-dapp
                            </a>
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
                                    <TeamChart
                                        web3={web3}
                                        SKAMContract={SKAMContract}
                                    />
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
