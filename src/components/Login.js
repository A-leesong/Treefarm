import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/"); // 홈으로 이동
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // 실제 로그인 처리 로직은 여기서 API 호출
        console.log("로그인 시도:", { username, password });
        alert(`로그인 정보\n아이디: ${username}\n비밀번호: ${password}`);
    };

    return (
        <div className="login-container" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img-1/background.jpg)`,
        }}
        >
        <form className="login-form" onSubmit={handleLogin}>
            <h2>로그인</h2>
            <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit">로그인</button>
        <button onClick={goHome}>홈으로가기</button>
        </form>

        </div>
    );
};

export default Login;
