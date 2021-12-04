const SKAM = artifacts.require("Skam");

contract("SkamContract", () => {
    let skam = null;
    before(async () => {
        skam = await SKAM.new([
            "0x63616e6469646174653100000000000000000000000000000000000000000000",
            "0x6332000000000000000000000000000000000000000000000000000000000000",
            "0x6333000000000000000000000000000000000000000000000000000000000000",
        ]);
    });

    it("Should get number 1", async () => {
        const data = await skam.addVoter(
            "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
        );
        const newData = await skam.vote(1);
        const newNewData = await skam.getWinnerIndex();
        assert(newNewData.toNumber() === 1);
    });
    // it("Check for event", async () => {
    //     const returnValue = await storageContract.store(10);
    //     console.log(returnValue.logs);
    //     // assert(returnValue.toNumber() === 10);
    // });
    // it("set a new number", async () => {
    //     const data = await storageContract.retrieve();
    //     assert(data.toNumber() === 10);
    // });
});
