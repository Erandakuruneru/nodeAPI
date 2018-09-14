class Response{
    getResponse(isSucess,data){
      var responseBody= {
            "isSucess":isSucess,
            "responseData":data
      };
     return{   
        headers: {
            "Access-Control-Allow-Origin" : "*"                    
          },
        body: responseBody
     };
  
  };
}
module.exports = new Response();