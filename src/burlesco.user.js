// ==UserScript==
// @name         Burlesco
// @namespace    https://burles.co/
// @version      12.4
// @description  Leia notícias sem ser assinante, burle o paywall
// @author       rodorgas & AugustoResende
// @supportURL   https://burles.co
// @icon         https://raw.githubusercontent.com/burlesco/site/master/logo_semfundo.png
// Atenção:      Caso algum site não funcione logo após a instalação, limpe o cache do navegador.
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @connect      gauchazh.clicrbs.com.br
// @connect      gauchazh.clicrbs.com.br.
// @connect      static.infoglobo.com.br
// @connect      cdn.tinypass.com
// @connect      observador.pt
// @connect      brasil.elpais.com
// @match        *://www.bloomberg.com/*
// @match        *://correio.rac.com.br/*
// @match        *://*.nsctotal.com.br/*
// @match        *://www.economist.com/*
// @match        *://*.estadao.com.br/*
// @match        *://foreignpolicy.com/*
// @match        *://*.fivewall.com.br/*
// @match        *://*.folha.uol.com.br/*
// @match        *://*.folha.com.br/*
// @match        *://gauchazh.clicrbs.com.br/*
// @match        *://*.zh.clicrbs.com.br/*
// @match        *://api.clicrbs.com.br/*
// @match        *://*.gazetadopovo.com.br/*
// @match        *://ogjs.infoglobo.com.br/*
// @match        *://*.jota.info/*
// @match        *://www.jornalnh.com.br/*
// @match        *://www.netdeal.com.br/*
// @match        *://*.nytimes.com/*
// @match        *://*.nyt.com/*
// @match        *://*.oglobo.globo.com/*
// @match        *://api.tinypass.com/*
// @match        *://cdn.tinypass.com/*
// @match        *://dashboard.tinypass.com/*
// @match        *://*.washingtonpost.com/*
// @match        *://*.exame.com/*
// @match        *://www.eltiempo.com/*
// @match        *://super.abril.com.br/*
// @match        *://veja.abril.com.br/*
// @match        *://quatrorodas.abril.com.br/*
// @match        *://*.uol.com.br/*
// @match        *://www.uol/*
// @match        *://*.wsj.com/*
// @match        *://*.ft.com/*
// @match        *://*.gramophone.co.uk/*
// @match        *://*.folhadelondrina.com.br/*
// @match        *://*.wired.com/*
// @match        *://www.jornalvs.com.br/*
// @match        *://*.br18.com.br/*
// @match        *://*.diariopopular.com.br/*
// @match        *://*.haaretz.com/*
// @match        *://*.haaretz.co.il/*
// @match        *://*.diarinho.com.br/*
// @match        *://*.diariodaregiao.com.br/*
// @match        *://*.correio24horas.com.br/*
// @match        *://*.dgabc.com.br/*
// @match        *://crusoe.com.br/*
// @match        *://*.em.com.br/*
// @match        *://*.forbes.pl/*
// @match        *://*.newsweek.pl/*
// @match        *://*.seudinheiro.com/*
// @match        *://*.diariodecanoas.com.br/*
// @match        *://*.observador.pt/*
// @match        *://*.elpais.com/*
// @webRequestItem {"selector":"*://correio-static.cworks.cloud/vendor/bower_components/paywall.js/paywall.js*","action":"cancel"}
// @webRequestItem {"selector":{"include":"*://paywall.folha.uol.com.br/*","exclude":"*://paywall.folha.uol.com.br/status.php"} ,"action":"cancel"}
// @webRequestItem {"selector":"*://static.folha.uol.com.br/paywall/*","action":"cancel"}
// @webRequestItem {"selector":"*://ogjs.infoglobo.com.br/*/js/controla-acesso-aux.js","action":"cancel"}
// @webRequestItem {"selector":"*://static.infoglobo.com.br/paywall/register-piano/*/scripts/nova-tela-register.js","action":"cancel"}
// @webRequestItem {"selector":"*://www.netdeal.com.br/*","action":"cancel"}
// @webRequestItem {"selector":"*://correio.rac.com.br/includes/js/novo_cp/fivewall.js*","action":"cancel"}
// @webRequestItem {"selector":"*://dashboard.tinypass.com/xbuilder/experience/load*","action":"cancel"}
// @webRequestItem {"selector":"*://*.fivewall.com.br/*","action":"cancel"}
// @webRequestItem {"selector":"*://*.nytimes.com/js/mtr.js","action":"cancel"}
// @webRequestItem {"selector":"*://*.washingtonpost.com/wp-stat/pwapi/*","action":"cancel"}
// @webRequestItem {"selector":"*://cdn.tinypass.com/api/tinypass.min.js","action":"cancel"}
// @webRequestItem {"selector":"*://api.tinypass.com/*","action":"cancel"}
// @webRequestItem {"selector":"*://tm.jsuol.com.br/modules/content-gate.js","action":"cancel"}
// @webRequestItem {"selector":"https://paywall.nsctotal.com.br/behaviors","action":"cancel"}
// @webRequestItem {"selector":"*://*.estadao.com.br/paywall/*","action":"cancel"}
// @webRequestItem {"selector":"*://www.folhadelondrina.com.br/login.php*","action":"cancel"}
// @webRequestItem {"selector":"https://www.eltiempo.com/js/desktopArticle.js*","action":"cancel"}
// @webRequestItem {"selector":"*://*.haaretz.co.il/*/inter.js","action":"cancel"}
// @webRequestItem {"selector":"*://*.themarker.com/*/inter.js","action":"cancel"}
// @webRequestItem {"selector":"*://*.diarinho.com.br/wp-admin/admin-ajax.php","action":"cancel"}
// @webRequestItem {"selector":"*://diarinho.com.br/wp-admin/admin-ajax.php","action":"cancel"}
// @webRequestItem {"selector":"*://static.infoglobo.com.br/paywall/js/tiny.js","action":"cancel"}
// @webRequestItem {"selector":"*://*.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/paywall.js*","action":"cancel"}
// @webRequestItem {"selector":"*://exame.com/wp-content/themes/exame-new/js/pywll.js","action":"cancel"}
// @webRequestItem {"selector":"*://prisa-el-pais-brasil-prod.cdn.arcpublishing.com/arc/subs/p.js","action":"cancel"}
// @webRequestItem {"selector":"*://prisa-el-pais-prod.cdn.arcpublishing.com/arc/subs/p.js","action":"cancel"}
// @webRequestItem {"selector":"*://brasil.elpais.com/pf/resources/dist/js/article.js*","action":"cancel"}
// @webRequestItem {"selector":"*://gauchazh.clicrbs.com.br/static/signwall.*.min.js","action":"cancel"}
// @webRequestItem {"selector":"*://gauchazh.clicrbs.com.br/static/main*","action":"cancel"}
// @run-at       document-start
// @noframes
// ==/UserScript==

