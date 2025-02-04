

interface Environment {
  production: boolean;
  backendHost: string;
}


export const environment: Environment = {
   production : false ,
    backendHost: "http://localhost:8021"
};
