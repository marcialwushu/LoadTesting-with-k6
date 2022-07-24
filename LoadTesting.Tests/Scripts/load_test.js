/*
 O teste de carga está principalmente preocupado em acessar o desempenho atual do seu sistema em termos 
 de usuários ou solicitações simultâneas por segundo.

 Objetivo para testes de carga

    - Assos o desempenho atual de sua carga típica e máxima.
    - Certifique-se de que você está cumprindo continuamente os padrões de desempenho à medida que faz a
        lterações no seu sistema
 */

import http from 'k6/http';

export let options = {
    stages: [
        { duration: '5m', target: 100 },//move from 1 to 100 requests over 5 mins
        { duration: '10m', target: 100 },//stay at 100 requests for 10 mins
        { duration: '5m', target: 0 },// ramp-down to 0 users
    ]
}

export default () => {
    http.get('http://localhost:27744/WeatherForecast');
}
