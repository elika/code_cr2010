function getData(domID) {
  var result = {"labels": [], "values": []};
  
  $A($(domID).down("table").tBodies[0].rows).each(function(tr){
    result["labels"].push(tr.cells[0].innerHTML);
    result["values"].push(parseFloat(tr.cells[1].innerHTML))
  })
  
  return result;
}
