import React from "react";

const Title2 = () => {
    let csst21 = {
        marginTop: "100px",
        textAlign: "center",
    };
    const titleStyle = {
        marginTop: "80px",
        marginBottom: "20px",  // 아래쪽 여백 추가
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px" // 텍스트와 이미지 사이 간격
    };

    const imgStyle = {
        width: "30px", // 이미지 크기 조절
        height: "30px"
    };
    return (
        <>
        <h4 style={titleStyle}>
                <img src={process.env.PUBLIC_URL + '/img-1/star.jpg'} alt="star" style={imgStyle} />
                Ornament SET
                <img src={process.env.PUBLIC_URL + '/img-1/star.jpg'} alt="star" style={imgStyle} />
        </h4>
        <p style={{ textAlign: "center" }} />
        <p>추가로 구매하는 오너먼트 세트</p>
        </>
    );
};

export default Title2;