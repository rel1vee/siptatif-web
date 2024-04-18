import type { Metadata } from "next";
import Button from "@/components/ui/button/Button";
import CardTitle from "@/components/ui/card/CardTitle";
import EmailInput from "@/components/ui/input/EmailInput";

export const metadata: Metadata = {
  title: "SIPTATIF - Forgot Password",
};

export default function RecoverPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-xl">
        <div className="p-4 sm:p-7">
          <CardTitle cardName="Forgot Password?" lineText="Remember your password? " linkText="Sign in here" href="/" />

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <EmailInput labelName="Email address" errorText="Please include a valid email address so we can get back to you" />

                <Button buttonName="Reset password" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
