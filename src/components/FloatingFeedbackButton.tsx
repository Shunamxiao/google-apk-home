'use client';

import { FeedbackDialog } from './FeedbackDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

export function FloatingFeedbackButton() {
  const isMobile = useIsMobile();
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    // Only show the FAB on the client-side after checking if it's mobile
    setShowFab(isMobile);
  }, [isMobile]);

  if (!showFab) {
    return null;
  }

  return <FeedbackDialog isFab />;
}
