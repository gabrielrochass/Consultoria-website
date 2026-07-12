'use client';

import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaAddressBook } from 'react-icons/fa';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import styles from './Contato.module.css';

const INSTAGRAM = 'https://www.instagram.com/smterceirizacaoeservicos/';
const LINKTREE = 'https://linktr.ee/smterceirizacaoeservicos';
const WHATSAPP = buildWhatsAppUrl('Olá! Gostaria de conversar.');
const WHATSAPP_CURRICULO = buildWhatsAppUrl('Olá! Gostaria de enviar meu currículo.');

const initialForm = { nome: '', email: '', mensagem: '' };

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome} (${form.email}).\n\n${form.mensagem}`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
    setStatus('Abrindo o WhatsApp para você enviar a mensagem…');
    setForm(initialForm);
  };

  return (
    <div id="contato" className={styles.container}>
      <div className={styles.left}>
        <h2>Entre em Contato</h2>
        <p>
          Estamos aqui para ajudar! Fale com a gente pelo WhatsApp ou redes sociais, ou preencha o
          formulário ao lado — ele abre uma conversa no nosso WhatsApp com a sua mensagem pronta.
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
          <button type="submit" className={styles.submit}>
            <FaWhatsapp aria-hidden="true" /> Enviar pelo WhatsApp
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
}
