import React from "react";

function Trip() {
  return (
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SL.No</th>
          <th scope="col">Place</th>
          <th scope="col">Package</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Pondicherry</td>
          <td>5000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Shimla</td>
          <td>20000</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Kerala</td>
          <td>1000</td>
        </tr>
        <tr>
          <th scope="row"> 4</th>
          <td>Goa</td>
          <td>8000</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Hyderabad</td>
          <td>7000</td>
        </tr>
        <tr>
          <th scope="row"> 6</th>
          <td>udaipur</td>
          <td>9000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Trip;