interface EmailInputProps {
  labelName: string;
  errorText: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ labelName, errorText }) => {
  return (
    <div>
      <label htmlFor="email" className="block mb-2 text-sm">
        {labelName}
      </label>
      <div className="relative">
        <input type="email" id="email" name="email" className="block w-full px-4 py-3 text-sm border border-slate-200 rounded-lg disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
        <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
          <svg className="text-red-500 size-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
      <p className="hidden mt-2 text-xs text-red-600" id="email-error">
        {errorText}
      </p>
    </div>
  );
};

export default EmailInput;
