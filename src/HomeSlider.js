import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, left: "10px", zIndex: 2 }}
        onClick={onClick}
        />
    );
    }

    function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, right: "10px", zIndex: 2 }}
        onClick={onClick}
        />
    );
    }

    const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
        <div style={{ paddingBottom: "15px" }}>
            <ul style={{ margin: "0" }}>{dots}</ul>
        </div>
        )
    };

    const slides = [
        `${process.env.PUBLIC_URL}/img-1/slider.jpg`,
        `${process.env.PUBLIC_URL}/img-1/slider2.jpg`,
        `${process.env.PUBLIC_URL}/img-1/slider3.jpg`
];

    return (
        <div className="slider" style={{ position: "relative", height: "500px", overflow: "hidden" }}>
        <Slider {...settings}>
            {slides.map((src, index) => (
            <div key={index}>
                <img
                src={src}
                alt={`슬라이드${index + 1}`}
                style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    objectPosition: "center 50%", // 중간~하단 위치 조정
                    display: "block"
                }}
                />
            </div>
            ))}
        </Slider>

        <div className="slider-text" style={{
            position: "absolute",
            top: "43%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
        }}>
            <h1>특별한 크리스마스를 위한 준비</h1>
            <p>다양한 색상과 사이즈의 트리로 나만의 공간을 완성하세요.</p>
        </div>
        </div>
    );
};

export default HomeSlider;
