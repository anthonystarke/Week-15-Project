import React from "react";

const ArticleImage = (props) => {
  // console.log(props)
  return (
    <div>
    <img src = {props.image} height = "300px" ></img>
    </div>
  )
}

export default ArticleImage;
