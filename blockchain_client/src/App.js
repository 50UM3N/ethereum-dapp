import React, { useState, useEffect } from "react";
import Web3 from "web3";
import CONTRACT from "./contracts/Storage.json";
export default function App() {
    const [web3, setWeb3] = useState(null);
    const [storageContract, setStorageContract] = useState(null);
    const [number, setNumber] = useState(0);
    const [num, setNum] = useState(null);
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const func = async () => {
            const contractABI = CONTRACT.abi;
            const contractAddress = CONTRACT.networks[5777].address;
            let web3 = null;
            if (window.ethereum)
                try {
                    await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    web3 = new Web3(window.ethereum);
                } catch (e) {
                    console.log(e.message);
                    return;
                }
            else if (window.web3) web3 = new Web3(window.web3.currentProvider);
            else web3 = new Web3("http://127.0.0.1:9545/");
            const contract = new web3.eth.Contract(
                contractABI,
                contractAddress
            );
            const acc = await web3.eth.getAccounts();
            setWeb3(web3);
            setAccounts(acc);
            setStorageContract(contract);
        };
        func();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (number <= 0) return;
        const result = await storageContract.methods
            .store(number)
            .send({ from: accounts[0] });
        console.log(result);
    };

    const displayNumber = async () => {
        let data = await storageContract.methods.retrieve().call();
        const balance = web3.utils.fromWei(
            await web3.eth.getBalance(accounts[0])
        );
        console.log(balance);
        setNum(data);
    };

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="mb-3">
                    <label className="form-label">Input any number</label>
                    <input
                        onChange={(e) => {
                            setNumber(e.currentTarget.value);
                        }}
                        type="number"
                        name="number"
                        className="form-control"
                        value={number}
                    />
                </div>
                <button className="btn btn-secondary btn-sm">Add</button>
            </form>

            {num && <p className="mb-3"> Number : {num}</p>}

            <button className="btn btn-success btn-sm" onClick={displayNumber}>
                Display number
            </button>
        </div>
    );
}
