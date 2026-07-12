'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import styles from './DenunciaModal.module.css';

const initialForm = { nome: '', email: '', assunto: '', descricao: '' };

export default function DenunciaModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*Canal de Denúncias*\n\n` +
      `Identificação: ${form.nome || 'Anônimo'}\n` +
      `E-mail: ${form.email || 'Não informado'}\n` +
      `Assunto: ${form.assunto}\n\n` +
      `Descrição:\n${form.descricao}`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
    setStatus('Abrindo o WhatsApp para enviar sua denúncia…');
    setForm(initialForm);
    setTimeout(() => {
      onClose();
      setStatus('');
    }, 1500);
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
          <button type="submit" className={styles.submit}>
            <FaWhatsapp aria-hidden="true" /> Enviar pelo WhatsApp
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
}
