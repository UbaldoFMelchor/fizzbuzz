const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { request } = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request,response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request,response) => {
    const mission = request.params.mission;
    const ExplorersAmountByMission = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: ExplorersAmountByMission});
});

app.get("/v1/explorers/usernames/:mission", (request,response) => {
    const mission = request.params.mission;
    const ExplorersUsernameByMission = ExplorerController.getExplorersUsernameByMission(mission);
    response.json({mission: request.params.mission, explorers: ExplorersUsernameByMission});
});

app.get("/v1/fizzbuzz/:score", (request,response) => {
    const score = request.params.score;
    const ApplyValidationInNumber = ExplorerController.getApplyValidationInNumber(score);
    response.json({score: request.params.score, trick: ApplyValidationInNumber});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});