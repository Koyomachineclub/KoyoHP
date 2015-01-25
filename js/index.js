$.getJSON("json/indexnews.json", function(data) {
  var allnewslines, newsline, _i, _len;
  allnewslines = "<table><tbody>";
  for (_i = 0, _len = data.length; _i < _len; _i++) {
    newsline = data[_i];
    allnewslines += "<tr><td class='toplistheader'>";
    if (newsline.url) {
      console.log(newsline.url);
      allnewslines += "<a href='" + newsline.url + "'>" + newsline.newsheader + "</a>";
    } else {
      console.log("トトカマ星に伝説のスーパーサイヤ人が現れませんでした");
      allnewslines += "" + newsline.newsheader;
    }
    allnewslines += "</td><td class='toplistdate'>" + newsline.newsdate + "</td></tr>\n";
  }
  allnewslines += "</tbody></table>";
  $(allnewslines).appendTo("#newstable");
}).error(function(jqXHR, testStatus, errorThrown) {
  $("#imglinks").html("access error " + jqXHR.responseText + " " + errorThrown);
});

$.getJSON("json/indexphotolinks.json", function(data) {
  var allimglinks, imgblock, _i, _len;
  allimglinks = "<ul>";
  for (_i = 0, _len = data.length; _i < _len; _i++) {
    imgblock = data[_i];
    allimglinks += "<li><a href=' " + imgblock.linkurl + " '><img src='" + imgblock.imgsrc + "' alt='" + imgblock.imgalt + "'><div class='imgtext'>" + imgblock.imgtext + "</div></a></li>";
  }
  allimglinks += "</ul>";
  $(allimglinks).appendTo("#imglinks");
}).error(function(jqXHR, testStatus, errorThrown) {
  $("#imglinks").html("access error " + jqXHR.responseText + " " + errorThrown);
});
