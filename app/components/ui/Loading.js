'use client';
import { Loader2, Sparkles } from 'lucide-react';

export default function Loading({ size = 'medium', text = 'Loading...' }) {
    const sizeClasses = {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-16 h-16'
    };

    const textSizeClasses = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg'
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="relative">
                {/* Outer rotating ring */}
                <div className={`${sizeClasses[size]} border-4 border-gray-700 border-t-red-500 rounded-full animate-spin`}></div>

                {/* Inner pulsing core */}
                <div className="absolute inset-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className={`${sizeClasses[size]} text-white animate-pulse`} />
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Loading text with shimmer effect */}
            {text && (
                <div className="mt-4 space-y-2">
                    <p className={`${textSizeClasses[size]} text-gray-400 font-mono`}>{text}</p>
                    <div className="flex space-x-1 justify-center">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skeleton loaders example */}
            <div className="mt-8 space-y-3 w-full max-w-md">
                <div className="skeleton h-4 rounded"></div>
                <div className="skeleton h-4 rounded w-3/4"></div>
                <div className="skeleton h-4 rounded w-1/2"></div>
            </div>
        </div>
    );
}

// Alternative minimalist loading component
export function MinimalLoader() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex space-x-1">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="w-1 h-8 bg-gradient-to-t from-red-500 to-pink-500 rounded-full animate-pulse"
                        style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '1s'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

// Full screen loading overlay
export function FullScreenLoader() {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center space-y-4">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-6 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
                </div>
                <p className="text-white font-mono text-lg animate-pulse">Loading amazing content...</p>
                <div className="flex space-x-2 justify-center">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-white rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}