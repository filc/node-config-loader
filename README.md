# node-config-loader

This package is used for loading configs for applications. It handles multiple environments as well.

## Installation

npm install app-config-loader

## Get started

```
var ConfigLoader = require('app-config-loader');
var config = ConfigLoader.loadConfig(configFile, 'testapp', 'staging');
```