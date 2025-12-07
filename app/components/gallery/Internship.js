import Image from "next/image"
export default function Internship(){
    return(
    <div className="carousel  w-[800px] h-[550px] max-md:w-[300px] max-md:h-[200px] ">
  <div id="slide1" className="carousel-item relative w-full" >
    <Image width={1200} height={330} src="/tii-kittinan-pages/image/internshipall/playsmart.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide7" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image width={1200} height={330}
      src="/tii-kittinan-pages/image/internshipall/playsmart1.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <Image width={1200} height={330}
      src="/tii-kittinan-pages/image/internshipall/playsmart2.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <Image width={1200} height={330}
      src="/tii-kittinan-pages/image/internshipall/playsmart3.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <Image width={1200} height={330}
      src="/tii-kittinan-pages/image/internshipall/playsmart4.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <Image width={1200} height={330}
      src="/tii-kittinan-pages/image/internshipall/playsmart5.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide5" className="btn btn-circle">❮</a>
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide7" className="carousel-item relative w-full">
    <Image width={1200} height={330}
      src="/tii-kittinan-pages/image/internshipall/playsmart6.jpg" 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    )
}