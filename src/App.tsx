import { useState } from 'react';
import './index.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#hero">NOTtxJTE</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#security">Security</a></li>
        <li><a href="#integration">Integration</a></li>
        <li><a href="#signup">Pricing</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="dark" id="hero">
      <div className="container">
        <h1>NOTtxJTE</h1>
        <p className="subtitle" style={{ marginTop: '8px' }}>
          The modern standard for seamless enterprise operations.
        </p>
        
        <div className="cta-group">
          <a href="#features" className="btn-pill">Learn more &gt;</a>
          <a href="#signup" className="btn-primary">Get Started</a>
        </div>

        <div className="hero-image-placeholder"></div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="light" id="features">
      <div className="container">
        <h2>Intelligent execution.</h2>
        <p className="body-large" style={{ marginTop: '16px', color: 'var(--color-text-body-light)' }}>
          Experience unparalleled performance with our optimized architecture.<br />
          Built from the ground up to respect your time and resources.
        </p>

        <div className="grid-2">
          <div className="card">
            <div className="card-img-placeholder"></div>
            <h3>Lightning fast.</h3>
            <p style={{ marginTop: '8px', color: 'var(--color-text-body-light)' }}>
              Operations execute in milliseconds, so you never wait.
            </p>
            <a href="#features" className="link-learn-more" style={{ marginTop: '16px' }}>Learn more &gt;</a>
          </div>
          <div className="card" id="security">
            <div className="card-img-placeholder"></div>
            <h3>Bank-grade security.</h3>
            <p style={{ marginTop: '8px', color: 'var(--color-text-body-light)' }}>
              Your data is encrypted at rest and in transit. Always.
            </p>
            <a href="#security" className="link-learn-more" style={{ marginTop: '16px' }}>Learn more &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeepDive() {
  return (
    <section className="dark" id="integration">
      <div className="container">
        <h2>Pro-level control.</h2>
        <p className="body-large" style={{ marginTop: '16px', color: 'var(--color-text-body-dark)' }}>
          Advanced tools that adapt to your workflow, not the other way around.
        </p>

        <div style={{ marginTop: '48px', textAlign: 'left' }}>
          <div style={{
            background: 'var(--surface-dark-1)',
            borderRadius: '12px',
            padding: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}>
            <h3 style={{ color: 'var(--color-text-caption-dark)' }}>Dashboard UI Mockup Area</h3>
          </div>
        </div>
        
        <div className="cta-group" style={{ marginTop: '48px' }}>
          <a href="#features" className="btn-primary">Explore Features</a>
        </div>
      </div>
    </section>
  );
}

function SignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Since no local API is available, mock the request
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="light" id="signup">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Check your inbox.</h2>
          <p style={{ marginTop: '16px', color: 'var(--color-text-body-light)' }}>
            We've sent you an email with next steps.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="btn-pill"
            style={{ marginTop: '24px' }}
          >
            Start over
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="light" id="signup">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2>Ready to upgrade?</h2>
        <p style={{ marginTop: '16px', color: 'var(--color-text-body-light)' }}>
          Join thousands of teams already using NOTtxJTE.
        </p>

        <form 
          onSubmit={handleSubmit}
          style={{ marginTop: '40px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div className="form-group">
            <label htmlFor="email" className="form-label">Work Email</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="name@company.com" 
              className="form-input"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
            />
            {error && (
              <span id="email-error" className="form-error">{error}</span>
            )}
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ padding: '12px', marginTop: '8px' }}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DeepDive />
      <SignupForm />
    </>
  );
}

export default App;