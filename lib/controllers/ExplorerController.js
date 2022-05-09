const ExplorerServices = require("./../services/ExplorerServices");
const FizzbuzzServices = require("./../services/Fizzbuzzservice");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.filterByMission(explorers, mission);
    }

    static getExplorersUsernameByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getAmountOfExplorersByMission(explorers, mission);
    }

    static getApplyValidationInNumber(number) {        
        return FizzbuzzServices.applyValidationInNumber(number)
        
    }

}

module.exports = ExplorerController;