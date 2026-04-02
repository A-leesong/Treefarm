import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import data from "./db/tree";
import data2 from "./db/ornament";
import Products from "./components/Products";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Title from "./components/Title";
import Title2 from "./components/Title2";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Detail from "./components/Detail";
import axios from "axios";
import Cart from "./components/Cart";
import TreeBoard from "./components/Board";
import houseplant from "./db/houseplant"; 
import AllProducts from "./components/AllProducts";
import HomeSlider from "./HomeSlider"; 
import Login from "./components/Login";
import Join from "./components/Join";
import Customer from "./components/Customer";


function App() {
  const [tree, setTree] = useState(data);
  const [ornament, setOrnament] = useState(data2);
  const [count, setCount] = useState(1);
  const [showAllProducts, setShowAllProducts] = useState(false); 
  const [cartItems, setCartItems] = useState([]);
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState(""); 
  const navigate = useNavigate();

  const addToCart = (item) => {
  setCartItems(prev => [...prev, item]);
};

  const sortByName = () => {
    const sortedTree = [...tree].sort((a, b) => (a.title > b.title ? 1 : -1));
    setTree(sortedTree);
  };

  const sortByPriceLowToHigh = () => {
    const sortedTree = [...tree].sort((a, b) => a.price - b.price);
    setTree(sortedTree);
  };

  const sortByPriceHighToLow = () => {
    const sortedTree = [...tree].sort((a, b) => b.price - a.price);
    setTree(sortedTree);
  };
  return (
    <div className="App">
      <Navbar variant="dark" style={{ background: "linear-gradient(to right, #800000, #003300)" }}>
        <Container>
          <Navbar.Brand
            onClick={() => { setShowAllProducts(false); navigate("/"); }}
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >
            TREE FARM
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { setShowAllProducts(false); navigate("/", { replace: true }); }}>홈으로</Nav.Link>
            <Nav.Link onClick={() => { 
                                setShowAllProducts(true); 
                                navigate("/allproducts");
                              }}>기존상품</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>장바구니</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>회사소개</Nav.Link>
            <Nav.Link onClick={() => navigate("/board")}>게시판</Nav.Link>
          </Nav>

             {/* 오른쪽 로그인 버튼 */}
            <Nav className="ms-auto">
              <Button
                variant="light"
                style={{ fontWeight: "bold", color: "#800000" , marginRight: "10px" }}
                onClick={() => navigate("/Login")} // 로그인 페이지로 이동
              >
                로그인
              </Button>
              <Button
                variant="light"
                style={{ fontWeight: "bold", color: "#800000" }}
                onClick={() => navigate("/Join")} // 로그인 페이지로 이동
              >
                가입하기
              </Button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
  {/* 홈 & 전체상품 화면 */}
  <Route
    path="/"
    element={
      !showAllProducts ? (
        // 기존 홈 화면 (슬라이더, 검색 및 상품 리스트)
        <div>
          {/* 슬라이더 */}
          <HomeSlider />

          <div className="banner">
            <span className="banner-icon">🚚</span>
            <p>25일까지 배송 가능한 마지막 트리마켓!</p>
            <span className="banner-icon">🎁</span>
          </div>

          {/* 검색 및 정렬 */}
          <div className="container my-3">
            <div className="p-3 border rounded" style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#f8f9fa", marginTop: "50px" }}>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>🔍 Search Products</div>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="상품명을 검색해보세요"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ height: "45px", flexGrow: 1, minWidth: 0 }}
                />
                <select
                  className="form-select"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  style={{ width: "150px", flexShrink: 0 }}
                >
                  <option value="default" disabled>정렬 선택</option>
                  <option value="priceLow">낮은 가격순</option>
                  <option value="priceHigh">높은 가격순</option>
                  <option value="name">이름순</option>
                </select>
              </div>
            </div>
          </div>

          <Title />

          {/* 상품 리스트 */}
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row product-list-row">
              {tree
                .filter((item) => item.title?.toLowerCase().includes(input.toLowerCase()))
                .map((ele) => (
                  <div key={ele.id} className="col-md-4 mb-5">
                    <Products {...ele} type="tree" />
                  </div>
                ))}

              <Title2 />

              {ornament
                .filter(item => input === "" || item.title?.toLowerCase().includes(input.toLowerCase()))
                .map(ele => (
                  <div key={ele.id} className="col-md-4 mb-5">
                    <Products {...ele} type="ornament" />
                  </div>
              ))}
            </div>
          </div>

          {/* ---------------------------- */}
          {/* 오너먼트 더보기 버튼 */}
          {/* ---------------------------- */}
          <div className="container" style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              onClick={() => {
                if (count === 1) {
                  axios.get(process.env.PUBLIC_URL + "/data/ornament2.json")
                    .then((result) => {
                      console.log("ornament2.json 데이터:", result.data); // 여기서 확인
                      setOrnament(prev => [...prev, ...result.data]);
                      setCount(prev => prev + 1); // count 업데이트도 여기서
                    })
                    .catch((error) => {
                      console.error(error);
                      alert("주소가 잘못되었습니다.");
                    });
                } else if (count === 2) {
                  axios.get(process.env.PUBLIC_URL + "/data/ornament3.json")
                    .then((result) => {
                      console.log("ornament3.json 데이터:", result.data); // 여기서 확인
                      setOrnament(prev => [...prev, ...result.data]);
                      setCount(prev => prev + 1);
                    })
                    .catch((error) => {
                      console.error(error);
                      alert("주소가 잘못되었습니다.");
                    });
                  setCount(count + 1);
                } else {
                  alert("더 이상 상품이 없습니다.");
                }
              }}

              style={{
                backgroundColor: "#800000",   // 버튼 배경색
                color: "#fff",                // 글자색
                border: "none",               // 테두리 제거
                padding: "10px 25px",         // 내부 여백
                fontSize: "16px",             // 글자 크기
                borderRadius: "5px",          // 모서리 둥글게
                cursor: "pointer",            // 마우스 커서 포인터
                transition: "all 0.3s ease",  // 호버 애니메이션
                marginBottom: "50px",
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#550000"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#800000"}
            >
              + 3개 상품 더 보기
            </Button>
          </div>
          <Footer />
          
        </div>
      ) : (
        // 전체상품 화면: AllProducts 컴포넌트로 분리
        <AllProducts addToCart={addToCart} showAllProducts={showAllProducts} />
      )
    }
  />
  
  {/* --- 수정된 부분 --- */}
  {/* 기존 홈 화면 라우트 중복 제거: 하나는 AllProducts로 처리 */}
  <Route path="/" element={<AllProducts addToCart={addToCart} showAllProducts={showAllProducts} />} />

    {/* 상품 리스트 페이지 (AllProducts) */}
    <Route
      path="/allproducts"  // 변경된 경로
      element={<AllProducts addToCart={addToCart} showAllProducts={showAllProducts} />}
    />


  {/* 상세 페이지 라우트 */}
<Route
  path="/detail/:type/:paramId"
  element={<Detail tree={tree} ornament={ornament} houseplant={houseplant} addToCart={addToCart} />}
/>

  
  {/* 개인정보처리방침 */}
  <Route path="/privacy" element={<Privacy />} />

  {/* 장바구니 */}
  <Route
    path="/cart"
    element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
  />

  {/* 회사소개 */}
  <Route path="/about" element={<About />} />

  {/* 게시판 */}
  <Route path="/board" element={<TreeBoard />} />

  {/* 404 */}
  <Route path="/*" element={<NotFound />} />

  {/* 회원가입 */}
  <Route path="/join" element={<Join />} />

  {/* 로그인 */}
  <Route path="/login" element={<Login />} />

  {/* 고객센터 */}
  <Route path="/customer" element= {<Customer />} />
</Routes>

    </div>
  );
}

export default App;
