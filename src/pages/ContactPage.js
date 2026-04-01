import { useMemo, useState } from 'react';

export function ContactPage() {
  const [status, setStatus] = useState('idle');

  const title = useMemo(() => {
    if (status === 'sent') return 'Message sent';
    if (status === 'error') return 'Something went wrong';
    return 'Contact';
  }, [status]);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    setStatus('sent');
    form.reset();
  }

  return (
    <div className="stack">
      <section className="sectionHeader pageIntro">
        <h1 className="pageTitle">{title}</h1>
      </section>

      <section className="section section--lift">
        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <span className="label">Name</span>
            <input name="name" type="text" autoComplete="name" />
          </label>

          <label className="field">
            <span className="label">Email</span>
            <input name="email" type="email" autoComplete="email" />
          </label>

          <label className="field">
            <span className="label">Message</span>
            <textarea name="message" rows={6} />
          </label>

          <div className="formActions">
            <button className="button primary" type="submit">
              Send message
            </button>
            {status === 'sent' ? (
              <span className="success">Thanks! We’ll get back to you soon.</span>
            ) : null}
            {status === 'error' ? (
              <span className="error">Please fill out all fields.</span>
            ) : null}
          </div>
        </form>
      </section>
    </div>
  );
}

