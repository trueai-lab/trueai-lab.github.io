/**
 * copy.js — minimal "copy BibTeX" helper used by publications.html and research.html.
 *
 * Each pub entry renders a <pre><code id="<bibId>">…</code><button onclick="copyToClipboard('<bibId>','<copId>')">…</button>
 * <p id="<copId>">Copied!</p></pre>
 *
 * On click we copy the <code> text and briefly reveal the "Copied!" notice.
 *
 * Uses the modern async Clipboard API where available and falls back to a
 * hidden <textarea> + document.execCommand('copy') for older browsers.
 */
function copyToClipboard(bibId, copId) {
  var src = document.getElementById(bibId);
  var note = document.getElementById(copId);
  if (!src) return;
  var text = src.innerText || src.textContent || '';

  function showCopied() {
    if (!note) return;
    note.style.display = 'inline';
    clearTimeout(note._copyTimer);
    note._copyTimer = setTimeout(function () {
      note.style.display = 'none';
    }, 1500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied, function () {
      fallbackCopy(text, showCopied);
    });
  } else {
    fallbackCopy(text, showCopied);
  }
}

function fallbackCopy(text, onSuccess) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'absolute';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    if (typeof onSuccess === 'function') onSuccess();
  } catch (e) {
    /* no-op */
  }
  document.body.removeChild(ta);
}
