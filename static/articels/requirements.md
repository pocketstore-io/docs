![Placeholder Image](https://placehold.co/1000x261/EEE/31343C)

**Requirements:** (Iam using Ubuntu 24.04)

- jq
- bun
- pm2
- nvm
- snap
- go
- robo (only alpha version)
- php (only alpha version)
- composer (only alpha version)

## jq

```bash
apt-get install jq
```

## NVM (Node & npm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## bun

```bash
npm i -g bun
```

## pm2

```bash
npm i -g pm2
```

## snap

```bash
apt-get install snapd
```

## go

```bash
snap install go --classic
```

## robo

```bash
wget https://robo.li/robo.phar && chmod +x robo.phar && sudo mv robo.phar /usr/bin/robo
```

## php

```bash
apt-get install php8.3-cli php8.3-curl
```

## composer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
```
