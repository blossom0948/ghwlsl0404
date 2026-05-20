"use client"

import { Button } from "@/components/ui/button"

const GoogleLogoSVG = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
  >
    <g>
      {/* Google Blue */}
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      {/* Google Red */}
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      {/* Google Yellow */}
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      {/* Google Red */}
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </g>
  </svg>
)

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-black page-transition relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Card with Glassmorphism */}
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-3xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/40 dark:border-white/10 animate-slide-in">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              Snail.AI
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              로그인하여 시작하세요
            </p>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                Sign in with
              </span>
            </div>
          </div>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 mb-6 hover:shadow-lg hover:scale-105 active:scale-95">
            <GoogleLogoSVG />
            <span className="text-gray-900 dark:text-gray-100 font-semibold">
              Google로 로그인
            </span>
          </button>

          {/* Terms */}
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            로그인하면 서비스 약관에 동의합니다
          </p>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Create stunning YouTube thumbnails with AI
          </p>
        </div>
      </div>
    </div>
  )
}
