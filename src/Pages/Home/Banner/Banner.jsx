import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mb-32">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl object-cover" />
        <div className="absolute flex items-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515]">
          <div className="text-white pl-24">
            <h2 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg mb-8">
              There are many variations of passages of available, but <br /> The
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline btn-info">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl object-cover" />
        <div className="absolute flex items-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515]">
          <div className="text-white pl-24">
            <h2 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg mb-8">
              There are many variations of passages of available, but <br /> The
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline btn-info">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl object-cover" />
        <div className="absolute flex items-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515]">
          <div className="text-white pl-24">
            <h2 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg mb-8">
              There are many variations of passages of available, but <br /> The
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline btn-info">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl object-cover" />
        <div className="absolute flex items-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515]">
          <div className="text-white pl-24">
            <h2 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg mb-8">
              There are many variations of passages of available, but <br /> The
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline btn-info">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl object-cover" />
        <div className="absolute flex items-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515]">
          <div className="text-white pl-24">
            <h2 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg mb-8">
              There are many variations of passages of available, but <br /> The
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline btn-info">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl object-cover" />
        <div className="absolute flex items-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515]">
          <div className="text-white pl-24">
            <h2 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg mb-8">
              There are many variations of passages of available, but <br /> The
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline btn-info">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;