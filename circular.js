/* 2021.09.19 by CSSLICK */

class Circular {

  draw() {
    const c = document.querySelectorAll('.circular');

    c.forEach(function(circular, i) {
      const angle = circular.getAttribute('data-angle');
      const color = circular.getAttribute('data-color');

      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.background = `conic-gradient(${color} ${angle}%, #ccc 0%, #ccc 100%)`;

      const circleInner = document.createElement('div');
      circleInner.classList.add('inner-circle-cover');
      circleInner.innerHTML = '<span>' + angle + '%' + '</span>';
      circle.appendChild(circleInner);
      circular.appendChild(circle);

      console.log(angle)
    })
  }
}


