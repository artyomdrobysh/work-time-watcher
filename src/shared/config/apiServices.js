const devConfig = {
    timeLogServiceApi: 'http://localhost:8080'
};

const prodConfig = {
    timeLogServiceApi: 'http://localhost:8080'
};

const nodeEnv = process.env.NODE_ENV;

export default nodeEnv === 'production' ? prodConfig : devConfig;
