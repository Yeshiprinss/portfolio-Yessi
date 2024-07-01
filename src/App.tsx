import './App.css';
import Header from './components/header/header';
import AboutMe from './components/hero/about-me';
import Services from './components/hero/services/services';
import Backend from './components/skills/backend';
import Frontend from './components/skills/frontend';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Services />
      <h1 className="bg-black text-3xl font-bold text-center text-white">Development Technologies</h1>
      <div className="flex flex-col lg:flex-row mx-auto w-full">
        <Frontend />
        <Backend />
      </div>
    </>
  );
}

export default App;
