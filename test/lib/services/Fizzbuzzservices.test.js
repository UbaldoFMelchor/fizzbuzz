const fizzbuzzservice = require("./../../../lib/services/Fizzbuzzservice");

describe("Test para fizzbuzzservices", () => {
    test("1.- applyValidationInExplorer", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorerfizzbuzz = fizzbuzzservice.applyValidationInExplorer(explorer1);
        expect(explorerfizzbuzz.trick).toBe(explorer1.score);
        
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerFizz = fizzbuzzservice.applyValidationInExplorer(explorer3);
        expect(explorerFizz.trick).toBe("FIZZ"); 
        
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerBuzz = fizzbuzzservice.applyValidationInExplorer(explorer5);
        expect(explorerBuzz.trick).toBe("BUZZ"); 
        
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerFizzBuzz =fizzbuzzservice.applyValidationInExplorer(explorer15);
        expect(explorerFizzBuzz.trick).toBe("FIZZBUZZ");
    });
});