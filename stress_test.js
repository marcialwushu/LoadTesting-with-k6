/*
 O teste de estresse é um tipo de teste de carga usado para determinar os limites do sistema. 
 O objetivo deste teste é usado para determinar a estabilidade e confiabilidade do sistema em 
 condições extremas.

 Objetivo para testes de estresse
    - Determine como o sistema funciona em condições extremas.
    - Determine qual é a sua capacidade máxima do seu sistema em termos de usuários ou thorughput.
    - Determine o ponto de ruptura do seu sistema e é o modo de falha.
 */


import http from 'k6/http';

export let options = {
    stages: [
        { duration: '2m', target: 10 },
        { duration: '4m', target: 50 },//normal request load
        { duration: '4m', target: 1000 },// request load around the breaking point 
        { duration: '4m', target: 1000 },
        { duration: '2m', target: 2000 },// request load beyond the breaking point
        { duration: '4m', target: 0 },//scale down to 0 requests for recovery stage
    ]
}

export default () => {
    http.get('http://localhost:27744/WeatherForecast');
}

