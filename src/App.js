import React from 'react';

function App() {
  return (
    <div>
      <section className="fxt-animation template">
        <div className="bg-overlay">
          <div className="fxt-content">
            <div
              className="logo-header"
              style={{ textAlign: 'center', marginBottom: '50px' }}
            >
              <a href="#" className="fxt-logo">
                {/* <img src='./' alt="Logo" /> */}
                <img src={require('./asset/img/logo.png')} alt="logo" />
              </a>
            </div>
            <div className="fxt-form">
              <p>Login into your account</p>
              <form method="POST">
                <div className="form-group">
                  <div className>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="fxt-transformY-50 fxt-transition-delay-2">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="********"
                      required="required"
                    />
                    <i
                      toggle="#password"
                      className="fa fa-fw fa-eye toggle-password field-icon"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="fxt-transformY-50 fxt-transition-delay-3">
                    <div className="fxt-checkbox-area">
                      <div className="checkbox">
                        <input id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">Keep me logged in</label>
                      </div>
                      <a
                        href="forgot-password-23.html"
                        className="switcher-text"
                      >
                        Forgot Password
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="fxt-transformY-50 fxt-transition-delay-4">
                    <button type="submit" className="fxt-btn-fill">
                      Log in
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="fxt-style-line">
              <div className="fxt-transformY-50 fxt-transition-delay-5">
                <h3>Or Login With</h3>
              </div>
            </div>
            <ul className="fxt-socials">
              <li className="fxt-google">
                <div className="fxt-transformY-50 fxt-transition-delay-6">
                  <a href="#" title="google">
                    <i className="fab fa-google-plus-g" />
                    <span>Google +</span>
                  </a>
                </div>
              </li>
              <li className="fxt-twitter">
                <div className="fxt-transformY-50 fxt-transition-delay-7">
                  <a href="#" title="twitter">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                </div>
              </li>
              <li className="fxt-facebook">
                <div className="fxt-transformY-50 fxt-transition-delay-8">
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                </div>
              </li>
            </ul>
            <div className="fxt-footer">
              <div className="fxt-transformY-50 fxt-transition-delay-9">
                <p>
                  Don't have an account?
                  <a href="register-23.html" className="switcher-text2">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
