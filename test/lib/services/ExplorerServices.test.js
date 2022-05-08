const ExplorerServices = require("../../../lib/services/ExplorerServices");

describe("Test para ExplorerServices", () => {
    test("1.- filterbymission", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerServices.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    
    });

    test("2.- getAmountOfExplorersByMission", () => {
        const explorers = [
            {name:"botxido1", mission: "node"},
            {name:"botxido2", mission: "java"},
            {name:"botxido3", mission: "node"},
        ];      
        const explorersInNodeMission = ExplorerServices.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNodeMission).toBe(2);
    });
});
