const ExplorerController = require("./../../../lib/controllers/ExplorerController");
const ExplorerServices = require("./../../../lib/services/ExplorerServices");
const FizzbuzzServices = require("./../../../lib/services/Fizzbuzzservice");
const Reader = require("./../../../lib/utils/Reader");

describe("Test para ExplorerController", () => {
    test("1.- getExplorersByMission length", () => {
        const ExplorersByMissionLength = ExplorerController.getExplorersByMission("node");        
        expect(ExplorersByMissionLength).toHaveLength(10);
    });

    test("2.- getExplorersUsernameByMission", () => {
        const ExplorersUsernameByMission = ExplorerController.getExplorersUsernameByMission("node");
        expect(ExplorersUsernameByMission).toContain("ajolonauta15");
    });

    test("3.- getExplorersAmountByMission", () => {
        const ExplorersAmountByMission = ExplorerController.getExplorersAmountByMission("java");
        expect(ExplorersAmountByMission).toBe(5);
    });

    test("4.- getApplyValidationInNumber", () => {
        const applyValidationInNumber15 = ExplorerController.getApplyValidationInNumber(15);
        expect(applyValidationInNumber15).toBe("FIZZBUZZ")

        const applyValidationInNumber5 = ExplorerController.getApplyValidationInNumber(5);
        expect(applyValidationInNumber5).toBe("BUZZ")

        const applyValidationInNumber3 = ExplorerController.getApplyValidationInNumber(3);
        expect(applyValidationInNumber3).toBe("FIZZ")

        const applyValidationInNumber1 = ExplorerController.getApplyValidationInNumber(1);
        expect(applyValidationInNumber1).toBe(1)
    })
});