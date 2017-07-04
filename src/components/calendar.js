import React from 'react'
import { Calendar } from 'antd';

export default class myCalendar extends React.Component {
    dateCellRender = (value) => {
        return <div>Editable {value.getDayOfMonth()}</div>
    }

    monthCellRender = (value) => {
        return <div>Editable {value.getMonth()}</div>
    }

    render() {
        return (
            <Calendar defaultValue={new Date('2010-10-10')}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}