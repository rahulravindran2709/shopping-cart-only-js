
window.TemplateRenderer = (function (Utils) {
  var templates = {}
  var htmlRegex = /\w+/
  var templateNameRegex = /\w+/
  var templateFieldRegex = /##(.+)##/
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
      throw new Error('Not a valid template name')
    }
    if (templateObject.match(templateNameRegex)) {
      // recursive call
    }
    var processedString = templateObject.replace(templateFieldRegex, Utils.lookupValueInObject('$&', data))

    console.log('In process template' + processedString)
    return processedString
  }
  return {
    addTemplate: addTemplate,
    processTemplate: processTemplate,
    getTemplates: getTemplates
  }
})(window.Utils)
