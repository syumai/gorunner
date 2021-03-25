# gorunner

* gorunner runs Go script in safe WebAssembly environment using Node.js.

## Usage

```console
$ cat > example.go
package main; func main() { println("Hello, world!") }
$ git clone https://github.com/syumai/gorunner
$ cd gorunner
$ cat ../example.go | ./run.sh
Hello, world!
```

# LICENSE

MIT

