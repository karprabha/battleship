import "./styles/style.css";
import gameView from "./views/gameView";
import gameController from "./controllers/gameController";

const newGameController = gameController(gameView());
newGameController.init();
