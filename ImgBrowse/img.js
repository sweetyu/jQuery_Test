var imgArray =new Array();
imgArray[0]="./img/1.jpg";
imgArray[1]="./img/2.jpg";
imgArray[2]="./img/3.jpg";
imgArray[3]="./img/4.jpg";
imgArray[4]="./img/5.jpg";
imgArray[5]="./img/6.jpg";
imgArray[6]="./img/7.jpg";
imgArray[7]="./img/8.jpg";
imgArray[8]="./img/9.jpg";
imgArray[9]="./img/10.jpg";
imgArray[10]="./img/11.jpg";
imgArray[11]="./img/12.jpg";
imgArray[12]="./img/13.jpg";
imgArray[13]="./img/14.jpg";

//默认显示图片序号
var base=0;
//通过指定偏移量，来显示数组顺序中前或者后的第几张图片
function showImg(offset){
    base = (base-offset) % imgArray.length;
    
    for(var i=base;i<base+5;i++){
        var img=document.getElementById("img0"+(i-base+1));
        //判断图片是否从前往后循环显示
        if(i<0){
            img.src = imgArray[ imgArray.length +i ];
        }
        //判断图片是否从前往后循环显示
        else if(i>(imgArray.length-1)){
            img.src = imgArray[ i-imgArray.length ];
        }
        else{
            img.src= imgArray[i];
        }
    }
}
