import React, { useState } from "react";

const Semaforo = () =>{

    const [greenSemaforo,setGreenSemaforo]=useState ('green')
    const [orangeSemaforo,setOrangeSemaforo]=useState ('darkorange')
    const [redSemaforo,setRedSemaforo]=useState ('darkred ')


    function colorGreen(){
        if(greenSemaforo == 'green'){
            setGreenSemaforo('limegreen')
            setOrangeSemaforo('darkorange')
            
            setRedSemaforo('darkred ')
        }else{
            setGreenSemaforo('green')
        }
    }
    function colorOrange(){
        if(orangeSemaforo == 'darkorange'){
            setOrangeSemaforo('gold ')
            setGreenSemaforo('green')
            setRedSemaforo('darkred ')
        }else{
            setOrangeSemaforo('darkorange')
        }
    }
    function colorRed(){
        if(redSemaforo == 'darkred '){
            setRedSemaforo('red')
            setGreenSemaforo('green')
            setOrangeSemaforo('darkorange')
        }else{
            setRedSemaforo('darkred ')
        }
    }
    return(
        <>
        <div className="container d-grid  col-6 mx-auto " id="contenedor" >
           
                        <div className="col-lg-4 boton" >
                                <button onClick={colorGreen}  style={{backgroundColor:greenSemaforo}} className="btn btn-success rounded-circle">V</button>
                        </div>
                        <div className="col-lg-4 boton" >
                                <button onClick={colorOrange}  style={{backgroundColor:orangeSemaforo}}className="btn btn-warning rounded-circle">N</button>  
                        </div>
                        <div className="col-lg-4 boton">

      
                            <button onClick={colorRed}  style={{backgroundColor:redSemaforo}} className="btn btn-danger rounded-circle">R</button>  
                        </div>

          
                        
          </div>
          <div className="mx-auto col-6 columnasemaforo"></div>
          <div className="mx-auto col-6 piesemaforo"></div>
        
        </>
    );

    
};

export default Semaforo;