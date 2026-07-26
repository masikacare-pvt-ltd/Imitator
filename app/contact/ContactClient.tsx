'use client';

import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useBlurTypeText } from '@/hooks/useBlurTypeText';
import { useReturnToTop } from '@/hooks/useReturnToTop';

export default function ContactClient() {
  useScrollReveal();
  useReturnToTop();

  useBlurTypeText({
    selector: '.blur-type-contact',
    triggerDelay: 600,
    wordDelay: 30,
  });

  return null;
}

