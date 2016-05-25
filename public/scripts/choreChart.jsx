var ChoreChart = React.createClass({
  render: function() {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday",
                      "Friday", "Saturday", "Sunday"];

    return (
      <table className="pure-table pure-table-bordered pure-table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Exercise</th>
            <th>3 Veggies</th>
            <th>Vitamin</th>
          </tr>
        </thead>

        <tbody>
          {
            daysOfWeek.map(function(dayOfWeek) {
              return (
                <tr>
                  <td>{dayOfWeek}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
});

ReactDOM.render(
  <ChoreChart />,
  document.getElementById('content')
);