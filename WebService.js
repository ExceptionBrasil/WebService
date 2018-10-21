// ***********************************************************************
// Assembly         : Inhuman
// Author           : Daniel
// Created          : 06-14-2018
//
// Last Modified By : Daniel
// Last Modified On : 06-15-2018
// ***********************************************************************
// <copyright file="WebService.js" company="DPSYS">
//     Copyright ©  2018
// </copyright>
// <summary> WebService de envio de dados ao servidor 
// Ao fim do processamento  
// </summary >
// ***********************************************************************

var WebService = (
    function () {


        //Chamada do Ajax
        //Faz o envio da informação ao Server e trata o retorno fazendo o call da promisse
        var SendData = (objToSend, toUrl,methodType,_dataType) => {
            return (new Promise((resolve, reject) => {
                
                //proteção em caso de null nos tipos de datatype e method
                if(typeof(methodType)=="undefined"){
                    methodType="POST"
                }
                if(typeof(_dataType)=="undefined"){
                    _dataType="json"
                }


                $.ajax({
                    url: toUrl,
                    data: objToSend,
                    dataType: _dataType,
                    method: methodType,
                    error: function (response) {
                        console.log("Error on server. Epic Fail! | WebService.js");                        
                        reject();
                    },
                    success: function (response) {
                        if (typeof (response) == "undefined") {
                            console.log("I connect to server, perhaps there's no response from server. | WebService.js")
                            reject();
                        }

                        console.log("Success on request response to server! | WebService.js");
                        resolve(response);                        
                    }

                });

            })
            );
        }

        //Faz o envio para o servidor, tratando o retorno pelo callback, caso exista
        var Send = (objToSend, toUrl, callBack,methodType,_dataType) => {
            SendData(objToSend, toUrl,methodType,_dataType).then((response) => {     

                //Testa se há um success no retorno do servidor
                if (typeof(response.success) == "undefined") {
                    console.log("Response object is missim the property [bool:success]");
                    if (typeof (response.menssage) != "undefined"){
                        console.log(response.menssage);
                    }

                    if (typeof (callBack != "undefined")) {
                        callBack(response);
                    }
                    return;
                }

                //Se houve sucesso ou não server-side executa o callback, caso exista
                if (response.success) {
                    if (typeof(response.menssage) != "undefined"){
                        console.log(response.menssage);
                    }

                    if (typeof(callBack != "undefined")) {
                        callBack(response);
                    }

                    
                } else {
                    if (typeof(response.menssage) != "undefined") {
                        console.log(response.menssage);
                    }
                    if (typeof(callBack != "undefined")) {
                        callBack(response);
                    }
                }
            }).catch((e) => {
                console.log("Invalid return from server, or the server is missing, way, gone, caputs, GAME OVER!!!!!.");
            });            
        }

        //***********************************
        //Métodos públicos
        //***********************************
        return ({
            Init: Send            
        });
    }
)();