// run_at: document_start
if (/gauchazh\.clicrbs\.com\.br/.test(document.location.host)) {
  document.addEventListener('DOMContentLoaded', function() {
    function patchJs(jsurl) {
      GM_xmlhttpRequest({
        method: 'GET',
        url: jsurl.replace('com.br', 'com.br.'),
        onload: function(response) {
          var injectme = response.responseText;
          injectme = injectme.replace(
            /![a-z].showLoginPaywall&&![a-z].showPaywall\|\|!1/g, 'true');
          injectme = injectme.replace('throw new Error("only one instance of babel-polyfill is allowed");', '');
          var script = document.createElement('script');
          script.type = 'text/javascript';
          var textNode = document.createTextNode(injectme);
          script.appendChild(textNode);
          document.head.appendChild(script);
        }
      });
    }

    const scripts = Array.from(document.getElementsByTagName('script'));
    const script = scripts.find((el) => { return el.src.includes('static/main'); });
    if (script) {
      patchJs(script.src);
    }
  });

  window.onload = function() {
    function check(){
      if(document.getElementsByClassName('wrapper-paid-content')[0]){
        document.getElementsByClassName('wrapper-paid-content')[0].innerHTML = '<p>Por favor aperte Ctrl-F5 para carregar o restante da notícia!</p>';
      }
      setTimeout(function(){ check(); }, 5000);
    }
    check();
  };

  const cleanPaywallTracking = () => {
    document.cookie = 'pwsi__zh=;domain=.clicrbs.com.br;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT';
    localStorage.removeItem('pwsi__zh');
    sessionStorage.removeItem('pwsi__zh');
  };
  cleanPaywallTracking();
  setTimeout(cleanPaywallTracking, 5000);
  document.body.addEventListener('click', cleanPaywallTracking, true);

}


else if (/jota\.info/.test(document.location.host)) {
  var page_url = window.location.href;
  if (page_url.search('paywall') >= 0) { // Só ativa em urls com paywall
    var new_page_url = window.location.href.replace('www.jota.info/paywall?redirect_to=//', '');
    GM_xmlhttpRequest({
      method: 'GET',
      url: new_page_url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      },
      anonymous: true,
      onload: function(response) {
        var parser = new DOMParser();
        var newDocument = parser.parseFromString(response.responseText,'text/html');
        newDocument.getElementsByClassName('jota-paywall')[0].remove(); // Já remove o anúncio do paywall antes de inserir
        if (newDocument) {
          document.open();
          history.pushState({urlPath: new_page_url}, '', new_page_url); // Atualiza a url sem fazer um novo refresh
          document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
          document.close();
        }
      }
    });
  }
}

