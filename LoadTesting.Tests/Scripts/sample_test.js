import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics'
 
export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '10s'
};

export const erroRate = new Rate('errors');

export default function () {
   const url = 'http://localhost:27744/WeatherForecast';
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    check(http.get(url, params), {
        'status is 200': (r) => r.status == 200,
    }) || errorRate.add(1);
}


