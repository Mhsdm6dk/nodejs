import "./App.css";
import styles from "./styles.module.css";
import logo from "./image/logo.png";
import list from "./image/list.png";
import star from "./image/star.png";
import icon_info from "./image/icon_info.png";
import icon_menu from "./image/icon_menu.png";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/home/home";
import MyRecord from "./component/myRecord/myRecord";
import Column from "./component/Column/column";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.header}>
          <div className={styles.headerBox}>
            <div className={styles.header_left}>
              <img src={logo} className={styles.mainLogo} />
            </div>
            <div className={styles.header_right}>
              <div className={styles.buttonBox}>
                <div className={styles.button_iconBox}>
                  <img className={styles.button_icon} src={list} />
                </div>
                <div className={styles.button_buttonName}>自分の記録</div>
              </div>
              <div className={styles.buttonBox}>
                <div className={styles.button_iconBox}>
                  <img className={styles.button_icon} src={star} />
                </div>
                <div className={styles.button_buttonName}>チャレンジ</div>
              </div>
              <div className={styles.buttonBox}>
                <div className={styles.button_iconBox}>
                  <img className={styles.button_icon} src={icon_info} />
                </div>
                <div className={styles.button_buttonName}>お知らせ</div>
              </div>
              <div className={styles.buttonListBox}>
                <img className={styles.button_icon} src={icon_menu} />
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path={'/myRecord'}>
            <MyRecord />
          </Route>
          <Route path={'/column'}>
            <Column />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
        <div className={styles.footer}>
          <div className={styles.listButton}>
            <div className={styles.footer_button}>会員登録</div>
            <div className={styles.footer_button}>運営会社</div>
            <div className={styles.footer_button}>利用規約</div>
            <div className={styles.footer_button}>個人情報の取扱について</div>
            <div className={styles.footer_button}>特定商取引法に基づく表記</div>
            <div className={styles.footer_button}>お問い合わせ</div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
