const React = require('react');
var DefaultLayout = require('./layout/default');

function HelloMessage(props) {

    var myStyle = {
        fontSize: 20,
        color: '#FF0000'
    }

    var drinks = [
        {
            text: 'A',
            name: 'ThanhHM'
        },
        {
            text: 'B',
            name: 'ThanhHM'
        },
        {
            text: 'C',
            name: 'ThanhHM'
        },
    ];

    let product = drinks.map((drink, index) => {
        let result = '';
        result = <HtmlChild text = { drink.text } >{ drink.name }</HtmlChild>

        return result;
    });
    
    return (
        <DefaultLayout title={props.title}>
            <div style={myStyle}>Hello {props.name}</div>   {/* cách đặt style cho thẻ */}
            <p data-myattribute = "somevalue">This is the content!!!</p>
            <label onClick={runScript()} className="myStyle" htmlFor="textInput">Label</label>    {/* cách đặt tên class, attribute for cho thẻ */}
            <input type="text" name="textInput" id="textInput" /> 
            {product} {/* Cách dùng map để lặp qua các giá trị */}
            <ContentChild url='/images/demo.png' name="Test name Img"/>    {/* Cách để gom common html, tách riêng code html ra */}
            
        </DefaultLayout>
    );
}

var HtmlChild = (props) => {
    return (
        <div>
            <h4>Xin chào {props.children} {props.text}</h4>
        </div> 
    );
}

var ContentChild = (props) => {
    return (
        <div>
            <img src={props.url} alt={props.name}/>
        </div>
    )
}

var runScript = (props) => {
    console.log('Hello from JavaScript');
}

module.exports = HelloMessage;