else if (/crusoe\.com\.br/.test(document.location.host)) {
  document.cookie = 'crs_subscriber=1';
}

// run_at: document_idle
document.addEventListener('DOMContentLoaded', function() {
  var code = null;

  if (/www\.economist\.com/.test(document.location.host)) {
    code = 'document.cookie = "ec_limit=allow";';
    code = `
        var artBodyContainer = document.querySelector("article.article");
        var artBody = artBodyContainer.innerHTML;
        checkPaywall();
        function checkPaywall () {
            let paywallBox = document.querySelector(".layout-article-regwall");
            if (paywallBox) {
                artBodyContainer.innerHTML = artBody;
            } else {
                setTimeout(checkPaywall, 100);
            }
        };
      `;
  }

  else if (/ft\.com/.test(document.location.host)
      && document.querySelector('.barrier-banner')) {

    eraseAllCookies();

    document.cookie = '';
    localStorage.clear();
    sessionStorage.clear();
    indexedDB.deleteDatabase('next-flags');
    indexedDB.deleteDatabase('next:ads');

    document.querySelector('.o-cookie-message').remove();

    GM_xmlhttpRequest({
      method: 'GET',
      url: window.location.href,
      headers: {
        'Referer': 'https://www.google.com.br/'
      },
      anonymous: true,
      onload: function(response) {
        var parser = new DOMParser();
        var newDocument = parser.parseFromString(response.responseText,'text/html');
        if (newDocument.getElementsByClassName('article__content')[0]) {
          document.open();
          document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
          document.close();
        }
      }
    });
  }

  else if (/foreignpolicy\.com/.test(document.location.host)) {
    code = `
      document.getElementById("paywall_bg").remove();
      document.body.classList.remove("overlay-no-scroll");
      document.body.style.overflow = "visible";
      document.documentElement.classList.remove("overlay-no-scroll");
    `;
  }

  else if (/folha\.uol\.com\.br/.test(document.location.host)) {
    code = `
      omtrClickUOL = function(){};function showText() {
         $("#bt-read-more-content").next().show();
         $("#bt-read-more-content").next().show().prev().remove();
      }
      setTimeout(showText, 100);
    `;
  }

  else if (/abril\.com\.br/.test(document.location.host))
    code = `
      window.setTimeout(function() {
        document.querySelector('body').classList.remove('disabledByPaywall')
        document.querySelector('.piano-offer-overlay').remove()
        document.querySelector('#piano_offer').remove()
      }, 10000)
    `;


  else if(/correio24horas\.com\.br/.test(document.location.host))
    // remover tudo relacionado ao paywall e remover limite de altura no div do conteúdo da matéria
    // verificar se a altura não buga com a mudança de largura da página (layout responsivo, né)
    code=`
      jQuery('[class^=paywall]').remove();
      jQuery('[class^=blocked]').removeClass();
      jQuery('[id^=paywall]').removeClass('hide').removeClass('is-active');
      jQuery('.noticias-single__content__text').attr('style', 'height:auto;');
      jQuery('[id^=paywall]').remove();
      setInterval(function() { jQuery('[itemprop^=articleBody]').css('height', '100%'); console.log('Burlesco: forçando altura...'); }, 1000);

    `;

  else if (/nytimes\.com/.test(document.location.host))
    eraseAllCookies();

  else if (/wsj\.com/.test(document.location.host)
      && document.querySelector('.wsj-snippet-login')) {

    eraseAllCookies();

    document.cookie = '';
    localStorage.clear();
    sessionStorage.clear();

    GM_xmlhttpRequest({
      method: 'GET',
      url: window.location.href,
      headers: {
        'Referer': 'https://www.facebook.com/'
      },
      anonymous: true,
      onload: function(response) {
        var parser = new DOMParser();
        var newDocument = parser.parseFromString(response.responseText,'text/html');
        if (newDocument.querySelector('article')) {
          document.body = newDocument.body;
        }
      }
    });
  }

  else if (/bloomberg\.com/.test(document.location.host)) {
    localStorage.clear();
    sessionStorage.clear();
  }

  else if (/diariodaregiao\.com\.br/.test(document.location.host))
  {
    document.getElementsByClassName('noticia-texto')[0].style.display = 'block';
    document.querySelector('.conteudo > .row').style.display = 'none';
  }

  else if (/diariopopular\.com\.br/.test(document.location.host)) {
    eraseAllCookies();
  }

  else if (/wired\.com/.test(document.location.host)) {
    code = `
      window.onload = function() {
        style = document.createElement('style');
        style.type = 'text/css';
        css='.paywall-container-component {display: none !important}';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      }
      document.cookie = "";
      localStorage.clear();
      sessionStorage.clear();
    `;
    eraseAllCookies();
  }

  else if (/haaretz\.com/.test(document.location.host) ||
          (/haaretz\.co\.il/.test(document.location.host))) {

    GM_xmlhttpRequest({
      method: 'GET',
      url: window.location.href,
      headers: {
        'User-Agent': 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)'
      },
      anonymous: true,
      onload: function(response) {
        var parser = new DOMParser();
        var newDocument = parser.parseFromString(response.responseText,'text/html');
        if (newDocument) {
          document.open();
          document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
          document.close();
        }
      }
    });
  }

  else if (/dgabc\.com\.br/.test(document.location.host)) {
    code = `
      var email = 'colaborador@dgabc.com.br';
      var senha = '';
      localStorage.emailNoticiaExclusiva = email;
      $('.NoticiaExclusivaNaoLogado').hide();
      $('.NoticiaExclusivaLogadoSemPermissao').hide();
      $('.linhaSuperBanner').show();
      $('.footer').show();
      $('.NoticiaExclusivaLogado').show();
    `;
  }

  else if (/em\.com\.br/.test(document.location.host)) {
    window.id_acesso_noticia = 0;

    let style = document.createElement('style');
    style.type = 'text/css';

    let css=`
      .news-blocked {
        display: none !important
      }
      .news-blocked-no-scroll {
        overflow: auto !important;
        width: auto !important;
        position: unset !important;
      }

      div[itemprop="articleBody"] {
        height: auto !important;
      }
    `;

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  else if (/newsweek\.pl|forbes\.pl/.test(document.location.host)) {
    let contentPremium = document.querySelector('.contentPremium');
    if (contentPremium) {
      contentPremium.classList.remove('contentPremium');
    }
  }

  else if (/seudinheiro\.com/.test(document.location.host)) {
    document.querySelector('#premium-paywall').remove();
    document.body.style.overflow = '';
  }

  else if (/observador\.pt/.test(document.location.host)) {
    setInterval(() => {
      document.querySelector('.piano-article-blocker').remove();
      document.querySelector('.article-body-wrapper').style.maxHeight = 'inherit';
      document.querySelector('.premium-article').classList.add('article-shown');
    }, 5000);
  }

  if (code !== null) {
    var script = document.createElement('script');
    script.textContent = code;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
  }
});

