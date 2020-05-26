// ==UserScript==
// @name         AWS UI NavBar
// @namespace    https://github.com/AdrianSimionov
// @version      0.1
// @description  Change AWS Console NavBar
// @author       Adrian Simionov
// @match        https://*.console.aws.amazon.com/*
// @match        https://phd.aws.amazon.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var replaceLabel = function ( item ) {
        switch (item.innerHTML) {
            case "AWS Glue":
                item.innerHTML = "Glue";
                break;
            case "CloudFormation":
                item.innerHTML = "CFN";
                break;
            case "Elastic Container Service":
                item.innerHTML = "ECS";
                break;
            case "Database Migration Service":
                item.innerHTML = "DMS";
                break;
            case "Relational Database Service":
                item.innerHTML = "RDS";
                break;
            case "Route 53":
                item.innerHTML = "R53";
                break;
            case "Simple Email Service":
                item.innerHTML = "SES";
                break;
            case "Simple Notification Service":
                item.innerHTML = "SNS";
                break;
            case "Simple Queue Service":
                item.innerHTML = "SQS";
                break;
            case "Lambda":
                item.innerHTML = "&lambda;";
                break;
            case "Certificate Manager":
                item.innerHTML = "ACM";
                break;
            case "Systems Manager":
                item.innerHTML = "SSM";
                break;
            case "AWS Organizations":
                item.innerHTML = "Org";
                break;
            case "CloudTrail":
                item.innerHTML = "CTr";
                break;
            case "CloudFront":
                item.innerHTML = "CFr";
                break;
            case "Global Accelerator":
                item.innerHTML = "GAcc";
                break;
        }
    };

    var updateStyles = function ( ) {
        var css = [
            "#h #awsgnav #nav-home-link { display: none }",
            "#nav-shortcutBar { zoom: 0.9 }",
            "#awsgnav #nav-shortcutBar a { margin: 0 0 0 0 }",
            "#awsgnav #nav-shortcutBar .service-link { margin-left: 0 }"
        ],
        styleEl = document.createElement("style");

        styleEl.type = "text/css";

        if ( styleEl.styleSheet ) {
            styleEl.styleSheet.cssText = css.join("\n");
        } else {
            styleEl.appendChild(document.createTextNode(css.join("\n")));
        }

        document.body.appendChild( styleEl );
    };

    updateStyles();
  
    document.querySelectorAll(".service-label").forEach( replaceLabel );

    window.dispatchEvent( new Event("resize") );
  
    var resourceGroupsMenu = document.getElementById('nav-resourceGroupsMenu');
    if (resourceGroupsMenu) {
        resourceGroupsMenu.parentNode.removeChild(resourceGroupsMenu);
    }
  
})();
