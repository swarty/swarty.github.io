document.addEventListener('DOMContentLoaded', function () {

    // ----------------------- fileloader -----------------------------
    // part for file loader
    function loadFile() {

        const inputLoadExcelFile = document.getElementById('loadExcel');
        const parentTable = document.getElementById('outfile');

        inputLoadExcelFile.addEventListener('change', addToHTML, false);

        function addToHTML(e) {

            // change const value for can changing reader
            let reader = new FileReader();
            reader.readAsArrayBuffer(e.target.files[0]);

            console.log(e);

            // update function for can choose more then one time docs
            let button = document.querySelector('.img_download');
            button.addEventListener('click', function () {

                // reset table after click
                reader = "";
            });

            // start preloader
            $('.holder').fadeIn();

            reader.addEventListener("loadend", function () {

                const data = new Uint8Array(reader.result);
                const wb = XLSX.read(data, {
                    type: 'array'
                });

                // reset prev table on new table
                resetTables();

                // generate new table structure from file
                process_wb(wb);

                // make edditable false for headers table
                createEditRows();

                // function for autochanging

                // end preloader after end
                $('.holder').fadeOut();

                // resetValues auto
                resetGraphAuto();
            });
        }

        function process_wb(wb) {
            // имя листа документа - берем 1-й, но можно и по названию sheet:"page 1"
            parentTable.innerHTML = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]], {
                editable: true
            }).replace("<table", '<table id="table" border="1"');
        }

        resetbyBlur();
    }

    // ------------------------- end fileloader -----------------------------------------


    // ------------------------- chart logic render -------------------------------------


    // select cancas node
    const ctx = document.getElementById("myChart");

    // select menu-type graphs node
    const btnType = document.querySelector(".btn-type-wrp");

    // all td
    let td = null;

    // create mass(object) with Colors values and Edits values
    function getArraysFromTable() {

        td = document.querySelectorAll('td');
        tr = document.querySelectorAll("tr");

        let quantity = td.length;
        const td0 = Array.from(tr, el => el.querySelectorAll('td')[0].textContent);
        const td1 = Array.from(tr, el => el.querySelectorAll('td')[1].textContent);

        // first row only for headers!
        // td0.slice(1, td0.length);
        // first row only for headers!
        // td1.slice(1, td1.length)


        // add new mass after reload graph


        return arrTable = [td0.slice(1, td0.length), td1.slice(1, td1.length)];
    }
    getArraysFromTable();

    // value with Edits(numbers)
    let meanings = arrTable[1];

    // value with Names rows
    let name = arrTable[0];

    // mass with colors
    let colorCell = ["hsl(81, 94%, 50%)", "hsl(162, 95%, 50%)", "hsl(141, 91%, 50%)", "hsl(164, 92%, 50%)", "hsl(219, 94%, 50%)", "hsl(260, 95%, 50%)", "hsl(11, 93%, 50%)", "hsl(238, 94%, 50%)", "hsl(289, 94%, 50%)", "hsl(78, 92%, 50%)"];

    // settings for canvas
    const setting = {
        chart: {},
        chartType: 'bar',
        chartName: 'My Chart',
        x_axis: name,
        y_axis: arrTable[1],
        bg_color: colorCell,
        bg_cache: null

        // function render canvas 
    };function paint() {
        setting.chart = new Chart(ctx, {
            type: setting.chartType, // 'line', 'bar', 'pie', 'doughnut'
            data: {
                labels: setting.x_axis,
                datasets: [{
                    label: 'Название легенды',
                    data: setting.y_axis,
                    backgroundColor: setting.bg_color,
                    borderColor: ['#880', '#880', '#880', '#880', '#880', '#880'],
                    borderWidth: 1,
                    fill: false,
                    pointRadius: 10,
                    pointHoverRadius: 15
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: setting.chartName
                },
                elements: {
                    point: {
                        pointStyle: 'circle'
                    }
                },
                legend: {
                    display: false,
                    // display: true,
                    fullWidth: true,
                    position: 'top',
                    labels: {
                        fontColor: 'black',
                        fontSize: 20
                    }
                },
                // hover: {
                //   mode: 'nearest',
                //   intersect: true
                // },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    // mode: 'x'
                }
            }
        });
    }

    // logic for graps paints
    function updateType(e) {
        e.preventDefault();

        // remove classes from unactive buttons
        document.querySelectorAll('.s_menu__button').forEach(e => {
            e.classList.remove('s_menu__button--active');
        });

        // add class on buttons active
        e.path[0].classList.add('s_menu__button--active');

        const isLine = e.target.dataset.type === 'line' ? true : false;

        // line have one background color, other type have array of colors
        if (isLine) {
            setting.bg_cache = setting.bg_color;
            setting.bg_color = '#808';
        } else if (setting.bg_cache) {
            setting.bg_color = setting.bg_cache;
        } else {
            setting.bg_cache = setting.bg_color;
        }
        setting.chartType = e.target.getAttribute('data-type');
        // delete old chart and pain new cart with new setting

        setting.chart.destroy();
        paint();

        // reset graph auto 
        resetGraphAuto();
    }

    // name for cancas graph
    function updateName(e) {
        e.preventDefault();
        setting.chartName = elemInputChartName.value;
        // delete old chart and pain new cart with new setting
        setting.chart.destroy();
        paint();
    }

    // listeners for updates
    btnType.addEventListener('click', updateType, false);

    // ------------------------- end shart logic render ---------------------------------


    // ------------------------- aplication user logic ----------------------------------

    function createEditRows() {
        // settings for edit rows
        let edittableRows = document.querySelectorAll('td');
        edittableRows.forEach(element => {
            // set for all row attribute edditable
            element.setAttribute('contenteditable', "true");
        });

        // exceptions, can rewrite using filter()
        function removeFromHeaders() {
            edittableRows[0].setAttribute('contenteditable', "false");
            edittableRows[1].setAttribute('contenteditable', "false");
        }

        // question for remove edittable fields from exports tables
        if (edittableRows[0].querySelector('span') && edittableRows[1].querySelector('span')) {

            removeFromHeaders();
            edittableRows[0].querySelector('span').setAttribute('contenteditable', "false");
            edittableRows[1].querySelector('span').setAttribute('contenteditable', "false");
        } else {
            removeFromHeaders();
        }
    }

    // autoReset grapht without clicking
    function resetbyBlur() {
        td.forEach(elem => {
            elem.addEventListener('click', function (e) {

                // autoreset
                e.target.addEventListener('blur', resetGraphAuto);
            });
        });
    }

    // delete prev table before load file
    function resetTables() {
        let allTables = document.querySelectorAll('table');
        // override exist table
        allTables[0].innerHTML = " ";
    }

    // update new canvas via click
    function resetGraph() {
        // button reset event
        let reset = document.querySelector('.s_table__button');
        reset.addEventListener('click', function () {

            // get valuef from new table/change table
            getArraysFromTable();

            // set new values in setting for render canvas
            setting.chart.data.labels = arrTable[0];
            setting.chart.data.datasets[0].data = arrTable[1];

            setting.chart.update({
                // todo animation logic
                duration: 800,
                easing: 'easeOutBounce'
            });
        });
    }

    // update via not click on buttons
    function resetGraphAuto() {

        // get valuef from new table/change table
        getArraysFromTable();

        // set new values in setting for render canvas
        setting.chart.data.labels = arrTable[0];
        setting.chart.data.datasets[0].data = arrTable[1];

        setting.chart.update({
            // todo animation logic
            duration: 800,
            easing: 'easeOutBounce'
        });
    }

    // make rows in table edditable
    createEditRows();

    // function paint canvas
    paint();

    // function fileloader
    loadFile();

    // function reset graphs
    resetGraph();

    // resetAuto by event blur
    resetbyBlur();

    // ---------------------------- end aplication user logic ----------------------------
});