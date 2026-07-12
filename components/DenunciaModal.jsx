'use client';

import { useEffect, useState } from 'react';
import styles from './DenunciaModal.module.css';

const initialForm = { nome: '', email: '', assunto: '', descricao: '' };

export default function DenunciaModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const sending = status?.type === 'loading';

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Enviando...' });
    try {
      const res = await fetch('/api/denuncia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: 'ok', msg: 'Denúncia enviada com sucesso!' });
        setForm(initialForm);
        setTimeout(() => {
          onClose();
          setStatus(null);
        }, 2000);
      } else {
        setStatus({ type: 'error', msg: data.error || 'Erro ao enviar a denúncia.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Erro ao enviar. Verifique sua conexão.' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="denuncia-title"
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        <h2 id="denuncia-title">Canal de Denúncias</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="d-nome">Nome (opcional)</label>
            <input
              type="text"
              id="d-nome"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="d-email">E-mail (opcional)</label>
            <input
              type="email"
              id="d-email"
              name="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="d-assunto">Assunto (obrigatório)</label>
            <input
              type="text"
              id="d-assunto"
              name="assunto"
              placeholder="Assunto da denúncia"
              value={form.assunto}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="d-descricao">Descrição (obrigatório)</label>
            <textarea
              id="d-descricao"
              name="descricao"
              rows="5"
              placeholder="Descreva a denúncia..."
              value={form.descricao}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? 'Enviando...' : 'Enviar Denúncia'}
          </button>
          {status && status.type !== 'loading' && (
            <p className={`${styles.status} ${status.type === 'ok' ? styles.ok : styles.error}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
