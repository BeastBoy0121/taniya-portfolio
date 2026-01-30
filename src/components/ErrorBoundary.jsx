import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center h-screen w-full bg-slate-950 text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
                        <p className="mb-4">We couldn't load the experience.</p>
                        <button
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
