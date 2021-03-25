#!/usr/bin/env sh

cat - > main.go
GOOS=js GOARCH=wasm go build -mod=vendor -o ./main.wasm main.go
if [ $? = 1 ]; then
  exit 1
fi
node index.js

rm main.go main.wasm
