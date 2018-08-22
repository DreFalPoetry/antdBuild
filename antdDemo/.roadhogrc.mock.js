import mockjs from 'mockjs';
import { format, delay } from 'roadhog-api-doc';
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
    'GET /api/advReport': mockjs.mock({
        'code':0,
        'data|100': [{
            date:'@date', 
            'id|+1':1001, 
            name: '@name',
            'payout|0.2':0.12,
            currency:'USD',
            'totalConv|100-1231': 150, 
            'frand|1-100.2': 1.12,
            'revenue|1-100.2':23.23,
            'cost|1-100.2':34.23,
            'margin|1-100.2':2.23
        }],
        'headerInfo':{
            'total':32,
            "totalConv":2332312,
            "fraud":"2%",
            "revenue":"23321",
            "cost":"23211",
            "margin":"23.23%"
        },
        'total':100,
        'pageSize':20,
        'pageCurrent':1
    }),
    'POST /api/login': (req, res) => {
        const { password, userName } = req.body;
        if (password === '888888' && userName === 'admin') {
            res.send({
                status: 'ok',
                userName:userName
            });
            return;
        }
        if (password === '123456' && userName === 'user') {
            res.send({
                status: 'ok',
                userName:userName
            });
            return;
        }
        res.send({
            status: 'error'
        });
    },
}

export default (noProxy ? {} : delay(proxy, 1000));
