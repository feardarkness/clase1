const { expect } = require('chai');
const operacionesAritmeticas = require('../../operaciones_aritmeticas');

describe('Suma', () => {
  it('debe sumar dos números', () => {
    const resultado = operacionesAritmeticas.suma(2, 2);
    expect(resultado).to.equals(2 + 2);
  });

  it('debe sumar un dígito mayor a cero y cero ', () => {
    const resultado = operacionesAritmeticas.suma(6, 0);
    expect(resultado).to.equals(6 + 0);
  });

  it('debe sumar números negativos ', () => {
    const resultado = operacionesAritmeticas.suma(-2, -1);
    expect(resultado).to.equals((-2) + (-1));
  });
});

