package controllers

import (
	"strconv"

	"github.com/astaxie/beego"
)

const (
	ServiceAddress = "http://localhost:9000"
)

func Get(c *MainController) {
	input := c.Ctx.Input
	var name, phone, cardno string
	input.Bind(&phone, "phone")
	input.Bind(&name, "name")
	input.Bind(&cardno, "cardno")
	c.Data["Name"] = name
	c.Data["Phone"] = phone
	c.Data["Cardno"] = cardno
	c.Data["ServiceAddress"] = ServiceAddress
	c.TplName = "pages/newmember.html"
	//c.Redirect(c.TplName)
}

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	file := "checkmember.html"
	c.Data["Page"] = file
	c.Data["ServiceAddress"] = ServiceAddress
	c.TplName = "pages/" + file
}

type PagesController struct {
	beego.Controller
}

func (c *PagesController) Get() {
	files := c.Ctx.Input.Params()
	if len(files) <= 1 {
		c.TplName = "404.html"
		return
	}
	file := files[strconv.Itoa(len(files)-2)]
	//fmt.Println("path l:", c.Data, c.TplPrefix, c.TplName, c.TplExt)
	c.Data["Page"] = file
	c.Data["ServiceAddress"] = ServiceAddress
	c.TplName = "pages/" + file
}
