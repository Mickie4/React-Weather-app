import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className='App container-fluid pt-5 pb-5'>
      <Weather defaultCity='Tijuana' />
    </div>
  );
}
