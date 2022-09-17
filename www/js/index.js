
document.addEventListener('deviceready', this.onDeviceReady, false);

function onDeviceReady()
{
    console.log('Device Ready...');
}

 var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-7093468285606099/2106806867',
    interstitial: 'ca-app-pub-7093468285606099/6561412415',
    rewardvideo: '',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-7093468285606099/2106806867',
    interstitial: 'ca-app-pub-7093468285606099/6561412415',
    rewardvideo: '',
  };
} else {
  admobid = { // for Windows Phone, deprecated
    banner: 'ca-app-pub-7093468285606099/2106806867',
    interstitial: 'ca-app-pub-7093468285606099/6561412415',
    rewardvideo: '',
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black',
    autoShow: true  
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: false,
    autoShow: true
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}