# Serverless Frameworkのサンプル

セットアップ

```
npm install -g serverless
```

デプロイ

```
sls deploy -v --stage dev
```

関数1個だけデプロイ

```
sls deploy function -f hello --stage dev
```

デプロイした関数を実行

```
sls invoke -f hello -p event.json --stage dev
```

ローカルで関数実行

```
sls invoke local -f hello -p event.json --stage dev
```
