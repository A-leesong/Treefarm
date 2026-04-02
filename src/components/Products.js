import { useNavigate } from "react-router-dom";

const Products = ({ id, title, price, imgUrl, content, type }) => {
    const navigate = useNavigate();

    // 이미지 경로 처리: 띄어쓰기를 %20으로 변환
    const imageUrl = process.env.PUBLIC_URL + "/" + imgUrl.replace(/\s/g, "%20");

    return (
        <div
        className="product-card"
        onClick={() => navigate(`/detail/${type}/${id}`)}
        style={{ cursor: "pointer" }}
        >
        {/* 이미지 */}
        <img
            src={imageUrl} // 변환된 이미지 경로 사용
            alt={title}
            onError={() => {
            // 이미지 로드 실패 시 경로를 콘솔에 출력
            console.log("Image failed to load:", imageUrl); // 경로 출력
            }}
            className="product-img"
        />

        {/* 상품명 */}
        <div className="product-title">{title}</div>

        {/* 가격 */}
        <div className="product-price">
            {price?.toLocaleString()}원
        </div>

        {/* 상품 설명 */}
        <div
            className="product-content"
            style={{ marginBottom: "25px", fontSize: "14px", color: "#555" }}
        >
            {content}
        </div>
        </div>
    );
};

export default Products;
