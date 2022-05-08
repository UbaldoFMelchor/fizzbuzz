const Reader = require("./../lib/utils/Reader")
const ExplorerServices = require("./../lib/services/ExplorerServices")

describe("Test para Reader", () => {
    test('1.- Reader ok', () => {
        const explorers = Reader.readJsonFile("explorers.json")
          expect(explorers).toBe(explorers);
      });
})

describe("Test para ExplorerServices", () => {
    test('1.- filterbymission', () => {
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerServices.filterByMission(explorers, "node");
            expect(explorersInNode.length).toBe(1);
    
    });
})
