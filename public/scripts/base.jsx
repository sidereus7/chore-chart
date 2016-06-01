const MIN_COLUMNS = 8;

var ChoreChart = React.createClass({
  getInitialState: function() {
      return {
          headers: _.range(MIN_COLUMNS).map(_.constant(""))
      };
  },

  updateHeader: function(index, event) {
    this.state.headers[index] = event.target.value;
    this.setState({ headers: this.state.headers });
  },

  render: function() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday",
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
                    onChange={this.updateHeader.bind(this, index)}
                  />
                </th>
              )
            }
          </tr>
        </thead>

        <tbody>
          {
            daysOfWeek.map((dayOfWeek, index) =>
              <tr key={index}>
                <th scope="row">{dayOfWeek}</th>
                {
                  this.state.headers.map((header, index) =>
                    <td key={index}></td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
});

var MainPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Chore Chart</h1>
        <p>This chart is meant to help you organize your daily victories.</p>
        <ChoreChart />
      </div>
    );
  }
});

ReactDOM.render(
  <MainPage />,
  document.getElementById('content')
);
