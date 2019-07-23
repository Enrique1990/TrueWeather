import React from 'react';
import ReactDOM from 'react-dom';


const btn = {
    backgroundColor:"green",
    color: 'white',
}
 
const h1Style = {
    color: "white",
    width:"25vw",
    backgroundColor:"blue",
    height:"100vh",
}
class White1 extends React.Component {
    cliquea (){
        var home = document.getElementById("home");
        var about = document.getElementById("about");
        var content = document.getElementById("content");
        var btn1 = document.getElementById("btn1");
        var color = document.getElementById("color");
       
        if(btn1.innerHTML == "Esconder"){
            color.style.width = "0";
            home.innerHTML = "";
            about.innerHTML = "";
            content.innerHTML = "";
            btn1.innerHTML = "Mostar";
        }else {
            color.style.width = "25vw";
            home.innerHTML = "Home";
            about.innerHTML = "About";
            content.innerHTML = "Content";
            btn1.innerHTML = "Esconder";
        }
    }

    render(){
        return(
        
            <div id = "color" style = {h1Style}>
                <button id = "btn1" style={btn} onClick={(e) => this.cliquea(e)}>
                        Esconder 
                </button>
                <h1 id ="home">Home</h1>
                <h1 id="about">About</h1>
                <h1 id= "content">Content</h1>

                
            </div>
               



            
        );
    }
}

export default White1;