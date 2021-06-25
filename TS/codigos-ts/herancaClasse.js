var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ObterPeso = /** @class */ (function () {
    function ObterPeso(a) {
        this.valorPeso = a;
    }
    return ObterPeso;
}());
var Imc = /** @class */ (function (_super) {
    __extends(Imc, _super);
    function Imc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imc.prototype.exibirValorImc = function () {
        console.log("o imc deve ser calculalo pelo peso " + this.valorPeso + "/altura");
    };
    return Imc;
}(ObterPeso));
var objetoValorInformado = new Imc(12);
objetoValorInformado.exibirValorImc();
