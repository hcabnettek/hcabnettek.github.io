require.config({
  baseUrl: '../../src',
  paths: {
	//'ZeroClipboard': 'components/zeroclipboard/ZeroClipboard',
    'jquery': 'bower/jquery/dist/jquery',
    'hoverIntent': 'bower/jquery-hoverIntent/jquery.hoverIntent',
    'easing': 'bower/jquery.easing/js/jquery.easing',
    'columnizer': 'bower/jquery.columnizer/src/jquery.columnizer',
    'domReady':'bower/requirejs-domready/domReady',
    'angular': 'bower/angular/angular',
    'maaui':'js/maaui',
  //  'ngAnimate': 'components/angular-1.3.5/angular-animate',
    'uiRouter': 'bower/angular-ui-router/release/angular-ui-router',
  //  'lodash': 'components/lodash/dist/lodash',
  //  'angularLodash': 'components/angular-lodash/angular-lodash',
    'uiBootstrap': 'bower/angular-ui-bootstrap/ui-bootstrap-tpls-0.7.0',
    'uiUtils': 'bower/angular-ui-utils/build/angular-ui-utils',
    'routes': 'js/routes/index',
    'templates': 'js/maaui.styleguide.templates',
  //  'jqueryui': 'components/jquery-ui-1.10.3/ui/minified/jquery-ui.min',
  //  'jqueryZeroClipboard': 'components/jquery-zeroclipboard/jquery-zeroclipboard',
  //  'prettify': 'components/google-code-prettify/src/prettify',
  //  'langcss': 'components/google-code-prettify/src/lang-css',
  //  'mediaCheck': 'components/mediaCheck/js/mediaCheck-min',
    'moment': 'bower/moment/min/moment.min'


  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    //'angularLodash': {
    //  deps: ['angular', 'lodash']
    //},
  //  'ngAnimate': {
    //    deps: ['angular']
  //    },
   'uiBootstrap': {
     deps: ['angular']
    },
    'uiUtils': {
      deps: ['angular']
  },

  //  'jqueryui': {
  //  	deps: ['jquery']
  //  },
  //  'jqueryZeroClipboard': {
  //  	deps: ['jquery']
  //  },

    'hoverIntent': {
    	deps: ['jquery']
    },

    'easing': {
   	deps: ['jquery']
    },

  //  'mediaCheck': {
  //  	deps: ['jquery']
  //  },

    'columnizer': {
    	deps: ['jquery']
    },

  //  'langcss': {
  //  	deps:['prettify']
  //  }

  },
  deps : ['js/maaui.styleguide.bootstrap']
});
