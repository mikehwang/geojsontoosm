// This JSON schema is used to validate the extra file users could provide which contains
// additional tags that are to be applied per geojson geometry type
var schema = {
    "title": "Schema for additional tags file",
    "type": "object",
    "properties": {
        "Point": {
            "$ref": "#/definitions/tags"
        },
        "LineString": {
            "$ref": "#/definitions/tags"
        },
        "Polygon": {
            "$ref": "#/definitions/tags"
        },
        "Multipolygon": {
            "$ref": "#/definitions/tags"
        }
    },
    "additionalProperties": false,
    "definitions": {
        "tags": {
            "type": "object"
        }
    }
};


var Ajv = require('ajv');

/**
 * Validate the additional tags JS object provided by user
 *
 * @param {Object}
 * @return {Boolean} true if the input is valid otherwise false
 */
module.exports.validateAdditionalTags = function(additionalTags) {
    let ajv = new Ajv();
    let valid = ajv.validate(schema, additionalTags);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }

    return true;
}
