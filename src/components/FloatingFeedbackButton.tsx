'use client';

import { FeedbackDialog } from './FeedbackDialog';

export function FloatingFeedbackButton() {
  return (
    <div className="sm:hidden">
      <FeedbackDialog isFab />
    </div>
  );
}
