## HOMEPAGE MOVED TO GITHUB ##
https://github.com/dengzhp/chrome-poster



## INSTALL ##

https://chrome.google.com/extensions/detail/cdjfedloinmbppobahmonnjigpmlajcd

## Note ##

Chrome refused to set some of the http headers in XmlHttpRequest:
  * Date
  * User-Agent
  * Content-Length
> ....

see http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader-method


Chrome will set the following headers automatically:

```
Host: 192.168.23.208
Connection: keep-alive
User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Chrome/5.0.335.0 Safari/533.1
Content-Length: 0
Accept: */*
Accept-Encoding: gzip,deflate,sdch
Accept-Language: en-US,en;q=0.8
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3
...
```



## REMOVING HEADERS ##
> Currently if you set a header with value '##', that header will be removed.


