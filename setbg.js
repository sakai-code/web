Blockly.defineBlocksWithJsonArray(
[{
  "type": "setbg",
  "message0": "背景色を %1 にする",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]
);



Blockly.JavaScript['setbg'] = function(block) {
var colour_color = block.getFieldValue('color');

    var code = " alert(color_colour); " ;
  return code;
};