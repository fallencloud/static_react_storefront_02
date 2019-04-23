class Example extends React.Component {
  render() {
    //create variables for welcome message
    const greeting = 'Howdy';
    const name = 'Molly';
    const message = 'please check your order:';
    const welcome = `${greeting} ${name} ${message}`;

    //vars to hold details about sign
    const sign = 'Montagure House';
    const tiles = sign.length;
    const subTotal = tiles * 5;
    const shipping = 7;
    const grandTotal = subTotal + shipping;

    return (
      <div>
        <h1>Elderflower</h1>
        <div id='content'>
          <div id='greeting' className='message'>
            {welcome}
          </div>
          <table>
            <tbody>
              <tr>
                <td>Custom sign: </td>
                <td id='userSign'>{sign}</td>
              </tr>
              <tr>
                <td>Total tiles: </td>
                <td id='tiles'>{tiles}</td>
              </tr>
              <tr>
                <td>Subtotal: </td>
                <td id='subTotal'>${subTotal}</td>
              </tr>
              <tr>
                <td>Shipping: </td>
                <td id='shipping'>${shipping}</td>
              </tr>
              <tr>
                <td>Grand total: </td>
                <td id='grandTotal'>${grandTotal}</td>
              </tr>
            </tbody>
          </table>
          <a href='#' className='action'>
            Pay Now
          </a>
        </div>
      </div>
    );
  }
}
