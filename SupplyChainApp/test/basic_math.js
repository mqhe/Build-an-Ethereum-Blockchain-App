const basicMath = artifacts.require("basicMath");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('basicMath', async accounts => {
  it("the sum should not overflow", async () => {
    // Try to add 2^256 and 5 (should overflow and throw an exception)
    let contractInstance = await basicMath.deployed()
    const addResult = contractInstance.add(6, 5)
    let x = await contractInstance.MAX_UINT256()
    console.log(x)
    //assert.ok(false,"Threw an exception instead of overflowing.")
    //assert.ok(true,"Caught the exception.")
  })
});
