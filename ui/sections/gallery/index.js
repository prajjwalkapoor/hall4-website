var gallery_images
fetch("./images.json") 
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        let left_up=new Image();
        let left_down=new Image();
        let right_up=new Image();
        let right_down=new Image();
        let center=new Image();

        left_down.src=data.images[0].image_link;
        left_down.setAttribute("class","left-down")

        left_up.src=data.images[0].image_link;
        left_up.setAttribute("class","left-up")

        center.src=data.images[0].image_link;
        center.setAttribute("class","center")

        right_up.src=data.images[0].image_link;
        right_up.setAttribute("class","right-up")

        right_down.src=data.images[0].image_link;
        right_down.setAttribute("class","right-down")


        document.getElementById("left").appendChild(left_down);
        document.getElementById("left").appendChild(left_up);
        document.getElementById("center").appendChild(center);
        document.getElementById("right").appendChild(right_down);
        document.getElementById("right").appendChild(right_up);

    })
