class ExplorerServices {
    static filterByMission(explorers, mission) {
        const explorerByMission = explorers && explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {

    }

    static getExplorersUsernamesByMission(explorers, mission) {

    }
}

module.exports = ExplorerServices