
/* KOTLOVSKY PORTFOLIO — v20 DOM-safe hotfix
   Paste at the very end of script.js OR include after existing script.js.
   It injects the missing contact socials and adds hover/play behavior to real YouTube cards.
*/

(function () {
  const SOCIALS = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aleksandrawarecka",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.35 8h4.3v14H.35V8zm7.25 0h4.12v1.91h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.16 2.87 5.16 6.6V22h-4.29v-6.84c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.61V22H7.6V8z"/></svg>'
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCL8M-zdosP2IWj9CVefcoIw/videos",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.53 3.58 12 3.58 12 3.58s-7.53 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.87.5 9.4.5 9.4.5s7.53 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>'
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gizmokotlovsky/",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35zm0 2A2.65 2.65 0 1 0 12 14.65 2.65 2.65 0 0 0 12 9.35zM17.1 6.75a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>'
    }
  ];

  function makeSocials() {
    const wrap = document.createElement("div");
    wrap.className = "kotlovsky-socials-v20";
    wrap.setAttribute("aria-label", "social links");

    SOCIALS.forEach((item) => {
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.ariaLabel = item.name;
      a.className = "kotlovsky-social-link-v20";
      a.innerHTML = item.svg;
      wrap.appendChild(a);
    });

    return wrap;
  }

  function injectSocials() {
    if (document.querySelector(".kotlovsky-socials-v20")) {
      document.body.classList.add("kotlovsky-v20-socials-ready");
      return;
    }

    const mail = document.querySelector('a[href^="mailto:"]');
    const contact =
      document.querySelector("#contact") ||
      document.querySelector(".contact") ||
      document.querySelector(".contact-section") ||
      document.querySelector("footer") ||
      mail?.parentElement ||
      document.body;

    const socials = makeSocials();

    if (mail && mail.parentElement) {
      mail.parentElement.appendChild(socials);
    } else {
      contact.appendChild(socials);
    }

    document.body.classList.add("kotlovsky-v20-socials-ready");
  }

  function markVideoCards() {
    const links = Array.from(document.querySelectorAll('a[href*="youtu.be"], a[href*="youtube.com/watch"], a[href*="youtube.com/embed"]'));

    links.forEach((link) => {
      link.classList.add("kotlovsky-video-card-v20");

      const img = link.querySelector("img");
      if (img) return;

      /* If a thumbnail is only a background image on a child div, mark that child too. */
      const bgChild = Array.from(link.querySelectorAll("*")).find((el) => {
        const bg = window.getComputedStyle(el).backgroundImage;
        return bg && bg !== "none" && bg.includes("ytimg");
      });
      if (bgChild) bgChild.classList.add("kotlovsky-video-bg-v20");
    });
  }

  function run() {
    injectSocials();
    markVideoCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  /* In case sliders are built after load */
  window.addEventListener("load", run);
  setTimeout(run, 700);
  setTimeout(run, 1800);
})();
