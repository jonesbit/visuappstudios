'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
    return (
        <section className="py-24 bg-visu-light relative overflow-hidden">
            <style jsx global>{`
                .swiper-slide { transition: all 0.5s ease; height: auto !important; display: flex; }
                .testimonial-card { background-color: #ffffff; border-color: #f3f4f6; color: #4b5563; transform: scale(0.95); opacity: 0.7; }
                .testimonial-card .quote-icon { color: #4f46e5; opacity: 0.2; }
                .testimonial-card .client-name { color: #050505; }
                .testimonial-card .client-role { color: #4f46e5; }
                .swiper-slide-active .testimonial-card { background-color: #0f0f0f; border-color: #1f2937; color: #d1d5db; transform: scale(1.05); opacity: 1; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .swiper-slide-active .testimonial-card .quote-icon { color: #ffffff; opacity: 0.1; }
                .swiper-slide-active .testimonial-card .client-name { color: #ffffff; }
                .swiper-slide-active .testimonial-card .client-role { color: #db2777; }
                .swiper-button-next, .swiper-button-prev { color: #050505 !important; background: white; width: 50px; height: 50px; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
                .swiper-button-next::after, .swiper-button-prev::after { font-size: 20px !important; font-weight: bold; }
                @media (max-width: 768px) {
                    .mobile-nav-container {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin-top: 40px;
                        width: 100%;
                    }
                    .mobile-nav-container .swiper-button-next,
                    .mobile-nav-container .swiper-button-prev {
                        position: static !important;
                        margin: 0 !important;
                        transform: none !important;
                        transition: all 0.2s ease;
                    }
                    .mobile-nav-container .swiper-button-next:active,
                    .mobile-nav-container .swiper-button-prev:active {
                        color: #ec4899 !important;
                        background-color: rgba(236, 72, 153, 0.1);
                        border-radius: 50%;
                    }
                    .mySwiper {
                        padding-bottom: 20px !important;
                    }
                }
            `}</style>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Feedback</span>
                    <h2 className="text-4xl font-bold text-visu-black mb-6">O Impacto nos <span className="text-gradient">Negócios</span></h2>
                </div>

                <div className="w-full py-10 px-4">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 15000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        AS
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        DS
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        RC
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        MC
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        DS
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        RC
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between w-full shadow-lg relative">
                                <div className="text-6xl opacity-20 absolute top-6 right-8 font-serif quote-icon">"</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="mb-6 italic font-medium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam est ex saepe nostrum beatae voluptas? Earum maiores quasi, laboriosam facilis libero ex vero in animi aliquid praesentium, inventore sapiente?"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-100/10 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-visu-primary transition-colors duration-300">
                                        MC
                                    </div>
                                    <div>
                                        <h4 className="client-name font-bold text-sm">Autor</h4>
                                        <span className="client-role text-xs font-bold uppercase tracking-wide">Profissão</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="mobile-nav-container">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}