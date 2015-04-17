module.exports=function(inputWords){
    
    var res={};
   return inputWords.reduce(function (previous, current) {
       if(previous.current===undefined) {
           console.log(previous);
           console.log('Je suis la:'+current);
             previous[current] =0;
       }else {
            previous[current]=Number(previous[current])+1;
       }
       return previous;
    },res);
};