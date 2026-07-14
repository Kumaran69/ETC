import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    alert("Login Successful");
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(signupData);
    alert("Account Created Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {isLogin ? "Welcome Back 👋" : "Create Account"}
        </h1>

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="text-gray-600 text-sm">Email</label>

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Password</label>

              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter password"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <button
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>

          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-5">

            <div>
              <label className="text-gray-600 text-sm">Full Name</label>

              <input
                type="text"
                name="name"
                value={signupData.name}
                onChange={handleSignupChange}
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Email</label>

              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Password</label>

              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                placeholder="Create password"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                placeholder="Confirm password"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <button
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>

          </form>
        )}

        <div className="mt-6 text-center">

          <p className="text-gray-600">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-2 text-indigo-600 font-semibold hover:underline"
          >
            {isLogin ? "Create Account" : "Login Instead"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;