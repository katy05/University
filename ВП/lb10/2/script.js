class XHR {
  constructor() {
    this.command = "GET";
    this.url = "";
  }

  get Url() {
    return this.url;
  }

  set Url(value) {
    this.url = value;
  }

  Send() {
    const xhr = new XMLHttpRequest();

    xhr.open(this.command, this.url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
      const block = document.getElementById("block");
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
          block.innerHTML = "Error";
      }
      else {
          block.innerHTML = xhr.responseText;
      }
  }
  }
}

function newRequest() {
  const xhr = new XHR();
  xhr.Url = document.getElementById("url").value;
  xhr.Send();
}