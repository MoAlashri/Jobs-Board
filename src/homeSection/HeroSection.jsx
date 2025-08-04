import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import job from '../assets/images/job-1.jpg'
import job1 from '../assets/images/job.jpg'
import job2 from '../assets/images/job2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export default function HeroSection() {

  const navigate = useNavigate()
  return (
    <div className='w-full mx-auto max-w-7xl h-[calc(100vh-4.25rem)]  flex items-center justify-between min-h-[calc(100vh-4.25rem)]'>
      <div className="flex-1 bg-chambray-900 h-[520px] rounded-xl px-5 flex justify-center flex-col my-5 ">
        <h1 className="text-4xl font-extrabold leading-normal text-white md:text-5xl ">
          HireEdge makes <span className="text-chambray-500">hiring faster</span> 
        </h1>
        <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-lg font-poppins">
          Browse thousands of job opportunities tailored just for you. Start your journey towards a better future today.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 px-6 py-3 mt-6 font-semibold text-white transition duration-300 rounded bg-chambray-500 hover:bg-chambray-400 w-fit"
        >
          <span className="leading-none">Start Now</span>
          <FaArrowRight className="text-xl leading-none align-middle" />
        </button>
      </div>

      <div className="flex-1 hidden md:flex ">
        <Swiper
         modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 1000 }}
          className="w-[700px] max-w-[600px] shadow-lg rounded-xl"
        >
          <SwiperSlide>
            <img src={job} alt="Job 1" className="w-full rounded-lg h-[500px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={job1} alt="Job 2" className="w-full rounded-lg h-[500px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={job2} alt="Job 3" className="w-full rounded-lg h-[500px]" />
          </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  )
}
