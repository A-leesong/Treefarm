import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";

const Detail = ({ tree, ornament, houseplant, addToCart }) => {
    const { type: paramType, paramId } = useParams();
    const navigate = useNavigate();

    let item = null;
    if (paramType === "ornament") {
        item = ornament.find((f) => String(f.id) === paramId);
    } else if (paramType === "houseplant") {
        item = houseplant.find((f) => String(f.id) === paramId);
    } else {
        item = tree.find((f) => String(f.id) === paramId);
    }

    if (!item) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>상품을 찾을 수 없습니다.</h2>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                    홈으로 이동
                </button>
            </div>
        );
    }

    const { imgUrl, title, content, detail, price } = item;

    const handleAddToCart = () => {
        addToCart({
            ...item,
            quantity: 1,
            price: Number(item.price),
        });

        if (window.confirm("장바구니에 안전하게 담겼습니다.\n장바구니로 이동하시겠습니까?")) {
            navigate("/cart");
        }
    };

    return (
        <div className="detail-container">
            
            {/* 서브 이미지 영역 (오른쪽으로 감) */}
            <div className="detail-leftright">
                <img
                    src={process.env.PUBLIC_URL + "/img-1/side detail.jpg"}
                    alt="서브 이미지"
                    className="side-img"
                />
            </div>

            {/* 상품 정보 영역 (왼쪽으로 감) */}
            <div className="detail-page">
                <div className="text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/" + imgUrl || "/img-1/background.jpg"}
                        alt={title}
                        className="detail-img"
                    />

                    <h2 className="mt-3">{title}</h2>
                    <p>{Number(price).toLocaleString()}원</p>
                    <p>{content}</p>

                    {paramType === "tree" && detail && (
                        <div className="detail-description">
                            {detail.map((d, index) => (
                                <p key={index}>{d}</p>
                            ))}
                        </div>
                    )}

                    <div className="mt-3">
                        <button className="btn btn-success me-2" onClick={handleAddToCart}>
                            장바구니 담기
                        </button>
                        <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>
                            뒤로가기
                        </button>
                        <button className="btn btn-info me-2" onClick={() => navigate("/cart")}>
                            장바구니 보기
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Detail;
