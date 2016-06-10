const MIN_COLUMNS = 8;

var ChoreChart = React.createClass({
  getInitialState: function() {
      let columns = columnsStore.getColumns();

      return { columns: columns };
  },

  componentWillMount: function() {
    columnsStore.addChangeListener(this.getStateFromStores);
  },

  componentWillUnmount: function() {
    columnsStore.removeChangeListener(this.getStateFromStores);
  },

  getStateFromStores: function() {
    this.setState({ columns: columnsStore.getColumns() });
  },

  updateTitle: function(index, event) {
    columnsStore.updateTitle(index, event.target.value);

    localStorage.choreChartData = JSON.stringify(columnsStore.getColumns());
  },

  toggleCell: function(colIndex, dayIndex) {
    columnsStore.toggleCell(colIndex, dayIndex);

    localStorage.choreChartData = JSON.stringify(columnsStore.getColumns());
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
                      onClick={this.toggleCell.bind(this, colIndex, dayIndex)}
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
