import React from "react";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="posts-container">
      <div className="parent">
        <div className="posts-content">
          <div className="posts-heading">
            <h1>Latest Posts</h1>
          </div>
          <div className="card-contents">
            <div class="card">
              <img src="https://picsum.photos/id/404/367/267" />
              <h3>Lorem ipsum</h3>
              <div className="focus-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> <a href="#">Link to source</a>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="https://picsum.photos/id/404/367/267" />
              <h3>Lorem ipsum</h3>
              <div className="focus-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> <a href="#">Link to source</a>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="https://picsum.photos/id/404/367/267" />
              <h3>Lorem ipsum</h3>
              <div className="focus-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> <a href="#">Link to source</a>
                </p>
              </div>
            </div>
          </div>

          <div className="para">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              natus debitis voluptate voluptatum fuga itaque dolore neque sequi
              nihil vitae dignissimos laudantium unde, aliquid cum laboriosam
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
