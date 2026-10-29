interface database{
      host:string;
        port:number;
        username:string;
        password:string;
}
interface AppConfig{
    appName:string;
    version:string;
    debug:boolean;
    port:number;
    database:database
    
    features:{
        registration: boolean;
        darkMode:boolean;
    };

}