import { Routes, Route, useNavigate, Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
        style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "20px 40px",
            textAlign: "center",
        }}
        >
        {/* 오른쪽: 링크 메뉴 */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginBottom: "15px" }}>
            <Link to="/customer" style={{ color: "#fff", textDecoration: "none" }}>고객센터</Link>
            <Link to="/faq" style={{ color: "#fff", textDecoration: "none" }}>FAQ</Link>
            <Link to="/exchange" style={{ color: "#fff", textDecoration: "none" }}>교환/반품</Link>
            <Link to="/shipping" style={{ color: "#fff", textDecoration: "none" }}>배송조회</Link>
            <Link to="/terms" style={{ color: "#fff", textDecoration: "none" }}>이용약관</Link>
            <Link to="/privacy" style={{ color: "#fff", textDecoration: "none" }}>개인정보처리방침</Link>

        {/* 회사 정보 */}
        <p
            style={{
            padding: "0 16px",
            margin: "5px 0",
            color: "#555",
            }}
        >
            © 2025 TREE FARM &nbsp;|&nbsp; 대표: 홍길동 &nbsp;|&nbsp; 사업자등록번호: 123-45-67890 &nbsp;|&nbsp; 이메일: info@treefarm.com
        </p>

        {/* 안내 문구 */}
        <p
            style={{
            padding: "0 16px",
            margin: "5px 0",
            color: "#b8b4b4",
            }}
        >
            © 이 홈페이지에 사용된 글은 ChatGPT의 도움을 받았고, unsplash의 이미지를 사용하여 제작된 연습용 홈페이지입니다.
        </p>
        </div>
        </footer>
    );
};

export default Footer;
