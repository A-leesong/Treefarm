// src/components/Customer.js
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img-1/customer-center.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "50px",
        paddingBottom: "50px",
        minHeight: "100vh"
      }}
    >
      <Container>
        {/* 고객센터 제목 + 이모티콘 */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "48px"
          }}
        >
          🌳 고객센터 🌳
        </h1>

        <Row className="justify-content-center">
          <Col md={8}>
            {/* 카드: 운영 안내 / 문의 방법 / 참고 안내 */}
            <Card
              style={{
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                padding: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Card.Body>
                {/* 운영 안내 박스 */}
                <div
                  style={{
                    backgroundColor: "#fdc9ccff",
                    color: "#800000",
                    fontWeight: "bold",
                    padding: "15px 20px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    textAlign: "center",
                    fontSize: "24px"
                  }}
                >
                  운영 안내
                </div>
                <Card.Text
                  style={{
                    fontSize: "18px",
                    marginBottom: "30px",
                    textAlign: "center"
                  }}
                >
                  평일 <span style={{ fontWeight: "bold" }}>09:00 ~ 18:00</span>
                </Card.Text>

                {/* 문의 방법 박스 */}
                <div
                  style={{
                    backgroundColor: "#d0f0c0",
                    color: "#228B22",
                    fontWeight: "bold",
                    padding: "15px 20px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    textAlign: "center",
                    fontSize: "24px"
                  }}
                >
                  문의 방법
                </div>
                <Card.Text
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    textAlign: "center"
                  }}
                >
                  📞 전화: <span style={{ fontWeight: "bold" }}>070-1234-5678</span>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    textAlign: "center"
                  }}
                >
                  ✉️ 이메일: <span style={{ fontWeight: "bold" }}>support@treefarm.com</span>
                </Card.Text>

                {/* 참고 안내 박스 */}
                <div
                  style={{
                    backgroundColor: "#fff3cd",
                    color: "#856404",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    width: "200px",
                    position: "relative",
                    left: "0",
                    top: "10px",
                    zIndex: 2,
                    textAlign: "center",
                    margin: "0 auto"
                  }}
                >
                  📌 참고 안내
                </div>
              </Card.Body>
            </Card>

            {/* 카드 바깥쪽 아래 내용 박스 */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid #fff3cd",
                borderRadius: "8px",
                padding: "20px",
                marginTop: "20px",
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "1.6"
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                - 점심시간 12:00 ~ 13:00에는 전화 연결이 어려울 수 있습니다.<br />
                - 공휴일 및 임의 휴무일에는 전화 상담이 제한될 수 있으니 양해 부탁드립니다.<br />
                문의는 언제나 이메일로 남겨주시면 최대한 신속하게 답변드리겠습니다.
              </div>

              {/* 홈으로 가기 버튼 */}
              <button
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "#800000",
                  color: "#fff",
                  border: "none",
                  padding: "10px 25px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  marginTop: "10px"
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#550000")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#800000")}
              >
                🏠 홈으로 가기
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Customer;
