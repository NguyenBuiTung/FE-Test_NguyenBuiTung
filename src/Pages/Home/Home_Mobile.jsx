import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getProductApi } from '../../redux/productReducer/productReducer';

export default function Home_Mobile() {
  const {arrProduct} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  // const stateA = useSelector(state => state.productReducer.stateA);

  useEffect(()=>{
    //Hàm này sẽ 1 lần sau khi component load xong giao diện
    //Gọi api
    const action = getProductApi();
    /*
     action = async dispatch => {
          //Xử lý api
          let result = await axios({
              url:'https://shop.cyberlearn.vn/api/Product',
              method:'GET'
          });
          //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
          //Tạo ra action creator đưa dữ liệu lên reducer
          const action = getDataProductAction(result.data.content);
          dispatch(action);
      }
    */
    dispatch(action);
    
  },[])

  return (
    <div>
      <div className='carousel'>

      </div>

      <div className='container'>
        <h3>Product list</h3>
        <div className='product-list'>
            {arrProduct.map((prod,index)=>{
              return <div className='d-flex mt-2' key={index}>
                <div style={{width:'25%',height:'100%'}}>
                    <img src={prod.image} className='w-100 h-100' style={{objectFit:'cover'}} alt='...' /> 
                </div>
                <div className='content'>
                    <h6>{prod.name}</h6>
                    <p>{prod.description.length > 75 ? prod.description.substr(0,75) + '...' : prod.description}</p>
                    <div className='w-100 text-right'>
                        <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>View detail</NavLink>
                    </div>
                </div>
            </div>
            })}
        </div>
      </div>
    </div>
  )
}
