// src/components/List.js
import React from "react";
import Products from "./Products";
import Title2 from "./Title2";

const List = ({ tree, ornament, input, limit }) => {
    const filteredTree = tree
        .filter((item) =>
        item.title?.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, limit); // 처음 N개만 보여주기

    const filteredOrnament = ornament
        .filter((item) =>
        item.title?.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, limit); // 처음 N개만 보여주기

    return (
        <div className="container" style={{ marginTop: "30px" }}>
        <div className="row product-list-row">
            {filteredTree.map((ele) => (
            <div key={ele.id} className="col-md-4 mb-5">
                <Products {...ele} type="tree" />
            </div>
            ))}

            <Title2 />

            {filteredOrnament.map((ele) => (
            <div key={ele.id} className="col-md-4 mb-5">
                <Products {...ele} type="ornament" />
            </div>
            ))}
        </div>
        </div>
    );
};

export default List;
