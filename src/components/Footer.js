import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  /* eslint-disable */
  return (
    <footer className="footer">
      <a
        className="footer__social"
        href="https://www.instagram.com/explore/tags/tbmaga/"
        target="_blank"
        title="Follow along on Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <title>insta</title>
          <path d="M7,9.81A2.74,2.74,0,1,0,4.25,7.06,2.75,2.75,0,0,0,7,9.81ZM7,5a2,2,0,1,1-2,2A2,2,0,0,1,7,5Zm3,0.22h4v6A2.75,2.75,0,0,1,11.25,14H2.79A2.79,2.79,0,0,1,0,11.25v-6H3.94a3.53,3.53,0,0,0-.51,1.81,3.56,3.56,0,1,0,7.13,0A3.53,3.53,0,0,0,10,5.25ZM11.25,0H4.08V2.92H3.5V0H2.92V2.92H2.33V0A2.79,2.79,0,0,0,1.75.2V2.92H1.17V0.52A2.74,2.74,0,0,0,0,2.75V4.67H4.36a3.55,3.55,0,0,1,5.26,0H14V2.75A2.75,2.75,0,0,0,11.25,0Zm1.59,3.07a0.43,0.43,0,0,1-.43.43H10.93a0.43,0.43,0,0,1-.43-0.43V1.6a0.43,0.43,0,0,1,.43-0.43H12.4a0.43,0.43,0,0,1,.43.43V3.07Z" />
          <path d="M7,9.81A2.74,2.74,0,1,0,4.25,7.06,2.75,2.75,0,0,0,7,9.81ZM7,5a2,2,0,1,1-2,2A2,2,0,0,1,7,5Zm3,0.22h4v6A2.75,2.75,0,0,1,11.25,14H2.79A2.79,2.79,0,0,1,0,11.25v-6H3.94a3.53,3.53,0,0,0-.51,1.81,3.56,3.56,0,1,0,7.13,0A3.53,3.53,0,0,0,10,5.25ZM11.25,0H4.08V2.92H3.5V0H2.92V2.92H2.33V0A2.79,2.79,0,0,0,1.75.2V2.92H1.17V0.52A2.74,2.74,0,0,0,0,2.75V4.67H4.36a3.55,3.55,0,0,1,5.26,0H14V2.75A2.75,2.75,0,0,0,11.25,0Zm1.59,3.07a0.43,0.43,0,0,1-.43.43H10.93a0.43,0.43,0,0,1-.43-0.43V1.6a0.43,0.43,0,0,1,.43-0.43H12.4a0.43,0.43,0,0,1,.43.43V3.07Z" />
        </svg>
      </a>
      <a
        className="footer__social"
        href="https://youtube.com/playlist?list=PLUYVCD4hfShV-ViPce6JlbUNrh2739Lst"
        target="_blank"
        title="Follow along on YouTube"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <title>youtube</title>
          <path d="M5.41,7.89H4.87v2.93H4.34V7.89H3.79V7.39H5.41v0.5h0Zm3.15,1v1.4a0.46,0.46,0,0,1-.43.56,0.54,0.54,0,0,1-.45-0.23v0.19H7.21V7.39H7.68v1.1A0.57,0.57,0,0,1,8.1,8.26,0.51,0.51,0,0,1,8.56,8.89Zm-0.48,0A0.31,0.31,0,0,0,8,8.72a0.19,0.19,0,0,0-.25,0l-0.1.08v1.58l0.11,0.09a0.2,0.2,0,0,0,.24,0,0.29,0.29,0,0,0,0-.17V8.92h0ZM6.71,5.5a0.22,0.22,0,0,0,.21-0.25V4a0.21,0.21,0,1,0-.42,0V5.25A0.22,0.22,0,0,0,6.71,5.5ZM6.28,10.21A0.49,0.49,0,0,1,6,10.4c-0.1,0-.13-0.07-0.13-0.17V8.29H5.41V10.4c0,0.51.35,0.52,0.6,0.37a1,1,0,0,0,.27-0.24v0.28H6.75V8.29H6.28v1.92ZM14,2.92v8.17A2.92,2.92,0,0,1,11.08,14H2.92A2.92,2.92,0,0,1,0,11.08V2.92A2.92,2.92,0,0,1,2.92,0h8.17A2.92,2.92,0,0,1,14,2.92ZM7.84,5.5A0.38,0.38,0,0,0,8.18,6a0.78,0.78,0,0,0,.57-0.33V5.93H9.25V3.28H8.75v2a0.52,0.52,0,0,1-.29.2c-0.11,0-.13-0.07-0.13-0.18v-2H7.84V5.5ZM6,4v1.3A0.64,0.64,0,0,0,6.71,6a0.68,0.68,0,0,0,.71-0.71V4a0.69,0.69,0,0,0-.71-0.71A0.68,0.68,0,0,0,6,4ZM4.14,2.33L4.8,4.47V5.93H5.36V4.47L6,2.33H5.44L5.09,3.77,4.7,2.33H4.14Zm6.75,6.81c0-1.74-.14-2.4-1.23-2.48s-4.3-.07-5.31,0S3.12,7.4,3.11,9.14s0.14,2.4,1.23,2.48,4.3,0.07,5.31,0S10.88,10.88,10.89,9.14ZM10.3,9V9.61H9.4v0.48c0,0.19,0,.35.21,0.35s0.21-.13.21-0.35V9.91H10.3V10.1a0.66,0.66,0,0,1-.7.78,0.68,0.68,0,0,1-.68-0.78V9a0.7,0.7,0,0,1,.71-0.74A0.64,0.64,0,0,1,10.3,9ZM9.81,9c0-.17,0-0.3-0.21-0.3S9.4,8.79,9.4,9V9.22H9.81V9Z" />
        </svg>
      </a>
      <a
        className="footer__social"
        href="https://github.com/kayluhb/tbmaga"
        target="_blank"
        title="Fork on Github"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13.65">
          <title>github</title>
          <path d="M7 0a7 7 0 0 0-2.21 13.65.35.35 0 0 0 .48-.34v-1.19c-1.95.42-2.36-.94-2.36-.94a1.85 1.85 0 0 0-.78-1c-.64-.43 0-.43 0-.43a1.47 1.47 0 0 1 1.07.72 1.49 1.49 0 0 0 2 .58 1.5 1.5 0 0 1 .44-.94c-1.55-.18-3.19-.78-3.19-3.46a2.71 2.71 0 0 1 .72-1.88 2.52 2.52 0 0 1 .07-1.85s.59-.19 1.92.72a6.63 6.63 0 0 1 3.5 0c1.34-.91 1.92-.72 1.92-.72a2.51 2.51 0 0 1 .07 1.85 2.7 2.7 0 0 1 .72 1.88c0 2.69-1.64 3.28-3.2 3.45a1.67 1.67 0 0 1 .48 1.3v1.92a.35.35 0 0 0 .48.34A7 7 0 0 0 7 0z" />
        </svg>
      </a>
      <span className="footer__copy">&copy; {year}&nbsp;&nbsp;&ndash;&nbsp;&nbsp;TBMAGA</span>
    </footer>
  );
  /* eslint-enable */
}
