'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import DenunciaModal from '@/components/DenunciaModal';

export default function SiteHeader() {
  const [isDenunciaOpen, setIsDenunciaOpen] = useState(false);

  return (
    <>
      <Navbar onOpenDenuncia={() => setIsDenunciaOpen(true)} />
      <DenunciaModal isOpen={isDenunciaOpen} onClose={() => setIsDenunciaOpen(false)} />
    </>
  );
}
