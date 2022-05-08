const Reader = require("./../lib/utils/Reader")

describe("Test para Reader", () => {
    test('1.- Reader ok', () => {
        const explorers = Reader.readJsonFile("explorers.json")
          expect(explorers).toBe(explorers);
      });
})



