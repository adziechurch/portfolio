import './App.css';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Experience from './components/Experience.tsx';

function App() {
  return (
    <>
      <section className="flex grow flex-col gap-[25px] place-content-center place-items-center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Hi, I'm Adam</h1>
          <p>I do software engineering</p>
        </div>
      </section>

      <div className="ticks"></div>
      <section className="spacer"></section>

      <section id="about">
        <p className="section-subtext">Introduction</p>
        <h2 className="section-header">Overview</h2>
        <div className="section-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </section>

      <div className="ticks"></div>
      <section className="spacer"></section>

      <Experience />

      <div className="ticks"></div>
      <section className="spacer"></section>

      <section className="projects">
        <p className="section-subtext">My work</p>
        <h2 className="section-header">Projects</h2>
        <div className="section-content">Coming soon</div>
      </section>

      <div className="ticks"></div>
      <section className="spacer"></section>
    </>
  );
}

export default App;
