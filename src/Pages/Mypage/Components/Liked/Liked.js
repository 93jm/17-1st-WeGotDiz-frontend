import React, { Component } from 'react';
import './Liked.scss';

class Liked extends Component {
  render() {
    const { img, percent, price, title, company, catagory } = this.props;
    return (
      <div className="liked">
        <div className="imgBox">
          <img src={img} alt={catagory} />
          <div className="info">
            <div className="leftText">
              <span className="percent">{percent}%</span>
              <span className="price">{price}원 달성</span>
              <span className="date">00일 남음</span>
            </div>
            {/* {date[0] === '-' ? (
              <span className="productDate">종료</span>
            ) : (
              <span className="productDate">{date}일 남음</span>
            )} */}
          </div>
        </div>
        <div className="textBox">
          <h4 className="title">{title}</h4>
          <p className="company">{company}</p>
          <div className="bottomText">
            <span className="catagory">{catagory}</span>
            <span className="reward">성공해야 리워드</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Liked;
