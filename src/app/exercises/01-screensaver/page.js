import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li><Link href="/exercises/01-screensaver/red">red</Link></li>
        <li><Link href="/exercises/01-screensaver/purple">purple</Link></li>
        <li><Link href="/exercises/01-screensaver/yellow">yellow</Link></li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
