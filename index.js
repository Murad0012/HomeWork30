function changeLight() {
    const colors = document.querySelectorAll('.light');

    setTimeout(() => {
        colors[0].style.backgroundColor = "red"; 
        colors[0].style.boxShadow = "2px 10px 66px 0px red";
        setTimeout(() => {
            colors[1].style.backgroundColor = "yellow";
            colors[1].style.boxShadow = "2px 10px 66px 0px yellow";
            colors[0].style.backgroundColor = "rgb(122, 0, 0)";
            colors[0].style.boxShadow = "none"
            setTimeout(() => {
                colors[1].style.backgroundColor = "rgb(104, 104, 0)";
                colors[1].style.boxShadow = "none"
                colors[2].style.backgroundColor = "	#2dc937";
                colors[2].style.boxShadow = "2px 10px 66px 0px 	#2dc937";
                setTimeout(() => {
                    colors[2].style.backgroundColor = "rgb(1, 67, 1)";
                    colors[2].style.boxShadow = "none";
                    changeLight()
                }, 15000);
            }, 2000);
        }, 10000);
    }, 0);
}

changeLight();
