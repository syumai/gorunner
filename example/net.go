// this script fails execution
package main

import (
	"io"
	"net/http"
	"os"
)

func main() {
	res, err := http.Get("https://syum.ai/ascii")
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()
	_, err = io.Copy(os.Stdout, res.Body)
	if err != nil {
		panic(err)
	}
}
