import Table from 'react-bootstrap/Table';

function Info() {
  return (
    <center><table>
      <thead>
        <tr>
          <th>Chequeo</th>
          <th>PH</th>
          <th>Alcalinidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primer Chequeo</td>
          <td>2</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Segundo chequeo</td>
          <td>1</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Tercer chequeo</td>
          <td>4</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
    </center>
  );
}

export default Info;