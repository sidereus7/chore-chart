var ChoreChart = React.createClass({
  getInitialState() {
      return {
          headers: _.range(8).map(_.constant(""))
      };
  },

  render: function() {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday",
                      "Friday", "Saturday", "Sunday"];

    return (
      <table className="pure-table pure-table-bordered pure-table-striped">
        <thead>
          <tr>
            <th></th>
            {
              this.state.headers.map((header, index) =>
                <th key={index}>
                  <input
                    type="text"
                    value={header}
                    placeholder="<category>"
                  />
                </th>
              )
            }
          </tr>
        </thead>

        <tbody>
          {
            daysOfWeek.map(function(dayOfWeek, index) {
              return (
                <tr key={index}>
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