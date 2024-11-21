```bash
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name admin.bowling-oberberg.shop;

        location / {
                proxy_pass http://localhost:8090;
        }
}
 
server {
        listen 80;
        listen [::]:80;
 
        server_name www.bowling-oberberg.shop;
 
        location / {
                proxy_pass http://localhost:4000;
        }
}
 

server {
    listen 80;
    server_name bowling-oberberg.shop;
    return 301 https://www.bowling-oberberg.shop$request_uri;
}
```


```bash
snap install certbot --classic
```

```bash
certbot -d admin.bowling-oberberg.shop -d www.bowling-oberberg.shop -d bowling-oberberg.shop
```