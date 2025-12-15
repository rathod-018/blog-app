import React, { useState } from "react";
import authService from "../Appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../store/authSlice";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    setLoading(true);

    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(logIn(userData));
        navigate("/");
      }
    } catch (err) {
      setError(err?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#0e0e11] px-4">
      <div className="w-full max-w-lg rounded-xl bg-[#16161a] p-10 border border-[#2a2a2f] shadow-xl">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[90px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-200">
          Create your account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-amber-400 hover:text-amber-300 hover:underline"
          >
            Sign in
          </Link>
        </p>

        {error && (
          <p className="mt-6 text-center text-sm text-red-500">{error}</p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full name"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter a valid email address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 32,
              })}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
