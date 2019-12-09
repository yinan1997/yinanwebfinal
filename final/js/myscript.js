createStar();

function createStar() {
  for (var i = 0; i <= 400; i++) {
    var star = this.newStar();
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.width = "2.5px";
    star.style.height = "2.5px";
    star.animation = 'random';
    document.body.appendChild(star);
  }
}

function newStar() {
  var d = document.createElement('div');
  d.innerHTML = '<div class="star">';
  return d.firstChild;
}

function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("loushise"))
    {
        element.src="img/loushi.png";
    }
    else
    {
        element.src="img/loushise.png";
    }
}

function changeshan()
{
    element=document.getElementById('shan')
    if (element.src.match("shan2"))
    {
        element.src="img/shan1.png";
    }
    else
    {
        element.src="img/shan2.png";
    }
}


function changecao()
{
    element=document.getElementById('cao')
    if (element.src.match("cao2"))
    {
        element.src="img/cao1.png";
    }
    else
    {
        element.src="img/cao2.png";
    }
}

function changekong()
{
    element=document.getElementById('kong')
    if (element.src.match("kong2"))
    {
        element.src="img/kong1.png";
    }
    else
    {
        element.src="img/kong2.png";
    }
}


function changedrag()
{
    element=document.getElementById('drag')
    if (element.src.match("drag2"))
    {
        element.src="img/drag1.png";
    }
    else
    {
        element.src="img/drag2.png";
    }
}



dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



