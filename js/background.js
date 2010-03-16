function Request() {
    this.headers = {};
    this.body = null;
    this.method = "GET";
    this.url = "http://";

    this.xhr = null;
    this.nameE = null;
    this.valueE = null;
}

Request.request = new Request();

function main()
{
    console.log("staring main()");
}