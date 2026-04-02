import React from "react";
import { useNavigate } from "react-router-dom";

const ComOrnament = ({ id, imgUrl, title, content, price }) => {
    const navigate = useNavigate();

    return (
        <div 
            className="col-md-4 mb-4" 
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/detail/ornament/${id}`)}
        >
            <img 
                src={`${process.env.PUBLIC_URL}/img-1/ornament/${imgUrl}`} 
                alt={title} 
                style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} 
            />
            <h5 style={{ marginTop: "10px" }}>{title}</h5>
            <p>{content}</p>
            <p>{price}원</p>
        </div>
    );
};

export default ComOrnament;
