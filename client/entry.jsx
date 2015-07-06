'use strict';

import 'styles/main.scss';

import React from 'react/addons';
import IndexComponent from 'components/Index/IndexComponent.jsx';

import elasticsearch from 'elasticsearch';
var client = new elasticsearch.Client({
  host: 'elasticdatabase.dev.azk.io',
  log: 'trace'
});

client.search({
  index: 'music_library',
  type: 'song',
  body: {
    "query": {
      "match_all": {}
    }
  }
}).then(function (resp) {
  var hits = resp.hits.hits;
  React.render(<IndexComponent items={hits} />, document.body);
}, function (err) {
  console.trace(err.message);
});
