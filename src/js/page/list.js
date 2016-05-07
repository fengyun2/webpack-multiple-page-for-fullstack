/*
* @Author: baby
* @Date:   2016-05-06 21:07:54
* @Last Modified by:   baby
* @Last Modified time: 2016-05-06 21:08:03
*/

'use strict';

//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/list.less");


var html = '';
for(var i=0;i<5;i++){
    html += '<li>列表'+(i+1)+'</li>';
}

$('#list').html(html);
