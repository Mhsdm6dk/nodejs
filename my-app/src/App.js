import "./App.css";
import styles from "./styles.module.css";
import logo from "./image/logo.png";
import list from "./image/list.png";
import star from "./image/star.png";
import icon_info from "./image/icon_info.png";
import icon_menu from "./image/icon_menu.png";
import main_photo_text from "./image/main_photo_text.png";
import main_graph from "./image/main_graph.png";
import hex_morning from "./image/hex_morning.png";
import hex_lunch from "./image/hex_lunch.png";
import hex_dinner from "./image/hex_dinner.png";
import hex_snack from "./image/hex_snack.png";
import m01 from "./image/m01.png";
import m02 from "./image/m02.png";
import m03 from "./image/m03.png";
import m04 from "./image/m04.png";
import m06 from "./image/m06.png";
import m07 from "./image/m07.png";
import m08 from "./image/m08.png";
function App() {
  return (
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
      <div className={styles.banner}>
        <div className={styles.foodBannerImageBox}>
          <img className={styles.mainPhotoText} src={main_photo_text} />
        </div>
        <div className={styles.graphBannerBox}>
          <img className={styles.graphBanner} src={main_graph} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.list_hexBox}>
          <div className={styles.hexBox}>
            <img className={styles.hex} src={hex_morning} />
          </div>
          <div className={styles.hexBox}>
            <img className={styles.hex} src={hex_lunch} />
          </div>
          <div className={styles.hexBox}>
            <img className={styles.hex} src={hex_dinner} />
          </div>
          <div className={styles.hexBox}>
            <img className={styles.hex} src={hex_snack} />
          </div>
        </div>
        <div className={styles.listItemBox}>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m01} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m02} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m03} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m04} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m01} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m06} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m07} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.item}>
              <img className={styles.itemImage} src={m08} />
              <div className={styles.itemName}>05.21.Morning</div>
            </div>
          </div>
        </div>
        <div className={styles.body_buttonBox}>
          <div className={styles.body_button}>記録をもっと見る</div>
        </div>
      </div>
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
  );
}

export default App;
