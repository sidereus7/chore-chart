const MIN_COLUMNS = 8;

let columnsJson = localStorage.choreChartData;
let createInitialData = () => (
  _.range(MIN_COLUMNS).map(() => ({
    title: "",
    data: _.range(MIN_COLUMNS).map(() => false)
  }))
);

let columns;
if (!columnsJson) {
  columns = createInitialData();
} else {
  try {
    columns = JSON.parse(columnsJson);
  } catch (e) {
    columns = createInitialData();
  }
}

let changeCallbacks = [];

function trigger() {
  changeCallbacks.forEach(callback => callback());
}

window.columnsStore = {
  getColumns() {
    return _.cloneDeep(columns);
  },

  updateTitle(index, newTitle) {
    columns[index].title = newTitle;
    trigger();
  },

  toggleCell(colIndex, dayIndex) {
    let columnData = columns[colIndex].data;
    columnData[dayIndex] = !columnData[dayIndex];
    trigger();
  },

  resetChart() {
    columns = createInitialData();
    trigger();
  },
  // TODO: reset cells
  addChangeListener(callback) {
    changeCallbacks.push(callback);
  },

  removeChangeListener(callback) {
    const index = changeCallbacks.indexOf(callback);
    changeCallbacks.splice(index, 1);
  }
};