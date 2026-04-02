import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
    const navigate = useNavigate();

    const increaseQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Number(item.quantity) + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && Number(item.quantity) > 1
                    ? { ...item, quantity: Number(item.quantity) - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
        0
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">🛒 장바구니</h2>

            {cartItems.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ) : (
                <>
                    <Table bordered hover>
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>상품명</th>
                                <th>가격</th>
                                <th>수량</th>
                                <th>합계</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{Number(item.price).toLocaleString()}원</td>
                                    <td>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => decreaseQty(item.id)}
                                        >
                                            −
                                        </Button>{" "}
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => increaseQty(item.id)}
                                        >
                                            +
                                        </Button>
                                    </td>
                                    <td>
                                        {(Number(item.price) * Number(item.quantity)).toLocaleString()}원
                                    </td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            삭제
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <h4 className="text-end mt-3">
                        총 결제금액: <strong>{totalPrice.toLocaleString()}원</strong>
                    </h4>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Button variant="secondary" onClick={() => navigate(-1)}>
                            이전 페이지로
                        </Button>

                        <Button
                            variant="success"
                            onClick={() => {
                                if (cartItems.length === 0) {
                                    alert("장바구니가 비어 있습니다.");
                                    return;
                                }
                                alert(`총 결제금액 ${totalPrice.toLocaleString()}원 결제 완료!`);
                                setCartItems([]);
                            }}
                        >
                            결제하기
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
