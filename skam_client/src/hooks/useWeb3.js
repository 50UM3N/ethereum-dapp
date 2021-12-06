import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = ({ abi, networks }) => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const func = async () => {
            let contractABI = abi;
            let contractAddress = networks[5777].address;
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
            let contract = new web3.eth.Contract(contractABI, contractAddress);
            let acc = await web3.eth.getAccounts();

            let admin = await contract.methods.isAdmin().call({ from: acc[0] });
            let user = await contract.methods.getUser().call({ from: acc[0] });
            setUser({ added: user.added, vote: user.vote, voted: user.voted });
            setAdmin(admin);
            setWeb3(web3);
            setAccounts(acc);
            setContract(contract);
            setIsPending(false);
        };
        func();
    }, [abi, networks]);

    return [web3, contract, accounts, isPending, { user, setUser }, admin];
};

export default useWeb3;
