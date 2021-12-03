const StorageContract = artifacts.require("Storage");

contract("StorageContract", () => {
    let storageContract = null;
    before(async () => {
        storageContract = await StorageContract.deployed();
    });

    it("Should get number 0", async () => {
        const data = await storageContract.retrieve();
        assert(data.toNumber() === 0);
    });
    it("Check for event", async () => {
        const returnValue = await storageContract.store(10);
        console.log(returnValue.logs);
        // assert(returnValue.toNumber() === 10);
    });
    it("set a new number", async () => {
        const data = await storageContract.retrieve();
        assert(data.toNumber() === 10);
    });
});
