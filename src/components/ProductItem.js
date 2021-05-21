import React from 'react';
import './productItem.css';

const ProductItem = ({ item, onAdd }) => {
  return (
    <div className="col-md-4 col-sm-6 p-0 m-0  p-2" key={item.id}>
      <div className="card p-0 m-0 single-card" style={{ height: '100%' }}>
        <div
          className="card-header p-0 m-0 text-center"
          style={{ height: 250, overflow: 'hidden' }}
        >
          <img
            src={item.image}
            alt=""
            className="img-fluid"
            style={{ height: 'inherit', width: '100%' }}
          />
        </div>
        <div className="card-body p-0">
          <div className="row p-0 m-0 py-2 px-1 font-weight-bold">
            <div className="col-6">
              <div>{item.name}</div>
            </div>
            <div className="col-6 text-right text-success">
              <div> &#8377;{item.price}</div>
            </div>
            <div className="col-6 pt-2 m-auto">
              {[...Array(item.rating)].map((it, index) => (
                <i key={index} className="fas fa-star text-warning"></i>
              ))}
              {[...Array(5 - item.rating)].map((it, index) => (
                <i key={index} className="far fa-star"></i>
              ))}
            </div>
            <div className="col-6 pt-2 text-right">
              <button
                onClick={() => onAdd(item)}
                className="btn"
                style={{
                  backgroundColor: '#f6d70e',
                  border: '1px solid black',
                  borderRadius: 30,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}
              >
                ADD TO CART
              </button>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
          <div className="row p-0 m-0 px-1 text-center pb-1">
            <div className="col-12">
              <div className="font-weight-bold text-justify">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
