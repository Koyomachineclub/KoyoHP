$.getJSON("json/indexnews.json",(data)->
  allnewslines="<table><tbody>"
  for newsline in data
    allnewslines+="<tr><td class='toplistheader'>#{newsline.newsheader}</td><td class='toplistdate'>#{newsline.newsdate}</td></tr>\n"
  allnewslines+="</tbody></table>"
  $(allnewslines).appendTo("#newstable")
  return
).error(
  (jqXHR,testStatus,errorThrown)->
    $("#imglinks").html("access error #{jqXHR.responseText} #{errorThrown}")
    return
)

$.getJSON("json/indexphotolinks.json",(data)->
  allimglinks="<ul>"
  for imgblock in data
    allimglinks+="<li><a href=' #{imgblock.linkurl} '><img src='#{imgblock.imgsrc}' alt='#{imgblock.imgalt}'><div class='imgtext'>#{imgblock.imgtext}</div></a></li>"
  allimglinks+="</ul>"
  $(allimglinks).appendTo("#imglinks")
  return
).error(
  (jqXHR,testStatus,errorThrown)->
    $("#imglinks").html("access error #{jqXHR.responseText} #{errorThrown}")
    return
)

