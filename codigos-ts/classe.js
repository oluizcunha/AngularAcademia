var Saudacao = /** @class */ (function () {
  function Saudacao() {}
  Saudacao.prototype.saudacao = function () {
    console.log("salve");
  };
  return Saudacao;
})();
var obj = new Saudacao();
obj.saudacao();