function eraseAllCookies() {
  var cookieList  = document.cookie.split (/;\s*/);
  for (var J = cookieList.length - 1;   J >= 0;  --J) {
    var cookieName = cookieList[J].replace (/\s*(\w+)=.+$/, '$1');
    eraseCookie (cookieName);
  }
}

function eraseCookie (cookieName) {
  // https://stackoverflow.com/a/28081337/1840019
  //--- ONE-TIME INITS:
  //--- Set possible domains. Omits some rare edge cases.?.
  var domain      = document.domain;
  var domain2     = document.domain.replace (/^www\./, '');
  var domain3     = document.domain.replace (/^(\w+\.)+?(\w+\.\w+)$/, '$2');

  //--- Get possible paths for the current page:
  var pathNodes   = location.pathname.split ('/').map ( function (pathWord) {
    return '/' + pathWord;
  } );
  var cookPaths   = [''].concat (pathNodes.map ( function (pathNode) {
    if (this.pathStr) {
      this.pathStr += pathNode;
    }
    else {
      this.pathStr = '; path=';
      return (this.pathStr + pathNode);
    }
    return (this.pathStr);
  } ) );

  // eslint-disable-next-line no-func-assign
  ( eraseCookie = function (cookieName) {
    //--- For each path, attempt to delete the cookie.
    cookPaths.forEach ( function (pathStr) {
      //--- To delete a cookie, set its expiration date to a past value.
      var diagStr     = cookieName + '=' + pathStr + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
      document.cookie = diagStr;

      document.cookie = cookieName + '=' + pathStr + '; domain=' + domain  + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
      document.cookie = cookieName + '=' + pathStr + '; domain=' + domain2 + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
      document.cookie = cookieName + '=' + pathStr + '; domain=' + domain3 + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
    } );
  } ) (cookieName);
}
