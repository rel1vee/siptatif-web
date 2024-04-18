import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/ui/button/Button";
import CardTitle from "@/components/ui/card/CardTitle";
import EmailInput from "@/components/ui/input/EmailInput";
import GoogleButton from "@/components/ui/button/GoogleButton";

export const metadata: Metadata = {
  title: "SIPTATIF - Sign Up",
};

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen my-7">
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-md rounded-xl">
        <div className="p-4 sm:p-7">
          <CardTitle cardName="Sign up" lineText="Already have an account? " linkText="Sign in here" href="/" />

          <div className="mt-5">
            <GoogleButton buttonName="Sign up with Google" />

            <form>
              <div className="grid gap-y-4">
                <EmailInput labelName="Email address" errorText="Please include a valid email address so we can get back to you" />

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none 0"
                      required
                      aria-describedby="password-error"
                    />
                    <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
                      <svg className="text-red-500 size-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="hidden mt-2 text-xs text-red-600" id="password-error">
                    8+ characters required
                  </p>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="block w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="confirm-password-error"
                    />
                    <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
                      <svg className="text-red-500 size-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="hidden mt-2 text-xs text-red-600" id="confirm-password-error">
                    Password does not match the password
                  </p>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input id="terms-conditions" name="terms-conditions" type="checkbox" className="shrink-0 mt-0.5 border border-slate-200 rounded text-indigo-500 focus:ring-indigo-500" />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="terms-conditions" className="text-sm">
                      I accept the{" "}
                      <Link className="font-medium text-indigo-600 decoration-2 hover:underline" href="#">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>

                <Button buttonName="Sign up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
