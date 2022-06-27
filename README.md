# Run

使用`ganache-cli`运行一个客户端, 导出里面的一个私钥。

复制`.env.example`到`.env`中。将私钥配置到`PRIVATE_KEY`字段中。

```shell
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network eth
```
