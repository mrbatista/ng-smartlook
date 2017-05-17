- MORE DOC INCOMING SOON first push 13/05/17

    - 3 ways to install ng-smartlook:
        - bower install --save ng-smartlook
        - yarn add ng-smartlook
        - npm install --save ng-smartlook


and then add to your index.html after including angularjs

- for bower
    `<script type="text/javascript" src="/bower_components/ng-smartlook/ng-smartlook.js"></script>`

- for npm and yarn
    `<script type="text/javascript" src="/node_modules/ng-smartlook/ng-smartlook.js"></script>`


- after include it on your angular app

```javascript
var app = angular.module('yourApp', ['ng-smartlook']);
```

- Now you are ready to use it :

```javascript
app.config(['SmartlookProvider', function(SmartlookProvider){

    SmartlookProvider.init({apiKey: "yourSmartlookApiKey"});

}]);
```

it should be non empty and an objet with apikey or it will throw an error

- And finally you can use the service smartlook and acces normal smartlook api and more method

```javascript
app.controller("controller", ['Smartlook', function(Smartlook){
    Smartlook.smartlook('tag', 'keyTag', 'valueTag');
    Smartlook.startToNow(); // will give you the number of second from start to now nice for catching error time on video
}]);
```


if you want more information about smartlook api and what you can do https://www.smartlook.com/docs/api.html
