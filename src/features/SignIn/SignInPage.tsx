import { useAuth } from "context/AuthContext/AuthContext";

export const SignInPage = () => {
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return;
    }

    signIn(email.toString(), password.toString());
  };

  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>

              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input
                    required
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    required
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </fieldset>
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
