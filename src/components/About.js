import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL}/img-1/about3.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // 세로 배치
      }}
    >
      {/* 글 내용 박스 */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 검은 반투명 배경
          color : "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "900px",
          lineHeight: "1.2",
          width: "100%",
          height: "100%",
        }}
      >
        <h2 className="mb-4">🏢 회사 소개</h2>
        <p>Tree Farm은 개성 있는 커스텀 트리를 제작하는 전문 회사입니다.</p>
        <p>저희는 고객의 취향과 공간에 맞춘 맞춤형 트리를 제공합니다.</p>
        <p>모든 트리는 고품질 재료와 정교한 장인 정신으로 만들어집니다.</p>
        <p>크리스마스 시즌뿐만 아니라 사계절 인테리어에도 어울리는 디자인을 추구합니다.</p>
        <p>다양한 색상과 크기 옵션으로 누구나 원하는 트리를 완성할 수 있습니다.</p>
        <p>고객이 직접 꾸미는 DIY 키트를 통해 특별한 경험을 선사합니다.</p>
        <p>환경을 생각하여 친환경 소재와 재활용 가능한 패키지를 사용합니다.</p>
        <p>온라인과 오프라인 매장에서 모두 쉽게 주문하고 체험할 수 있습니다.</p>
        <p>저희 전문가 팀이 고객의 공간에 맞는 트리 배치와 장식을 추천합니다.</p>
        <p>정기적인 신제품 출시로 트렌디하고 독창적인 디자인을 제공합니다.</p>
        <p>우리의 목표는 단순한 장식이 아닌, 따뜻하고 행복한 추억을 만드는 것입니다.</p>
        <p>앞으로도 고객의 소리에 귀기울이고, 혁신과 창의성을 바탕으로</p>
        <p>모두가 편하게 즐길수있는 트리를 선보이겠습니다.</p>
      </div>
      </div>
  );
};

export default About;
