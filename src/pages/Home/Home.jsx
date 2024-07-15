import Title from "../../components/Title/Title";
import MainButton from "../../components/MainButton/MainButton";
import styles from "./style.module.css";
function Home() {
  return (
    <>
      <div className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <div
              className={`d-flex flex-column justify-content-center align-items-start vh-100 ${styles.content__item1}`}
            >
              <div className="container padding__main text-center text-md-start">
                <Title>
                  Hi!
                  <br />
                  Im Jackson
                </Title>
                <p className={`${styles.text}`}>
                  100% html5 bootstrap templates Made <br />
                  By <a href="#">Colorlib.com</a>
                </p>
                <MainButton>
                  view portfolio <i className="fa-solid fa-briefcase"></i>
                </MainButton>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className={`d-flex flex-column justify-content-center align-items-start vh-100 ${styles.content__item2}`}
            >
              <div className="container padding__main text-center text-md-start">
                <Title>
                  I am
                  <br />a Designer
                </Title>
                <p className={`${styles.text}`}>
                  100% html5 bootstrap templates Made <br />
                  By <a href="#">Colorlib.com</a>
                </p>
                <MainButton>
                  download cv <i className="fa-solid fa-download"></i>
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
