import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/ui/button/Button";
import CardTitle from "@/components/ui/card/CardTitle";
import EmailInput from "@/components/ui/input/EmailInput";
import GoogleButton from "@/components/ui/button/GoogleButton";

export const metadata: Metadata = {
  title: "SIPTATIF",
};

export default function LoginPage() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      {/* HeroSection */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-2xl mx-auto mt-5 text-center">
          <h1 className="block text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl lg:leading-tight">
            Let&apos;s Organize Easily with
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600"> SIPTATIF</span>
          </h1>
        </div>
        <div className="max-w-3xl mx-auto mt-5 text-center">
          <p className="text-lg text-slate-600">
            Sistem Informasi Pendaftaran Tugas Akhir Teknik Informatika
            <br />
            Universitas Islam Negeri Sultan Syarif Kasim Riau
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-xl">
          <div className="p-4 sm:p-7">
            <CardTitle cardName="Sign in" lineText="Don't have an account yet? " linkText="Sign up here" href="/register" />

            <div className="mt-5">
              <GoogleButton buttonName="Sign in with Google" />

              <form>
                <div className="grid gap-y-4">
                  <EmailInput labelName="Email address" errorText="Please include a valid email address so we can get back to you" />

                  {/* Password Input */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block mb-2 text-sm">
                        Password
                      </label>
                      <Link className="text-sm font-medium text-indigo-600 decoration-2 hover:underline" href="/recover">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
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

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border border-slate-200 rounded text-indigo-600 focus:ring-indigo-500" />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link href="/beranda">
                    <Button buttonName="Sign in" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
