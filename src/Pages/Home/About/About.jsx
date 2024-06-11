import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div id="about" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-5 top-1/2"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h3>
          <h1 className="text-5xl font-bold mb-8">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="mb-5 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="mb-8 text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="btn text-white text-lg font-semibold btn-error">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;