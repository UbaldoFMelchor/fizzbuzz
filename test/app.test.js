const Reader = require("./../lib/utils/Reader")
const ExplorerServices = require("./../lib/services/ExplorerServices")

test('1.- Reader ok', () => {
    const explorers = Reader.readJsonFile("explorers.json")
      expect(explorers).toBe(explorers);
  });

test('2.- Explorer Services: filterbymission', () => {
    const explorerByMission = ExplorerServices.filterByMission()
        expect(explorerByMission).toBe(explorerByMission);

})