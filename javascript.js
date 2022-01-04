'use strict';

let somaMussarela = 0;
let somaMista = 0;
let somaPortuguesa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaPortuguesa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

function venda(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('portuguesa').checked)
    {
        somaPortuguesa = somaPortuguesa + 1;
        vendaPortuguesa = somaPortuguesa + 25.00;
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    }
}

function estorno(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela <0)
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista <0)
        {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('portuguesa').checked)
    {
        somaPortuguesa = somaPortuguesa - 1;
        vendaPortuguesa = somaPortuguesa - 25.00;
        if(somaPortuguesa <0)
        {
            somaPortuguesa = 0;
            vendaPortuguesa = 0.00;
        }
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}

