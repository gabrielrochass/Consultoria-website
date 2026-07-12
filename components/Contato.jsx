'use client';

import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaAddressBook } from 'react-icons/fa';
import styles from './Contato.module.css';

const INSTAGRAM = 'https://www.instagram.com/smterceirizacaoeservicos/';
const LINKTREE = 'https://linktr.ee/smterceirizacaoeservicos';
const WHATSAPP =
  'https://api.whatsapp.com/send/?phone=55081986454808&text=Ol%C3%A1%21+Gostaria+de+conversar.&type=phone_number&app_absent=0';
const WHATSAPP_CURRICULO =
  'https://api.whatsapp.com/send/?phone=55081986454808&text=Ol%C3%A1%21+Gostaria+de+enviar+meu+curr%C3%ADculo.&type=phone_number&app_absent=0';

const initialForm = { nome: '', email: '', mensagem: '' };

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const sending = status?.type === 'loading';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Enviando...' });
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: 'ok', msg: 'Mensagem enviada com sucesso! Em breve retornaremos.' });
        setForm(initialForm);
      } else {
        setStatus({ type: 'error', msg: data.error || 'Erro ao enviar a mensagem.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Erro ao enviar. Verifique sua conexão.' });
    }
  };

  return (
    <div id="contato" className={styles.container}>
      <div className={styles.left}>
        <h2>Entre em Contato</h2>
        <p>
          Estamos aqui para ajudar! Conecte-se conosco através das redes sociais ou preencha o
          formulário ao lado para nos enviar uma mensagem.
        </p>

        <div className={styles.social}>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <FaInstagram aria-hidden="true" /> Instagram
          </a>
          <a href={LINKTREE} target="_blank" rel="noopener noreferrer">
            <FaAddressBook aria-hidden="true" /> Linktr.ee
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </a>
        </div>

        <div className={styles.curriculo}>
          <p>Quer trabalhar conosco? Envie seu currículo pelo WhatsApp:</p>
          <a
            className={styles.whatsBtn}
            href={WHATSAPP_CURRICULO}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> Enviar currículo
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <h3>Envie sua Mensagem</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Escreva sua mensagem..."
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? 'Enviando...' : 'Enviar'}
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
