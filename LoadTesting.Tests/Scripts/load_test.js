/*
 O teste de carga est� principalmente preocupado em acessar o desempenho atual do seu sistema em termos 
 de usu�rios ou solicita��es simult�neas por segundo.

 Objetivo para testes de carga

    - Assos o desempenho atual de sua carga t�pica e m�xima.
    - Certifique-se de que voc� est� cumprindo continuamente os padr�es de desempenho � medida que faz a
        ltera��es no seu sistema
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
