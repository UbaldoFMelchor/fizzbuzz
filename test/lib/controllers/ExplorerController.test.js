const ExplorerController = require("./../../../lib/controllers/ExplorerController")
const ExplorerServices = require("./../../../lib/services/ExplorerServices")
const FizzbuzzServices = require("./../../../lib/services/Fizzbuzzservice")
const Reader = require("./../../../lib/utils/Reader")

describe("Test para ExplorerController", () => {
    test("1.- getExplorersByMission length", () => {
        const ExplorersByMissionLength = ExplorerController.getExplorersByMission("node");        
        expect(ExplorersByMissionLength).toHaveLength(10)
    })

    test("2.- getExplorersUsernameByMission", () => {
        const ExplorersUsernameByMission = ExplorerController.getExplorersUsernameByMission("node");
        expect(ExplorersUsernameByMission).toContain("ajolonauta15")
    })

    test("3.- getExplorersAmountByMission", () => {
        const ExplorersAmountByMission = ExplorerController.getExplorersAmountByMission("java");
        expect(ExplorersAmountByMission).toBe(5)
    })
})