import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
