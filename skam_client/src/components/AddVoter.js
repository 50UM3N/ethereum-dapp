import { useState } from "react";

const AddVoter = ({ handleAddVoter, pending }) => {
    const [addressInput, setAddressInput] = useState("");
    return (
        <div className="card my-3">
            <div className="card-header">Add new voter to voter list</div>
            <div className="card-body">
                <form
                    onSubmit={(e) =>
                        handleAddVoter(e, addressInput, (data) => {
                            setAddressInput("");
                        })
                    }
                >
                    <label className="form-label">
                        Enter the account address and add to the account to
                        voter list
                    </label>
                    <div className="input-group mb-3">
                        <input
                            value={addressInput}
                            onChange={(e) => {
                                setAddressInput(e.currentTarget.value);
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Ethereum account"
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                            disabled={pending}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVoter;
