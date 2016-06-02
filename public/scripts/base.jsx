const MIN_COLUMNS = 8;

var ChoreChart = React.createClass({
  getInitialState: function() {
      return {
          columns: _.range(MIN_COLUMNS).map(() => ({
            title: "",
            data: _.range(MIN_COLUMNS).map(() => false)
          }))
      };
  },

  updateTitle: function(index, event) {
    this.state.columns[index].title = event.target.value;
    this.setState({ columns: this.state.columns });
  },

  updateCell: function(colIndex, dayIndex) {
    let columnData = this.state.columns[colIndex].data;
    columnData[dayIndex] = !columnData[dayIndex];
    this.setState({ columns: this.state.columns });
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
              this.state.columns.map((column, index) =>
                <th key={index}>
                  <input
                    type="text"
                    value={column.title}
                    placeholder="<category>"
                    onChange={this.updateTitle.bind(this, index)}
                  />
                </th>
              )
            }
          </tr>
        </thead>

        <tbody>
          {
            daysOfWeek.map((dayOfWeek, dayIndex) =>
              <tr key={dayIndex}>
                <th scope="row">{dayOfWeek}</th>
                {
                  this.state.columns.map((column, colIndex) =>
                    <td
                      key={colIndex}
                      onClick={this.updateCell.bind(this, colIndex, dayIndex)}
                    >
                      {column.data[dayIndex] && "X"}
                    </td>
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
