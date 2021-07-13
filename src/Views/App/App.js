import "./App.css";
import { Switch, Route } from "react-router-dom";
import * as S from "./style";
import WelcomePage from "Views/WelcomePage";
import { LabelsContext, ThemeContext } from "helpers/context";
import { eng } from "languages";
import Game from "Views/Game";
import Theme from "components/style/themes";
import GameOver from "Views/GameOver";

function App() {
  const labels = eng();

  return (
    <ThemeContext.Provider value={Theme}>
      <LabelsContext.Provider value={labels}>
        <S.Body>
          <S.ColorBackground>
            <Switch>
              <Route exact path="/gameover" component={GameOver} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/" component={WelcomePage} />
            </Switch>
          </S.ColorBackground>
        </S.Body>
      </LabelsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
