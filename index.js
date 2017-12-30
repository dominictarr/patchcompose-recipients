var h = require('hyperscript')

function isObject (o) {
  return o && 'object' === typeof o
}

exports.gives = {
  compose: { context: true }
}

exports.needs = {
  avatar: { name: 'first', image: 'first'}
}

exports.create = function (api) {
  document.head.appendChild(h('style', {textContent:
    '.patchcompose__recipients { display: flex; flex-wrap: wrap-row; }'
  }))
  return { compose: { context: function (meta, context) {
    if(meta.recps)
      return h('div.patchcompose__context.patchcompose__recipients',
        'to:',
        h('div.Avatar',
        meta.recps.map(function (e) {
          var id = isObject(e) ? e.link : e
          return api.avatar.image(id)
        })
        )
      )
  }}}
}

