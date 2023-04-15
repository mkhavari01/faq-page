import "./App.css";
import { FAQPage } from "./page/FAQPage";
import { publicUrl } from "./utils/utils";

function App() {
  return (
    <div className="App">
      <section className="header">
        <div>
          <h1 className="danaBolder">سوالات متداول</h1>
          <p className="router danaRegular">
            <span>{"صفحه اصلی"}</span> {" > سوالات متداول"}{" "}
          </p>
        </div>
        <div>
          <span className="icon-shadow">
            <img src={publicUrl("shareIcon.png")} alt="share-icon" />
          </span>
        </div>
      </section>
      <div className="accordions-holder">
        <FAQPage />
      </div>
    </div>
  );
}

export default App;
