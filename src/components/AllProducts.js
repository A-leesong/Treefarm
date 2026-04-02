import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import houseplant from "../db/houseplant"; // houseplant 데이터만 사용
import "./AllProducts.css";

const AllProducts = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortType, setSortType] = useState("default");
  const [imageUrl, setImageUrl] = useState("");

  // 이미지 로딩 상태를 추적하는 상태와 오류 상태를 컴포넌트 레벨에서 관리
  const [imageStates, setImageStates] = useState(
    houseplant.reduce((acc, item) => {
      acc[item.id] = { isImageLoaded: false, hasImageError: false };
      return acc;
    }, {})
  );

  // 검색 + 정렬 적용
  const filteredProducts = houseplant
    .filter((item) =>
      item.title.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "priceLow") return a.price - b.price;
      if (sortType === "priceHigh") return b.price - a.price;
      if (sortType === "name") return a.title.localeCompare(b.title);
      return 0;
    });

  // 이미지 로딩 상태 업데이트
  const handleImageLoad = (id) => {
    setImageStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], isImageLoaded: true }
    }));
  };

  // 이미지 오류 처리
  const handleImageError = (id) => {
    setImageStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], hasImageError: true }
    }));
  };

  return (
    <div className="product-container">
      {/* 상단 배너 */}
      <div
        className="top-banner"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img-1/homeplant.jpg)` }}
      >
        <h2>집에서 함께하는 나만의 작은 정원</h2>
        <p>집 안에서도 즐기는 나만의 작은 정원<br />
        초보자도 쉽게 키울 수 있는 관엽식물<br />
        바쁜 일상 속 힐링을 선물하세요</p>
      </div>

      {/* 검색바 + 정렬 */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="상품명을 검색해보세요"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="default">기본순</option>
          <option value="priceLow">가격 낮은순</option>
          <option value="priceHigh">가격 높은순</option>
          <option value="name">이름순</option>
        </select>
      </div>

      {/* 상품 리스트 */}
      <div className="product-grid">
        {filteredProducts.map((item) => {
          const imageUrl = process.env.PUBLIC_URL + item.imgUrl;
          console.log("Image URL:", imageUrl); // 로딩되는 이미지 경로 확인
          // 현재 아이템의 이미지 로딩 상태
          const { isImageLoaded, hasImageError } = imageStates[item.id] || {};

          return (
            <div
              key={item.id}
              className="product-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/detail/houseplant/${item.id}`)}
            >
                  <div className="img-wrapper">
                <img
                  src={hasImageError ? process.env.PUBLIC_URL + "/img-1/default.jpg" : imageUrl} // 이미지가 로딩 실패 시 기본 이미지로 대체
                  alt={item.title}  // item.title로 접근
                  onLoad={() => handleImageLoad(item.id)} // 이미지 로딩 완료 시 처리
                  onError={() => handleImageError(item.id)} // 이미지 로딩 실패 시 처리
                  className="product-img"
                  style={{ opacity: isImageLoaded ? 1 : 0.5 }} // 이미지 로딩 전에는 투명하게
                />
              </div>

              {/* 타이틀과 설명은 이미지가 로드된 후에 표시 */}
              {(isImageLoaded || hasImageError) ? (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <p className="price">₩{item.price.toLocaleString()}</p>
                </>
              ) : (
                <div className="loading-placeholder">이미지 로딩 중...</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default AllProducts;
