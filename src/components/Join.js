import React, { useState } from "react";
import "./Join.css";

const Join = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        alert("회원가입 완료!");
        console.log(formData);
    };

    return (
        <div className="Join-container"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img-1/background2.jpg)`}}>
            <form className="Join-form" onSubmit={handleSubmit}>
                <h2>회원가입</h2>

                {/* 계정 정보 섹션 */}
                <div className="Join-section">
                    <h4>Account Information / 가입정보</h4>

                        <div className="form-group">
                            <label>아이디</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="사용하실 아이디를 입력하세요."
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력하세요."
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>비밀번호 확인</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="위에 작성하신 비밀번호와 일치하는 비밀번호를 입력해주세요."
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                />
                                </div>
                        </div>
                        {/* 개인정보 섹션 */}
                        <div className="Join-section">
                            <h4>Personal Information / 개인 정보</h4>
                            
                            <div className="form-group">
                            <label>이름</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="이름"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            </div>
                            <div className="form-group">
                            <label>전화번호</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="전화번호"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            </div>
                            <div className="form-group">
                            <label>이메일</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="이메일"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            </div>
                            <div className="form-group">
                            <label>주소</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="주소"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
};

export default Join;
