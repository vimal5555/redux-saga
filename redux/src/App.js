import './App.css';
import { connect } from "react-redux";

import { GET_POSTS } from './redux/actions';
import { useEffect } from 'react';

function App(props) {
  useEffect(()=>{
props.getPosts()
  },[])
  console.log(props)
  return (
  
      <section
  className="ezy__signin3 light d-flex align-items-center"
  style={{
    backgroundImage:
      "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign-in-up-1.png)"
  }}
>
  <div className="container">
    <div className="row py-5">
      <div className="col-lg-5">
        <div className="card ezy__signin3-form-card">
          <div className="card-body p-md-5">
            <h2 className="ezy__signin3-heading mb-4 mb-md-5">Log In</h2>
            <form>
              <div className="form-group mb-4 mt-2">
                <label htmlFor="email" className="mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="form-group mb-2 mt-2">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="remember-me"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn ezy__signin3-btn-submit w-100"
              >
                Log In
              </button>
              <button className="btn w-100">Forget your password?</button>
              <div className="position-relative ezy__signin3-or-separator">
                <hr className="my-4 my-md-5" />
                <span className="px-2">Or</span>
              </div>
              <button className="btn btn-primary ezy__signin3-btn w-100 d-flex align-items-center mb-3">
                <span className="fab fa-facebook text-white fs-4" />
                <span className="w-100 text-center text-white">
                  Continue with Facebook
                </span>
              </button>
              <button className="btn btn-danger ezy__signin3-btn w-100 d-flex align-items-center">
                <span className="fab fa-google text-white fs-4" />
                <span className="w-100 text-center text-white">
                  Continue with Google
                </span>
              </button>
              <div className="text-center mt-4 mt-md-5">
                <p className="mb-0 opacity-50 lh-1">Don't have an account?</p>
                <a
                  href="#"
                  className="btn btn-link py-0 text-dark text-decoration-none"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
}


const mapStateToProps = (state) => ({
  data: state?.data,
  loading: state?.loading,
  error: state?.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (data) => dispatch({ type: GET_POSTS, payload: data }),
  // clearData: () => dispatch({ type: "clear_Register_data" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);