import React from "react";
import styles from "./Footer.module.scss";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
   
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__table_small}>
            <div className={styles.footer_left}>
              <p>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ <br /> «НИЖЕГОРОДСКАЯ ТВОРЧЕСКАЯ
                ЛАБОРАТОРИЯ 2Х2» (ООО «НТЛ «2Х2»)
              </p>
              <p>
                Юридический адрес: 603009, Нижегородская область,
                <br />
                г. Нижний Новгород, ул. Батумская, д. 3а, кв. 6. <br />
                р/с: 40702810342000042600 <br />
                Банк: ВОЛГО-ВЯТСКИЙ БАНК ПАО СБЕРБАНК
                <br />
                г. НИЖНИЙН НОВГОРОД <br />
                БИК 042202603 <br />
                к/с: 30101810900000000603
              </p>
              <p>
                ОГРН 1195275026341 от 16 мая 2019 г. ИНН/КПП 5261123341 526101001
              </p>
            </div>
            <div  className={styles.footer_right}>
              <div  className={styles.footer_right_info}>
                <h2>Контакты</h2>
    
                <p>+7 (920) XXX XX XX</p>
    
                <a href="ol-murave@yandex.ru">ol-murave@yandex.ru</a>
    
                <Button className={styles.button} variant="contained" disableElevation>
          Заказать обратный звонок
        </Button>
              </div>
    
              <div className={styles.footer_right_img}>
                <img src="images/telegramm.png" alt="" />
                <img src="images/whatsapp.png" alt="" />
                <img src="images/vk.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
