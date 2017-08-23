package routers

import (
	"log"
	"net/http"
	httputil "net/http/httputil"
	"net/url"
	"pyramidadmin/controllers"
	"strings"

	"github.com/astaxie/beego"
)

const (
	apiPath = "/apis"
)

func init() {
	//设置反向代理服务器
	target, err := url.Parse(controllers.ServiceAddress)
	log.Println("Proxy start......")
	if err != nil {
		log.Println("bad url:", err)
		return
	}
	httpProxy := &httputil.ReverseProxy{}
	httpProxy.Director = func(req *http.Request) {
		req.URL.Scheme = target.Scheme
		req.URL.Host = target.Host
		if strings.HasPrefix(req.URL.Path, apiPath) {
			req.URL.Path = controllers.ServiceAddress + req.URL.Path[len(apiPath):]
		} else {
			req.URL.Path = controllers.ServiceAddress + "/" + req.URL.Path
		}
		//fmt.Println("fw url:", req.URL.Path)
		targetQuery := target.RawQuery
		if targetQuery == "" || req.URL.RawQuery == "" {
			req.URL.RawQuery = targetQuery + req.URL.RawQuery
		} else {
			req.URL.RawQuery = targetQuery + "&" + req.URL.RawQuery
		}
		if _, ok := req.Header["User-Agent"]; !ok {
			// explicitly disable User-Agent so it's not set to default value
			req.Header.Set("User-Agent", "")
		}
	}
	beego.Handler(apiPath, httpProxy, true)
	beego.Router("/", &controllers.MainController{})
	beego.Router("/pages/*", &controllers.PagesController{})
}
