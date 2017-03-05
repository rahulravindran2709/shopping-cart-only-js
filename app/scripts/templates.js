
window.TemplateRenderer = (function (Utils) {
  var templates = {}
  var htmlRegex = /\w+/
  var templateNameRegex = /\$\$\w+\$\$/ /* Placeholder regex for determining whether a template is included inside another bigger template */
  var templateFieldRegex = /{{(.+)}}/
  var addTemplate = function (templateName, templateString) {
    if (!templateName) {
      throw new Error('Template name is required')
    }
    if (!templateString) {
      throw new Error('not proper template string')
    }
    if (!htmlRegex.test(templateString)) {
      throw new Error('Not valid html code')
    }
    templates[templateName] = templateString
    return 'template successfully added'
  }
  var getTemplates = function () {
    return templates
  }
  var processTemplate = function (templateName, data) {
    var templateObject = templates[templateName]
    if (!templateObject) {
      console.error('Template field name is invalid')
      throw new Error('Not a valid template name')
    }
    if (templateObject.match(templateNameRegex)) {
      /* TODO handle the scenario of  of incudling other template names inside a template
      Would need to recursively keep calling process template until the template string contains only DOM elements
      */
    }
    var processedString = templateObject.replace(templateFieldRegex, function (match, g1) {
      var lookedUpData = Utils.lookupValueInObject(g1, data)
      console.log('Value of looked up data' + lookedUpData)
      return lookedUpData
    })

    console.log('In process template' + processedString)
    return processedString
  }
  var removeAll = function () {
    templates = []
  }
  return {
    addTemplate: addTemplate,
    processTemplate: processTemplate,
    getTemplates: getTemplates,
    removeAll: removeAll
  }
})(window.Utils)

