/*
 O teste de pico � uma varia��o de testes de estresse em vez de aumentar a carga gradualmente, 
 ele aumenta para carga extrema durante um per�odo muito curto de tempo.

 Spike Testing Script com K6

 A amostra de c�digo abaixo permitir� solicita��es moderadas de 100 a 500 solicita��es e, posteriormente, 
 aumentar� para 1000 solicita��es em 4 minutos onde continuar� a 1000 solicita��es por um per�odo de 8 minutos 
 antes de aumentar para 0 solicita��es.
 */
import http from 'k6/http';


export let options = {
    stages: [
        { duration: '1m', target: 100 },
        { duration: '4m', target: 50 },
        { duration: '4m', target: 1000 },//spike the request to 1000 at 4 mins
        { duration: '8m', target: 1000 },// stay at 1000 request for 8 mins
        { duration: '2m', target: 200 },
        { duration: '4m', target: 0 },
    ]
}

export default () => {
    http.get('http://localhost:27744/WeatherForecast');
    
}

