class XML{
  constructor(){
    this.status=0;
    this.req='';
    this.url='';
    this.headerName=new Array();
    this.headerValue=new Array();

  }
  get Status(){
    return this.status;
  }

  set Status(s){
    this.status=s;
  }
  get Request(){
    return this.req;
  }
  

  set Request(r){
    this.req=r;
  }
  get Url(){
    return this.url;
  }

  set Url(u){
    this.url=u;
  }
  get HeaderName(){
    return this.headerName;
  }

  set HeaderName(r){
    this.headerName=r;
  }
  get HeaderValue(){
    return this.headerValue;
  }

  set HeaderValue(u){
    this.headerValue=u;
  }

   OutPut(){
 var xhr = new XMLHttpRequest();
 var req = document.getElementById("req").value;
 var url = document.getElementById("text").value;
 var headerName = document.getElementById("param").value;
 var headerValue = document.getElementById("value").value;

/* xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.setRequestHeader('Content-Length', '4260');*/
 xhr.open(this.request, this.url, true);
 xhr.open(req, url, true);

 for (var i = 0; i < this.headerName.length; i++){
   xhr.setRequestHeader(this.headerName[i], this.headerValue[i]);
 }
 xhr.send();

 xhr.onreadystatechange = function() {
   if(xhr.readyState != 4) return;
   //this.status=xhr.status;
   if(xhr.status != 200) {
    if(block.firstChild!=null)
     block.removeChild(block.firstChild);
     block.innerHTML='';
     block.appendChild(document.createTextNode("Error"+xhr.statusText));
   } else {
     if(block.firstChild!=null)
    block.removeChild(block.firstChild);
    //if(block.innerHTML!='')
      block.innerHTML='';
block.innerHTML=xhr.responseText
    //block.appendChild(document.createTextNode(xhr.responseText));
   }
 }
}
}

function news(){
  var URL = new XML();
  URL.Url=document.getElementById("text").value;
  URL.Request=document.getElementById("req").value;
  URL.HeaderName=document.getElementById("param").value;
  URL.HeaderValue=document.getElementById("value").value
  URL.OutPut();
}
