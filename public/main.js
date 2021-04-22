getJson.onclick = () => {
    const request = new XMLHttpRequest;
    request.open('GET', './5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            alert(typeof request.response)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', './4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim())

        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "/3.html");
    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response
        document.body.appendChild(div);
    }
    request.onerror = () => {

    }
    request.send()
}


getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {

        //创建script标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插到body里面
        document.body.appendChild(script)
    }

    request.onerror = () => {

    }
    request.send()
}


getCSS.onclick = () => {
    console.log('123')
    const request = new XMLHttpRequest();
    request.open('GET', './style.css');
    request.onload = () => {
        console.log('request.response')
        console.log(request.response)

        //创建style 标签
        const style = document.createElement('style');
        //填写
        style.innerHTML = request.response;
        document.head.appendChild(style)
    };

    request.onerror = () => {
        console.log("报错")
    };
    request.send();
}