// src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 50, textAlign: "center" }}>
          <h1>Something went wrong 😢</h1>
          <p>Try refreshing the page or go back home.</p>
          <a href="/final_portfolio">Go Home</a>
        </div>
      );
    }
    
    return this.props.children;
  }
}