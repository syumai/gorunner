package main

import (
	"fmt"
	"os/exec"
)

func main() {
	out, err := exec.Command("ls").Output()
	if err != nil {
		panic(err)
	}
	fmt.Println(string(out))
}
