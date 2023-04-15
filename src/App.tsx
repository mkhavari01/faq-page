import './App.css';
import { FAQPage } from './page/FAQPage';
// import { Counter } from './redux/test';
import { publicUrl } from './utils/utils';

function App() {
  return (
    <div className="App">
      <section className="header">
        <div>
          <h1>سوالات متداول</h1>
          <p>{"صفحه اصلی > سوالات متداول"} </p>
        </div>
        <div>
          <span className='icon-shadow'>
            <img src={publicUrl('shareIcon.png')} alt='share-icon'  />
          </span>
        </div>
      </section>
      <FAQPage/>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
