import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
           subHeading={"From 11:00am to 10:00pm"}
            heading={'order Online'}
            >

            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
          }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-24"
      >
         <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-20'>salads</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-20'>pizza</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-20'>soups</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-20'>desserts</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-4xl uppercase text-white text-center -mt-20'>salads</h3>
        </SwiperSlide>
      </Swiper>
        </section>

    );
};

export default Category;