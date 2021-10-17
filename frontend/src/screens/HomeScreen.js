import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from './../components/Message';
import Loading from '../components/Loading/Loading';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { Link } from 'react-router-dom';
import Meta from './../components/Meta';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const pageNumber = match.params.pageNumber || 1;

  const { products, loading, error, page, pages } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1 className="mt-3">Latest Products</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate className="pagination" pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
