import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}