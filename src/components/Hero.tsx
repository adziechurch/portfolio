import Typewriter from 'typewriter-effect';
import '../App.css';

function Hero() {
  return (
    <section id="hero" className="section flex grow flex-col gap-[25px] place-content-center place-items-center">
      <div>
        <h1 className={`text-white`}>Hi, I'm Adam</h1>
        <p className={`mt-2 text-white-100`}>
          I do
          <Typewriter
            options={{
              strings: ['REST APIs', 'Microservices', 'Domain-Driven Design', 'Automated Testing'],
              autoStart: true,
              loop: true,
              deleteSpeed: 'natural',
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default Hero;
