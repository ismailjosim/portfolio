import React from 'react';
import '../Styles/Testimonials.css'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import av01 from '../../assets/avatar1.jpg';
const data = [
    {
        picture: av01,
        name: "ismail",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam perferendis adipisci natus consequatur molestiae quibusdam optio corrupti expedita quidem! Asperiores, in. Ipsum obcaecati sapiente, expedita est labore cumque veritatis?"
    },
    {
        picture: av01,
        name: "ismail",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam perferendis adipisci natus consequatur molestiae quibusdam optio corrupti expedita quidem! Asperiores, in. Ipsum obcaecati sapiente, expedita est labore cumque veritatis?"
    },
    {
        picture: av01,
        name: "ismail",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam perferendis adipisci natus consequatur molestiae quibusdam optio corrupti expedita quidem! Asperiores, in. Ipsum obcaecati sapiente, expedita est labore cumque veritatis?"
    },
    {
        picture: av01,
        name: "ismail",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam perferendis adipisci natus consequatur molestiae quibusdam optio corrupti expedita quidem! Asperiores, in. Ipsum obcaecati sapiente, expedita est labore cumque veritatis?"
    },
    {
        picture: av01,
        name: "ismail",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam perferendis adipisci natus consequatur molestiae quibusdam optio corrupti expedita quidem! Asperiores, in. Ipsum obcaecati sapiente, expedita est labore cumque veritatis?"
    },
    {
        picture: av01,
        name: "ismail",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam perferendis adipisci natus consequatur molestiae quibusdam optio corrupti expedita quidem! Asperiores, in. Ipsum obcaecati sapiente, expedita est labore cumque veritatis?"
    },
]



const Testimonials = () => {




    return (
        <section id='testimonials' className='section_wrapper'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                navigation
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay
            >
                {data.map((item, idx) => {
                    const { picture, name, review } = item;
                    return <SwiperSlide key={idx} className='testimonials'>
                        <div className="client_avatar">
                            <img src={picture} alt="" />
                        </div>
                        <div className="client_content">
                            <h5 className='client_name'>{name}</h5>
                            <small className="client_review">{review}</small>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>
        </section>
    );
};

export default Testimonials;
